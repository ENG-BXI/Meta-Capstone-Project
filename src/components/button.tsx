import type {ButtonHTMLAttributes, ReactNode} from 'react';
import {cn} from '../lib/utility';

const Button = ({children, type = 'button', disabled, className, onClick}: {children: ReactNode; type?: ButtonHTMLAttributes<HTMLButtonElement>['type']; disabled?: boolean; className?: string; onClick?: () => void}) => {
  return (
    <button type={type} disabled={disabled} className={cn('bg-primary-yellow font-bold rounded-[15px] py-3 px-6', className)} onClick={onClick}>
      {children}
    </button>
  );
};

export default Button;
