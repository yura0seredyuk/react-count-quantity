import React from 'react';

export const QuantitySelector = ({ title, quantity, onRemove, onAdd }) => {
  return (
    <div>
      {title}:&nbsp;
      <button onClick={onRemove}>-</button>
      {quantity}
      <button onClick={onAdd}>+</button>
    </div>
  );
};