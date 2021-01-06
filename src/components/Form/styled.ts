import styled from 'styled-components';

type StyledFormType = {
  align?: string;
};

export const StyledForm = styled.form<StyledFormType>`
  display: flex;
  flex-direction: column;
  align-items: ${(p) => p.align ?? 'left'};
  box-sizing: border-box;

  width: 100%;
  padding: ${(p) => p.theme.spacing([1])};

  & > :not(:last-child) {
    width: auto;
    margin: ${(p) => p.theme.spacing([0, 2])};
    margin-bottom: ${(p) => p.theme.spacing([4])};
  }
`;
