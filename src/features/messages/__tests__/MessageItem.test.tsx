import { render, screen } from 'app/test.utils';
import { Priority } from 'app/Api';
import MessageItem from '../MessageItem';

const mockMessage = {
  id: '1',
  message: 'this is a message',
  priority: Priority.Info,
};

describe('MessageItem', () => {
  test('renders a message', () => {
    const view = render(<MessageItem message={mockMessage} />);
    expect(view).toBeTruthy();
    expect(screen.getByText('this is a message')).toBeInTheDocument();
  });

  test('renders Error message', () => {
    const view = render(<MessageItem message={{ ...mockMessage, priority: Priority.Error }} />);
    expect(view).toBeTruthy();
    expect(screen.getByRole('widget')).toHaveStyle('background: rgb(245, 98, 54)');
  });

  test('renders Warning message', () => {
    const view = render(<MessageItem message={{ ...mockMessage, priority: Priority.Warn }} />);
    expect(view).toBeTruthy();
    expect(screen.getByRole('widget')).toHaveStyle('background: rgb(252, 231, 136)');
  });

  test('renders Info message', () => {
    const view = render(<MessageItem message={mockMessage} />);
    expect(view).toBeTruthy();
    expect(screen.getByRole('widget')).toHaveStyle('background: rgb(136, 252, 163)');
  });
});
