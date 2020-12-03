const initialStateCompany = {
  isSuccess: false,
  isLoading: false,
  isError: false,
  alertMsg: '',
  profileCompany: {},
  listJobSeeker: [],
  detailSeeker: {},
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
        alertMsg: 'Error',
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
    case 'GET_DETAIL_JOB_SEEKER_PENDING': {
      return {
        ...state,
        isLoading: true,
        isSuccess: false,
        isError: false,
        alertMsg: 'Loading...',
      };
    }
    case 'GET_DETAIL_JOB_SEEKER_REJECTED': {
      return {
        ...state,
        isSuccess: false,
        isLoading: false,
        isError: true,
        alertMsg: 'Error',
      };
    }
    case 'GET_DETAIL_JOB_SEEKER_FULFILLED': {
      return {
        ...state,
        isLoading: false,
        isError: false,
        isSuccess: true,
        alertMsg: action.payload.data.message,
        detailSeeker: action.payload.data.result,
      };
    }
    case 'UPDATE_PROFILE_PENDING': {
      return {
        ...state,
        isLoading: true,
        isSuccess: false,
        isError: false,
      };
    }
    case 'UPDATE_PROFILE_REJECTED': {
      return {
        ...state,
        isSuccess: false,
        isLoading: false,
        isError: true,
        alertMsg: action.payload.response.data.message,
      };
    }
    case 'UPDATE_PROFILE_FULFILLED': {
      return {
        ...state,
        isLoading: false,
        isError: false,
        isSuccess: true,
      };
    }
    case 'UPDATE_AVATAR_PENDING': {
      return {
        ...state,
        isLoading: true,
        isSuccess: false,
        isError: false,
      };
    }
    case 'UPDATE_AVATAR_REJECTED': {
      return {
        ...state,
        isSuccess: false,
        isLoading: false,
        isError: true,
        alertMsg: action.payload.response.data.message,
      };
    }
    case 'UPDATE_AVATAR_FULFILLED': {
      return {
        ...state,
        isLoading: false,
        isError: false,
        isSuccess: true,
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
