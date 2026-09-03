import {Outlet} from 'react-router';
import Header from '../sections/header';
import Footer from '../sections/footer';

const WebsiteLayout = () => {
  return (
    <>
      <Header />
      <main>
        <Outlet />
      </main>
      <Footer />
    </>
  );
};

export default WebsiteLayout;
