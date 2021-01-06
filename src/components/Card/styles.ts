import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  box-shadow: 0 0 12px 0 rgba(0, 0, 0, 0.1);

  > :nth-child(1n) {
    padding: ${(p) => p.theme.spaces.m};
  }
`;

export const CardTitle = styled.div`
  border-bottom: 1px solid rgba(0, 0, 0, 0.1);
  display: flex;
  align-items: center;
  justify-content: space-between;
  min-height: 58px;
  box-sizing: border-box;
`;
