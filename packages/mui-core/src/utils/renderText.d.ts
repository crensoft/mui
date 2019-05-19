import React from 'react';
import { TypographyProps } from '@material-ui/core/Typography';
declare const renderText: (props: TypographyProps & {
    key?: string | undefined;
}, text: React.ReactNode) => JSX.Element | null;
export default renderText;
