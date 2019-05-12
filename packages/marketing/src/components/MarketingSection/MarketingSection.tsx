import React, { ReactNode } from 'react';
import { Row, Container } from '@crensoft/mui-core';

type Props = {
  children: ReactNode;
  className?: string;
};

export default function MarketingSection({ children, className }: Props) {
  return (
    <Row component="section" className={className}>
      <Container>{children}</Container>
    </Row>
  );
}
