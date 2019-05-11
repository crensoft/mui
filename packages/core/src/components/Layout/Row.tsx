import React from 'react';
import { Grid } from '@material-ui/core';
import { GridProps } from '@material-ui/core/Grid';

export default function Row(props: GridProps) {
  return <Grid container {...props} />;
}
