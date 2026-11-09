import { describe, expect, test } from '@jest/globals';
import { fireEvent, render, screen } from '@testing-library/react';
import App from './App';

describe('Counter app', () => {
  test('starts at 0 and shows all three buttons', () => {
    render(<App />);
    expect(screen.getByRole('heading', { name: 'Count: 0' })).toBeTruthy();
    expect(screen.getByRole('button', { name: 'Increment' })).toBeTruthy();
    expect(screen.getByRole('button', { name: 'Decrement' })).toBeTruthy();
    expect(screen.getByRole('button', { name: 'Reset' })).toBeTruthy();
  });

  test('increment changes 0 to 1', () => {
    render(<App />);
    fireEvent.click(screen.getByRole('button', { name: 'Increment' }));
    expect(screen.getByRole('heading', { name: 'Count: 1' })).toBeTruthy();
  });

  test('decrement changes 0 to -1', () => {
    render(<App />);
    fireEvent.click(screen.getByRole('button', { name: 'Decrement' }));
    expect(screen.getByRole('heading', { name: 'Count: -1' })).toBeTruthy();
  });

  test('reset changes a nonzero count back to 0', () => {
    render(<App />);
    fireEvent.click(screen.getByRole('button', { name: 'Increment' }));
    expect(screen.getByRole('heading', { name: 'Count: 1' })).toBeTruthy();
    fireEvent.click(screen.getByRole('button', { name: 'Reset' }));
    expect(screen.getByRole('heading', { name: 'Count: 0' })).toBeTruthy();
  });

  test('handles several button clicks in order', () => {
    render(<App />);
    const increment = screen.getByRole('button', { name: 'Increment' });
    const decrement = screen.getByRole('button', { name: 'Decrement' });
    const reset = screen.getByRole('button', { name: 'Reset' });
    fireEvent.click(increment);
    fireEvent.click(increment);
    expect(screen.getByRole('heading', { name: 'Count: 2' })).toBeTruthy();
    fireEvent.click(decrement);
    expect(screen.getByRole('heading', { name: 'Count: 1' })).toBeTruthy();
    fireEvent.click(reset);
    expect(screen.getByRole('heading', { name: 'Count: 0' })).toBeTruthy();
    fireEvent.click(decrement);
    expect(screen.getByRole('heading', { name: 'Count: -1' })).toBeTruthy();
  });
});
