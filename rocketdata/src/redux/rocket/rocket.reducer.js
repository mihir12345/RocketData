const INITIAL_STATE={
    rocket:[]
}

const rocketReducer=(state = INITIAL_STATE, action) => {
    switch (action.type) {
      case "SET_ROCKET_ACTION":
        return {
            ...state,
          rocket: action.payload
        };
        default:
            return state;
        }
    
    }
    export default rocketReducer