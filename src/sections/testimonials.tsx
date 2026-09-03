import React from 'react';
import TestimonialCard from '../components/testimonial-card';
import {testimonials} from '../data/testimonials';

const Testimonials = () => {
  return (
    <section className='bg-primary-gray py-20'>
      <div className='custom-container mx-auto'>
        <h2 className='text-primary-yellow font-bold text-center text-2xl'>Testimonials</h2>
        <div className='grid place-items-center items-stretch grid-cols-1 gap-4 md:grid-cols-4 mt-5'>
          {testimonials.map(item => (
            <TestimonialCard rate={item.rate} author={item.author} text={item.text} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
