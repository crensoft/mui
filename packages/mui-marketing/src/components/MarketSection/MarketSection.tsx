import React, { ReactNode } from 'react';
import { useTheme } from '@material-ui/styles';
import { Container, createStyles } from '@crensoft/mui-core';
import { ContainerProps } from '@crensoft/mui-core/lib/components/Layout/Container';
import { AppTheme } from '@crensoft/mui-core/lib/components/Theme/muiTheme';
import clsx from 'clsx';
import Intro, { IntroProps } from '../Intro/Intro';

const useStyles = createStyles(
  theme => ({
    root: {},
    whitespace: {
      padding: `${theme.spacing(10)}px ${theme.spacing(5)}px`,
    },
    whitespaceLg: {
      padding: `${theme.spacing(15)}px ${theme.spacing(5)}px`,
    },
    whitespaceSm: {
      padding: `${theme.spacing(5)}px ${theme.spacing(5)}px`,
    },
    whitespaceXs: {
      padding: `${theme.spacing(2.5)}px ${theme.spacing(5)}px`,
    },
  }),
  {
    name: 'MuiMarket',
  },
);

export interface MarketSectionProps extends ContainerProps {
  children?: ReactNode;
  className?: string;
  intro?: IntroProps;
  /** adds padding */
  whitespace?: boolean;
  whitespaceSm?: boolean;
  whitespaceXs?: boolean;
  bgColor?: string;
}

export default function MarketSection({
  children,
  bgColor,
  intro,
  whitespace,
  whitespaceSm,
  whitespaceXs,
  maxWidth,
}: MarketSectionProps) {
  let content = children;
  const spacing = whitespace ? 5 : 0;
  const theme = useTheme<AppTheme>();
  const classes = useStyles({ spacing, bgColor });
  if (intro) {
    content = (
      <Intro main {...intro}>
        {content}
      </Intro>
    );
  }

  const style: any = {};
  if (bgColor) {
    style.backgroundColor = theme.palette.getColor(bgColor as any);
  }

  const className = clsx(
    classes.root,
    whitespace && classes.whitespace,
    whitespaceSm && classes.whitespaceSm,
    whitespaceXs && classes.whitespaceXs,
  );
  return (
    <section style={style} className={className}>
      <Container maxWidth={maxWidth} center>
        {content}
      </Container>
    </section>
  );
}
