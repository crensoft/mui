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
      // prevent extra whitespace
      display: 'block',
      '& svg': {
        maxWidth: '100%',
        height: 'auto',
      },
    }),
  }),
  {
    name: 'Mui2Img',
  },
);

export interface ImageProps {
  src: string;
  alt: string;
  responsive?: boolean;
}

export default function Image({ src, alt, responsive }: ImageProps) {
  if (!alt) {
    throw new Error('Alt text required');
  }
  const classes = useStyles({ responsive });

  let html = null;
  if (/\.svg$/.test(src)) {
    html = <Svg className={classes.svg} src={src} />;
  } else {
    html = <img className={classes.image} src={src} alt={alt} />;
  }
  return html;
}
