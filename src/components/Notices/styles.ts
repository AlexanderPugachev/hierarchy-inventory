import styled from 'styled-components';

export const Container = styled.div`
  position: fixed;
  bottom: 20px;
  right: 20px;
  display: flex;
  flex-direction: column;
  
  > :not(:nth-last-child(1)) {
    margin-bottom: ${(p) => p.theme.spaces.x};
  }
`;