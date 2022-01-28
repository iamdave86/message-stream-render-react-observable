import Container from '@mui/material/Container';
import CssBaseline from '@mui/material/CssBaseline';

import Alerts from 'features/alerts/Alerts';
import { Header } from 'app/components/Header';
import Messages from 'features/messages/Messages';
import Controls from 'features/controls/Controls';

const App = () => (
  <Container maxWidth={false}>
    <CssBaseline />
    <Alerts />
    <Header />
    <Controls />
    <Messages />
  </Container>
);

export default App;
