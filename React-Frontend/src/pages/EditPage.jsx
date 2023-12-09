import axios from "axios";
import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { toast } from "react-toastify";

const EditPage = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [product, setProduct] = useState({
    Name: "",
    Quantity: "",
    Price: "",
    Image: "",
  });
  let { id } = useParams();
  const navigate = useNavigate();

  const getProduct = async () => {
    setIsLoading(true);
    try {
      const res = await axios.get(`http://localhost:3000/api/products/${id}`);
      setProduct({
        Name: res.data.Name,
        Quantity: res.data.Quantity,
        Price: res.data.Price,
        Image: res.data.Image,
      });
      setIsLoading(false);
    } catch (error) {
      setIsLoading(false);
      toast.error(error.message);
    }
  };

  const updateProduct = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    try {
      await axios.put(`http://localhost:3000/api/products/${id}`, product);
      toast.success("Updated product successfully");
      navigate("/");
      console.log("Navigated");
    } catch (error) {
      setIsLoading(false);
      toast.error(error.message);
    }
  };

  useEffect(() => {
    getProduct();
  }, []);

  return (
    <div className="max-w-lg bg-white shadow-lg mx-auto p-5 rounded mt-6">
      <h2 className="font-semibold text-2xl mb-4 block text-center ">
        Update Product
      </h2>
      {isLoading ? (
        "Loading"
      ) : (
        <>
          <form onSubmit={updateProduct}>
            <div className="space-y-2">
              <div>
                <label>Name</label>
                <input
                  type="text"
                  value={product.Name}
                  onChange={(e) =>
                    setProduct({ ...product, Name: e.target.value })
                  }
                  className="w-full block border p-3 text-gray-600 rounded focus:outline-none focus:shadow-outline focus:border-blue-200 placeholder-gray-400"
                  placeholder="Enter Name"
                />
              </div>
              <div>
                <label>Quantity</label>
                <input
                  type="number"
                  value={product.Quantity}
                  onChange={(e) =>
                    setProduct({ ...product, Quantity: e.target.value })
                  }
                  className="w-full block border p-3 text-gray-600 rounded focus:outline-none focus:shadow-outline focus:border-blue-200 placeholder-gray-400"
                  placeholder="Enter Quantity"
                />
              </div>
              <div>
                <label>Price</label>
                <input
                  type="number"
                  value={product.Price}
                  onChange={(e) =>
                    setProduct({ ...product, Price: e.target.value })
                  }
                  className="w-full block border p-3 text-gray-600 rounded focus:outline-none focus:shadow-outline focus:border-blue-200 placeholder-gray-400"
                  placeholder="Enter Price"
                />
              </div>
              <div>
                <label>Image URL</label>
                <input
                  type="text"
                  value={product.Image}
                  onChange={(e) =>
                    setProduct({ ...product, Image: e.target.value })
                  }
                  className="w-full block border p-3 text-gray-600 rounded focus:outline-none focus:shadow-outline focus:border-blue-200 placeholder-gray-400"
                  placeholder="Enter Image URL"
                />
              </div>
              <div>
                {!isLoading && (
                  <button className="block w-full mt-6 bg-blue-700 text-white rounded-sm px-4 py-2 font-bold hover:bg-blue-600 hover:cursor-pointer">
                    Update
                  </button>
                )}
              </div>
            </div>
          </form>
        </>
      )}
    </div>
  );
};

export default EditPage;
