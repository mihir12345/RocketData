const INITIAL_STATE={
    searchField: ""
}

const searchFieldReducer=(state = INITIAL_STATE, action) => {
    switch (action.type) {
      case "SET_SEARCHFIELD_ACTION":
        return {
            ...state,
          searchField: action.payload
        };
        default:
            return state;
        }
    
    }
    export default searchFieldReducer