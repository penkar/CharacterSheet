import React from 'react';
import cn from 'classnames';
import {Features} from './features.js';

export const Feats = ({change, feats, open}) => {
  var featsList = Features;
  if(!open) featsList = featsList.filter( ({key}) => feats.includes(key) );
  return (
    <div className='pure-g' id='feats'>
      { featsList.map(({key, description, prerequisite}) => (
        <div key={key} className='pure-u-1 pure-u-lg-24-24 sectional'>
          <button
            style={{color:'black'}}
            onClick={() => change({feat:key}) }
            className={ cn('feat-button', {remove: feats.includes(key)}) }>
            {key}
          </button>
          { prerequisite && <div>{prerequisite}</div> }
          <div>{description.map((item, i) => <div key={i}>{item}</div>)}</div>
        </div>
      ) )}
    </div>
  )
}
