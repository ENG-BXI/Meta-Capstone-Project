import {BrowserRouter, Route, Routes} from 'react-router';
import Home from '../pages/home';
import WebsiteLayout from '../layout/website-layout';

const MyRouter = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<WebsiteLayout />}>
          <Route index element={<Home />} />
          <Route path='booking' element={<h2>Booking</h2>} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default MyRouter;
