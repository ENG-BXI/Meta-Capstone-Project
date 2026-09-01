const Footer = () => {
  return (
    <footer className='flex items-center'>
      <img src='' alt='' />
      <div>
        <h5>Doormat Nav igation</h5>
        <ul>
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
        <h5>Contact</h5>
        <ul>
          <li>123 Main Street, Anytown, USA</li>
          <li>(555) 123-4567</li>
          <li>info@doormat.com</li>
        </ul>
      </div>
      <div>
        <h5>Social Media Links</h5>
        <ul>
          <li>Facebook</li>
          <li>Twitter</li>
          <li>Instagram</li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
