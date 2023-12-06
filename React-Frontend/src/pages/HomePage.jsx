import { useState } from "react";

const HomePage = () => {
  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  return <div>This is home page</div>;
};

export default HomePage;
