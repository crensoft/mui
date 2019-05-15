import React, { ReactNode } from 'react';
import { createStyles, Row, Col, Img } from '@crensoft/mui-core';
import MarketSection, { MarketSectionProps } from '../MarketSection/MarketSection';

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

export type HighlightProps = {
  children?: ReactNode;
  illustration?: any;
  centerItems?: boolean;
  flip?: boolean;
  custom?: any;
} & MarketSectionProps;

export default function Highlight({ children, centerItems, flip, custom = {} }: HighlightProps) {
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
    <MarketSection className={classes.Highlight}>
      <Row className={`${custom.HighlightContent}`}>{contentItems}</Row>
    </MarketSection>
  );
}
