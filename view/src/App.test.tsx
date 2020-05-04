import React from 'react';
import { render } from '@testing-library/react';
import ComeSouView from './ComeSouView';

test('renders learn react link', () => {
  const { getByText } = render(<ComeSouView />);
  const linkElement = getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
