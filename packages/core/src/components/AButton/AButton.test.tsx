import React from 'react';
import { render, fireEvent, cleanup } from 'react-testing-library';
import AButton from './AButton';

afterEach(cleanup);

// test button
test('should render button', () => {
  const onClick = jest.fn();
  const name = 'tester';
  const comp = render(<AButton onClick={onClick} name={name} />);
  fireEvent.click(comp.getByText(`Click me: ${name}`));
  expect(onClick).toHaveBeenCalled();
});
