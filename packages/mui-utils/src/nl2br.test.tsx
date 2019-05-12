import React from 'react';
import nl2br from './nl2br';
import { render } from 'react-testing-library';

test('should replace newlines with <br /> tags', () => {
  const { getByTestId } = render(
    <div data-testid="test">
      {nl2br(`line 1
line 2`)}
    </div>,
  );
  expect(getByTestId('test').innerHTML).toEqual('<span>line 1<br></span><span>line 2<br></span>');
});
