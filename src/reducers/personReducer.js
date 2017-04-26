const personReducer = (state = { bio: '', lastValue: [] }, action) => {
  switch ( action.type ) {
    case 'UPDATE_BIO':      
      state = {
        ...state,
        bio: action.payload
      }
      state.lastValue.push(action.payload)
      break; 

    default:
      break;
  }  
  return state;
}

export default personReducer