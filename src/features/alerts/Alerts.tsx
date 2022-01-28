import { useEffect, useState } from 'react';
import Alert from '@mui/material/Alert';
import Slide, { SlideProps } from '@mui/material/Slide';
import Snackbar from '@mui/material/Snackbar';

import useAppSelector from 'common/hooks/useAppSelector';
import useAppDispatch from 'common/hooks/useAppDispatcher';
import { AlertItemType, alertsSelector, clearAlert } from './alertsSlice';

const AUTO_HIDE_SNACKBAR_DURATION_IN_MS = 2000;
const vertical = 'top';
const horizontal = 'right';
const transition = (props: SlideProps) => <Slide {...props} direction="down" />;

const Alerts = () => {
  const dispatch = useAppDispatch();
  const alerts = useAppSelector(alertsSelector);
  const [open, setOpen] = useState(false);
  const [alert, setAlert] = useState<AlertItemType | undefined>(undefined);

  useEffect(() => {
    if (alerts.length && !alert) {
      const newAlert = alerts[0];
      setAlert({ ...newAlert });
      dispatch(clearAlert(newAlert.id));
      setOpen(true);
    } else if (alerts.length && alert && open) {
      setOpen(false);
    }
  }, [alerts, alert, open, dispatch]);

  const handleClose = (event: React.SyntheticEvent | Event, reason?: string) => {
    if (reason === 'clickaway') {
      return;
    }
    setOpen(false);
  };

  const handleExited = () => {
    setAlert(undefined);
  };

  return (
    <Snackbar
      key={alert ? alert.id : undefined}
      open={open}
      autoHideDuration={AUTO_HIDE_SNACKBAR_DURATION_IN_MS}
      anchorOrigin={{ vertical, horizontal }}
      TransitionComponent={transition}
      onClose={handleClose}
      TransitionProps={{ onExited: handleExited }}
    >
      <Alert onClose={handleClose} severity="error">
        {alert?.message}
      </Alert>
    </Snackbar>
  );
};

export default Alerts;
