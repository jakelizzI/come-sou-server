import React from 'react';
import { render } from '@testing-library/react';
import ComesouView from './ComesouView';

test('renders learn react link', () => {
  const { getByText } = render(<ComesouView />);
  const linkElement = getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
