import styled from 'styled-components';
import { primaryColor } from 'App.styles';

const Message = styled.div`
  border-radius: 8px;
  padding: 10px 15px;
  margin: 8px 0px 0px 0px;
  max-width: 80%;
  cursor: pointer;
`;

export const MessageFromMe = styled(Message)`
  align-self: right;
  background-color: ${primaryColor};
  color: white;
`;

export const MessageFromFriend = styled(Message)`
  align-self: left;
  background-color: white;
`;

interface MessageRowProps {
  isSentByMe: boolean;
}

export const MessageRow = styled.div<MessageRowProps>`
  display: flex;
  flex-direction: row;

  justify-content: ${(props) => (props.isSentByMe ? 'flex-end' : 'flex-start')};
`;
