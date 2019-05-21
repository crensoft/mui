import React, { ReactNode } from 'react';
import Typography, { TypographyProps } from '@material-ui/core/Typography';
import { nl2br } from '@crensoft/mui-utils';

const renderText = (props: TypographyProps & { key?: string }, text: ReactNode | string) => {
  if (!text) return null;

  let formattedText = text;
  if (typeof formattedText === 'string') {
    formattedText = nl2br(formattedText);
  }
  return <Typography {...props}>{formattedText}</Typography>;
};

export default renderText;
