import React from 'react';

export default function AButton({
  name,
  onClick,
}: {
  name: string;
  onClick: React.MouseEventHandler;
}) {
  return <button onClick={onClick}>Click me: {name}</button>;
}
