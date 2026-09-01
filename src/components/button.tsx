import type {ReactNode} from 'react';
import {cn} from '../lib/utility';

const Button = ({children, className}: {children: ReactNode; className?: string}) => {
  return <button className={cn('bg-primary-yellow font-bold rounded-[15px] py-3 px-4', className)}>{children}</button>;
};

export default Button;
