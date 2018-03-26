import React from 'react';
import cn from 'classnames';

const CBox = ({click = null, checked = false, disabled = false}) => (
    <div
      className={cn('cbox', {checked, disabled})}
      onClick={click}
      />
)

export {CBox}
