import { render, screen } from '@testing-library/react';
import App from './App';

test('renders show notification button', () => {
  render(<App />);
  const linkElement = screen.getByText(/GO!/i);
  expect(linkElement).toBeInTheDocument();
});
