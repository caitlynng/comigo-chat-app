import styled from 'styled-components';

export const Header = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  position: sticky;
  top: 5px;
  z-index: 2;
`;

export const ScrollContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 10px;
  overflow: auto;
`;

export const List = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
`;

export const UsersListMessage = styled.div`
  text-align: center;
  padding: 10px 10px 10px 10px;
`;
