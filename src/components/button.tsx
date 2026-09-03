import type {ButtonHTMLAttributes, ReactNode} from 'react';
import {cn} from '../lib/utility';

const Button = ({children, ariaLabel, type = 'button', disabled, className, onClick}: {children: ReactNode; ariaLabel?: string; type?: ButtonHTMLAttributes<HTMLButtonElement>['type']; disabled?: boolean; className?: string; onClick?: () => void}) => {
  return (
    <button aria-labelledby={ariaLabel} type={type} disabled={disabled} className={cn('bg-primary-yellow font-bold rounded-[15px] py-3 px-6', className)} onClick={onClick} aria-label={ariaLabel}>
      {children}
    </button>
  );
};

export default Button;
