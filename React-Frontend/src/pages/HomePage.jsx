import axios from "axios";
import { useEffect, useState } from "react";
import Product from "../Components/Product";
import { Link } from "react-router-dom";
import { VITE_BACKEND_URL } from "../App";

const HomePage = () => {
  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const getProducts = async () => {
    try {
      setIsLoading(true);
      const response = await axios.get(`${VITE_BACKEND_URL}/api/products/`);
      setProducts(response.data);
      setIsLoading(false);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getProducts();
  }, []);

  return (
    <div>
      <div className="inline-block mt-4 shadow-md bg-blue-700 text-white rounded-sm px-4 py-2 font-bold hover:bg-blue-600 hover:cursor-pointer ">
        <Link to="/create">Create a Product</Link>
      </div>
      <div className="mt-5 grid grid-cols-2 lg:grid-cols-4 gap-4">
        {isLoading ? (
          "Loading"
        ) : (
          <>
            {products.length > 0 ? (
              <>
                {products.map((product, index) => {
                  return (
                    <Product
                      key={index}
                      product={product}
                      getProducts={getProducts}
                    />
                  );
                })}
              </>
            ) : (
              <div>There is no product</div>
            )}
          </>
        )}
      </div>
    </div>
  );
};

export default HomePage;
