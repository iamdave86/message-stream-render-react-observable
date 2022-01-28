import styled from '@emotion/styled';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Paper from '@mui/material/Paper';

import { Message, Priority } from 'app/Api';
import useAppDispatch from 'common/hooks/useAppDispatcher';
import { clearMessage } from './messagesSlice';

interface Props {
  message: Message;
}

const boxColorMap = {
  [Priority.Error]: '#F56236',
  [Priority.Info]: '#88FCA3',
  [Priority.Warn]: '#FCE788',
};

const ColoredButton = styled(Button)(() => ({
  'background': 'transaparent',
  'color': 'black',
  'textTransform': 'none',
  'margin': '0 4px 4px',
  '&:hover': {
    backgroundColor: '#bfbfbf',
  },
}));
const Item = styled(Paper)(({ priority }: { priority: Priority }) => ({
  background: boxColorMap[priority],
}));

const MessageItem = ({ message }: Props) => {
  const dispatch = useAppDispatch();
  const handleClickClear = () => dispatch(clearMessage(message.id));

  return (
    <Box
      sx={{
        p: 1,
      }}
    >
      <Item
        role="widget"
        priority={message.priority}
        style={{ background: boxColorMap[message.priority], display: 'flex', flexDirection: 'column' }}
      >
        <div style={{ padding: '12px' }}>{message.message}</div>
        <ColoredButton sx={{ alignSelf: 'flex-end' }} onClick={handleClickClear}>
          Clear
        </ColoredButton>
      </Item>
    </Box>
  );
};

export default MessageItem;
