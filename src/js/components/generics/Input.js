import React from 'react';
export const Input = ({change, placeholder = '', value, specific = '', field = ''}) =>
  <input
    className={`input-field ${specific}`}
    placeholder={placeholder}
    value={value}
    onChange={ ({target}) => change({field, value:target.value}) }
    />
