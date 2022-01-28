import Box from '@mui/material/Box';
import styled from '@emotion/styled';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';

import { Message } from 'app/Api';
import MessageItem from './MessageItem';

interface Props {
  title: string;
  messages: Message[];
}

const StyledColumHeaderBox = styled(Box)(() => ({
  padding: '0 8px',
}));
const StyledH5Typography = styled(Typography)(() => ({
  fontWeight: 'bold',
}));

const MessageTypeColumn = ({ title, messages }: Props) => (
  <Grid item xs={4}>
    <StyledColumHeaderBox>
      <StyledH5Typography variant="h5">
        {title} <small style={{ fontSize: '14px' }}>({messages.length})</small>
      </StyledH5Typography>
    </StyledColumHeaderBox>

    {messages.map((message: Message) => (
      <MessageItem key={message.id} message={message}></MessageItem>
    ))}
  </Grid>
);

export default MessageTypeColumn;
