import styled from 'styled-components';

interface InitialAvatarProps {
  bgc: string;
}

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 300px;
  padding: 10px 0px 10px 10px;
`;

export const UserInfoContainer = styled.div`
  display: flex;
  align-items: center;
  padding: 0.5em;
  margin-right: 0.5em;
  margin-top: auto;
  cursor: pointer;
  &:hover {
    background-color: #f8f9fa;
  }
`;
export const UserInfo = styled.div``;
export const UserName = styled.div`
  font-weight: 600;
`;
export const InitialAvatar = styled.div<InitialAvatarProps>`
  align-items: center;
  display: flex;
  justify-content: center;
  background-color: ${(props) => props.bgc};
  color: #fff;
  border-radius: 50%;
  height: 2.5rem;
  width: 2.5rem;
  margin-right: 0.5em;
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
