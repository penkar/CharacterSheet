const initial = {
  strength: {
    checked: false,
    value: 0,
    placeholder: 0,
  },
  dexterity: {
    checked: false,
    value: 0,
    placeholder: 0,
  },
  constitution: {
    checked: false,
    value: 0,
    placeholder: 0,
  },
  intelligence: {
    checked: false,
    value: 0,
    placeholder: 0,
  },
  wisdom: {
    checked: false,
    value: 0,
    placeholder: 0,
  },
  charisma: {
    checked: false,
    value: 0,
    placeholder: 0,
  },
}

const savingReducer = (state=initial, action) => {
  switch (action.type) {
    default:
      return state;
  }
}

export default savingReducer
