import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import * as t from '../reducers/type';

const useUnmountMenu = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch({ type: t.UNMOUNT_BACKGROUND });
  }, []);
};

export default useUnmountMenu;
