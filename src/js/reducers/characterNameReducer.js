const initial = {
  class:'',
  level:0,
  background:'',
  race:'',
  alignment:'',
  playerName:'',
  experiencePoints:0,
  faction:'',
  dciNumber:0,
  characterName:'',
  age:'',
  height:'',
  weight:'',
  eyes:'',
  skin:'',
  hair:'',

}

const characterNameReducer = (state=initial, action) => {
  switch (action.type) {
    case '':
      return state;
    default:
      return state;
  }
}
export default characterNameReducer
