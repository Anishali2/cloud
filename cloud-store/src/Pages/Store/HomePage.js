import React, { useEffect } from "react";
import { getProduct } from "../../Axios/Requests/Product";
import HeroBoxes from "../../PagesComponent/HeroBoxes";
import HeroOne from "../../PagesComponent/HeroOne";
import { useNavigate } from "react-router-dom";
const HomePage = () => {
  const [products, setProducts] = React.useState([]);
  const navigate = useNavigate();
  useEffect(() => {
    getProduct().then(
      (data) => {
        setProducts(data.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  const ProductDetails = (data) => {
    navigate(`/product/view/${data.name}`, { state: data });
  }
  return (
    <div>
    <div>
      <HeroOne />
      <div className="flex flex-wrap justify-center">
        <div className="bg-white">
          <div className="max-w-2xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8">
            <div className="mt-6 grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
              {products.map((product, index) => (
                <div onClick={() => ProductDetails(product)} key={index} className="group relative border rounded p-4 hover:shadow-lg hover:scale-105 cursor-pointer transition">
                  <div className="w-full min-h-72 bg-gray-200 aspect-w-1 aspect-h-1 rounded-md overflow-hidden  lg:h-80 lg:aspect-none">
                    <img
                      src={`http://localhost:4000/${product.img}`}
                      alt={"hello"}
                      className="w-full h-full object-center object-cover lg:w-full lg:h-full"
                    />
                  </div>
                  <div className="mt-4 flex justify-between">
                    <div>
                      <h3 className="text-sm text-gray-700">
                        <a>
                          <span
                            aria-hidden="true"
                            className="absolute inset-0"
                          />
                          {product.name}
                        </a>
                      </h3>
                      {/* <p className="mt-1 text-sm text-gray-500">{product.color}</p> */}
                    </div>
                    <p className="text-sm font-medium text-gray-900">
                      ${product.price}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      <HeroBoxes/>
    </div>
    </div>
  );
};

export default HomePage;
