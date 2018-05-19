import React from 'react';
import cn from 'classnames';
export const CBox = ({click = null, checked = false, disabled = false}) => <div
  className={cn('cbox', {checked, disabled})}
  onClick={click} />
