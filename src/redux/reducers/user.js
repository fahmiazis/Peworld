const initialStateCompany = {
  isSuccess: false,
  isLoading: false,
  isError: false,
  alertMsg: '',
  userInfo: {},
};

export default (state = initialStateCompany, action) => {
  switch (action.type) {
    case 'SAVE_USER': {
      return {
        ...state,
        userInfo: action.payload,
      };
    }
    case 'CLEAR_MESSAGE': {
      return {
        ...state,
        isSuccess: false,
        isLoading: false,
        isError: false,
        alertMsg: '',
      };
    }
    default: {
      return state;
    }
  }
};
