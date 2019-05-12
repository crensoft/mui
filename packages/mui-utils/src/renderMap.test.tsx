import React, { ReactNode } from 'react';
import renderMap from './renderMap';
import { render } from 'react-testing-library';

test('should render map of components', () => {
  const renderItems = renderMap(item => {
    return (
      <li data-testid={item} key={item}>
        {item}
      </li>
    );
  });
  const items = ['Test1', 'Test2', 'Test3'];
  const { getByTestId } = render(<ul>{renderItems(items) as ReactNode}</ul>);
  items.map(item => {
    expect(getByTestId(item)).not.toBe(null);
  });
});
