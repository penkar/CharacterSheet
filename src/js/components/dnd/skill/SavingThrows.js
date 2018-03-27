import React from 'react'
import {Score} from './Score'
import {getModifier} from '../../../utilities/scoreutilities'
export const SavingThrows = ({strengthSaving, dexteritySaving, constitutionSaving, intelligenceSaving, wisdomSaving, charismaSaving,}, change, pro, abi) => (
  <div id='savingthrows'>
    { Score({change, pro, field:'strengthSaving', name:'Strength', obj:strengthSaving, mod:getModifier(abi, 'str') }) }
    { Score({change, pro, field:'dexteritySaving', name:'Dexterity', obj:dexteritySaving, mod:getModifier(abi, 'dex') }) }
    { Score({change, pro, field:'constitutionSaving', name:'Constitution', obj:constitutionSaving, mod:getModifier(abi, 'con') }) }
    { Score({change, pro, field:'intelligenceSaving', name:'Intelligence', obj:intelligenceSaving, mod:getModifier(abi, 'int') }) }
    { Score({change, pro, field:'wisdomSaving', name:'Wisdom', obj:wisdomSaving, mod:getModifier(abi, 'wis') }) }
    { Score({change, pro, field:'charismaSaving', name:'Charisma', obj:charismaSaving, mod:getModifier(abi, 'cha') }) }
    <span className='bold'>Saving Throws</span>
  </div>
);
