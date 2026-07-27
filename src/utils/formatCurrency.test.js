import { describe, it, expect } from 'vitest';
import { formatCurrency } from './formatCurrency';

describe('formatCurrency utility', () => {
  it('formats numeric amounts as USD currency by default', () => {
    const result = formatCurrency(49.99);
    expect(result).toBe('$49.99');
  });

  it('formats zero correctly', () => {
    const result = formatCurrency(0);
    expect(result).toBe('$0.00');
  });

  it('formats large values with commas', () => {
    const result = formatCurrency(1299.5);
    expect(result).toBe('$1,299.50');
  });

  it('handles custom currency code if provided', () => {
    const result = formatCurrency(100, 'EUR', 'de-DE');
    // NBSP or regular space depending on Intl formatting
    expect(result).toMatch(/100,00\s?€/);
  });
});
