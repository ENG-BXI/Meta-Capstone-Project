import About from '../sections/about';
import Hero from '../sections/hero';
import Menu from '../sections/menu';
import Testimonials from '../sections/testimonials';
const Home = () => {
  return (
    <main>
      <Hero />
      <Menu />
      <Testimonials />
      <About />
    </main>
  );
};

export default Home;
