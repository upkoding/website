import type { ReactNode } from 'react';

type ILogoProps = {
  icon: ReactNode;
  name: string;
};

const Logo = (props: ILogoProps) => (
  <div className="flex items-center bg-clip-text text-xl font-semibold text-green-400">
    {props.icon}
    {props.name}
  </div>
);

export { Logo };
