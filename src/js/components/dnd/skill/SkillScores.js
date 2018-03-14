import React from 'react'
import {Score} from './Score'
import {getModifier} from '../../../utilities/scoreutilities'
export const SkillScores = ({acrobatics, animalHandling, arcana, athletics,
  deception, history, insight, intimidation, investigation, medicine, nature,
  perception, performance, persuation, religion, sleightOfHand, stealth, survival}, change, pro, abi) => (
  <div id='skillscores'>
    { Score({change, pro, field:'athletics', name:'Athletics (Str)', obj:athletics, mod:getModifier(abi, 'str')}) }
    <hr/>
    { Score({change, pro, field:'acrobatics', name:'Acrobatics (Dex)', obj:acrobatics, mod:getModifier(abi, 'dex')}) }
    { Score({change, pro, field:'stealth', name:'Stealth (Dex)', obj:stealth, mod:getModifier(abi, 'dex')}) }
    { Score({change, pro, field:'sleightOfHand', name:'Sleight of Hand (Dex)', obj:sleightOfHand, mod:getModifier(abi, 'dex')}) }
    <hr/>
    { Score({change, pro, field:'arcana', name:'Arcana (Int)', obj:arcana, mod:getModifier(abi, 'int')}) }
    { Score({change, pro, field:'history', name:'History (Int)', obj:history, mod:getModifier(abi, 'int')}) }
    { Score({change, pro, field:'investigation', name:'Investigation (Int)', obj:investigation, mod:getModifier(abi, 'int')}) }
    { Score({change, pro, field:'nature', name:'Nature (Int)', obj:nature, mod:getModifier(abi, 'int')}) }
    { Score({change, pro, field:'religion', name:'Religion (Int)', obj:religion, mod:getModifier(abi, 'int')}) }
    <hr/>
    { Score({change, pro, field:'animalHandling', name:'Animal Handling (Wis)', obj:animalHandling, mod:getModifier(abi, 'wis')}) }
    { Score({change, pro, field:'insight', name:'Insight (Wis)', obj:insight, mod:getModifier(abi, 'wis')}) }
    { Score({change, pro, field:'medicine', name:'Medicine (Wis)', obj:medicine, mod:getModifier(abi, 'wis')}) }
    { Score({change, pro, field:'perception', name:'Perception (Wis)', obj:perception, mod:getModifier(abi, 'wis')}) }
    { Score({change, pro, field:'survival', name:'Survival (Wis)', obj:survival, mod:getModifier(abi, 'wis')}) }
    <hr/>
    { Score({change, pro, field:'deception', name:'Deception (Cha)', obj:deception, mod:getModifier(abi, 'cha')}) }
    { Score({change, pro, field:'intimidation', name:'Intimidation (Cha)', obj:intimidation, mod:getModifier(abi, 'cha')}) }
    { Score({change, pro, field:'performance', name:'Performance (Cha)', obj:performance, mod:getModifier(abi, 'cha')}) }
    { Score({change, pro, field:'persuation', name:'Persuasion (Cha)', obj:persuation, mod:getModifier(abi, 'cha')}) }
    <span className='bold'>Skills</span>
  </div>
);
