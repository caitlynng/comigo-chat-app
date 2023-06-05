import { addDoc, collection, Timestamp } from 'firebase/firestore';
import { useContext, useState, FormEvent } from 'react';
import { firestoreDB } from 'firebaseConfig';
import { AuthContext } from 'context/AuthContext';
import { useSelector } from 'react-redux';
import { RootState } from 'redux/store';

const useSendMessages = () => {
  const { currentUserId } = useContext(AuthContext);
  const { userToChatWith } = useSelector(
    (state: RootState) => state.conversation,
  );

  const [textToSend, setTextToSend] = useState('');

  const otherUserId = userToChatWith.uid;
  const chatId =
    currentUserId > otherUserId
      ? currentUserId + otherUserId
      : otherUserId + currentUserId;

  const onSendMessage = async (e: FormEvent) => {
    e.preventDefault();

    if (textToSend.trim().length === 0) {
      return;
    }

    setTextToSend('');

    try {
      await addDoc(collection(firestoreDB, 'messages', chatId, 'chat'), {
        text: textToSend,
        from: currentUserId,
        to: otherUserId,
        createdAt: Timestamp.fromDate(new Date()),
      });
    } catch (error: any) {
      console.log(error.message);
    }
  };

  return { textToSend, onSendMessage };
};

export default useSendMessages;
