import { Button } from '@mui/material';
import React from 'react';
import { OtherUser } from 'types';
import useSelectUser from './useSelectUser';
interface Props {
  user: OtherUser;
}

const OtherFriend: React.FC<Props> = ({ user }) => {
  const { onSelectUser } = useSelectUser(user);

  return (
    <Button
      onClick={onSelectUser}
      sx={{
        textTransform: 'capitalize',
        justifyContent: 'start',
        color: '#0d0c22',
      }}
    >
      {user.name}
    </Button>
  );
};

export default OtherFriend;
