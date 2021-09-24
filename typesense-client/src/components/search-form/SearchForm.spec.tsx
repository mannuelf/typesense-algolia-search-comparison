import { render, screen } from '@testing-library/react';
import SearchForm from './SearchForm';

describe('Search form renders', () => {
  it('renders to screen', () => {
    render(<SearchForm />);
    expect(screen.getByLabelText(/Search news/i)).toBeInTheDocument();
  });
});
