import React, { ReactNode } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { renderMap } from '@crensoft/mui-utils';
import { Row, Col } from '../Layout';
import createStyles from '../Theme/createStyles';
import { useTheme } from '@material-ui/styles';
import { AppTheme } from '../Theme/muiTheme';

const useStyles = createStyles(
  theme => ({
    root: {},
    item: {
      '& + &': {
        marginTop: theme.spacing(0.9),
      },
    },
  }),
  {
    name: 'MuiIconList',
  },
);

type IconListItem = { icon?: any; content: ReactNode };
type IconListProps = {
  items: IconListItem[];
  bullet?: ReactNode;
  bulletColor?: any;
};

export default function IconList({ items, bullet, bulletColor }: IconListProps) {
  const classes = useStyles();

  const theme = useTheme<AppTheme>();
  const iconColor = bulletColor ? theme.palette.getColor(bulletColor) : '';
  const renderRows = renderMap<IconListItem>(({ icon, content }) => (
    <Row key={icon} className={classes.item} spacing={1}>
      <Col>
        <FontAwesomeIcon color={iconColor} fixedWidth icon={icon || bullet} size="lg" aria-hidden />
      </Col>
      <Col>{content}</Col>
    </Row>
  ));
  return <>{renderRows(items)}</>;
}
