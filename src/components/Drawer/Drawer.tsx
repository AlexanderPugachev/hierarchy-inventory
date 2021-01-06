import React from 'react';
import { Container, DrawerTitle, DrawerWrap } from './styles';
import { useDispatch, useSelector } from 'react-redux';
import { commonActions } from '../../redux/slices/commonSlice';
import { RootState } from '../../redux/store';

type DrawerProps = {
  title?: string;
  id: number;
};

export const Drawer: React.FC<DrawerProps> = ({ title, children, id }) => {
  const dispatch = useDispatch();
  const { [id]: drawer } = useSelector((s: RootState) => s.common.drawers);

  const closeDrawer = () => {
    dispatch(commonActions.setDrawer({ visible: false, id }));
  };

  return (
    <Container visible={drawer?.visible ?? false}>
      {title && <DrawerTitle>{title}</DrawerTitle>}
      {children}

      <DrawerWrap onClick={closeDrawer} />
    </Container>
  );
};
