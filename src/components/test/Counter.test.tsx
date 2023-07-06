import '@testing-library/jest-dom/extend-expect';
import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import Counter from '../Counter';

describe('Counter', () => {
  it('should increment and decrement the count correctly', () => {
    render(<Counter />);

    const countElement = screen.getByText(/Count:/i);
    expect(countElement).toHaveTextContent('Count: 0');

    const incrementButton = screen.getByText(/Increment/i);
    const decrementButton = screen.getByText(/Decrement/i);

    fireEvent.click(incrementButton);
    expect(countElement).toHaveTextContent('Count: 1');

    fireEvent.click(decrementButton);
    expect(countElement).toHaveTextContent('Count: 0');
  });
});