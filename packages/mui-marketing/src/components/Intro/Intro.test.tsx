import React from 'react';
import { cleanup, render } from 'react-testing-library';
import Intro from './Intro';
import { Theme } from '@crensoft/mui-core';

afterEach(cleanup);

const sample: any = {
  label: 'Some label',
  title: 'My Title',
  body: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, \
sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. \
Nullam ac tortor vitae purus faucibus.`,
  actions: [
    {
      type: 'arrow-link',
      content: 'Learn more',
      url: '#',
    },
  ],
};

test('should render', () => {
  const { getByText } = render(
    <Theme>
      <Intro {...sample} />
    </Theme>,
  );

  ['label', 'title', 'body'].map(field => {
    expect(getByText(sample[field])).not.toBeNull();
  });
});
