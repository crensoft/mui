import React, { ReactNode } from 'react';
import { Typography, makeStyles } from '@material-ui/core';
import { AppTheme } from '@crensoft/mui-core/lib/components/Theme/muiTheme';
import MarketingSection from '../MarketingSection/MarketingSection';

const useStyles = makeStyles<AppTheme>({
  MrktIntro: {
    textAlign: 'center',
  },
});

type Props = {
  title?: string;
  body?: ReactNode;
  children?: ReactNode;
};

export default function Intro({ title, children }: Props) {
  const textAlign = 'center';
  const classes = useStyles();

  const renderTitle = () =>
    title && (
      <Typography align={textAlign} variant="h2">
        {title}
      </Typography>
    );

  return (
    <MarketingSection className={classes.MrktIntro}>
      {renderTitle()}
      {children}
    </MarketingSection>
  );
}
