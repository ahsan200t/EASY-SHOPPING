import { useLoaderData } from "react-router-dom";
import ProductCard from "../components/ProductCard";
import { useEffect, useState } from "react";
const Home = () => {
  const { count } = useLoaderData();
  const [products, setProducts] = useState([]);
  const [currentPage, setCurrentPage] = useState(0);
  const [asc ,setAsc]= useState(true)
  const itemsPerPage = 8;
  const numberOfPages = Math.ceil(count / itemsPerPage);
  const pages = [...Array(numberOfPages).keys()];

  const handlePrevPage = () => {
    if (currentPage > 0) {
      setCurrentPage(currentPage - 1);
    }
  };
  const handleNextPage = () => {
    if (currentPage < pages.length) {
      setCurrentPage(currentPage + 1);
    }
  };

  useEffect(() => {
    fetch(
      `http://localhost:5000/products?page=${currentPage}&size=${itemsPerPage}&sort=${asc? 'asc' : 'desc'}`
    )
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, [currentPage, itemsPerPage,asc]);
  return (
    <div>
      <div>
      <button
      onClick={()=> setAsc(!asc)}
      className="btn btn-wide my-4 bg-[#718355] hover:bg-red-700 text-white">

       {asc ? "Price: High To Low" : "Price: Low To High"}
        
        </button> 
        </div>
      <div className="grid grid-cols-4 gap-8 mt-20">
        {products.map((product) => (
          <ProductCard key={product._id} product={product}></ProductCard>
        ))}
      </div>
      <div className="text-center mb-2 bg-black text-white w-1/3 mx-auto rounded-full my-8 p-1">
        <button className="pr-4" onClick={handlePrevPage}>
          Prev
        </button>
        {pages.map((page) => (
          <button
            className="pr-4 border p-2"
            onClick={() => setCurrentPage(page)}
            key={page}
          >
            {page}
          </button>
        ))}
        <button className="pl-4" onClick={handleNextPage}>
          Next
        </button>
      </div>
    </div>
  );
};

export default Home;
