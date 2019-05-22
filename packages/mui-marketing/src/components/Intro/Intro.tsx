import React, { ReactNode } from 'react';
import { renderText, createStyles, Icon, CircleIcon, Spacer, Container } from '@crensoft/mui-core';
import { Avatar, Divider } from '@material-ui/core';
import { TypographyProps } from '@material-ui/core/Typography';

const useStyles = createStyles(
  theme => ({
    root: ({ align, inline, center }) => ({
      textAlign: align,
      flexDirection: inline ? 'row' : 'column',
      justifyContent: center ? 'center' : 'flex-start',
      display: 'flex',
    }),
    IntroDivider: ({ dividerColor, center }) => ({
      maxWidth: 75,
      margin: center ? 'auto' : 0,
      height: 2,
      backgroundColor:
        theme.palette.getColor(dividerColor) || theme.palette.getColor('neutral', 'dark'),
    }),
  }),
  {
    name: 'MuiIntro',
  },
);

export type IntroProps = {
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
  divider?: boolean | 'header' | 'footer';
  dividerColor?: string;
  /** display icon on same line as content */
  inline?: boolean;
  page?: boolean;
  xl?: boolean;
  lg?: boolean;
  md?: boolean;
  sm?: boolean;
  xs?: boolean;
  condensed?: boolean;
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
  inline,
  page,
  xl,
  lg,
  md,
  sm,
  xs,
  condensed,
}: IntroProps) {
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
  const classes = useStyles({ align, center, inline, dividerColor: calcDividerColor });

  if (!title && !body) {
    throw new Error('Intro title and body cannot both be empty');
  }
  const renderTitle = () => {
    let titleTag: TypographyProps['variant'] = main ? 'h2' : 'h3';
    if (page) {
      titleTag = 'h1';
    } else if (xl) {
      titleTag = 'h2';
    } else if (lg) {
      titleTag = 'h3';
    } else if (md) {
      titleTag = 'h4';
    } else if (sm) {
      titleTag = 'h5';
    } else if (xs) {
      titleTag = 'h6';
    }
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
    let bodyVariant: TypographyProps['variant'] = main ? 'body1' : 'body2';
    let maxWidth: any = 'sm';
    if (page) {
      bodyVariant = 'body1';
    } else if (xl) {
      bodyVariant = 'body1';
    } else if (lg) {
      bodyVariant = 'body1';
    } else if (md) {
      bodyVariant = 'body2';
      maxWidth = 'xs';
    } else if (sm) {
      bodyVariant = 'body2';
      maxWidth = 'xs';
    } else if (xs) {
      bodyVariant = 'body2';
      maxWidth = 'xs';
    }

    const ele = renderText({ key: 'body', align, variant: bodyVariant }, body);
    return (
      ele && (
        <Container center={center} maxWidth={maxWidth} key="body-container">
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
      fixedWidth: true,
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
    <div className={classes.root}>
      {icon && <div>{renderIcon()}</div>}
      {renderSpacer(icon, 's2')}
      <div>
        {headings}
        {condensed || renderSpacer(body, 's3', 1.1)}
        {renderBody()}
        {children}
      </div>
    </div>
  );
}
