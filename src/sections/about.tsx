import AboutImage from '../assets/about-image.png';
const About = () => {
  return (
    <section id='about' className='custom-container mx-auto flex flex-col md:flex-row justify-center gap-4 py-20'>
      <div className='md:w-1/2 p-4'>
        <h2 className='text-3xl font-bold'>Little Lemon</h2>
        <h4 className='text-xl font-semibold text-secondary-4 mb-10'>Chicago</h4>
        <p className='text-lg font-semibold'>Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet. Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. </p>
      </div>
      <div className='relative md:w-1/2'>
        <img src={AboutImage} alt='About Little Lemon' />
      </div>
    </section>
  );
};

export default About;
