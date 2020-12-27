import React from 'react';
import { CardTitle, Container } from './styles';

type CardType = {
  title?: string
  extra?: React.ReactNode | boolean
}

const Card: React.FC<CardType> = ({ title, extra, children}) => {
  return (
    <Container>
      {(title || extra) &&
      <CardTitle>
        {title ? <h3>{title}</h3> : <></>}
        {extra && extra}
      </CardTitle>}

      <div>{children}</div>
    </Container>
  );
};

export default Card;