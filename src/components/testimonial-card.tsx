import React from 'react';
interface TestimonialCardProps {
  rate: number;
  author: string;
  text: string;
}
const TestimonialCard = ({rate, author, text}: TestimonialCardProps) => {
  return (
    <article className='max-w-50 bg-secondary-3 p-5 flex flex-col items-center'>
      <span className='self-start font-semibold'>{rate} Rate</span>
      <p className='mt-2 mb-5 font-semibold'>{author}</p>
      <p className='leading-4'>{text}</p>
    </article>
  );
};

export default TestimonialCard;
