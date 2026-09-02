import React from 'react';

export interface FoodCardProps {
  title: string;
  price: string | number;
  description: string;
  imageUrl: string;
  onOrder?: () => void;
}

const FoodCard: React.FC<FoodCardProps> = ({title, price, description, imageUrl, onOrder}) => {
  return (
    <article className='w-full max-w-[320px] bg-secondary-3 rounded-t-[20px] rounded-b-lg overflow-hidden flex flex-col font-sans'>
      <div className='h-50 w-full'>
        <img src={imageUrl} alt={title} className='border w-full h-full object-cover' />
      </div>

      <div className='p-5 flex flex-col grow'>
        <div className='flex justify-between items-center mb-4'>
          <h3 className='text-xl font-bold text-black'>{title}</h3>
          <span className='text-lg font-bold text-secondary-1'>{typeof price === 'number' ? `$${price.toFixed(2)}` : price}</span>
        </div>

        <p className='text-gray-600 text-[15px] leading-relaxed mb-6 grow'>{description}</p>

        <button onClick={onOrder} className='flex items-center gap-3 text-black font-bold text-base hover:opacity-70 transition-opacity w-max' aria-label={`Order ${title} for delivery`}>
          Order a delivery
          <svg xmlns='http://www.w3.org/20Hel0/svg' width='24' height='24' viewBox='0 0 24 24' fill='currentColor' className='w-5 h-5'>
            <path d='M19.15 8a2 2 0 0 0-1.72-1H15V5a1 1 0 0 0-1-1H4a2 2 0 0 0-2 2v10a2 2 0 0 0 1 1.73 3 3 0 0 0 5.94.05h6.12a3 3 0 0 0 5.94-.05V14a2 2 0 0 0 .15-1.5l-1.9-4.5zM6 18a1 1 0 1 1 1-1 1 1 0 0 1-1 1zm9-11v4h2.5l1.26 3H15v1.27a3 3 0 0 0-2 .73H9.22A3 3 0 0 0 7.27 15H4V6h10zm3 11a1 1 0 1 1 1-1 1 1 0 0 1-1 1z' />
          </svg>
        </button>
      </div>
    </article>
  );
};

export default FoodCard;
