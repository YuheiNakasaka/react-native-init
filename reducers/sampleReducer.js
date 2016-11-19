import {
  SAMPLE_ACTION,
} from '../actions/sampleAction';

const initialState = {
  data: []
}

export default function sampleReducer(state = initialState, action = {}) {
  switch (action.type) {
    case SAMPLE_ACTION:
      return Object.assign({}, state, {
        data: action.data
      });
    default:
      return state;
  }
}