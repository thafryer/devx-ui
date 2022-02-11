import React from 'react';
import { render, screen } from '@testing-library/react';
import { Thing } from '../src';

describe('Thing', () => {
  it('renders without crashing', () => {
    render(<Thing />);
    expect(
      screen.findByText('the snozzberries taste like snozzberries')
    ).toBeTruthy();
  });
});
