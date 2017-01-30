const initial = {
  strength: {value: 0, placeholder: 0, modifier: 0},
  dexterity: {value: 0, placeholder: 0, modifier: 0},
  constitution: {value: 0, placeholder: 0, modifier: 0},
  intelligence: {value: 0, placeholder: 0, modifier: 0},
  wisdom: {value: 0, placeholder: 0, modifier: 0},
  charisma: {value: 0, placeholder: 0, modifier: 0},
}

const abilityReducer = (state=initial, action) => {
  switch (action.type) {
    default:
      return state;
  }
}

export default abilityReducer
