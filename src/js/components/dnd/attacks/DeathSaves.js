import React from 'react'

const DeathSaves = ({failures, successes, change}) => {
  function success(e) {
    let value = e.target.value;
    if(successes == value) value = '0';
    change({field:'successes', value});
  }

  function fail(e) {console.log(10);
    let value = e.target.value;
    if(failures == value) value = '0';
    change({field:'failures', value});
  }

  return (
    <div id='deathsaves'>
      <div>
        Successes
        <input type='radio' checked={successes > 0} value='1' onClick={success}/>=
        <input type='radio' checked={successes > 1} value='2' onClick={success}/>=
        <input type='radio' checked={successes > 2} value='3' onClick={success}/>
      </div>

      <div>
        Failures
        <input type='radio' checked={failures > 0} value='1' onClick={fail}/>=
        <input type='radio' checked={failures > 1} value='2' onClick={fail}/>=
        <input type='radio' checked={failures > 2} value='3' onClick={fail}/>
      </div>

      <div className='bold'>DeathSaves</div>
    </div>
  );
}

export default DeathSaves
