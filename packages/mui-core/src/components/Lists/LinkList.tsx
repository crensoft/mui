import React, { ReactNode } from 'react';
import { renderMap } from '@crensoft/mui-utils';
import { Row, Col } from '../Layout';
import createStyles from '../Theme/createStyles';
import Link from '../Actions/components/ActionLink';

const useStyles = createStyles(
  theme => ({
    root: {},
    item: {
      '& + &': {
        marginTop: theme.spacing(0.9),
      },
    },
  }),
  {
    name: 'MuiLinkList',
  },
);

type LinkListItem = { to: string; content: ReactNode };
type LinkListProps = {
  links: LinkListItem[];
};

export default function LinkList({ links }: LinkListProps) {
  const classes = useStyles();

  const renderLinks = renderMap<LinkListItem>(({ to, content }) => (
    <Col key={to}>
      <Link to={to}>{content}</Link>
    </Col>
  ));
  return (
    <Row className={classes.item} spacing={1}>
      {renderLinks(links)}
    </Row>
  );
}
