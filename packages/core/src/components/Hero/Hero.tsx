import React, { ReactNode } from 'react';
import { Row, Container, Col } from '../Layout';
import createStyles from '../Theme/createStyles';
import { Typography, Button } from '@material-ui/core';
import Image from '../Img/Img';
import { isObject } from 'util';

const useStyles = createStyles<{ height?: number; bgColor?: string; fullHeight: boolean }>(
  theme => ({
    Hero: ({ fullHeight, height, bgColor }) => ({
      height: fullHeight ? `calc(100vh - ${theme.topbar.height()}px)` : 'auto',
      maxHeight: height || '100vh',
      backgroundColor: bgColor,
      overflow: 'hidden',
    }),
    HeroGrid: {
      height: '100%',
      flexWrap: 'nowrap',
    },
    HeroSection: (props: any) => ({
      display: 'flex',
      alignItems: 'center',
      marginTop: props.offset ? -theme.topbar.height() / 2 : 0,
      height: '100%',
    }),
    HeroTitle: {},
    HeroActions: {},
  }),
);

type Props = {
  children?: ReactNode;
  title?: ReactNode;
  caption?: ReactNode;
  fullHeight?: boolean;
  illustration?: {
    img?: string;
    label: string;
  };
  actions?: [
    {
      type: 'primary' | 'secondary' | 'default';
      content: ReactNode;
      url: string;
    }
  ];
  height?: number;
};

export default function Hero({
  children,
  title,
  caption,
  actions,
  illustration,
  height,
  fullHeight = false,
}: Props) {
  const classes = useStyles({ height, fullHeight });

  const renderTitle = () =>
    title && (
      <Typography className={classes.HeroTitle} variant="h1">
        {title}
      </Typography>
    );

  const renderActions = () => {
    if (!actions) {
      return;
    }
    if (actions.length > 2) {
      throw new Error('Hero Action length exceeded.');
    }
    return (
      <Row className={classes.HeroActions} spacing={2}>
        {actions.map(({ url, content, type }) => (
          <Col key={url}>
            <Button variant="contained" color={type} href={url}>
              {content}
            </Button>
          </Col>
        ))}
      </Row>
    );
  };

  const renderCaption = () =>
    caption && (
      <Typography variant="caption" className={classes.HeroCaption}>
        {caption}
      </Typography>
    );

  const renderIllustration = () => {
    if (!illustration) {
      return;
    }

    if (isObject(illustration) && illustration.img) {
      return (
        <Col xs={12} sm={true}>
          <Image src={illustration.img} alt={illustration.label} />
        </Col>
      );
    }
  };
  return (
    <Row className={classes.Hero}>
      <Container>
        <Row className={classes.HeroGrid}>
          <Col className={classes.HeroSection} xs={12} sm={true}>
            <div>
              {renderTitle()}
              {children}
              {renderActions()}
              {renderCaption()}
            </div>
          </Col>
          {renderIllustration()}
        </Row>
      </Container>
    </Row>
  );
}
