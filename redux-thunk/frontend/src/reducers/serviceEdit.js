import {

    CHANGE_SERVICE_FIELD,
    EDIT_SERVICE_REQUEST,
    EDIT_SERVICE_FAILURE,
    EDIT_SERVICE_SUCCESS,
    GET_SERVICE_SUCCESS

  } from '../actions/actionTypes'
  
  const initialState = {
    item: { 
        id: null,
        name: '', 
        price: '',  
        content: ''
    },
    loading: false,
    error: null,
    redirect: false
  };
  
  export default function serviceEdit(state = initialState, action) {
    switch (action.type) {
      case EDIT_SERVICE_REQUEST:
        return {
          ...state,
          loading: true,
          error: null,
        };
      case EDIT_SERVICE_FAILURE:
        const {error} = action.payload;
        return {
          ...state,
          loading: false,
          error,
        };
      case EDIT_SERVICE_SUCCESS:
        return {...initialState, redirect: true};
      case CHANGE_SERVICE_FIELD:
        const { name, value } = action.payload;
        const { item } = state;
        return {
          ...state,
          item: {
            ...item,
            [name]: value,
          }
        };
      case GET_SERVICE_SUCCESS:
        {
          const { item } = action.payload;
          return {
            ...state,
            item,
            loading: false,
            error: null,
          };        
        }
      default:
        return state;
    }
  }
  