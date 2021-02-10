import styled from 'styled-components';

const colors = {
  success: '#daffcc',
  error: '#ffcaca',
  warning: '#ffe4c9',
  waiting: '#bffff2'
}

type PropsType = {
  type: 'error' | 'success' | 'warning' | 'waiting';
}

export const Container = styled.div<PropsType>`
  box-shadow: 0 0 12px 0 rgba(0, 0, 0, 0.1);
  background: ${p => colors[p.type]};
  padding: ${p => p.theme.spaces.m};
`;