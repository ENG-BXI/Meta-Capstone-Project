import {BrowserRouter, Route, Routes} from 'react-router';
import Home from '../pages/home';
import WebsiteLayout from '../layout/website-layout';
import Booking from '../pages/booking';

const MyRouter = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<WebsiteLayout />}>
          <Route index element={<Home />} />
          <Route path='booking' element={<Booking />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default MyRouter;
