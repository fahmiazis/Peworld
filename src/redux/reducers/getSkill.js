const initialState = {
  skill: [],
  isLoading: false,
  isError: false,
  alertMsg: '',
};

export default (state = initialState, action) => {
  switch (action.type) {
    case 'GET_SKILL_PENDING': {
      return {
        ...state,
        isLoading: true,
        isError: false,
        alertMsg: 'get message',
      };
    }
    case 'GET_SKILL_FULFILLED': {
      return {
        ...state,
        isLoading: false,
        isLogin: true,
        isError: false,
        alertMsg: 'Login success',
        token: action.payload.data.token,
      };
    }
    case 'GET_SKILL_REJECTED': {
      return {
        ...state,
        isLogin: false,
        isLoading: false,
        isError: true,
        alertMsg: 'Wrong email or password',
      };
    }
    case 'CLEAR': {
      return {
        ...state,
        isError: false,
        alertMsg: '',
        isLoading: false,
      };
    }
    default: {
      return state;
    }
  }
};
