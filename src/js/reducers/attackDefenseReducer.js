const initial = {
  armorClass:0,
  initiative:0,
  speed:0,

  hitPoints:0,
  currentHitPoints:0,
  temporaryHitPoints:0,

  hitDice:0,

  successes: 0,
  failures:0,

  attacksAndSpells:'',
  attack1:{name:'',bonud:'',dmg:'',},
  attack2:{name:'',bonud:'',dmg:'',},
  attack3:{name:'',bonud:'',dmg:'',},
}

const attackDefenseReducer = (state=initial, action) => {
  switch (action.type) {
    default:
      return state;
  }
}

export default attackDefenseReducer
