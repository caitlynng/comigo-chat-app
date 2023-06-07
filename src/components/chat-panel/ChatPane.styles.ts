import styled from 'styled-components';

export const ChatContainer = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  background-color: #f8f9fa;
  border: 1px solid #e9ecef;
`;
export const UserToChatWithName = styled.div`
  display: flex;
  flex-direction: row;
  padding: 20px 20px;
  /* background-color: #f8f9fa; */
`;

export const ChatScrollWrapper = styled.div`
  flex: 1;
  overflow-y: auto;
  padding: 10px 10px 10px 10px;
  background-color: white;
  border-top: 1px solid #e9ecef;
`;
