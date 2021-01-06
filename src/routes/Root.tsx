import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../redux/store';
import { initFirebase } from '../redux/thunks/configThunks';
import Main from '../pages/Main/Main';

/**
 * This comp imitates routes file. Entry point for loading config
 */

const Root: React.FC = () => {
  const dispatch = useDispatch();
  const { firebaseLoaded } = useSelector((s: RootState) => s.config);

  useEffect(() => {
    !firebaseLoaded && dispatch(initFirebase());
  }, [firebaseLoaded, dispatch]);

  return <>{firebaseLoaded ? <Main /> : 'Нет соединения'}</>;
};

export default Root;
