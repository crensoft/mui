import React from 'react';

type Props = {
  name: string;
  onClick: React.MouseEventHandler;
};

export default function AButton({ name, onClick }: Props) {
  return <button onClick={onClick}>Click me: {name}</button>;
}
