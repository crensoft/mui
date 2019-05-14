import React, { ReactNode } from 'react';
import { createStyles, Row, Col } from '@crensoft/mui-core';

const useStyles = createStyles(theme => ({
  Highlight: () => ({
    textAlign: 'left',
  }),
}));

type Props = {
  children?: ReactNode;
  illustration?: any;
};

export default function Highlight({ children }: Props) {
  const classes = useStyles();

  const contentItems = [
    <Col key="main" xs={12} sm={6}>
      {children}
    </Col>,
  ];

  return <Row className={classes.Highlight}>{contentItems}</Row>;
}
