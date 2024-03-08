import { ADD_ITEM, DELETE_ITEM, UPDATE_ITEM } from "./action";


const initialState = {
    items: [],
    isValid: false,
  };
  

const studentReducer = (state = initialState, action) => {
    switch (action.type) {
      case ADD_ITEM:
        return {
          ...state,
          items: [...state.items, action.payload],
        };
      case DELETE_ITEM:
        return {
          ...state,
          items: state.items.filter(item => item.id !== action.payload),
        };
      case UPDATE_ITEM:
        return {
          ...state,
          items: state.items.map(item =>
            item.id === action.payload.id ? action.payload.updatedItem : item
          ),
        };
      case 'VALIDATE_FORM':
        return {
          ...state,
          isValid: action.payload,
        };
      default:
        return state;
    }
  };
  
  export default studentReducer;