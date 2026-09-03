import {useState} from 'react';
import Logo from '../assets/logo.png';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const closeMenu = () => setIsOpen(false);

  return (
    <header className='h-20 py-4 custom-container mx-auto flex justify-between items-center'>
      <a href='/' onClick={closeMenu}>
        <img src={Logo} alt='logo' width={150} height={100} />
      </a>

      {/* Desktop Navigation */}
      <nav className='hidden md:block'>
        <ul className='flex font-bold gap-4 items-center'>
          <li>
            <a href='#' onClick={closeMenu}>
              Home
            </a>
          </li>
          <li>
            <a href='#about' onClick={closeMenu}>
              About
            </a>
          </li>
          <li>
            <a href='#menu' onClick={closeMenu}>
              Menu
            </a>
          </li>
          <li>
            <a href='#reservations' onClick={closeMenu}>
              Reservations
            </a>
          </li>
          <li>
            <a href='#order-online' onClick={closeMenu}>
              Order Online
            </a>
          </li>
          <li>
            <a href='#login' onClick={closeMenu}>
              Login
            </a>
          </li>
        </ul>
      </nav>

      {/* Mobile Menu Button */}
      <button type='button' onClick={() => setIsOpen(!isOpen)} className='md:hidden text-2xl' aria-label='Toggle menu' aria-expanded={isOpen}>
        {isOpen ? '✕' : '☰'}
      </button>

      {/* Mobile Navigation */}
      {isOpen && (
        <nav className='absolute top-20 left-0 w-full bg-white shadow-md md:hidden z-50'>
          <ul className='flex flex-col font-bold'>
            <li>
              <a href='#' onClick={closeMenu} className='block px-6 py-4 hover:bg-gray-100'>
                Home
              </a>
            </li>

            <li>
              <a href='#about' onClick={closeMenu} className='block px-6 py-4 hover:bg-gray-100'>
                About
              </a>
            </li>

            <li>
              <a href='#menu' onClick={closeMenu} className='block px-6 py-4 hover:bg-gray-100'>
                Menu
              </a>
            </li>

            <li>
              <a href='#reservations' onClick={closeMenu} className='block px-6 py-4 hover:bg-gray-100'>
                Reservations
              </a>
            </li>

            <li>
              <a href='#order-online' onClick={closeMenu} className='block px-6 py-4 hover:bg-gray-100'>
                Order Online
              </a>
            </li>

            <li>
              <a href='#login' onClick={closeMenu} className='block px-6 py-4 hover:bg-gray-100'>
                Login
              </a>
            </li>
          </ul>
        </nav>
      )}
    </header>
  );
};

export default Header;
