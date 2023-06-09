import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { setUserToChatWith } from 'redux/slices/conversationSlice';
import { AppDispatch } from 'redux/store';
import { OtherUser } from 'types';

const EMPTY_USER: OtherUser = {
  uid: '',
  name: '',
  email: '',
};

const useCloseChatPanel = () => {
  const dispatch: AppDispatch = useDispatch();

  useEffect(() => {
    return () => {
      dispatch(setUserToChatWith(EMPTY_USER)); //
    };
  }, [dispatch]);

  return {};
};

export default useCloseChatPanel;
