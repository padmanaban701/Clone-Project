import { render, screen, fireEvent } from '@testing-library/react';
import { describe, it, expect, vi } from 'vitest';
import { RemoveConfirmationModal } from './RemoveConfirmationModal';

describe('RemoveConfirmationModal Component', () => {
  it('does not render dialog content when isOpen is false', () => {
    render(
      <RemoveConfirmationModal
        isOpen={false}
        onClose={vi.fn()}
        onConfirm={vi.fn()}
        itemName="Wireless Earbuds"
      />
    );

    expect(screen.queryByText('Remove Item')).not.toBeInTheDocument();
  });

  it('renders modal title and item name when isOpen is true', () => {
    render(
      <RemoveConfirmationModal
        isOpen={true}
        onClose={vi.fn()}
        onConfirm={vi.fn()}
        itemName="Wireless Earbuds"
      />
    );

    expect(screen.getByText('Remove Item')).toBeInTheDocument();
    expect(screen.getByText('"Wireless Earbuds"')).toBeInTheDocument();
  });

  it('calls onConfirm when Remove button is clicked', () => {
    const handleConfirm = vi.fn();
    const handleClose = vi.fn();

    render(
      <RemoveConfirmationModal
        isOpen={true}
        onClose={handleClose}
        onConfirm={handleConfirm}
        itemName="Wireless Earbuds"
      />
    );

    const removeBtn = screen.getByRole('button', { name: /remove/i });
    fireEvent.click(removeBtn);

    expect(handleConfirm).toHaveBeenCalledTimes(1);
    expect(handleClose).toHaveBeenCalledTimes(1);
  });
});
