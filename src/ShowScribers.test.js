import { render, screen } from '@testing-library/react';
import ShowScribers from './ShowScribers';

test('renders learn react link', () => {
  render(<ShowScribers />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
