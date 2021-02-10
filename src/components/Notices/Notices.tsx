import React from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../../redux/store';
import { Notice } from './Notice/Notice';
import { Container } from './styles';

export const Notices: React.FC = () => {
  const { data } = useSelector((s: RootState) => s.notices);

  return (
    <Container>
      {Object.values(data).map(item =>
        <Notice key={item.id} data={item}/>
      )}
    </Container>
  );
};