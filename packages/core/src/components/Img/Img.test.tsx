import React from 'react';
import { cleanup, render } from 'react-testing-library';
import { expectRenderThrow } from '@crensoft/test-utils';
import Image from './Image';

afterEach(cleanup);

const ALT_TEXT = 'Test image';
const IMG_URL = 'test.png';

test('should render Image', () => {
  const { getByAltText } = render(<Image src={IMG_URL} alt={ALT_TEXT} />);
  const img = getByAltText(ALT_TEXT);

  expect(img.getAttribute('src')).toEqual(IMG_URL);
  expect(img.nodeName).toEqual('IMG');
});

test('should throw error', () => {
  expectRenderThrow(<Image src={IMG_URL} alt="" />);
});
