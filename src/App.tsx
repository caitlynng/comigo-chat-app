import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from 'redux/store';
import { createTheme, ThemeProvider } from '@mui/material/styles';

import { AppContainer, materialDefaultTheme } from './App.styles';
import ChatPage from 'pages/Chat';
import NavigationBar from 'components/NavigationBar';
import Register from 'pages/Register';
import Login from 'pages/Login';
import AuthProvider from 'context/AuthContext';
import PrivateRoute from 'components/PrivateRoute';
import PublicOnlyRoute from 'components/PublicOnlyRoute';

const defaultTheme = createTheme({ components: materialDefaultTheme });

const App: React.FC = () => (
  <Provider store={store}>
    <AppContainer>
      <ThemeProvider theme={defaultTheme}>
        <AuthProvider>
          <BrowserRouter>
            <NavigationBar />
            <Routes>
              <Route
                path='/'
                element={
                  <PrivateRoute>
                    <ChatPage />
                  </PrivateRoute>
                }
              />
              <Route
                path='/register'
                element={
                  <PublicOnlyRoute>
                    <Register />
                  </PublicOnlyRoute>
                }
              />
              <Route
                path='/login'
                element={
                  <PublicOnlyRoute>
                    <Login />
                  </PublicOnlyRoute>
                }
              />
            </Routes>
          </BrowserRouter>
        </AuthProvider>
      </ThemeProvider>
    </AppContainer>
  </Provider>
);

export default App;
