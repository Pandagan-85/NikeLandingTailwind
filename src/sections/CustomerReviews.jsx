import { reviews } from "../costants";
import ReviewsCard from "../components/ReviewsCard";
const CustomerReviews = () => {
  return (
    <section className='max-container'>
      <h3 className=' font-palanquin text-center font-bold text-4xl'>
        What are <span className='text-coral-red'>Customers </span>
        Say?
      </h3>
      <p className=' info-text m-auto mt-4 max-w-lg text-center'>
        Hear genuine stories from out satisfied customers about their
        exceptional experiences with us.
      </p>
      <div className='mt-24 flex flex-1 justify-evenly items-center max-lg:flex-col gap-14'>
        {reviews.map((review, index) => (
          <ReviewsCard key={index} {...review} />
        ))}
      </div>
    </section>
  );
};

export default CustomerReviews;
