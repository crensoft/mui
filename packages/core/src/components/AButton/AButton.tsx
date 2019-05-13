import React from 'react';

type Props = {
  name: string;
  onClick: React.MouseEventHandler;
};

const AButton: React.FunctionComponent<Props> = ({ name, onClick }) => (
  <button onClick={onClick}>Click me1: {name}</button>
);

export default AButton;
