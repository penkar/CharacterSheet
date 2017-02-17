import {BIO_STRING, BIO_INT, HYDRATE,} from '../constants'

import {WRITING} from '../constants'

const initial = {
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
}

const characterBioReducer = (state=initial, action) => {
  let nstate = {};
  switch (action.type) {
    case BIO_STRING:
      nstate[action.field] = action.value;
      return Object.assign({}, state, nstate);
    case BIO_INT:
      nstate[action.field] = parseInt(action.value);
      return Object.assign({}, state, {gold: nstate});
    case HYDRATE:
      if( !action.hasOwnProperty('characterBioReducer') ) return state;
      return Object.assign({}, state, action.characterBioReducer)
    default:
      return state;
  }
}

export default characterBioReducer
