import React, { ReactNode } from 'react';
import { renderText, createStyles, Icon, CircleIcon, Spacer, Container } from '@crensoft/mui-core';
import { Avatar, Divider } from '@material-ui/core';

const useStyles = createStyles(theme => ({
  Intro: ({ align }: { align: 'left' | 'center' }) => ({
    textAlign: align,
  }),
  IntroDivider: ({ dividerColor, center }) => ({
    maxWidth: 120,
    margin: center ? 'auto' : 0,
    backgroundColor:
      theme.palette.getColor(dividerColor) || theme.palette.getColor('neutral', 'dark'),
  }),
}));

type Props = {
  title?: ReactNode;
  label?: ReactNode;
  /** Body text */
  body?: ReactNode;
  caption?: ReactNode;
  children?: ReactNode;
  /** Use h2 tag for title instead of h3. Default: false */
  main?: boolean;
  /** Centers content. Default: false */
  center?: boolean;
  /** Display title above label. Default: false */
  invertLabel?: boolean;
  icon?: any;
  iconSize?: string;
  iconColor?: string;
  iconBgColor?: string;
  circleIcon?: boolean;
  titleColor?: string;
  divider?: 'header' | 'footer';
  dividerColor?: string;
};

export default function Intro({
  title,
  body,
  label,
  invertLabel,
  caption,
  icon,
  circleIcon,
  iconSize = '3x',
  iconColor = 'primary',
  iconBgColor,
  titleColor,
  main = false,
  center = false,
  divider,
  dividerColor,
  children,
}: Props) {
  const align = center ? 'center' : 'left';
  let calcDividerColor: any;
  // allow color to be set from value of another prop
  switch (dividerColor) {
    case 'iconColor':
      calcDividerColor = iconColor;
      break;
    case 'titleColor':
      calcDividerColor = titleColor;
      break;
    case 'iconBgColor':
      calcDividerColor = iconBgColor;
      break;
    default:
      calcDividerColor = dividerColor;
  }
  const classes = useStyles({ align, center, dividerColor: calcDividerColor });

  if (!title && !body) {
    throw new Error('Intro title and body cannot both be empty');
  }
  const renderTitle = () => {
    const titleTag = main ? 'h2' : 'h3';
    let calcTitleColor: any;
    // xxx: should omit self
    switch (titleColor) {
      case 'iconColor':
        calcTitleColor = iconColor;
        break;
      case 'titleColor':
        calcTitleColor = titleColor;
        break;
      case 'iconBgColor':
        calcTitleColor = iconBgColor;
        break;
      default:
        calcTitleColor = titleColor;
    }
    return renderText({ color: calcTitleColor, key: 'title', align, variant: titleTag }, title);
  };

  const renderLabel = () => renderText({ key: 'label', align, variant: 'subtitle1' }, label);

  // invert label / title order
  const headings: any = [renderLabel(), renderTitle()];
  if (invertLabel) {
    headings.reverse();
  }

  const renderBody = () => {
    const bodyVariant = main ? 'body1' : 'body2';
    const ele = renderText({ key: 'body', align, variant: bodyVariant }, body);
    return (
      ele && (
        <Container center={center} maxWidth="sm" key="body-container">
          {ele}
        </Container>
      )
    );
  };

  const renderIcon = () => {
    if (!icon) return;

    if (icon.alt && icon.img) {
      return <Avatar alt={icon.alt} src={icon.img} />;
    }

    const iconProps: any = {
      icon,
      size: iconSize,
      label: 'icon',
      color: iconColor,
      bgColor: iconBgColor,
    };
    if (circleIcon) {
      return <CircleIcon bgColor={iconBgColor} {...iconProps} />;
    }
    return <Icon {...iconProps} />;
  };

  const renderSpacer = (shouldRender: any, key: string, val: number = 1) => {
    return !!shouldRender && <Spacer key={key} val={val} />;
  };

  const renderDivider = () => {
    if (!divider) return;

    return <Divider key="divider" className={classes.IntroDivider} variant="middle" />;
  };

  if (divider && divider !== 'footer') {
    headings.push(renderSpacer(true, 's1'));
    headings.push(renderDivider() as any);
  }

  return (
    <div className={classes.Intro}>
      {renderIcon()}
      {renderSpacer(icon, 's2')}
      {headings}
      {renderSpacer(body, 's3')}
      {renderBody()}
      {children}
    </div>
  );
}
