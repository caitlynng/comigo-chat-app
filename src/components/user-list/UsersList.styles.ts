import styled from 'styled-components';
import { primaryColor, primaryColorHover } from 'App.styles';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 300px;
  padding: 10px 0px 10px 10px;
`;

export const UserInfoContainer = styled.div`
  display: flex;
  align-items: center;
`;
export const UserInfo = styled.div`
  margin-left: 0.5em;
`;
export const UserName = styled.div`
  font-weight: 600;
`;
export const InitialAvatar = styled.div`
  align-items: center;
  display: flex;
  justify-content: center;
  background-color: #ffb84d;
  color: #fff;
  border-radius: 50%;
  height: 2.5rem;
  width: 2.5rem;
  cursor: pointer;
`;

export const usersListMaterialTheme: { [key: string]: any } = {
  // MuiButton: {
  //   styleOverrides: {
  //     root: {
  //       padding: 0,
  //     },
  //   },
  // },
};
