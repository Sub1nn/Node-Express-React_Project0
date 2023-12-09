import axios from "axios";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";
import Swal from "sweetalert2";

const Product = ({ product, getProducts }) => {
  const deleteProduct = async (id) => {
    const result = await Swal.fire({
      title: `Are you sure you want to delete ${product.Name}`,
      icon: "warning",
      showCancelButton: true,
      confirmButtonText: "Yes, delete it!",
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
    });
    if (result.isConfirmed) {
      try {
        await axios.delete(`http://localhost:3000/api/products/${id}`);
        toast.success("Product deleted successfully");
        getProducts();
      } catch (error) {
        toast.error(error.message);
      }
    }
  };

  return (
    <div className="bg-white rounded shadow-lg overflow-hidden">
      <img src={product.Image} className="w-full h-30 object-cover" />
      <div className="px-4 pb-4">
        <h2 className="text font-semibold">{product.Name}</h2>
        <div className="text-sm">Quantity: {product.Quantity}</div>
        <div className="text-sm">Price ${product.Price}</div>
        <div className="mt-2 flex gap-4">
          <Link
            to={`/edit/${product._id}`}
            className="inline-block w-full text-center shadow-md text-sm bg-gray-700 text-white rounded-sm px-4 py-1 font-bold hover:bg-gray-600 hover:cursor-pointer"
          >
            Edit
          </Link>
          <button
            onClick={() => deleteProduct(product._id)}
            className="inline-block w-full text-center shadow-md text-sm bg-red-700 text-white rounded-sm px-4 py-1 font-bold hover:bg-red-600 hover:cursor-pointer"
          >
            Delete
          </button>
        </div>
      </div>
    </div>
  );
};

export default Product;
