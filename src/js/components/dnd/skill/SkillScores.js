import React from 'react'
import {Score} from './Score'
import {getModifier} from '../../../utilities/scoreutilities'

const SkillScores = ({acrobatics, animalHandling, arcana, athletics, deception, history, insight, intimidation, investigation, medicine, nature, perception, performance, persuation, religion, sleightOfHand, stealth, survival}, change, pro, abi) => {
  let stuff = {change, pro};
  return (
    <div id='skillscores'>
      { Score({...stuff, field:'athletics', name:'Athletics (Str)', obj:athletics, mod:getModifier(abi, 'str')}) }
      <hr/>
      { Score({...stuff, field:'acrobatics', name:'Acrobatics (Dex)', obj:acrobatics, mod:getModifier(abi, 'dex')}) }
      { Score({...stuff, field:'stealth', name:'Stealth (Dex)', obj:stealth, mod:getModifier(abi, 'dex')}) }
      { Score({...stuff, field:'sleightOfHand', name:'Sleight of Hand (Dex)', obj:sleightOfHand, mod:getModifier(abi, 'dex')}) }
      <hr/>
      { Score({...stuff, field:'arcana', name:'Arcana (Int)', obj:arcana, mod:getModifier(abi, 'int')}) }
      { Score({...stuff, field:'history', name:'History (Int)', obj:history, mod:getModifier(abi, 'int')}) }
      { Score({...stuff, field:'investigation', name:'Investigation (Int)', obj:investigation, mod:getModifier(abi, 'int')}) }
      { Score({...stuff, field:'nature', name:'Nature (Int)', obj:nature, mod:getModifier(abi, 'int')}) }
      { Score({...stuff, field:'religion', name:'Religion (Int)', obj:religion, mod:getModifier(abi, 'int')}) }
      <hr/>
      { Score({...stuff, field:'animalHandling', name:'Animal Handling (Wis)', obj:animalHandling, mod:getModifier(abi, 'wis')}) }
      { Score({...stuff, field:'insight', name:'Insight (Wis)', obj:insight, mod:getModifier(abi, 'wis')}) }
      { Score({...stuff, field:'medicine', name:'Medicine (Wis)', obj:medicine, mod:getModifier(abi, 'wis')}) }
      { Score({...stuff, field:'perception', name:'Perception (Wis)', obj:perception, mod:getModifier(abi, 'wis')}) }
      { Score({...stuff, field:'survival', name:'Survival (Wis)', obj:survival, mod:getModifier(abi, 'wis')}) }
      <hr/>
      { Score({...stuff, field:'deception', name:'Deception (Cha)', obj:deception, mod:getModifier(abi, 'cha')}) }
      { Score({...stuff, field:'intimidation', name:'Intimidation (Cha)', obj:intimidation, mod:getModifier(abi, 'cha')}) }
      { Score({...stuff, field:'performance', name:'Performance (Cha)', obj:performance, mod:getModifier(abi, 'cha')}) }
      { Score({...stuff, field:'persuation', name:'Persuasion (Cha)', obj:persuation, mod:getModifier(abi, 'cha')}) }
      <span className='bold'>Skills</span>
    </div>
  )
}

export {SkillScores};
