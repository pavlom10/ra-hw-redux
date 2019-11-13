import { CHANGE_SERVICE_FIELD, EDIT_SERVICE, CANCEL_SERVICE, ADD_SERVICE } from '../actions/actionTypes'

const initialState = {
  id: '',
  name: '',
  price: '',
  cancel: false
};

export default function serviceAddReducer(state = initialState, action) {
  switch (action.type) {
    case CHANGE_SERVICE_FIELD:
      {
        const {name, value} = action.payload;
        return {...state, [name]: value};
      }
    case EDIT_SERVICE:
      {
        const {id, name, price} = action.payload;
        
        console.log(id, name, price);
        return {...state, id, name, price, cancel: true};
      }
    case ADD_SERVICE:
      return {...initialState};
    case CANCEL_SERVICE:
      return {...initialState};
    default:
      return state;
  }
}
