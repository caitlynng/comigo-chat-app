import React, { useMemo } from 'react';
import ChatPane from 'components/chat-panel/ChatPane';
import UsersList from 'components/user-list/UsersList';
import { UsersAndChatContainer } from './Chat.styles';
import { useSelector } from 'react-redux';
import { RootState } from 'redux/store';
import useWindowDimensions from 'utils/useWindowDimensionHook';

const Chat: React.FC = () => {
  const {
    userToChatWith: { uid: otherUserId },
  } = useSelector((state: RootState) => state.conversation);

  const { width } = useWindowDimensions();
  const componentOnMobile = useMemo(() => {
    return otherUserId.length > 0 ? <ChatPane /> : <UsersList />;
  }, [otherUserId]);

  const componentOnDesktop = useMemo(() => {
    return (
      <>
        <UsersList />
        <ChatPane />
      </>
    );
  }, []);

  const renderedComponent = useMemo(() => {
    if (width < 600) {
      return componentOnMobile;
    } else {
      return componentOnDesktop;
    }
  }, [width, componentOnMobile, componentOnDesktop]);

  return <UsersAndChatContainer>{renderedComponent}</UsersAndChatContainer>;
};

export default Chat;
