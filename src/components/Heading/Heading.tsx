
import { Slot } from '@radix-ui/react-slot';
import { clsx } from 'clsx';
import { ReactNode } from 'react';

export interface HeadingProps {
  size?: 'sm' | 'md' | 'lg';
  children: ReactNode;
  asChild?: boolean;
  className?: string;
}

export const Heading = ({ size = 'md', children, asChild, className }: HeadingProps) => {

 const CustomComponent = asChild ? Slot : 'h2';

  return (
    <div>
      <CustomComponent
        className={clsx(
          'text-black font-bold font-sans dark:text-gray-100',
          {
            'text-lg': size === 'sm',
            'text-xl': size === 'md',
            'text-2xl': size === 'lg',
          },
          className
        )}
      >
        {children}
      </CustomComponent>
    </div>
  );
}
