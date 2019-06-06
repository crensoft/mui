import React from 'react';
import { cleanup } from 'react-testing-library';
import MarketingSection from './MarketSection';
import { expectRender } from '@crensoft/test-utils';
import { Theme } from '@crensoft/mui-core';

window.matchMedia = jest.fn().mockImplementation(query => {
  return {
    matches: false,
    media: query,
    onchange: null,
    addListener: jest.fn(),
    removeListener: jest.fn(),
  };
});

afterEach(cleanup);

test('should render MarketingSection', () => {
  expectRender(
    <Theme>
      <MarketingSection>Test</MarketingSection>
    </Theme>,
  );
});
