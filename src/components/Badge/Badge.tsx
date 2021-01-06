import React from 'react';
import { Container } from './styles';

type BadgeType = {
  count: number;
};

const Badge: React.FC<BadgeType> = ({ count }) => {
  return count ? <Container>{count}</Container> : <></>;
};

export default Badge;
