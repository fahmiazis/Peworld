const initialStateMsg = {
  isLoading: false,
  isError: false,
  alertMsg: '',
  data: {},
}

export default (state = initialStateMsg, action) => {
  switch (action.type) {
    case 'LIST_CHAT_COMPANY_PENDING': {
      return {
        ...state,
        isLoading: true,
        isError: false,
        alertMsg: '',
      };
    }
    case 'LIST_CHAT_COMPANY_REJECTED': {
      return {
        ...state,
        isLoading: false,
        isError: true,
        alertMsg: 'Failed get message',
      };
    }
    case 'LIST_CHAT_COMPANY_FULFILLED': {
      return {
        ...state,
        isLoading: false,
        isError: false,
        data: action.payload.data,
        alertMsg: '',
      };
    }
    case 'LIST_CHAT_JOBSEEKER_PENDING': {
      return {
        ...state,
        isLoading: true,
        isError: false,
        alertMsg: '',
      };
    }
    case 'LIST_CHAT_JOBSEEKER_REJECTED': {
      return {
        ...state,
        isLoading: false,
        isError: true,
        alertMsg: 'Failed get message',
      };
    }
    case 'LIST_CHAT_JOBSEEKER_FULFILLED': {
      return {
        ...state,
        isLoading: false,
        isError: false,
        data: action.payload.data,
        alertMsg: '',
      };
    }
    default: {
      return state;
    }
  }
};
