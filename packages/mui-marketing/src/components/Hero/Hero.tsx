import React from 'react';
import { createStyles } from '@crensoft/mui-core';
import { useMobile } from '@crensoft/mui-core/lib/hooks';
import Highlight, { HighlightProps } from '../Highlight/Highlight';
import PainPoint, { PainPointProps } from '../PainPoint/PainPoint';

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
  img,
  picture,
  id,
  ...props
}: HeroProps) {
  const isMobile = useMobile();
  const classes = useStyles();
  return (
    <Highlight
      custom={classes}
      whitespace={whitespace}
      illustration={illustration}
      img={img}
      picture={picture}
      id={id}
      centerItems={centerItems}
      graphicBottom
    >
      <PainPoint h1 center={isMobile || center} {...props} />
    </Highlight>
  );
}
