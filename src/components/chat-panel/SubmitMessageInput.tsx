import { Button, TextField } from '@mui/material';
import SendIcon from '@mui/icons-material/Send';
import React from 'react';
import { Container } from './SubmitMessageInput.styles';
import useSendMessages from './useSendMessages';
import { primaryColor } from 'App.styles';

const SubmitMessageInput: React.FC = () => {
  const { onSendMessage, textToSend, onTextEntered } = useSendMessages();

  return (
    <Container onSubmit={onSendMessage}>
      <TextField
        onChange={onTextEntered}
        value={textToSend}
        placeholder='Type something...'
        fullWidth
        sx={{
          '& .MuiOutlinedInput-notchedOutline': {
            border: 'none',
          },
        }}
      />
      <Button
        type='submit'
        endIcon={<SendIcon />}
        sx={{ color: primaryColor }}
      />
    </Container>
  );
};

export default SubmitMessageInput;
