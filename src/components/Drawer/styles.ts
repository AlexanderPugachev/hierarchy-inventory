import styled from 'styled-components';

type ContainerType = {
  visible: boolean
}

export const Container = styled.div<ContainerType>`
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  min-width: 500px;
  display: flex;
  flex-direction: column;
  border-left: 1px solid rgba(0, 0, 0, 0.1);
  box-shadow: 0 0 24px 0 rgba(0, 0, 0, 0.1);
  background-color: #fff;
  z-index: ${p => p.theme.zIndex.drawers};
  
  visibility: ${p => p.visible ? 'visible' : 'hidden'};
  opacity: ${p => p.visible ? 1 : 0};
  margin-right: ${p => p.visible ? 0 : '-200px'};
  transition: opacity, margin-right 150ms ease-in-out, visibility 200ms;
  
  > :nth-child(1n) {
    padding: ${p => p.theme.spaces.m};
  }
`;

export const DrawerTitle = styled.div`
  border-bottom: 1px solid rgba(0, 0, 0, 0.1);
  display: flex;
  align-items: center;
  justify-content: space-between;
  min-height: 58px;
  box-sizing: border-box;
`;

export const DrawerWrap = styled.div`
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 500px;
  z-index: ${p => p.theme.zIndex.drawersWrap};
`;