import React from 'react';
import { OtherUser } from 'types';
import useSelectUser from './useSelectUser';
import { InitialAvatar, UserInfoContainer, UserName } from './UsersList.styles';
interface Props {
  user: OtherUser;
}

const OtherFriend: React.FC<Props> = ({ user }) => {
  const { onSelectUser } = useSelectUser(user);

  return (
    <UserInfoContainer onClick={onSelectUser}>
      <InitialAvatar bgc='#d1d5db'>{user.name.charAt(0)}</InitialAvatar>
      <UserName>{user.name}</UserName>
    </UserInfoContainer>
  );
};

export default OtherFriend;
