const bareUser = {
  abilityReducer:{
    strength: {value: 0, modifier: 0},
    dexterity: {value: 0, modifier: 0},
    constitution: {value: 0, modifier: 0},
    intelligence: {value: 0, modifier: 0},
    wisdom: {value: 0, modifier: 0},
    charisma: {value: 0, modifier: 0},
  },
  attackDefenseReducer:{
    armorClass:0,
    initiative:0,
    speed:0,

    hitPoints:0,
    currentHitPoints:0,
    temporaryHitPoints:0,
    exhaustion:0,

    hitDie:0,
    hitDieTotal:'',

    successes: 0,
    failures:0,

    attack1:{name:'',bonus:'',dmg:'',},
    attack2:{name:'',bonus:'',dmg:'',},
    attack3:{name:'',bonus:'',dmg:'',},
  },
  characterBioReducer:{
    personalityTraits:'',
    ideals:'',
    bonds:'',
    flaws:'',
    featuresAndTraits:'',
    otherProficienciesAndLanguages:'',
    attacksAndSpellcasting:'',
    equiptment:'',
    gold: {
      cp: 0,
      sp: 0,
      ep: 0,
      gp: 0,
      pp: 0,
    },
    characterApperance:'',
    characterBackstory:'',
    alliesAndOrganizations:'',
    additionalFeaturesAndTraits:'',
    treasure:'',
    totalNonConsumableMagicItems:'',
  },
  featsReducer:[],
  magicReducer:{
    spellcastingClass:'',
    spellcastingAbility:'',
    spellSaveDC:'',
    spellSaveBonus:'',
    stock: {
      '0':'CANTRIP',
      '1':'',
      '2':'',
      '3':'',
      '4':'',
      '5':'',
      '6':'',
      '7':'',
      '8':'',
      '9':'',
    },
    spellLevel0:[],
    spellLevel1:[],
    spellLevel2:[],
    spellLevel3:[],
    spellLevel4:[],
    spellLevel5:[],
    spellLevel6:[],
    spellLevel7:[],
    spellLevel8:[],
    spellLevel9:[],
  },
  skillsReducer: {
    passiveWisdom: {value: 0,placeholder: 0,},

    inspiration: {value: 0,placeholder: 0,},
    proficiencyBonus: {value: 0,placeholder: 0,},

    strengthSaving: {checked: false,value: 0,placeholder: 0,},
    dexteritySaving: {checked: false,value: 0,placeholder: 0,},
    constitutionSaving: {checked: false,value: 0,placeholder: 0,},
    intelligenceSaving: {checked: false,value: 0,placeholder: 0,},
    wisdomSaving: {checked: false,value: 0,placeholder: 0,},
    charismaSaving: {checked: false,value: 0,placeholder: 0,},

    acrobatics: {checked: false, value: 0, placeholder: 0},
    animalHandling: {checked: false, value: 0, placeholder: 0},
    arcana: {checked: false, value: 0, placeholder: 0},
    athletics: {checked: false, value: 0, placeholder: 0},
    deception: {checked: false, value: 0, placeholder: 0},
    history: {checked: false, value: 0, placeholder: 0},
    insight: {checked: false, value: 0, placeholder: 0},
    intimidation: {checked: false, value: 0, placeholder: 0},
    investigation: {checked: false, value: 0, placeholder: 0},
    medicine: {checked: false, value: 0, placeholder: 0},
    nature: {checked: false, value: 0, placeholder: 0},
    perception: {checked: false, value: 0, placeholder: 0},
    performance: {checked: false, value: 0, placeholder: 0},
    persuation: {checked: false, value: 0, placeholder: 0},
    religion: {checked: false, value: 0, placeholder: 0},
    sleightOfHand: {checked: false, value: 0, placeholder: 0},
    stealth: {checked: false, value: 0, placeholder: 0},
    survival: {checked: false, value: 0, placeholder: 0},
  }
}
export default bareUser
