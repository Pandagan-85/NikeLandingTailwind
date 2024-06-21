import ServicesCard from "../components/ServicesCard";
import { services } from "../costants";
const Services = () => {
  return (
    <section className=' max-container justify-center flex flex-wrap  gap-9'>
      {services.map((service, index) => (
        <ServicesCard key={index} {...service} />
      ))}
    </section>
  );
};

export default Services;
