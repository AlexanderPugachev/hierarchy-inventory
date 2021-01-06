import styled from 'styled-components';

export const Container = styled.span`
  margin: ${(p) => p.theme.spacing([0.5])};
  margin-left: ${(p) => p.theme.spaces.s};
  padding: ${(p) => p.theme.spacing([0, 1])};
  border: 1px solid #094c66;
  color: #094c66;
  font-weight: 600;
  font-size: 14px;
  box-shadow: 0 0 6px 0 rgba(0, 0, 0, 0.1);
`;
