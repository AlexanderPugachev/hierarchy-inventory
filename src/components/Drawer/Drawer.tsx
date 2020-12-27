import React from 'react';
import { Container, DrawerTitle, DrawerWrap } from './styles';

type DrawerProps = {
  title?: string
  visible: boolean
  setVisible: (b: boolean) => void
}

const Drawer: React.FC<DrawerProps> = ({title, children, visible, setVisible}) => {
  return (
    <Container visible={visible}>
      {title && <DrawerTitle>{title}</DrawerTitle>}
      {children}

      <DrawerWrap onClick={() => setVisible(false)}/>
    </Container>
  );
};

export default Drawer;