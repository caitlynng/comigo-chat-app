import styled from 'styled-components';

export const ChatContainer = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  background-color: white;
  border: 1px solid #e9ecef;
`;
export const UserToChatWithContainer = styled.div`
  display: flex;
  flex-direction: row;
  padding: 15px 10px;
  align-items: center;
`;

export const ChatScrollWrapper = styled.div`
  flex: 1;
  overflow-y: auto;
  padding: 10px;
  background-color: #e5ecff;
  border-top: 1px solid #e9ecef;
`;

export const UserEmail = styled.div`
  color: #adb5bd;
  font-size: 0.85em;
`;

export const IsTypingContainer = styled.div`
  font-style: italic;
  position: absolute;
  bottom: 85px;
  padding-left: 20px;
`;
