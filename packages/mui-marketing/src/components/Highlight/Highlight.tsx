import React, { ReactNode } from 'react';
import { createStyles, Row, Col, Img } from '@crensoft/mui-core';
import clsx from 'clsx';
import { useMobile } from '@crensoft/mui-core/lib/hooks';
import MarketSection, { MarketSectionProps } from '../MarketSection/MarketSection';

const useStyles = createStyles(
  theme => ({
    root: {
      textAlign: 'left',
      '& + &': {
        marginTop: theme.spacing(6.9),
      },
    },
    main: ({ centerItems }) => {
      const styles: any = {};
      if (centerItems) {
        styles.display = 'flex';
        styles.alignItems = 'center';
      }
      return styles;
    },
  }),
  {
    name: 'MuiHighlight',
  },
);

export type HighlightProps = {
  children?: ReactNode;
  illustration?: any;
  centerItems?: boolean;
  flip?: boolean;
  custom?: any;
  graphicBottom?: boolean;
} & MarketSectionProps;

export default function Highlight({
  children,
  centerItems,
  flip,
  custom = {},
  illustration,
  graphicBottom,
  className,
  ...props
}: HighlightProps) {
  const classes = useStyles({ centerItems });
  const isMobile = useMobile();

  const contentItems = [
    <Col className={classes.main} key="main" xs={12} sm={6}>
      {children}
    </Col>,
  ];

  contentItems.push(
    <Col key="visual" xs={12} sm={6}>
      <Img responsive alt="visuals" svg={illustration} />
    </Col>,
  );

  if (flip || (isMobile && !graphicBottom)) {
    contentItems.reverse();
  }
  const cl = clsx(classes.root, className);
  return (
    <MarketSection {...props} className={cl}>
      <Row className={`${custom.HighlightContent}`}>{contentItems}</Row>
    </MarketSection>
  );
}
