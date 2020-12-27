import styled from 'styled-components';

export const Container = styled.div`
  display: grid;
  grid-template-columns: 1fr 3fr;
  gap: ${p => p.theme.spaces.l};
  padding: ${p => p.theme.spaces.xxl};
  box-sizing: border-box;
  min-height: 100vh;
`;