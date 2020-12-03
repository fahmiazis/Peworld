const initialStateCompany = {
  isSuccess: false,
  isLoading: false,
  isError: false,
  alertMsg: '',
  profileCompany: {},
  listJobSeeker: [],
};

export default (state = initialStateCompany, action) => {
  switch (action.type) {
    case 'GET_PROFILE_COMPANY_PENDING': {
      return {
        ...state,
        isLoading: true,
        isSuccess: false,
        isError: false,
        alertMsg: 'Loading...',
      };
    }
    case 'GET_PROFILE_COMPANY_REJECTED': {
      return {
        ...state,
        isSuccess: false,
        isLoading: false,
        isError: true,
        alertMsg: action.payload.response.data.message,
      };
    }
    case 'GET_PROFILE_COMPANY_FULFILLED': {
      return {
        ...state,
        isLoading: false,
        isError: false,
        isSuccess: true,
        alertMsg: action.payload.data.message,
        profileCompany: action.payload.data.result,
      };
    }
    case 'GET_LIST_JOB_SEEKER_PENDING': {
      return {
        ...state,
        isLoading: true,
        isSuccess: false,
        isError: false,
        alertMsg: 'Loading...',
      };
    }
    case 'GET_LIST_JOB_SEEKER_REJECTED': {
      return {
        ...state,
        isSuccess: false,
        isLoading: false,
        isError: true,
        alertMsg: action.payload.response.data.message,
      };
    }
    case 'GET_LIST_JOB_SEEKER_FULFILLED': {
      return {
        ...state,
        isLoading: false,
        isError: false,
        isSuccess: true,
        alertMsg: action.payload.data.message,
        listJobSeeker: action.payload.data.result.rows,
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
