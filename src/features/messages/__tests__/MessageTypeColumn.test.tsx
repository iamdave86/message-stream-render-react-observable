import { render, screen } from 'app/test.utils';
import { Priority } from 'app/Api';
import MessageTypeColumn from '../MessageTypeColumn';

const mockMessages = [
  {
    id: '1',
    message: 'message 1',
    priority: Priority.Info,
  },
  {
    id: '2',
    message: 'message 2',
    priority: Priority.Info,
  },
  {
    id: '3',
    message: 'message 3',
    priority: Priority.Info,
  },
  {
    id: '4',
    message: 'message 4',
    priority: Priority.Info,
  },
];

describe('MessageTypeColumn', () => {
  test('renders component with no messages', () => {
    const view = render(<MessageTypeColumn index={1} title="Info" messages={[]} />);
    expect(view).toBeTruthy();
    expect(screen.queryByRole('widget')).not.toBeInTheDocument();
  });

  test('renders component with messages', () => {
    const view = render(<MessageTypeColumn index={1} title="Info" messages={mockMessages} />);
    expect(view).toBeTruthy();
    expect(screen.getAllByRole('widget').length).toEqual(4);
  });
});
