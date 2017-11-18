import React from 'react'
import {Inspiration, Proficiency, SkillScores, SavingThrows,} from './skill/'

export function Skills ({
    acrobatics, 
    animalHandling,
    arcana,
    athletics,
    deception,
    history,
    insight,
    intimidation,
    investigation,
    medicine,
    nature,
    perception,
    performance,
    persuation,
    religion,
    sleightOfHand,
    stealth,
    survival,
    inspiration,
    proficiencyBonus,
    strengthSaving,
    dexteritySaving,
    constitutionSaving,
    intelligenceSaving,
    wisdomSaving,
    charismaSaving
  }, change, abi) {
    
  let saving = {strengthSaving, dexteritySaving, constitutionSaving, intelligenceSaving, wisdomSaving, charismaSaving,}
  let skillset = {acrobatics, animalHandling, arcana, athletics, deception, history, insight, intimidation, investigation, medicine, nature, perception, performance, persuation, religion, sleightOfHand, stealth, survival};
  let pro = proficiencyBonus.value || proficiencyBonus.placeholder;
  return (
    <div id='skills' className='sectional'>
      { Inspiration(inspiration, change) }
      { Proficiency(proficiencyBonus, change) }
      { SavingThrows(saving, change, pro, abi) }
      { SkillScores(skillset, change, pro, abi) }
    </div>
  )
}