/* eslint-disable react/prop-types */
import rating from '../assets/rating.jpg'
const ProductCard = ({ product }) => {
  const {
    ProductImage,
    ProductName,
    Category,
    Price,
    Ratings,
    CreationDateTime,
    Description,
  } = product;
  console.log(product);
  return (
    <div className="card card-compact bg-base-100 h-[300px] shadow-xl">
      <figure>
        <img
        className="h-[150px] w-[100%]"
          src={ProductImage}
          alt=""
        />
      </figure>
      <p className='text-right pr-4 text-secondary'>{Category}</p>
      <div className="card-body">
        <h2 className="font-semibold">{ProductName}</h2>
        <p>{Description}</p>
        <div className="flex">
          <p className='text-primary'>Price: {Price}$</p>
          <div className='text-right'>
          <p className="text-red-600 flex justify-center items-center">
          <img className="w-4 h-4" src={rating} alt=""/>{Ratings}</p>
          </div>
        </div>
        <p className='text-xs'>Creation Time: {CreationDateTime}</p>
      </div>
     
    </div>
  );
};

export default ProductCard;
