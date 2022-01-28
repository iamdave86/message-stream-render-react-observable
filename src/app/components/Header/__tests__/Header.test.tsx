import { render, screen } from 'app/test.utils';
import Header from '../Header';

describe('App', () => {
  test('renders component with heading', () => {
    const view = render(<Header />);
    expect(view).toBeTruthy();
    expect(screen.getByRole('heading')).toHaveTextContent('Message stream render with React and Observable');
  });
});
