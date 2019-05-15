import React from 'react';
import { Grid } from '@material-ui/core';
import { GridProps } from '@material-ui/core/Grid';

export type ColProps = GridProps;

export default function Col(props: ColProps) {
  return <Grid item {...props} />;
}
