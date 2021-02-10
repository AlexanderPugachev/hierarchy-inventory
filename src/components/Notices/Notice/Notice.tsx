import React from 'react';
import { Container } from './styles';
import { NoticeType } from '../../../redux/types';

type PropsType = {
  data: NoticeType
}

export const Notice: React.FC<PropsType> = ({ data }) => {
  return (
    <Container type={data.type}>
      {data.text}
    </Container>
  );
};