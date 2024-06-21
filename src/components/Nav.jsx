import { headerLogo } from "../assets/images/index";
import { hamburger } from "../assets/icons/index";
import { navLinks } from "../costants";
const Nav = () => {
  return (
    <header className=' padding-x py-8 absolute z-10 w-full'>
      <nav className='flex justify-between items-center max-container'>
        <a href='/'>
          <img src={headerLogo} alt='Logo' width={130} height={29} />
        </a>
        <ul className='flex-1 flex justify-center items-center gap-16 max-lg:hidden'>
          {navLinks.map(item => (
            <li key={item.label}>
              <a
                className='font-montserrat leading-normal text-lg text-slate-gray'
                href={item.href}
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>
        <img
          className='hidden max-lg:block'
          src={hamburger}
          alt='Hamburger'
          width={25}
          height={25}
        />
      </nav>
    </header>
  );
};

export default Nav;
