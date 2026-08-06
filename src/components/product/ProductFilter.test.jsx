import { render, screen, fireEvent } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import { ProductFilter } from './ProductFilter';
import { FilterProvider } from '../../context/FilterContext';

const renderWithProvider = (ui) => {
  return render(<FilterProvider>{ui}</FilterProvider>);
};

describe('ProductFilter Component', () => {
  it('renders category options and filter headers', () => {
    renderWithProvider(<ProductFilter />);
    expect(screen.getByText('All Products')).toBeInTheDocument();
    expect(screen.getByText('Sort Products')).toBeInTheDocument();
    expect(screen.getByText('Minimum Rating')).toBeInTheDocument();
  });

  it('allows clicking category filters', () => {
    renderWithProvider(<ProductFilter />);
    const electronicsBtn = screen.getByText(/Electronics/i);
    expect(electronicsBtn).toBeInTheDocument();
    fireEvent.click(electronicsBtn);
  });
});
