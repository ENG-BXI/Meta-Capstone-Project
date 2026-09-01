import Logo from '../assets/logo.png';
const Header = () => {
  return (
    <header className='h-20 py-4 custom-container mx-auto w-screen flex justify-between items-center'>
      <a href='/'>
        <img src={Logo} alt='logo' width={150} height={100} />
      </a>
      <nav className=''>
        <ul className='flex font-bold gap-4 w-full items-center'>
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
      </nav>
    </header>
  );
};

export default Header;
