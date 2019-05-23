import React, { ReactNode } from 'react';
import Typography, { TypographyProps } from '@material-ui/core/Typography';
import { nl2br } from '@crensoft/mui-utils';
import { CSSProperties } from '@material-ui/styles';
import { omit } from 'ramda';

const renderText = (props: TypographyProps & { key?: string }, text: ReactNode | string) => {
  if (!text) return null;

  let formattedText = text;
  if (typeof formattedText === 'string') {
    formattedText = nl2br(formattedText);
  }
  const style: CSSProperties = {};
  if (/(rgb)|#/.test(props.color as any)) {
    style.color = props.color;
  }
  return (
    <Typography style={style} {...(style.color ? omit(['color'], props) : props)}>
      {formattedText}
    </Typography>
  );
};

export default renderText;
