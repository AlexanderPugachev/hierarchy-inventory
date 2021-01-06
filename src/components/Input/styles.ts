import styled from 'styled-components';

export const StyledInput = styled.input`
  width: 100%;
  box-sizing: border-box;
  background-color: #fff;
  border: 1px solid #094c66;
  padding: ${(p) => p.theme.spacing([2])};
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: 100%;
`;

export const ErrorText = styled.span`
  color: red;
  font-size: 14px;
  font-style: italic;
`;
