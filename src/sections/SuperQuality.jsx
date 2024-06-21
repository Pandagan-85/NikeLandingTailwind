import { shoe8 } from "../assets/images";
import Button from "../components/Button";
const SuperQuality = () => {
  return (
    <section
      className=' flex max-lg:flex-col max-container w-full justify-between items-center gap-10'
      id='about-us'
    >
      <div className='flex flex-1 flex-col'>
        <h2 className='font-palanquin text-4xl capitalize  font-bold lg:max-w-lg'>
          We prodive you <span className=' text-coral-red'>Super </span>
          <span className=' text-coral-red'>quality </span> Shoes
        </h2>
        <p className='mt-4 lg:max-w-lg info-text'>
          Ensuring premium comfort and style, our meticulouslu crafted footwear
          is designed to elevate your experience, providing you unmatched
          quality, innovation and touch of elegange.
        </p>
        <p className='mt-6 lg:max-w-lg info-text'>
          Our dedication to detail and excellence ensures your satisfaction
        </p>
        <div className=' mt-11'>
          <Button label='View details' />
        </div>
      </div>
      <div className='flex-1 flex justify-center items-center'>
        <img
          src={shoe8}
          alt='shoe8'
          width={570}
          height={522}
          className=' object-contain'
        />
      </div>
    </section>
  );
};

export default SuperQuality;
