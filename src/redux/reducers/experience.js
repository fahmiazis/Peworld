const initialState = {
  data: {},
  isLoading: false,
  isError: false,
  isSuccess: false,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case 'ADD_EXPERIENCE_PENDING': {
      return {
        ...state,
        isLoading: true,
      };
    }
    case 'ADD_EXPERIENCE_REJECTED': {
      return {
        ...state,
        isLoading: false,
        isError: true,
      };
    }
    case 'ADD_EXPERIENCE_FULFILLED': {
      return {
        ...state,
        isLoading: false,
        isError: false,
        isSuccess: true,
      };
    }

    default: {
      return state;
    }
  }
};
