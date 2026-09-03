import {Outlet} from 'react-router';
import Header from '../sections/header';
import Footer from '../sections/footer';

const WebsiteLayout = () => {
  return (
    <div className='flex flex-col min-h-screen'>
      <Header />
      <main className='flex-1'>
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

export default WebsiteLayout;
