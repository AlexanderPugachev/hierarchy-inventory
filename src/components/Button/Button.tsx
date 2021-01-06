import React from 'react';
import { Container } from './styles';

export const Button: React.FC<
  React.ButtonHTMLAttributes<HTMLButtonElement>
> = ({ children, ...props }) => {
  return <Container {...props}>{children}</Container>;
};
