const initialState = {
  isLogin: false,
  token: '',
  isLoading: false,
  isError: false,
  alertMsg: '',
};

export default (state = initialState, action) => {
  switch (action.type) {
    case 'LOGIN_PENDING': {
      return {
        ...state,
        isLoading: true,
        isError: false,
        alertMsg: 'Login ...',
      };
    }
    case 'LOGIN_FULFILLED': {
      return {
        ...state,
        isLoading: false,
        isLogin: true,
        isError: false,
        alertMsg: 'Login success',
        token: action.payload.data.token,
      };
    }
    case 'LOGIN_REJECTED': {
      return {
        ...state,
        isLogin: false,
        isLoading: false,
        isError: true,
        alertMsg: 'Wrong email or password',
      };
    }
    case 'SIGNUP_PENDING': {
      return {
        ...state,
        isLoading: true,
        isError: false,
        alertMsg: 'Signup ...',
      };
    }
    case 'SIGNUP_FULFILLED': {
      return {
        ...state,
        isLoading: false,
        isError: false,
        alertMsg: 'Signup success',
        data: action.payload.data,
      };
    }
    case 'SIGNUP_REJECTED': {
      return {
        ...state,
        isLogin: false,
        isLoading: false,
        isError: true,
        alertMsg: 'Register failed',
      };
    }
    case 'LOGOUT': {
      return {
        ...state,
        isLogin: false,
        token: '',
        alertMsg: 'Logout success',
        data: {},
      };
    }
    default: {
      return state;
    }
  }
};
