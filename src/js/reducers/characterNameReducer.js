const initial = {
  class: '',
  level: 0,
  background: '',
  alignment: '',
  playerName:'',
  experiencePoints: 0,
  faction: '',
  dciNumber: 0,
  characterName: '',
}

export default characterNameReducer = function(state=initial, action) {
  switch (action.type) {
    case '':
      return state;
    default:
      return state;
  }
}
