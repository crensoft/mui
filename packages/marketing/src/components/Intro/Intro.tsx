import React from 'react';
import { Row, Container } from '@crensoft/mui-core';
import { Typography } from '@material-ui/core';

type Props = {
  title: string;
};

export default function Intro({ title }: Props) {
  return (
    <Row component="section">
      <Container>
        <Typography variant="h4">{title}</Typography>
      </Container>
    </Row>
  );
}
