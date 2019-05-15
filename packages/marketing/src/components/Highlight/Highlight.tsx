import React, { ReactNode } from 'react';
import { createStyles, Row, Col, Container, Img } from '@crensoft/mui-core';

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

  contentItems.push(
    <Col key="visual">
      <Img alt="visuals" src="/illustrations/undraw_wordpress.svg" />
    </Col>,
  );
  return (
    <section className={classes.Highlight}>
      <Container>
        <Row className={classes.Highlight}>{contentItems}</Row>
      </Container>
    </section>
  );
}
