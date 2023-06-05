import { Button } from '@mui/material';
import React from 'react';
import { OtherUser } from 'types';

interface Props {
  user: OtherUser;
}

const OtherFriend: React.FC<Props> = ({ user }) => {
  const onSelectUser = () => {
    console.log(user);
  };
  return <Button onClick={onSelectUser}>{user.name}</Button>;
};

export default OtherFriend;
