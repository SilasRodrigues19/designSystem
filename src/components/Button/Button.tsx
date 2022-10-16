import { Slot } from '@radix-ui/react-slot';
import { clsx } from 'clsx';
import { ButtonHTMLAttributes, ReactNode } from 'react';

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  asChild?: boolean;
  className?: string;
}

export const Button = ({ children, asChild, className, ...props }: ButtonProps) => {
  const CustomComponent = asChild ? Slot : 'button';

  return (
    <div>
      <CustomComponent
        className={clsx(
          'py-3 px-4 bg-cyan-700 rounded font-semibold text-black text-sm w-full transition-colors hover:bg-cyan-800 focus:ring-2 ring-white dark:bg-cyan-500 dark:hover:bg-cyan-300',
          className
        )}
        {...props}
      >
        {children}
      </CustomComponent>
    </div>
  );
};
