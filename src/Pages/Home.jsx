import { useState } from "react";
import { useLoaderData } from "react-router-dom";


const Home = () => {
  const {count} = useLoaderData();
  const [currentPage,setCurrentPage]= useState(0)
  const itemsPerPage = 8;
  const numberOfPages = Math.ceil(count / itemsPerPage)
  const pages = [...Array(numberOfPages).keys()]
  
  const handlePrevPage = () =>{
    if(currentPage > 0){
      setCurrentPage(currentPage - 1)
    }
  }
  const handleNextPage = () =>{
    if(currentPage < pages.length){
      setCurrentPage(currentPage + 1)
    }
  }

  return (
    <div>
      
   <div className="text-center mb-2 bg-black text-white w-1/3 mx-auto rounded-full">
    <button className="pr-4" onClick={handlePrevPage}>Prev</button>
   {
      pages.map(page => <button
        className="pr-4" 
        onClick={()=> setCurrentPage(page)}
        key={page}>{page}</button>)
    }
    <button onClick={handleNextPage}>Next</button>
   </div>
    </div>
  );
};

export default Home;
