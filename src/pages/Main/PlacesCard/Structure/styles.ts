import styled from 'styled-components';

export const Container = styled.div`
  
`;

type ItemType = {
  current: boolean
}

export const Item = styled.div<ItemType>`
  background-color: ${p => p.current && 'rgba(0, 0, 0, 0.1)'};
  cursor: pointer;
  display: flex;
  align-items: center;
  
  box-sizing: content-box;
  height: fit-content;
`;

type LevelType = {
  level: number,
}

export const Level = styled.div<LevelType>`
  padding-top: ${p => p.theme.spacing([3 - p.level], 2)};
  padding-bottom: ${p => p.theme.spacing([3 - p.level], 2)};
  padding-left: ${p => p.theme.spacing([p.level], 8)};
`;