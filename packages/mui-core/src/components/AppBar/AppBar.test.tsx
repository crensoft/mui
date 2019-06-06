import React from 'react';
import { cleanup } from 'react-testing-library';
import { expectRender } from '@crensoft/test-utils';
import AppBar from './AppBar';
import Theme from '../Theme/Theme';

afterEach(cleanup);

test('should render AppBar', () => {
  expectRender(
    <Theme>
      <AppBar />
    </Theme>,
  );
});
