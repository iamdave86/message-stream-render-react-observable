import { RootState } from 'app/store';
import { fireEvent, render, screen } from 'app/test.utils';
import Controls from '../Controls';

describe('Controls', () => {
  test('renders component', () => {
    const view = render(<Controls />);
    expect(view).toBeTruthy();
  });

  describe('STOP button', () => {
    test("renders STOP button due to controls' isPlaying property is true by default", () => {
      const view = render(<Controls />);
      expect(view).toBeTruthy();
      expect(screen.getAllByRole('button')[0]).toHaveTextContent('STOP');
    });

    test('change STOP button to PLAY once clicked', () => {
      const view = render(<Controls />);
      expect(view).toBeTruthy();

      fireEvent.click(screen.getByText(/STOP/i));
      expect(screen.getAllByRole('button')[0]).toHaveTextContent('PLAY');
    });
  });

  describe('PLAY button', () => {
    const preloadedState: Partial<RootState> = { controls: { isPlaying: false } };

    test('renders Play button if isPlaying is set to false in store', () => {
      const view = render(<Controls />, { preloadedState });
      expect(view).toBeTruthy();
      expect(screen.getAllByRole('button')[0]).toHaveTextContent('PLAY');
    });

    test('change PLAY button to STOP once clicked', () => {
      const view = render(<Controls />, { preloadedState });
      expect(view).toBeTruthy();

      fireEvent.click(screen.getByText(/PLAY/i));
      expect(screen.getAllByRole('button')[0]).toHaveTextContent('STOP');
    });
  });

  test('renders Clear button', () => {
    const view = render(<Controls />);
    expect(view).toBeTruthy();
    expect(screen.getAllByRole('button')[1]).toHaveTextContent('CLEAR ALL');
  });
});
