import React from 'react';
import { cleanup } from 'react-testing-library';
import { expectRender } from '@crensoft/test-utils';
import Header from './Header';

afterEach(cleanup);

test('should render header', () => {
  expectRender(<Header />);
});
