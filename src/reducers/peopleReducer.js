const peopleReducer = (state = { people: [] }, action) => {
  switch ( action.type ) {
    case 'ADD_PERSON':      
      state = {
        people: [...state.people, action.payload]
      }
      break; 

    default:
      break;
  }  
  return state;
}

export default peopleReducer