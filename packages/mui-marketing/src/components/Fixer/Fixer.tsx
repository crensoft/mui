import React from 'react';
import { createStyles, Container } from '@crensoft/mui-core';

const useStyles = createStyles({
  Fixer: {
    fontSize: '5rem',
  },
});

export default function Fixer({}) {
  const classes = useStyles();
  // 1
  return (
    <Container>
      <div className={classes.Fixer}>test</div>
    </Container>
  );
}
