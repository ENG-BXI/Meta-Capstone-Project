import type {ReactNode} from 'react';
import {cn} from '../lib/utility';

const Button = ({children, className, onClick}: {children: ReactNode; className?: string; onClick?: () => void}) => {
  return (
    <button className={cn('bg-primary-yellow font-bold rounded-[15px] py-3 px-6', className)} onClick={onClick}>
      {children}
    </button>
  );
};

export default Button;
