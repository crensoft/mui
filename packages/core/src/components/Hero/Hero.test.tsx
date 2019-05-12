import React from 'react';
import { cleanup } from 'react-testing-library';
import { expectRender } from '@crensoft/test-utils';
import Hero from './Hero';
import FrameWrapper from '../Styleguide/FrameWrapper';

afterEach(cleanup);

test('should render Hero', () => {
  expectRender(
    <FrameWrapper>
      <Hero />
    </FrameWrapper>,
  );
});
