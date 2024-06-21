import { star } from "../assets/icons";

const ReviewsCard = ({ imgURL, customerName, rating, feedback }) => {
  return (
    <div className='flex justify-center items-center flex-col'>
      <img
        className=' rounded-full object-cover'
        src={imgURL}
        alt={customerName}
        width={120}
        height={120}
      />
      <p className='mt-6 max-w-sm text-center info-text'>{feedback}</p>
      <div className='flex mt-3 justify-center items-center gap-2.5'>
        <img
          src={star}
          alt='review'
          width={24}
          height={24}
          className=' object-contain m-0'
        />
        <p className=' text-xl font-montserrat text-slate-gray'>{rating}</p>
      </div>
      <h3 className=' mt-1 font-palanquin text-center font-bold text-3xl'>
        {customerName}
      </h3>
    </div>
  );
};

export default ReviewsCard;
