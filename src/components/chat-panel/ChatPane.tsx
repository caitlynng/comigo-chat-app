import React from 'react';
import { useSelector } from 'react-redux';
import useNewMessageScrolling from 'hooks/useNewMessageScrolling';
import useOtherPersonIsTyping from 'hooks/useOtherPersonIsTyping';
import { RootState } from 'redux/store';
import BouncingDots from 'components/BouncingDots';
import ChatMessages from './ChatMessages';
import {
  ChatScrollWrapper,
  ChatContainer,
  UserToChatWithContainer,
  UserEmail,
} from './ChatPane.styles';
import {
  UserInfoContainer,
  UserInfo,
  UserName,
  InitialAvatar,
} from '../user-list/UsersList.styles';
import SubmitMessageInput from './SubmitMessageInput';

const ChatPane: React.FC = () => {
  const {
    userToChatWith: {
      uid: otherUserId,
      name: otherUserName,
      email: otherUserEmail,
    },
  } = useSelector((state: RootState) => state.conversation);
  const hasSelectedOtherUser = otherUserId.length > 0;

  const { scrollRef, onScroll } = useNewMessageScrolling();
  const { otherPersonIsTyping } = useOtherPersonIsTyping();

  return (
    <ChatContainer>
      <UserToChatWithContainer>
        {hasSelectedOtherUser ? (
          <>
            <InitialAvatar>{otherUserName.charAt(0)}</InitialAvatar>
            <UserInfo>
              <UserName>{otherUserName}</UserName>
              <UserEmail>{otherUserEmail}</UserEmail>
            </UserInfo>
          </>
        ) : (
          'Select a user on the left to chat with!'
        )}
      </UserToChatWithContainer>
      {hasSelectedOtherUser && (
        <>
          <ChatScrollWrapper onScroll={onScroll}>
            <ChatMessages />
            <div ref={scrollRef} />
          </ChatScrollWrapper>
          {otherPersonIsTyping && <BouncingDots />}
          <SubmitMessageInput />
        </>
      )}
    </ChatContainer>
  );
};

export default ChatPane;
