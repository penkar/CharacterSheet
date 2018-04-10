import React from 'react'
import {Inspiration, Proficiency, SkillScores, SavingThrows,} from './skill/'
export const Skills = (skills, change, abi) => (
  <div id='skills' className='sectional'>
    { Inspiration(skills.inspiration, change) }
    { Proficiency(skills.proficiencyBonus, change) }
    { SavingThrows(skills, change, skills.proficiencyBonus.value || skills.proficiencyBonus.placeholder, abi) }
    { SkillScores(skills, change, skills.proficiencyBonus.value || skills.proficiencyBonus.placeholder, abi) }
  </div>
);
