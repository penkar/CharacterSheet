import {WRITING} from '../constants'

const initial = {
  personalityTraits:'',
  ideals:'',
  bonds:'',
  flaws:'',
  attacksAndSpellcasting:'',
  featuresAndTraits:'',
  otherProficienciesAndLanguages:'',
  equiptment:'',
  gold: {
    cp: 0,
    sp: 0,
    ep: 0,
    gp: 0,
    pp: 0,
  },
  characterApperance:'',
  alliesAndOrganizations:'',
  additionalFeaturesAndTraits:'',
  characterBackstory:'',
  treasure:'',
  totalNonConsumableMagicItems:'',
}

const characterBioReducer = (state=initial, action) => {
  switch (action.type) {
    case WRITING:
      return state;
    default:
      return state;
  }
}

export default characterBioReducer
