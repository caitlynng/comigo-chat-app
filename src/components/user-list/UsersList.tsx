import React, { useContext, useEffect, useState } from 'react';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { Button } from '@mui/material';
import { signOut } from 'firebase/auth';
import { firestoreDB, auth } from 'firebaseConfig';
import { collection, onSnapshot, query, where } from 'firebase/firestore';
import { AnimatePresence, motion } from 'framer-motion';
import { useDispatch } from 'react-redux';
import { AppDispatch } from 'redux/store';
import { useNavigate } from 'react-router-dom';
import {
  Container,
  UserInfoContainer,
  UserInfo,
  UserName,
  InitialAvatar,
  usersListMaterialTheme,
} from './UsersList.styles';
import { materialDefaultTheme } from 'App.styles';
import { AuthContext } from 'context/AuthContext';
import { setMyFriends } from 'redux/slices/usersSlice';
import { OtherUser } from 'types';
import FriendsList from './FriendsList';
import InviteFriendPanel from './InviteFriendPanel';

const defaultTheme = createTheme({
  components: { ...materialDefaultTheme, ...usersListMaterialTheme },
});

const UsersList: React.FC = () => {
  const dispatch: AppDispatch = useDispatch();
  const navigate = useNavigate();
  const { currentUserId, currentUser } = useContext(AuthContext);
  const [openInvitePanel, setOpenInvitePanel] = useState(false);

  const toggleOpenInvitePanel = () => {
    setOpenInvitePanel((prevOpen) => !prevOpen);
  };

  const handleLogout = async () => {
    await signOut(auth);

    navigate('/login');
  };

  useEffect(() => {
    const unsubscribe = onSnapshot(
      query(
        collection(firestoreDB, 'users'),
        where('uid', 'not-in', [currentUserId]),
      ),
      (querySnapshot) => {
        const users: OtherUser[] = [];

        querySnapshot.forEach((doc) => {
          const { createdAt, ...rest } = doc.data();
          users.push(rest as OtherUser);
        });

        dispatch(setMyFriends(users));
      },
    );

    return () => unsubscribe();
  }, [currentUserId, dispatch]);

  return (
    <Container>
      <ThemeProvider theme={defaultTheme}>
        <AnimatePresence>
          {openInvitePanel ? (
            <motion.div
              key='InviteFriendPanel'
              initial={{ opacity: 0, x: '-100%' }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: '-100%' }}
              transition={{ duration: 0.23 }}
            >
              <InviteFriendPanel
                toggleOpenInvitePanel={toggleOpenInvitePanel}
              />
            </motion.div>
          ) : (
            <motion.div
              key='FriendsList'
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.23, duration: 0.23 }}
              style={{
                overflow: 'auto',
                height: '100%',
              }}
            >
              <FriendsList toggleOpenInvitePanel={toggleOpenInvitePanel} />
            </motion.div>
          )}
        </AnimatePresence>
        <UserInfoContainer>
          <InitialAvatar>A</InitialAvatar>
          <UserInfo>
            <UserName>{currentUser?.displayName}</UserName>
            <Button
              onClick={handleLogout}
              sx={{
                padding: 0,
                color: '#adb5bd',
                justifyContent: 'start',
                fontSize: '0.8em',
              }}
            >
              Logout
            </Button>
          </UserInfo>
        </UserInfoContainer>
      </ThemeProvider>
    </Container>
  );
};

export default UsersList;
