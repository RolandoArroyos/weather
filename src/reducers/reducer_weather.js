import { FETCH_WEATHER } from '../actions/index';

//Just like in react, in redux we also do not want to alter/mutate
//our state, so we can use the concat function to pass back the old & new
//state.
export default function(state = [], action) {
  switch (action.type) {
    case FETCH_WEATHER:
      //return state.concat([action.payload.data ]);
      //ES6 syntax to pass back a new state, equalent to line
      //above, where we concat state
      return [ action.payload.data, ...state];
  }
  return state;

}
