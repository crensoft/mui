import React from 'react';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faLongArrowAltRight } from '@fortawesome/free-solid-svg-icons';
import { Row } from '../Layout';
import { renderMap } from '@crensoft/mui-utils';
import Link from './Link';
import { contains } from 'ramda';

library.add(faLongArrowAltRight);

export interface Action {
  url?: string;
  onAction: Function;
  content: React.ReactNode;
  tags: string[];
}

export type ActionGroupProps = {
  guide?: boolean;
  children?: React.ReactNode;
  actions?: Action[];
};

export default function ActionGroup({ children, actions }: ActionGroupProps) {
  if (!actions) {
    throw new Error('Actions required');
  }
  const renderActions = renderMap(({ url, tags = [], ...action }) => {
    const opts: any = {};
    if (contains('guide', tags)) {
      opts.guide = true;
    }
    return <Link key={url} to={url} {...action} {...opts} />;
  });
  return <Row>{renderActions(actions)}</Row>;
}
