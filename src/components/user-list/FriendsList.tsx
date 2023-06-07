import React from 'react';
import { TextField, IconButton } from '@mui/material';
import { useSelector } from 'react-redux';
import { RootState } from 'redux/store';
import { OtherUser } from 'types';
import OtherFriend from './OtherFriend';
import PersonAddIcon from '@mui/icons-material/PersonAdd';
import {
  Header,
  ScrollContainer,
  List,
  UsersListMessage,
} from './FriendsList.styles';
import { primaryColor } from 'App.styles';

interface Props {
  toggleOpenInvitePanel: VoidFunction;
}

const FriendsList: React.FC<Props> = ({ toggleOpenInvitePanel }) => {
  const { myFriends } = useSelector((state: RootState) => state.users);

  return (
    <>
      <Header>
        <TextField
          id='outlined-search'
          label='Search'
          type='search'
          size='small'
          fullWidth
          sx={{
            '& .MuiOutlinedInput-root': {
              borderRadius: '20px',
            },
          }}
        />
        <IconButton
          color='success'
          onClick={toggleOpenInvitePanel}
          sx={{
            color: primaryColor,
          }}
        >
          <PersonAddIcon />
        </IconButton>
      </Header>
      <ScrollContainer>
        <h4>Community</h4>
        {myFriends.length === 0 ? (
          <UsersListMessage>No user to display</UsersListMessage>
        ) : (
          <List>
            {myFriends.map((user: OtherUser, index: number) => (
              <OtherFriend key={index} user={user} />
            ))}
          </List>
        )}
      </ScrollContainer>
    </>
  );
};

export default FriendsList;
