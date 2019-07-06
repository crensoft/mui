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
      display: 'flex',
      alignItems: 'center',
      maxHeight: '100%',
      '& > div': {
        display: 'flex',
        flexGrow: 1,
      },
      '& svg': {
        maxWidth: '100%',
        maxHeight: '100%',
        // prevent extra whitespace
        flexGrow: 1,
      },
    }),
  }),
  {
    name: 'Mui2Img',
  },
);

export interface ImageProps {
  src?: string;
  srcset?: string;
  alt?: string;
  svg?: React.ReactNode;
  responsive?: boolean;
  height?: any;
  picture?: any;
}

export default function Image({ src, srcset, svg, alt, height, responsive, picture }: ImageProps) {
  if (!alt) {
    throw new Error('Alt text required');
  }
  const classes = useStyles({ responsive });
  const style = height ? { height } : {};
  let html = null;
  if (src && /\.svg$/.test(src)) {
    html = <Svg className={classes.svg} src={src} />;
  } else if (svg) {
    html = (
      <div style={style} className={classes.svg}>
        {svg}
      </div>
    );
  } else if (picture) {
    html = (
      <picture>
        <source srcSet={picture.src} type={`image/${picture.type}`} />
        <img className={classes.image} src={src} srcSet={srcset} alt={alt} />
      </picture>
    );
  } else {
    html = <img className={classes.image} src={src} srcSet={srcset} alt={alt} />;
  }
  return html;
}
