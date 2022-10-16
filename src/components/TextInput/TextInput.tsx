import { InputHTMLAttributes, ReactNode } from 'react';
import { Slot } from '@radix-ui/react-slot';



export interface TextInputRootProps {
  children: ReactNode;
}

const TextInputRoot = ({ children }: TextInputRootProps) => {
  return (
    <div className='flex items-center gap-3 h-12 py-4 px-3 rounded outline-none bg-gray-100 w-full focus-within:ring-2 ring-cyan-700 dark:ring-cyan-300 dark:bg-gray-800'>
      {children}
    </div>
  );
};

TextInputRoot.displayName = 'TextInput.Root';

export interface TextInputIconProps {
  children: ReactNode;
}

const TextInputIcon = ({ children }: TextInputRootProps) => {
  return (
    <Slot className='w-6 h-6 text-gray-400'>
      {children}
    </Slot>
  );
};

TextInputIcon.displayName = 'TextInput.Icon';

export interface TextInputInputProps extends InputHTMLAttributes<HTMLInputElement> {}

const TextInputInput = (props: TextInputInputProps) => {

  return (
    <input
      className='bg-transparent flex-1 text-black text-xs placeholder:text-gray-400 outline-none dark:text-gray-100'
      {...props}
    />
  );
};

TextInputInput.displayName = 'TextInput.Input';

export const TextInput = {
  Root: TextInputRoot,
  Input: TextInputInput,
  Icon: TextInputIcon,
}
