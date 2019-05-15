import React, { ReactNode } from 'react';
import { createStyles, Row, Col } from '@crensoft/mui-core';
import { ColProps } from '@crensoft/mui-core/lib/components/Layout/Col';
import renderMap from '@crensoft/mui-utils/lib/renderMap';
import PainPoint from '../PainPoint/PainPoint';
import { IntroProps } from '../Intro/Intro';
import { Action } from '@crensoft/mui-core/lib/components/Actions/ActionGroup';
import { splitEvery } from 'ramda';
import { Card, CardContent } from '@material-ui/core';

const useStyles = createStyles(theme => ({
  FeaturedList: () => ({
    textAlign: 'left',
  }),
  FeaturedListRow: ({ spacing = 5 }) => ({
    '& + &': {
      marginTop: theme.spacing(spacing),
    },
  }),
  FeaturedListItem: ({ centerItems }) => {
    return {
      display: 'flex',
    };
  },
}));

interface FeaturedItem extends IntroProps {
  actions: Action;
}

type Props = {
  children?: ReactNode;
  flip?: boolean;
  features: FeaturedItem[];
  large?: boolean;
  intro?: IntroProps;
  cards?: boolean;
  fullWidth?: boolean;
  center?: boolean;
};

const validateProps = ({ fullWidth, large }: Partial<Props>) => {
  if (fullWidth && large) {
    throw new Error('fullWidth and large props both set.');
  }
};

function createRows<T = any>(perRow: number, items: T[]) {
  return perRow > 1 ? splitEvery<T>(perRow, items) : [items];
}

export default function FeaturedList({ fullWidth, center, cards, intro, large, features }: Props) {
  validateProps({ fullWidth, large });

  const spacing = 3;
  const classes = useStyles({ spacing });

  const getKey = (item: any) => item.title || item.body;

  let colSm: ColProps['sm'] = 4;
  if (large) {
    colSm = 6;
  } else if (fullWidth) {
    colSm = 12;
  }

  const renderFeatures = renderMap(({ actions, ...feature }) => {
    let content = <PainPoint center={center} intro={{ ...intro, ...feature }} actions={actions} />;
    if (cards) {
      content = (
        <Card key="card" style={{ width: '100%' }}>
          <CardContent>{content}</CardContent>
        </Card>
      );
    }
    return (
      <Col className={classes.FeaturedListItem} key={getKey(feature)} xs={12} sm={colSm}>
        {content}
      </Col>
    );
  });

  const renderRows = renderMap(row => (
    <Row key={getKey(row[0])} className={classes.FeaturedListRow} spacing={spacing}>
      {renderFeatures(row)}
    </Row>
  ));

  const rows = createRows(12 / (colSm as number), features);
  return <div className={classes.FeaturedList}>{renderRows(rows)}</div>;
}
