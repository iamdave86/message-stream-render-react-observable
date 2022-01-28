import { render } from 'app/test.utils';
import App from '../App';

describe('App', () => {
  test('renders component', () => {
    const view = render(<App />);
    expect(view).toBeTruthy();
  });
});
