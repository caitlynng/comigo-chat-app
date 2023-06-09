import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { setUserToChatWith } from 'redux/slices/conversationSlice';
import useNewMessageScrolling from 'hooks/useNewMessageScrolling';
import useOtherPersonIsTyping from 'hooks/useOtherPersonIsTyping';
import { RootState } from 'redux/store';
import NavigateBefore from '@mui/icons-material/NavigateBefore';
import BouncingDots from 'components/BouncingDots';
import ChatMessages from './ChatMessages';
import {
  ChatScrollWrapper,
  ChatContainer,
  UserToChatWithContainer,
  UserEmail,
} from './ChatPane.styles';
import {
  UserInfo,
  UserName,
  InitialAvatar,
} from '../user-list/UsersList.styles';
import SubmitMessageInput from './SubmitMessageInput';
import useWindowDimensions from 'utils/useWindowDimensionHook';

const ChatPane: React.FC = () => {
  const {
    userToChatWith: {
      uid: otherUserId,
      name: otherUserName,
      email: otherUserEmail,
    },
  } = useSelector((state: RootState) => state.conversation);
  const dispatch = useDispatch();
  const { width } = useWindowDimensions();
  const hasSelectedOtherUser = otherUserId.length > 0;

  const { scrollRef, onScroll } = useNewMessageScrolling();
  const { otherPersonIsTyping } = useOtherPersonIsTyping();

  const handleCloseChat = () => {
    dispatch(setUserToChatWith({ uid: '', name: '', email: '' }));
  };
  return (
    <ChatContainer>
      {hasSelectedOtherUser ? (
        <>
          <UserToChatWithContainer>
            {width < 600 && <NavigateBefore onClick={handleCloseChat} />}
            <InitialAvatar bgc='#d1d5db'>
              {otherUserName.charAt(0)}
            </InitialAvatar>
            <UserInfo>
              <UserName>{otherUserName}</UserName>
              <UserEmail>{otherUserEmail}</UserEmail>
            </UserInfo>
          </UserToChatWithContainer>
          <ChatScrollWrapper onScroll={onScroll}>
            <ChatMessages />
            <div ref={scrollRef} />
          </ChatScrollWrapper>
          {otherPersonIsTyping && <BouncingDots />}
          <SubmitMessageInput />
        </>
      ) : (
        <div style={{ flex: 1, display: 'grid', placeItems: 'center' }}>
          Select a user on the left to chat with!
        </div>
      )}
    </ChatContainer>
  );
};

export default ChatPane;
