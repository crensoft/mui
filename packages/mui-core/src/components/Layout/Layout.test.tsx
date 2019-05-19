import React from 'react';
import { cleanup } from 'react-testing-library';
import { expectRender } from '@crensoft/test-utils';
import { Row, Col } from './';

afterEach(cleanup);

test('should render Layout', () => {
  expectRender(<Row />);
  expectRender(<Col />);
});
