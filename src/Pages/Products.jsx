import { useLoaderData } from "react-router-dom";
import ProductCard from "../components/ProductCard";

const Products = () => {
  const products = useLoaderData();
 console.log(products)
  return (
    <div>
      <h1 className="text-4xl font-semibold text-center my-8 border-b-4 border-red-600 lg:w-1/5 mx-auto">All Products</h1>
      <div className="p-4 grid grid-cols-1 lg:grid-cols-4 gap-4 mt-10">
     {
      products.map(product => <ProductCard
      key={product._id}
      product={product}
      ></ProductCard>)
     }
    </div>
    </div>
  );
};

export default Products;
