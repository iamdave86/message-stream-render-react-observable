import { useEffect } from 'react';
import Grid from '@mui/material/Grid';

import generateMessage, { Message, Priority } from 'app/Api';
import useAppDispatch from 'common/hooks/useAppDispatcher';
import useAppSelector from 'common/hooks/useAppSelector';
import { addMessage, errorMessagesSelector, infoMessagesSelector, warnMessagesSelector } from './messagesSlice';
import { isControlPlayingSelector } from 'features/controls/controlsSlice';
import MessageTypeColumn from './MessageTypeColumn';
import { addAlert } from 'features/alerts/alertsSlice';

interface MessageColumns {
  [key: string]: {
    title: string;
    messages: Message[];
  };
}

const messageColumns: MessageColumns = {
  [Priority.Error]: {
    title: 'Error',
    messages: [],
  },
  [Priority.Warn]: {
    title: 'Warning',
    messages: [],
  },
  [Priority.Info]: {
    title: 'Info',
    messages: [],
  },
};

const Messages = () => {
  const dispatch = useAppDispatch();
  const errorMessages = useAppSelector(errorMessagesSelector);
  const warnMessages = useAppSelector(warnMessagesSelector);
  const infoMessages = useAppSelector(infoMessagesSelector);
  const isControlPlaying = useAppSelector(isControlPlayingSelector);

  useEffect(() => {
    const stopMessages = generateMessage((message: Message) => {
      dispatch(addMessage(message));

      if (message.priority === Priority.Error) {
        dispatch(addAlert(message.message));
      }
    });

    if (!isControlPlaying) {
      stopMessages();
    }

    return stopMessages;
  }, [dispatch, isControlPlaying]);

  messageColumns[Priority.Error].messages = errorMessages;
  messageColumns[Priority.Warn].messages = warnMessages;
  messageColumns[Priority.Info].messages = infoMessages;

  return (
    <Grid container columnSpacing={2} justifyContent="center" sx={{ width: '80%', margin: '0 auto' }}>
      {Object.keys(messageColumns).map((key, index) => (
        <MessageTypeColumn key={key} title={`${messageColumns[key].title}`} messages={messageColumns[key].messages} />
      ))}
    </Grid>
  );
};

export default Messages;
