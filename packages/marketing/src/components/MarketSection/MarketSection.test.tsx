import React from 'react';
import { cleanup } from 'react-testing-library';
import MarketingSection from './MarketSection';
import { expectRender } from '@crensoft/test-utils';

afterEach(cleanup);

test('should render MarketingSection', () => {
  expectRender(<MarketingSection>Test</MarketingSection>);
});