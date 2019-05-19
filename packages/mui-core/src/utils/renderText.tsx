import React, { ReactNode } from 'react';
import Typography, { TypographyProps } from '@material-ui/core/Typography';

const renderText = (props: TypographyProps & { key?: string }, text: ReactNode | string) => {
  if (!text) return null;

  return <Typography {...props}>{text}</Typography>;
};

export default renderText;
