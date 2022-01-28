import { fireEvent, render, screen, waitFor } from 'app/test.utils';
import { RootState } from 'app/store';
import Alerts from '../Alerts';

const mockAlert = { id: 'id1', message: 'this is an alert' };

describe('Alerts', () => {
  const preloadedState: Partial<RootState> = { alerts: [mockAlert] };

  test('renders component without any snackbar', () => {
    const view = render(<Alerts />);
    expect(view).toBeTruthy();
    expect(screen.queryByRole('alert')).not.toBeInTheDocument();
  });

  test('renders alert in snackbar', () => {
    const view = render(<Alerts />, { preloadedState });
    expect(view).toBeTruthy();
    expect(screen.getByRole('alert')).toBeInTheDocument();
    expect(screen.getByText('this is an alert')).toBeInTheDocument();
    expect(screen.getByLabelText('Close')).toBeInTheDocument();
  });

  test('removes alert after clicking on Close button', async () => {
    const view = render(<Alerts />, { preloadedState });
    expect(view).toBeTruthy();

    fireEvent.click(screen.getByRole('button'));
    await waitFor(() => expect(screen.queryByRole('alert')).not.toBeInTheDocument());
  });
});
