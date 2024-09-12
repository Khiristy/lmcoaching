import { render, screen } from '@testing-library/react';
import LoaderWrapper from '../../features/Shared/Loader/MainLoader/LoaderWrapper';
import useLoader from '../Hooks/Loader/useLoader'; // Mock le hook

jest.mock('./hooks/useLoader');

test('affiche le loader si isLoading est true', () => {
  // Mock useLoader pour renvoyer isLoading true
  useLoader.mockReturnValue({ isLoading: true, isPageLoaded: false });

  render(<LoaderWrapper />);

  // Vérifie que le texte du loader est affiché
  expect(screen.getByText('Mon Site')).toBeInTheDocument();
});

test('affiche Home si isLoading est false', () => {
  // Mock useLoader pour renvoyer isLoading false
  useLoader.mockReturnValue({ isLoading: false, isPageLoaded: true });

  render(<LoaderWrapper />);

  // Vérifie que Home est affiché (tu peux personnaliser ici)
  expect(screen.getByText('Other components')).toBeInTheDocument();
});
