import {
  userConstants,
} from './constants';

export const initialState = {
  changePassword: false,
  error: null,
};

export function changePassword(state = initialState, action) {
  switch (action.type) {
    case userConstants.CHANGE_PASSWORD_SUCCESS:
      return {
        ...state,
        changePassword: true,
      };
    case userConstants.CHANGE_PASSWORD_FAILURE:
      return {
        ...state,
        error: action.error,
        changePassword: false,
      };
    default :
      return state;
  }
}
