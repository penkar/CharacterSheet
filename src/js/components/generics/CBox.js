import React from 'react';
import cn from 'classnames';

const CBox = ({click = null, checked = false}) => (
    <div
      className={cn('cbox', {checked})}
      onClick={click}
      />
)

export {CBox}
