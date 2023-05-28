import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Register from 'pages/Register';
import Login from 'pages/Login';
import ChatPage from 'pages/Chat';
import { AppContainer } from './App.styles';

const App: React.FC = () => (
  <AppContainer>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<ChatPage />} />
        <Route path='/register' element={<Register />} />
        <Route path='/login' element={<Login />} />
      </Routes>
    </BrowserRouter>
  </AppContainer>
);

export default App;
