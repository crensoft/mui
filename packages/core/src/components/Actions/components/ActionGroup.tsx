import React from 'react';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faLongArrowAltRight } from '@fortawesome/free-solid-svg-icons';
import { renderMap } from '@crensoft/mui-utils';
import { contains } from 'ramda';
import { Row } from '../../Layout';
import ActionLink, { ActionLinkProps } from './ActionLink';

library.add(faLongArrowAltRight);

export type ActionGroupProps = {
  guide?: boolean;
  children?: React.ReactNode;
  actions?: ActionLinkProps[];
  center?: boolean;
};

export default function ActionGroup({ children, actions, center }: ActionGroupProps) {
  if (!actions) {
    throw new Error('Actions required');
  }
  const renderActions = renderMap(({ url, tags = [], ...action }) => {
    const opts: any = {};
    if (contains('guide', tags)) {
      opts.guide = true;
    }
    return <ActionLink key={url} to={url} {...action} {...opts} />;
  });
  return <Row justify={center ? 'center' : 'flex-start'}>{renderActions(actions)}</Row>;
}
