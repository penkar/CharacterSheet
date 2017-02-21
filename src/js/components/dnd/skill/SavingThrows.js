import React from 'react'
import Score from './Score'
import {getModifier} from '../../../utilities/scoreutilities'

const SavingThrows = ({strengthSaving, dexteritySaving, constitutionSaving, intelligenceSaving, wisdomSaving, charismaSaving,}, change, pro, abi) => {
  let stuff = {change, pro}
  return (
    <div id='savingthrows'>
      <Score {...stuff} field='strengthSaving' name='Strength' obj={strengthSaving}  mod={getModifier(abi, 'str')}/>
      <Score {...stuff} field='dexteritySaving' name='Dexterity' obj={dexteritySaving}  mod={getModifier(abi, 'dex')}/>
      <Score {...stuff} field='constitutionSaving' name='Constitution' obj={constitutionSaving}  mod={getModifier(abi, 'con')}/>
      <Score {...stuff} field='intelligenceSaving' name='Intelligence' obj={intelligenceSaving}  mod={getModifier(abi, 'int')}/>
      <Score {...stuff} field='wisdomSaving' name='Wisdom' obj={wisdomSaving}  mod={getModifier(abi, 'wis')}/>
      <Score {...stuff} field='charismaSaving' name='Charisma' obj={charismaSaving}  mod={getModifier(abi, 'cha')}/>
      <span className='bold'>Saving Throws</span>
    </div>
  )
}
export default SavingThrows
