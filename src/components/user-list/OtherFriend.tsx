import { Button } from '@mui/material';
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
    <UserInfoContainer>
      <InitialAvatar>K</InitialAvatar>
      <UserName onClick={onSelectUser}>
        {/* <Button
          onClick={onSelectUser}
          sx={{
            textTransform: 'capitalize',
            justifyContent: 'start',
            color: '#0d0c22',
          }}
        >
          {user.name}
        </Button> */}
        {user.name}
      </UserName>
    </UserInfoContainer>
  );
};

export default OtherFriend;
