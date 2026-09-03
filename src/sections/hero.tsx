import Button from '../components/button';
import HeroImage from '../assets/Hero-image.png';
const Hero = () => {
  return (
    <section id='home' className='bg-primary-gray'>
      <div className='custom-container mx-auto flex justify-between py-5'>
        <div className='flex flex-col items-start gap-2'>
          <h1 className='text-5xl font-bold text-primary-yellow'>Little Lemon</h1>
          <h3 className='text-lg text-secondary-3'>Chicago</h3>
          <p className='text-secondary-3 max-w-87.5'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
          <Button className='mt-10'>Reserve a Table</Button>
        </div>
        <img src={HeroImage} alt='hero-image' />
      </div>
    </section>
  );
};

export default Hero;
