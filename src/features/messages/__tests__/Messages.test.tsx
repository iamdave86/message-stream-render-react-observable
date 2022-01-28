import { fireEvent, render, screen } from 'app/test.utils';
import { Priority } from 'app/Api';
import Messages from '../Messages';
import { RootState } from 'app/store';

jest.mock('app/Api');

const mockMessages = [
  {
    id: '1',
    message: 'this is a message 1',
    priority: Priority.Info,
  },
  {
    id: '2',
    message: 'this is a message 2',
    priority: Priority.Info,
  },
  {
    id: '3',
    message: 'this is a message 3',
    priority: Priority.Warn,
  },
  {
    id: '4',
    message: 'this is a message 4',
    priority: Priority.Info,
  },
  {
    id: '5',
    message: 'this is a message 5',
    priority: Priority.Error,
  },
  {
    id: '6',
    message: 'this is a message 6',
    priority: Priority.Error,
  },
];

describe('Messages', () => {
  const preloadedState: Partial<RootState> = { messages: mockMessages };

  test('renders component without messages', () => {
    const view = render(<Messages />);
    expect(view).toBeTruthy();
    expect(screen.queryAllByRole('widget').length).toEqual(0);
  });

  test('renders component with messages', () => {
    const view = render(<Messages />, { preloadedState });
    expect(view).toBeTruthy();
    expect(screen.getAllByRole('widget').length).toEqual(6);
  });

  test('removes "message 3" after clicking on clear button', () => {
    const view = render(<Messages />, { preloadedState });
    expect(view).toBeTruthy();

    fireEvent.click(screen.getAllByText(/Clear/i)[2]);
    expect(screen.getAllByRole('widget').length).toEqual(5);
  });
});
