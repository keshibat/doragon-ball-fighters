const initialStateSearch = {
  searchField: ''
}

const initialStateFighters = {
  isPending: false,
  fighters: [],
  error: ''
};

export const searchFighters = (state = initialStateSearch, action = {}) => {
         switch (action.type) {
           case "CHANGE_SEARCH_FIELD":
             return { ...state, searchField: action.payload };
           default:
             return state;
         }
       };

export const requestFighters = (state = initialStateFighters, action = {}) => {
         switch (action.type) {
           case "REQUEST_ROBOT_PENDING":
             return { ...state, isPending: true };
           case "REQUEST_ROBOT_SUCCESS":
             return { ...state, fighters: action.payload, isPending: false };
           case "REQUEST_ROBOT_FAILED":
             return { ...state, error: action.payload, isPending: false };
           default:
             return state;
         }
       };
