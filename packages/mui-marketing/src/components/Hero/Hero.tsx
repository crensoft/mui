import React from 'react';
import Highlight, { HighlightProps } from '../Highlight/Highlight';
import PainPoint, { PainPointProps } from '../PainPoint/PainPoint';
import { createStyles } from '@crensoft/mui-core';

const useStyles = createStyles(theme => ({
  HighlightContent: {
    minHeight: `calc(66vh + ${theme.topbar.height()}px)`,
    alignItems: 'center',
  },
}));

interface HeroProps extends PainPointProps, HighlightProps {
  title: PainPointProps['title'];
}

export default function Hero({
  whitespace,
  centerItems,
  center,
  illustration,
  ...props
}: HeroProps) {
  const classes = useStyles();
  return (
    <Highlight
      custom={classes}
      whitespace={whitespace}
      illustration={illustration}
      centerItems={centerItems}
      graphicBottom
    >
      <PainPoint h1 center={center} {...props} />
    </Highlight>
  );
}
