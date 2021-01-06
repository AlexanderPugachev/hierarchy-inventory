import styled from 'styled-components';

export const Container = styled.button`
  padding: ${(p) => p.theme.spacing([2, 2])};
  margin: ${(p) => p.theme.spacing([0, 2])};
  border: 1px solid #094c66;
  color: #094c66;
  box-shadow: 0 0 6px 0 rgba(0, 0, 0, 0.1);
  background-color: #fff;
  cursor: pointer;
`;
