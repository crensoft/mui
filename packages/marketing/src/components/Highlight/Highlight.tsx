import React, { ReactNode } from 'react';
import { createStyles, Row, Col, Container, Img } from '@crensoft/mui-core';

const useStyles = createStyles(theme => ({
  Highlight: () => ({
    textAlign: 'left',
  }),
  HighlightMain: ({ centerItems }) => {
    const styles: any = {};
    if (centerItems) {
      styles.display = 'flex';
      styles.alignItems = 'center';
    }
    return styles;
  },
}));

type Props = {
  children?: ReactNode;
  illustration?: any;
  centerItems?: boolean;
  flip?: boolean;
};

export default function Highlight({ children, centerItems, flip }: Props) {
  const classes = useStyles({ centerItems });

  const contentItems = [
    <Col className={classes.HighlightMain} key="main" xs={12} sm={6}>
      {children}
    </Col>,
  ];

  contentItems.push(
    <Col key="visual" xs={12} sm={6}>
      <Img responsive alt="visuals" src="/illustrations/undraw_wordpress.svg" />
    </Col>,
  );

  if (flip) {
    contentItems.reverse();
  }
  return (
    <section className={classes.Highlight}>
      <Container>
        <Row className={classes.Highlight}>{contentItems}</Row>
      </Container>
    </section>
  );
}
