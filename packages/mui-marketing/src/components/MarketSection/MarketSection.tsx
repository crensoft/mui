import React, { ReactNode } from 'react';
import { useTheme } from '@material-ui/styles';
import { Container, createStyles } from '@crensoft/mui-core';
import { ContainerProps } from '@crensoft/mui-core/lib/components/Layout/Container';
import { AppTheme } from '@crensoft/mui-core/lib/components/Theme/muiTheme';
import { useMobile } from '@crensoft/mui-core/lib/hooks';
import clsx from 'clsx';
import Intro, { IntroProps } from '../Intro/Intro';

const useStyles = createStyles(
  theme => ({
    root: {
      position: 'relative',
    },
    whitespace: {
      padding: `${theme.spacing(5)}px 0`,
      [theme.breakpoints.up('sm')]: {
        padding: `${theme.spacing(10)}px ${theme.spacing(5)}px`,
      },
    },
    whitespaceLg: {
      padding: `${theme.spacing(15)}px ${theme.spacing(5)}px`,
    },
    whitespaceSm: {
      padding: `${theme.spacing(5)}px ${theme.spacing(5)}px`,
    },
    whitespaceXs: {
      padding: `${theme.spacing(1.2)}px 0`,
      [theme.breakpoints.up('sm')]: {
        padding: `${theme.spacing(2.5)}px ${theme.spacing(5)}px`,
      },
    },
    image: {
      backgroundSize: 'cover',
    },
    container: {
      zIndex: 2,
      position: 'relative',
    },
    overlay: {
      position: 'absolute',
      left: 0,
      right: 0,
      top: 0,
      bottom: 0,
      backgroundColor: 'rgba(0,0,0,.5)',
      zIndex: 0,
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
  bgImage?: string;
  bgFixed?: boolean;
  overlay?: any;
  mobileCollapse?: boolean;
}

export default function MarketSection({
  children,
  bgColor,
  intro,
  whitespace,
  whitespaceSm,
  whitespaceXs,
  maxWidth,
  bgImage,
  bgFixed,
  overlay,
  className,
  mobileCollapse,
}: MarketSectionProps) {
  let content = children;
  const isMobile = useMobile();
  const spacing = whitespace ? 5 : 0;
  const theme = useTheme<AppTheme>();
  const classes = useStyles({ spacing, bgColor });

  const addBgImage = (inputStyle: any) => {
    const newStyle: any = {};
    if (bgImage) {
      newStyle.backgroundImage = `url("${bgImage}")`;
    }
    return { ...inputStyle, ...newStyle };
  };
  const isCollapsed = intro && isMobile && mobileCollapse;
  let preContent = null;
  if (isCollapsed) {
    const collapseStyle = addBgImage({
      position: 'relative',
      minHeight: 120,
      display: 'flex',
      justifyContent: 'center',
      backgroundSize: 'cover',
      backgroundPosition: 'center',
    });
    preContent = (
      <div style={collapseStyle}>
        <Overlay className={classes.overlay} />
        <div className={classes.container} style={{ display: 'flex', alignItems: 'center' }}>
          <Intro main {...intro} />
        </div>
      </div>
    );
  } else if (intro) {
    content = (
      <Intro main {...intro}>
        {content}
      </Intro>
    );
  }

  let style: any = {};
  if (bgColor) {
    style.backgroundColor = theme.palette.getColor(bgColor as any);
  }
  if (bgFixed) {
    style.backgroundAttachment = 'fixed';
  }
  if (!isCollapsed) {
    style = addBgImage(style);
  }

  const cl = clsx(
    classes.root,
    whitespace && !isCollapsed && classes.whitespace,
    whitespaceSm && !isCollapsed && classes.whitespaceSm,
    whitespaceXs && !isCollapsed && classes.whitespaceXs,
    bgImage && classes.image,
    className,
  );
  const showOverlay = overlay && !isCollapsed;
  return (
    <section style={style} className={cl}>
      {showOverlay && <Overlay className={classes.overlay} />}
      {preContent}
      <Container className={classes.container} maxWidth={maxWidth} center>
        {content}
      </Container>
    </section>
  );
}

function Overlay({ className }: { className: string }) {
  return <div className={className} />;
}
