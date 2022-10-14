
import { Slot } from '@radix-ui/react-slot';
import { clsx } from 'clsx';
import { ReactNode } from 'react';

export interface HeadingProps {
  size?: 'sm' | 'md' | 'lg';
  children: ReactNode;
  asChild?: boolean;
}

export const Heading = ({ size = 'md', children, asChild }: HeadingProps) => {

 const CustomComponent = asChild ? Slot : 'h2';

  return (
    <div>
      <CustomComponent
        className={clsx('text-gray-100 font-bold font-sans', {
          'text-lg': size === 'sm',
          'text-xl': size === 'md',
          'text-2xl': size === 'lg',
        })}
      >
        {children}
      </CustomComponent>
    </div>
  );
}
