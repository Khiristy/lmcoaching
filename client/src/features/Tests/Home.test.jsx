import { render, screen } from '@testing-library/react';
import Home from '../../pages/Home';

test('ne démarre pas l’animation si isLoading est true', () => {
  render(<Home isLoading={true} />);

  // Vérifie que l'animation n'a pas commencé
  expect(screen.queryByText('Other components')).not.toBeInTheDocument();
});

test('démarre l’animation si isLoading est false', () => {
  render(<Home isLoading={false} />);

  // Vérifie que l'animation démarre après 5 secondes
  setTimeout(() => {
    expect(screen.getByText('Other components')).toBeInTheDocument();
  }, 5000);
});
