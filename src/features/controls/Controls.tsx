import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';
import { styled } from '@mui/material/styles';

import useAppDispatch from 'common/hooks/useAppDispatcher';
import useAppSelector from 'common/hooks/useAppSelector';
import { clearAllMessages } from 'features/messages/messagesSlice';
import { isControlPlayingSelector, togglePlay } from './controlsSlice';

const ColoredButton = styled(Button)(() => ({
  'background': '#88FCA3',
  'color': 'black',
  '&:hover': {
    backgroundColor: '#40D160',
  },
}));

const Controls = () => {
  const dispatch = useAppDispatch();
  const handleClickPlayStop = () => dispatch(togglePlay());
  const handleClickClear = () => dispatch(clearAllMessages());
  const isControlPlaying = useAppSelector(isControlPlayingSelector);

  return (
    <Grid container justifyContent="center" sx={{ flexGrow: 1, marginBottom: '50px' }}>
      <Grid item>
        <ColoredButton variant="contained" sx={{ marginRight: '5px' }} onClick={handleClickPlayStop}>
          {isControlPlaying ? 'STOP' : 'PLAY'}
        </ColoredButton>
      </Grid>
      <Grid item>
        <ColoredButton variant="contained" onClick={handleClickClear}>
          CLEAR ALL
        </ColoredButton>
      </Grid>
    </Grid>
  );
};

export default Controls;
