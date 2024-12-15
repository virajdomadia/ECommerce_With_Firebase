import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { MdOutlineStar } from "react-icons/md";
import { useDispatch } from "react-redux";
import { addToCart } from "../redux/bazarSlice";
import { ToastContainer, toast } from "react-toastify";

const Product = () => {
  const dispatch = useDispatch();
  const [details, setDetails] = useState({});
  let [baseQty, setBaseQty] = useState(1);
  const location = useLocation();

  useEffect(() => {
    setDetails(location.state.item);
  }, [location]);

  return (
    <div className="mt-24 min-h-[70vh]">
      <div className="max-w-screen-xl mx-auto my-10 flex flex-col sm:flex-row gap-10">
        <div className="w-full sm:w-2/5 relative">
          <img
            className="w-full h-[350px] lg:h-[550px] object-cover"
            src={details.image}
            alt={details.title}
          />
          <div className="absolute top-4 right-0">
            {details.isNew && (
              <p className="bg-black text-white font-semibold py-1 px-4">
                Sale
              </p>
            )}
          </div>
        </div>
        <div className="w-full sm:w-3/5 flex flex-col justify-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-semibold mb-4">
              {details.title}
            </h2>
            <div className="flex items-center gap-4">
              <p className="line-through text-base text-gray-500">
                ${details.oldPrice}
              </p>
              <p className="text-2xl font-medium text-gray-900">
                ${details.price}
              </p>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <div className="flex text-yellow-400">
              {[...Array(5)].map((_, index) => (
                <MdOutlineStar key={index} />
              ))}
            </div>
            <p className="text-sm text-gray-500">(1 Customer review)</p>
          </div>
          <p className="text-base text-gray-600">{details.description}</p>
          <div className="flex flex-col sm:flex-row gap-4">
            <div className="flex gap-3 items-center justify-between">
              <p className="text-sm ">Quantity</p>
              <div className="flex items-center gap-2 text-sm font-medium">
                <button
                  onClick={() => setBaseQty(Math.max(1, baseQty - 1))}
                  className="border h-8 w-8 flex items-center justify-center"
                >
                  -
                </button>
                <span>{baseQty}</span>
                <button
                  onClick={() => setBaseQty(baseQty + 1)}
                  className="border h-8 w-8 flex items-center justify-center"
                >
                  +
                </button>
              </div>
            </div>
            <button
              onClick={() => {
                dispatch(
                  addToCart({
                    _id: details._id,
                    title: details.title,
                    image: details.image,
                    price: details.price,
                    quantity: baseQty,
                    description: details.description,
                  })
                );
                toast.success(`${details.title} is added`);
              }}
              className="bg-black text-white py-3 px-6 rounded-lg"
            >
              Add to Cart
            </button>
          </div>
          <p className="text-sm text-gray-500">
            Category:{" "}
            <span className="font-medium capitalize">{details.category}</span>
          </p>
        </div>
      </div>
      <ToastContainer
        position="top-left"
        autoClose={2000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
    </div>
  );
};

export default Product;
