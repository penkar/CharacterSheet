const initial = {
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

const skillsReducer = (state=initial, action) => {
  switch (action.type) {
    default:
      return state;
  }
}

export default skillsReducer
