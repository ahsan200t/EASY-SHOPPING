import { useLoaderData } from "react-router-dom";
import ProductCard from "../components/ProductCard";
import { useEffect, useState } from "react";
const Home = () => {
  const { count } = useLoaderData();
  const [products, setProducts] = useState([]);
  const [currentPage, setCurrentPage] = useState(0);
  const [asc, setAsc] = useState(true);
  const [search, setSearch]=useState("")
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

  const handleSearch = (e) => {
    e.preventDefault();
    const searchText = e.target.search.value;
    console.log(searchText);
    setSearch(searchText)
  };

  useEffect(() => {
    fetch(
      `http://localhost:5000/products?page=${currentPage}&size=${itemsPerPage}&sort=${
        asc ? "asc" : "desc"
      }&search=${search}`
    )
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, [currentPage, itemsPerPage, asc, search]);
  return (
    <div>

      <div className="p-4 lg:flex justify-between items-center">
        <button
          onClick={() => setAsc(!asc)}
          className="btn btn-wide my-4 bg-red-600 hover:bg-red-700 text-white"
        >
          {asc ? "Price: High To Low" : "Price: Low To High"}
        </button>

        <form onSubmit={handleSearch}>
          <input type="text" name="search" placeholder="Search By Product Name" className="p-2 mt-4 rounded-l-md border-2 border-red-500" />
          <input type="submit" value="search" className="btn bg-red-600 text-white rounded-bl-none rounded-tl-none"  />
        </form>
      </div>
      
      <div>
      <h1 className="p-4 text-center text-3xl font-semibold mt-10 border-4 border-gray-500 lg:w-1/3 mx-auto rounded-2xl shadow-2xl">OUR COLLECTIONS</h1>
      <div className="p-4 grid grid-cols-1 lg:grid-cols-4 gap-8 mt-4 ">
        {products.map((product) => (
          <ProductCard key={product._id} product={product}></ProductCard>
        ))}
      </div>
      </div>
     {
      products.length >= 8 && (
        <div className="text-center mb-2 bg-black text-white w-[100%]lg:w-1/3 mx-auto rounded-full my-8 p-1">
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
      )
     }
    </div>
  );
};

export default Home;
