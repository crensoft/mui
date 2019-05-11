import React from 'react';
import { Grid } from '@material-ui/core';
import { GridProps } from '@material-ui/core/Grid';

export function Row(props: GridProps) {
  return <Grid container {...props} />;
}

export function Col(props: GridProps) {
  return <Grid item {...props} />;
}
