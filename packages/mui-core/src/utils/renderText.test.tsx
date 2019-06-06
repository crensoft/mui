import React from 'react';
import { cleanup, render } from 'react-testing-library';
import renderText from './renderText';

afterEach(cleanup);

test('should render', () => {
  const myText = 'My test text';
  const { getByText } = render(<div>{renderText({ variant: 'body1' }, myText)}</div>);

  const ele = getByText(myText);
  expect(ele.nodeName).toEqual('SPAN');
});
