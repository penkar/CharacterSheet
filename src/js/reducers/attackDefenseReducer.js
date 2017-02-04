const initial = {
  armorClass:0,
  initiative:0,
  speed:0,

  hitPoints:0,
  currentHitPoints:0,
  temporaryHitPoints:0,

  hitDice:0,
  hitDiceTotal:0,

  successes: 0,
  failures:0,

  attacksAndSpells:'',
  attack1:{name:'',bonus:'',dmg:'',},
  attack2:{name:'',bonus:'',dmg:'',},
  attack3:{name:'',bonus:'',dmg:'',},
}

const attackDefenseReducer = (state=initial, action) => {
  switch (action.type) {
    default:
      return state;
  }
}

export default attackDefenseReducer
