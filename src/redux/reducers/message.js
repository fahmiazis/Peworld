const initialStateMsg = {
  isLoadingGetListChat: false,
  isLoadingGetDetail: false,
  isLoading: false,
  isError: false,
  alertMsg: '',
  isSuccess: false,
  isMessageSent: false,
  data: {},
  detailMessage: {},
  pageInfo: {},
};

export default (state = initialStateMsg, action) => {
  switch (action.type) {
    case 'LOGOUT': {
      return {
        isLoadingGetDetail: false,
        isLoadingGetListChat: false,
        isLoading: false,
        isError: false,
        alertMsg: '',
        isSuccess: false,
        data: {},
        detailMessage: {},
        pageInfo: {},
      };
    }
    case 'LIST_CHAT_COMPANY_PENDING': {
      return {
        ...state,
        isLoadingGetListChat: true,
        isError: false,
        alertMsg: 'Loading..',
      };
    }
    case 'LIST_CHAT_COMPANY_REJECTED': {
      return {
        ...state,
        isLoadingGetListChat: false,
        isError: true,
        alertMsg: 'Failed get message',
      };
    }
    case 'LIST_CHAT_COMPANY_FULFILLED': {
      return {
        ...state,
        isLoadingGetListChat: false,
        isError: false,
        data: action.payload.data,
        alertMsg: '',
      };
    }
    case 'LIST_CHAT_JOBSEEKER_PENDING': {
      return {
        ...state,
        isLoadingGetListChat: true,
        isError: false,
        alertMsg: 'Loading..',
      };
    }
    case 'LIST_CHAT_JOBSEEKER_REJECTED': {
      return {
        ...state,
        isLoadingGetListChat: false,
        isError: true,
        alertMsg: 'Failed get message',
      };
    }
    case 'LIST_CHAT_JOBSEEKER_FULFILLED': {
      return {
        ...state,
        isLoadingGetListChat: false,
        isError: false,
        data: action.payload.data,
        alertMsg: '',
      };
    }
    case 'DETAIL_MESSAGE_JOBSEEKER_PENDING': {
      return {
        ...state,
        isLoadingGetDetail: true,
        isError: false,
        alertMsg: '',
      };
    }
    case 'DETAIL_MESSAGE_JOBSEEKER_REJECTED': {
      return {
        ...state,
        isLoadingGetDetail: false,
        isError: true,
        alertMsg: 'Failed get message',
      };
    }
    case 'DETAIL_MESSAGE_JOBSEEKER_FULFILLED': {
      return {
        ...state,
        isLoadingGetDetail: false,
        isError: false,
        detailMessage: action.payload.data.data,
        pageInfo: action.payload.data.pageInfo,
        alertMsg: '',
      };
    }
    case 'DETAIL_MESSAGE_COMPANY_PENDING': {
      return {
        ...state,
        isLoadingGetDetail: true,
        isError: false,
        alertMsg: 'Loading..',
      };
    }
    case 'DETAIL_MESSAGE_COMPANY_REJECTED': {
      return {
        ...state,
        isLoadingGetDetail: false,
        isError: true,
        alertMsg: 'Failed get message',
      };
    }
    case 'DETAIL_MESSAGE_COMPANY_FULFILLED': {
      return {
        ...state,
        isLoadingGetDetail: false,
        isError: false,
        detailMessage: action.payload.data.data,
        pageInfo: action.payload.data.pageInfo,
        alertMsg: '',
      };
    }
    case 'SEND_MESSAGE_SEEKER_PENDING': {
      return {
        ...state,
        isLoading: true,
        isError: false,
        alertMsg: 'Loading..',
      };
    }
    case 'SEND_MESSAGE_SEEKER_REJECTED': {
      return {
        ...state,
        isLoading: false,
        isError: true,
        alertMsg: action.payload.response.data.message,
      };
    }
    case 'SEND_MESSAGE_SEEKER_FULFILLED': {
      return {
        ...state,
        isLoading: false,
        isError: false,
        isMessageSent: true,
        alertMsg: action.payload.data.message,
      };
    }
    case 'SEND_MESSAGE_COMPANY_PENDING': {
      return {
        ...state,
        isLoading: true,
        isError: false,
        alertMsg: 'Loading..',
      };
    }
    case 'SEND_MESSAGE_COMPANY_REJECTED': {
      return {
        ...state,
        isLoading: false,
        isError: true,
        alertMsg: action.payload.response.data.message,
      };
    }
    case 'SEND_MESSAGE_COMPANY_FULFILLED': {
      return {
        ...state,
        isLoading: false,
        isError: false,
        isMessageSent: true,
        alertMsg: action.payload.data.message,
      };
    }
    case 'NEXT_MESSAGE_PENDING': {
      return {
        ...state,
        isLoading: true,
        isError: false,
        alertMsg: 'Loading..',
      };
    }
    case 'NEXT_MESSAGE_REJECTED': {
      return {
        ...state,
        isLoading: false,
        isError: true,
        alertMsg: 'Failed get message',
      };
    }
    case 'NEXT_MESSAGE_FULFILLED': {
      return {
        ...state,
        isLoading: false,
        isError: false,
        detailMessage: [...state.detailMessage, ...action.payload.data.data],
        pageInfo: action.payload.data.pageInfo,
        alertMsg: '',
      };
    }
    case 'CLEAR_MESSAGE': {
      return {
        ...state,
        isLoadingGetListChat: false,
        isLoadingGetDetail: false,
        isLoading: false,
        isError: false,
        alertMsg: '',
        isSuccess: false,
        isMessageSent: false,
      };
    }
    default: {
      return state;
    }
  }
};
