import React from 'react';
import Svg from 'react-svg';
import createStyles from '../Theme/createStyles';

const useStyles = createStyles(
  theme => ({
    image: ({ responsive }: Partial<ImageProps>) => {
      if (responsive) {
        return { maxWidth: '100%', height: 'auto' };
      }
      return {};
    },
    svg: () => ({
      flexGrow: 1,
      '& svg': {
        maxWidth: '100%',
        height: 'auto',
        // prevent extra whitespace
        display: 'block',
      },
    }),
  }),
  {
    name: 'Mui2Img',
  },
);

export interface ImageProps {
  src?: string;
  alt?: string;
  svg?: React.ReactNode;
  responsive?: boolean;
}

export default function Image({ src, svg, alt, responsive }: ImageProps) {
  if (!alt) {
    throw new Error('Alt text required');
  }
  const classes = useStyles({ responsive });

  let html = null;
  if (src && /\.svg$/.test(src)) {
    html = <Svg className={classes.svg} src={src} />;
  } else if (svg) {
    html = <div className={classes.svg}>{svg}</div>;
  } else {
    html = <img className={classes.image} src={src} alt={alt} />;
  }
  return html;
}
