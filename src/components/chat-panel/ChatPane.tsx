import React from 'react';
import { useSelector } from 'react-redux';
import { RootState } from 'redux/store';
import ChatMessages from './ChatMessages';
import {
  ChatScrollWrapper,
  ChatContainer,
  UserToChatWithName,
} from './ChatPane.styles';
import SubmitMessageInput from './SubmitMessageInput';

const ChatPane: React.FC = () => {
  const {
    userToChatWith: { uid: otherUserId, name: otherUserName },
  } = useSelector((state: RootState) => state.conversation);
  const hasSelectedOtherUser = otherUserId.length > 0;

  return (
    <ChatContainer>
      <UserToChatWithName>
        {hasSelectedOtherUser
          ? otherUserName
          : 'Select a user on the left to chat with!'}
      </UserToChatWithName>
      {hasSelectedOtherUser && (
        <>
          <ChatScrollWrapper>
            <ChatMessages />
          </ChatScrollWrapper>
          <SubmitMessageInput />
        </>
      )}
    </ChatContainer>
  );
};

export default ChatPane;
