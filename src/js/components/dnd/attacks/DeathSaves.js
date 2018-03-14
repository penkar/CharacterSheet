import React from 'react'
export const DeathSaves = ({failures, successes, change}) => (
  <div id='deathsaves'>
    <div>
      Successes
      <input type='radio' checked={successes > 0} value='1' onClick={(e)=>change({field:'successes', value: (successes == '1' ? '0' : '1')})}/>=
      <input type='radio' checked={successes > 1} value='2' onClick={(e)=>change({field:'successes', value: (successes == '2' ? '0' : '2')})}/>=
      <input type='radio' checked={successes > 2} value='3' onClick={(e)=>change({field:'successes', value: (successes == '3' ? '0' : '3')})}/>
    </div>

    <div>
      Failures
      <input type='radio' checked={failures > 0} value='1' onClick={(e)=>change({field:'failures', value: (failures == '1' ? '0' : '1')})}/>=
      <input type='radio' checked={failures > 1} value='2' onClick={(e)=>change({field:'failures', value: (failures == '1' ? '0' : '1')})}/>=
      <input type='radio' checked={failures > 2} value='3' onClick={(e)=>change({field:'failures', value: (failures == '1' ? '0' : '1')})}/>
    </div>

    <div className='bold'>DeathSaves</div>
  </div>
);
