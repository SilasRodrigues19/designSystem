import { SVGAttributes } from 'react';

interface StorybookLogoProps extends SVGAttributes<HTMLOrSVGElement> {}

export const StorybookLogo = (props: StorybookLogoProps) => {
  return (
    <a href="https://silasrodrigues19.github.io/designSystem/" target="_blank">
      <svg className="absolute right-0 top-0 w-12 h-12 hover:brightness-90" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid meet" viewBox="0 0 32 32">
      <path fill={
          window.matchMedia('(prefers-color-scheme: dark)').matches
            ? '#81d8f7'
            : '#00BCE3'
        } d="m21.786.318l-.161 3.615c-.005.203.229.328.391.203l1.411-1.068L24.625 4A.24.24 0 0 0 25 3.812L24.865.135L26.641 0a1.602 1.602 0 0 1 1.708 1.599v28.802A1.6 1.6 0 0 1 26.667 32l-21.469-.958a1.6 1.6 0 0 1-1.531-1.547l-1-26.401a1.596 1.596 0 0 1 1.505-1.693L21.771.292zm-4.093 12.083c0 .625 4.214.318 4.786-.109c0-4.266-2.292-6.521-6.479-6.521c-4.198 0-6.531 2.297-6.531 5.724c0 5.932 8 6.036 8 9.276c0 .938-.427 1.469-1.401 1.469c-1.281 0-1.802-.651-1.734-2.88c0-.479-4.865-.641-5.026 0c-.359 5.375 2.974 6.932 6.797 6.932c3.724 0 6.63-1.984 6.63-5.573c0-6.359-8.135-6.188-8.135-9.333c0-1.292.964-1.464 1.505-1.464c.604 0 1.667.094 1.589 2.49z" />
    </svg>
    </a>
  );
}
