
import { Slot } from '@radix-ui/react-slot';
import { clsx } from 'clsx';
import { ReactNode } from 'react';

export interface TextProps {
  size?: 'sm' | 'md' | 'lg';
  children: ReactNode;
  asChild?: boolean;
  className?: string;
}

export const Text = ({ size = 'md', children, asChild, className }: TextProps) => {

 const CustomComponent = asChild ? Slot : 'span';

  return (
    <div>
      <CustomComponent
        className={clsx('text-black font-sans dark:text-gray-100', {
          'text-xs': size === 'sm',
          'text-sm': size === 'md',
          'text-md': size === 'lg',
        },
        className,
        )}
      >
        {children}
      </CustomComponent>
    </div>
  );
}
