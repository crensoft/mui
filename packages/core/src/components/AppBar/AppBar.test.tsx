import React from 'react';
import { cleanup } from 'react-testing-library';
import { expectRender } from '@crensoft/test-utils';
import AppBar from './AppBar';
import FrameWrapper from '../Styleguide/FrameWrapper';

afterEach(cleanup);

test('should render AppBar', () => {
  expectRender(
    <FrameWrapper>
      <AppBar />
    </FrameWrapper>,
  );
});
