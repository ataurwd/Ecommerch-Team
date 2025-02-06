import React from "react";
import useAllProduct from "../../Hooks/useAllProduct";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
const ManageProduct = () => {
  const [allProduct] = useAllProduct();
  console.log(allProduct);
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 md:gap-5 md:px-4 md:my-10">
      {allProduct.map((product) => (
        <div
          key={product._id}
          className="max-w-sm rounded-lg overflow-hidden shadow-lg bg-white"
        >
          {/* Product Images */}
          <Swiper navigation={true} spaceBetween={10} slidesPerView={1} loop>
            {product.images.map((image, index) => (
              <SwiperSlide key={index}>
                <img
                  src={image}
                  alt={`Product Image ${index + 1}`}
                  className="w-full h-64 object-cover"
                />
              </SwiperSlide>
            ))}
          </Swiper>

          <div className="p-6">
            {/* Product Title */}
            <h2 className="text-2xl font-semibold text-gray-800 mb-2">
              {product.title}
            </h2>

            {/* Product Description */}
            <p className="text-gray-600 mb-4">
              {product.description.slice(0, 100)}...
            </p>

            {/* Product Pricing */}
            <p className="text-xl font-bold text-indigo-600 mb-4">
              ${product.pricing}
            </p>

            {/* Product Tag */}
            <p className="text-s py-1 px-0 rounded-md flex flex-wrap">
              {product.tags.map((item) => (
                <p className="m-1 border border-Mprimary px-3 rounded-full">
                  {item}
                </p>
              ))}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ManageProduct;
