import React from 'react';

type Props = {
  name: string;
  onClick: React.MouseEventHandler;
};

const AButton: React.FunctionComponent<Props> = ({ name, onClick }) => (
  <button onClick={onClick}>Click me: {name}</button>
);

export default AButton;
