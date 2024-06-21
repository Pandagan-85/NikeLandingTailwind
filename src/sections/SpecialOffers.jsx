import { arrowRight } from "../assets/icons";
import { offer } from "../assets/images";
import Button from "../components/Button";
const SpecialOffers = () => {
  return (
    <section className='flex justify-wrap items-center max-xl:flex-col-reverse gap-10 max-container'>
      <div className='flex-1'>
        <img
          src={offer}
          width={773}
          height={687}
          alt=''
          className='object-contain w-full'
        />
      </div>
      <div>
        <h2 className='font-palanquin text-4xl capitalize  font-bold lg:max-w-lg'>
          <span className=' text-coral-red'>Special </span>
          Offer
        </h2>
        <p className='mt-4 lg:max-w-lg info-text'>
          Ensuring premium comfort and style, our meticulouslu crafted footwear
          is designed to elevate your experience, providing you unmatched
          quality, innovation and touch of elegange.
        </p>
        <p className='mt-6 lg:max-w-lg info-text'>
          Our dedication to detail and excellence ensures your satisfaction
        </p>
        <div className=' mt-11 flex flex-wrap gap-4 '>
          <Button iconURL={arrowRight} label='Shop now' />
          <Button
            backgroundColor='bg-white'
            borderColor='border-slate-gray'
            textColor='text-slate-gray'
            label='Learn More'
          />
        </div>
      </div>
    </section>
  );
};

export default SpecialOffers;
