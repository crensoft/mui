import React from 'react';
import { Grid } from '@material-ui/core';
import { GridProps } from '@material-ui/core/Grid';

export default function Col(props: GridProps) {
  return <Grid item {...props} />;
}
