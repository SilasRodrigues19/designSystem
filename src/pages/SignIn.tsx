import { Checkbox } from '@radix-ui/react-checkbox';
import { Envelope, Lock } from 'phosphor-react';
import { FormEvent, useState } from 'react';
import { Heading, TextInput, Text, Button } from '../components';
import { Logo } from '../Logo';
import { StorybookLogo } from '../StorybookLogo';

export const SignIn = () => {
  const [isUserSigned, setIsUsedSigned] = useState(false);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();

    setIsUsedSigned(true);
  };

  return (
    <main className='w-screen h-screen bg-gray-200 flex flex-col items-center justify-center dark:bg-gray-900 dark:gray-100'>
      <header className='flex flex-col items-center'>
        <Logo />

        <StorybookLogo />
        <Heading size='lg' className='mt-4'>
          Ignit - Design System
        </Heading>

        <Text size='lg' className='text-gray-400 mt-1'>
          Faça login e comece a usar!
        </Text>
      </header>

      <form
        onSubmit={handleSubmit}
        className='flex flex-col items-stretch gap-4 w-full max-w-sm mt-10'
      >
        {isUserSigned && <Text>Login realizado!</Text>}
        <label htmlFor='email' className='flex flex-col gap-3'>
          <Text className='font-semibold'>Endereço de e-mail</Text>
          <TextInput.Root>
            <TextInput.Icon>
              <Envelope />
            </TextInput.Icon>
            <TextInput.Input
              autoComplete='off'
              type='email'
              id='email'
              placeholder='Digite seu e-mail'
            />
          </TextInput.Root>
        </label>

        <label htmlFor='password' className='flex flex-col gap-3'>
          <Text className='font-semibold text-black dark:text-[#e1e1e6]'>
            Sua senha
          </Text>
          <TextInput.Root>
            <TextInput.Icon>
              <Lock />
            </TextInput.Icon>
            <TextInput.Input
              autoComplete='off'
              type='password'
              id='password'
              placeholder='************'
            />
          </TextInput.Root>
        </label>

        <label htmlFor='remember' className='flex items-center gap-2'>
          <Checkbox id='remember' />
          <Text
            size='sm'
            className='text-black cursor-pointer select-none dark:text-gray-200'
          >
            Lembrar de mim por 30 dias
          </Text>
        </label>

        <Button type='submit' className='mt-4'>
          Entrar na plataforma
        </Button>
      </form>

      <footer className='flex flex-col items-center gap-4 mt-8'>
        <Text asChild size='sm'>
          <a
            className='text-gray-400 underline hover:text-black transition-colors dark:text-gray-400 dark:hover:text-gray-200'
            href='#'
          >
            Esqueceu sua senha?
          </a>
        </Text>
        <Text asChild size='sm'>
          <a
            className='text-gray-400 underline hover:text-black transition-colors dark:text-gray-400 dark:hover:text-gray-200'
            href='#'
          >
            Não possui conta? Crie uma agora
          </a>
        </Text>
      </footer>
    </main>
  );
};
