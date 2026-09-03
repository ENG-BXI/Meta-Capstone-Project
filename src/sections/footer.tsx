import Logo from '../assets/logo.png';
const Footer = () => {
  return (
    <footer className='bg-primary-gray text-secondary-3 py-10'>
      <div className='custom-container mx-auto flex flex-col md:flex-row gap-10 items-start'>
        <img src={Logo} alt='Little Lemon Logo' />
        <div>
          <h5 className='text-primary-yellow text-md font-bold mb-2'>Doormat Navigation</h5>
          <ul className='text-sm'>
            <li>
              <a href='#'>Home</a>
            </li>
            <li>
              <a href='#about'>About</a>
            </li>
            <li>
              <a href='#menu'>Menu</a>
            </li>
            <li>
              <a href='#reservations'>Reservations</a>
            </li>
            <li>
              <a href='#order-online'>Order Online</a>
            </li>
            <li>
              <a href='#login'>Login</a>
            </li>
          </ul>
        </div>
        <div>
          <h5 className='text-primary-yellow text-md font-bold mb-2'>Contact</h5>
          <ul>
            <li>123 Main Street, Anytown, USA</li>
            <li>(555) 123-4567</li>
            <li>info@doormat.com</li>
          </ul>
        </div>
        <div>
          <h5 className='text-primary-yellow text-md font-bold mb-2'>Social Media Links</h5>
          <ul>
            <li>Facebook</li>
            <li>Twitter</li>
            <li>Instagram</li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
