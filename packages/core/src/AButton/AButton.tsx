import React from "react";

/**
 * Renders a button
 * @param param0
 */
export default function AButton({
  name,
  onClick
}: {
  name: string;
  onClick: React.MouseEventHandler;
}) {
  return <button onClick={onClick}>Click me: {name}</button>;
}
