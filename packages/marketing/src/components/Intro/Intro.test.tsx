import React from 'react';
import { cleanup, render } from 'react-testing-library';
import Intro from './Intro';

afterEach(cleanup);

test('should render Intro', () => {
  const { getByText } = render(<Intro title="My Title" />);
  expect(getByText('My Title')).not.toBeNull();
});
