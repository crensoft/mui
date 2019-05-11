import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

// TESTING Aaa
const useStyles = makeStyles(
  theme => ({
    image: ({ responsive }: Partial<ImageProps>) => {
      if (responsive) {
        return { maxWidth: '100%', height: 'auto' };
      }
      return {};
    },
  }),
  {
    name: 'MUI',
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

  return <img className={classes.image} src={src} alt={alt} />;
}
