const initialState = {
  data: {},
  isLoading: false,
  isError: false,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case 'EDIT_PORTOFOLIO_PENDING': {
      return {
        ...state,
        isLoading: true,
      };
    }
    case 'EDIT_PORTOFOLIO_REJECTED': {
      return {
        ...state,
        isLoading: false,
        isError: true,
      };
    }
    case 'EDIT_PORTOFOLIO_FULFILLED': {
      return {
        ...state,
        isLoading: false,
        isError: false,
      };
    }

    default: {
      return state;
    }
  }
};
