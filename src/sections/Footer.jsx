import { copyrightSign } from "../assets/icons";
import { footerLogo } from "../assets/images";
import { footerLinks, socialMedia } from "../costants";

const Footer = () => {
  return (
    <footer className='max-container w-full text-white'>
      <div className=' flex justify-between items-start gap-20 flex-wrap max-lg:flex-col'>
        <div className=' flex flex-col items-start mb-20'>
          <a href='/'>
            <img src={footerLogo} width={160} height={32} alt='Logo' />
          </a>
          <p className='mt-6 text-base leading-7 font-montserrat text-white-400 sm:max-w-sm'>
            Get shoes ready for the new term at your Nike store. Fint your
            perfetct size in store. Get Rewards .
          </p>
        </div>
        <div className=' flex items-center gap-6 mb-8'>
          {socialMedia.map(social => (
            <div
              key={social.alt}
              className=' bg-white rounded-full w-12 h-12 flex items-center justify-center'
            >
              <img src={social.src} alt={social.alt} />
            </div>
          ))}
        </div>
      </div>
      <div className='flex flex-1 justify-between lg:gap-10 gap-20 flex-wrap'>
        {footerLinks.map(link => (
          <div key={link.title} className=''>
            <h4 className=' text-2xl font-palanquin leading-normal font-medium mb-6'>
              {link.title}
            </h4>
            <ul>
              {link.links.map(item => (
                <li
                  className=' mt-3 font-montserrat text-base leading-normal hover:text-slate-gray cursor-pointer'
                  key={item.name}
                >
                  <a href={item.link}>{item.name}</a>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
      <div className='flex justify-between text-white-400 mt-24 max-sm:flex-col max-sm:items-center'>
        <div className='flex flex-1 justify-start items-center gap-2 font-montserrat cursor-pointer'>
          <img
            src={copyrightSign}
            alt='copyritght'
            width={20}
            height={20}
            className='rounded-full m-0'
          />
          <p>Copyright. All rights reserved.</p>
        </div>
        <p className='font-montserrat cursor-pointer'>Terms & Conditiond</p>
      </div>
    </footer>
  );
};

export default Footer;
