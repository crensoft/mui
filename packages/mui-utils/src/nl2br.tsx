import React from 'react';

export default function nl2br(str: string) {
  return str.split('\n').map(item => (
    <span key={item}>
      {item}
      <br />
    </span>
  ));
}
