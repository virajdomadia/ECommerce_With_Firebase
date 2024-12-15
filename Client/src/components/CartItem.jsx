import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { HiOutlineArrowLeft } from "react-icons/hi";
import { Link } from "react-router-dom";
import {
  decrementQuantity,
  deleteItem,
  increamentQuantity,
} from "../redux/bazarSlice";
import { ToastContainer, toast } from "react-toastify";

const CartItem = () => {
  const productData = useSelector((state) => state.bazar.productData);
  const dispatch = useDispatch();

  return (
    <div className="w-full md:pr-14 h-full flex flex-col gap-4">
      <h2 className="text-xl text-gray-700 font-titleFont border-b-2 pb-2">
        Your Shopping Cart
      </h2>
      {productData.length > 0 ? (
        productData.map((product) => (
          <div className="border-b-2 pb-4 flex gap-4 p-1" key={product._id}>
            <figure className="w-32 md:w-40">
              <img
                src={product.image}
                alt="productImg"
                className="max-w-full block rounded-md object-cover"
              />
            </figure>
            <div className="flex flex-col w-1/2 gap-4 py-3 text-gray-700">
              <h2 className="text-lg md:text-2xl">{product.title}</h2>
              <p className="md:text-lg">${product.price * product.quantity}</p>
              <div className="flex gap-3 border w-fit items-center">
                <button
                  onClick={() =>
                    dispatch(
                      decrementQuantity({
                        _id: product._id,
                        title: product.title,
                        image: product.image,
                        price: product.price,
                        quantity: 1,
                        description: product.description,
                      })
                    )
                  }
                  className="border h-5 font-normal text-lg flex items-center justify-center w-8"
                >
                  -
                </button>
                <span className="text-sm">{product.quantity}</span>
                <button
                  onClick={() =>
                    dispatch(
                      increamentQuantity({
                        _id: product._id,
                        title: product.title,
                        image: product.image,
                        price: product.price,
                        quantity: 1,
                        description: product.description,
                      })
                    )
                  }
                  className="border h-5 font-normal text-lg flex items-center justify-center w-8"
                >
                  +
                </button>
              </div>
              <button
                onClick={() =>
                  dispatch(deleteItem(product._id)) &
                  toast.error(`${product.title} is removed`)
                }
                className="bg-red-500 text-white py-2 mt-2 w-16 border border-red-500 hover:text-red-500 transition-colors duration-200 hover:bg-white"
              >
                Remove
              </button>
            </div>
          </div>
        ))
      ) : (
        <div className="h-full w-full">
          <Link to="/">
            <button className="flex items-center gap-1 text-gray-700 hover:text-blue-500 transition-colors duration-200">
              <span>
                <HiOutlineArrowLeft />
              </span>
              go shopping
            </button>
          </Link>
          <p className="w-full h-full grid place-content-center text-xl font-semibold text-gray-700">
            Your Cart is Empty
          </p>
        </div>
      )}
      <ToastContainer
        position="top-left"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
      />
    </div>
  );
};

export default CartItem;
