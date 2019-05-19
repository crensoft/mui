import React, { ReactNode } from 'react';
import { Container, createStyles } from '@crensoft/mui-core';
import Intro, { IntroProps } from '../Intro/Intro';
import { ContainerProps } from '@crensoft/mui-core/src/components/Layout/Container';

const useStyles = createStyles(theme => ({
  MarketSection: ({ spacing = 5, bgColor, bgImage }) => {
    const styles: any = {
      padding: `${theme.spacing(spacing)}px`,
    };
    if (bgColor) {
      styles.backgroundColor = theme.palette.getColor(bgColor);
    }
    return styles;
  },
}));

export interface MarketSectionProps extends ContainerProps {
  children?: ReactNode;
  className?: string;
  intro?: IntroProps;
  /** adds padding */
  whitespace?: boolean;
  bgColor?: string;
}

export default function MarketSection({
  children,
  bgColor,
  intro,
  whitespace,
  maxWidth,
}: MarketSectionProps) {
  let content = children;
  const spacing = whitespace ? 5 : 0;
  const classes = useStyles({ spacing, bgColor });
  if (intro) {
    content = (
      <Intro main {...intro}>
        {content}
      </Intro>
    );
  }

  return (
    <section className={classes.MarketSection}>
      <Container maxWidth={maxWidth} center>
        {content}
      </Container>
    </section>
  );
}
