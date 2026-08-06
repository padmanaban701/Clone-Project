import { describe, it, expect } from 'vitest';
import { formatCurrency } from './formatCurrency';

describe('formatCurrency utility', () => {
  it('formats numeric amounts as Indian Rupees (INR) by default', () => {
    const result = formatCurrency(132900);
    expect(result).toMatch(/₹\s?1,32,900/);
  });

  it('formats zero correctly', () => {
    const result = formatCurrency(0);
    expect(result).toMatch(/₹\s?0/);
  });

  it('formats large values with Indian numbering commas', () => {
    const result = formatCurrency(14999);
    expect(result).toMatch(/₹\s?14,999/);
  });

  it('handles custom currency code if provided', () => {
    const result = formatCurrency(100, 'EUR', 'de-DE');
    expect(result).toMatch(/100\s?€/);
  });
});
