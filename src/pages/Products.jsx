import React from "react";
import { use } from "react";
import { Link } from "react-router-dom";


const Products = () => {




  return products.length > 0 ? (
    <div>
      <div className="mx-auto max-w-2xl px-4 py-16 sm:py-16 lg:max-w-7xl lg:px-8">
        <h2 className="text-2xl font-bold tracking-tight text-gray-900">
          Letest collections
        </h2>
        <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
          {products.map((product) => {
            return (
              <div key={product.id}>
                <Link
                  to={`/product/${product.id}`}
                  
                  className="cursor-pointer group relative bg-white shadow-1xl rounded-lg"
                >
                  <img
                    src={product.image}
                    alt=""
                    className="w-full aspect-square rounded-lg group-hover:opacity-75 lg:aspect-auto lg:h-60"
                  />
                  <div className="px-2 pt-3">
                    <div className="flex justify-between">
                      <p className="text-gray-700 font-medium">
                        {product.title}
                      </p>
                      <span className="text-black font-mono">
                        ₹{product.price}
                      </span>
                    </div>
                    <h3 className="text-sm text-gray-700">
                      by {product.brand}
                    </h3>
                    <h5 className="mt-3 text-sm pb-3">
                      {product.description.slice(0, 50)}...
                    </h5>
                    
                  </div>
                </Link>
                <button
                  onClick={() => AddtocartHandler(product)}
                  type="button"
                  className="text-white bg-gray-800 focus:outline-none font-medium rounded-full text-sm w-full py-2.5 mb-2 cursor-pointer "
                >
                  Add to cart
                </button>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  ) : (
    "loading...."
  );
};

export default Products;
