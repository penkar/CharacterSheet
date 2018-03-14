import React from 'react'
const HitDie = ({hitDie, hitDieTotal, change}) => {
  let changeH = function(e) {
    change({field:'hitDie', value:e.target.value});
  }, changeT = function(e) {
    change({field:'hitDieTotal', value:e.target.value});
  };

  return(
    <div id='hitdie'>
      <div>
        Total: <input value={hitDie} onChange={changeH}/>
      </div>
      <textarea rows='5' cols='10' value={hitDieTotal} onChange={changeT}/>
      <span className='bold'>HIT DICE</span>
    </div>
  );
}

export default HitDie
