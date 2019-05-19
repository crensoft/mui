import { ReactNode } from 'react';
/**
 * Renders items using provided map function
 */
export default function renderMap<T = any>(fn: (value: T, index: number, array: T[]) => ReactNode): (items: T[]) => ReactNode[] | ReactNode;
