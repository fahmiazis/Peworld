const initialStateProfile = {
  isSuccess: false,
  isLoading: false,
  isError: false,
  alertMsg: '',
  profileJobSeeker: {},
};

export default (state = initialStateProfile, action) => {
  switch (action.type) {
    case 'LOGOUT': {
      return {
        isSuccess: false,
        isLoading: false,
        isError: false,
        alertMsg: '',
        profileJobSeeker: {},
      };
    }
    case 'GET_PROFILE_JOB_SEEKER_PENDING': {
      return {
        ...state,
        isLoading: true,
        isSuccess: false,
        isError: false,
      };
    }
    case 'GET_PROFILE_JOB_SEEKER_REJECTED': {
      return {
        ...state,
        isSuccess: false,
        isLoading: false,
        isError: true,
        alertMsg: action.payload.response.data.message,
      };
    }
    case 'GET_PROFILE_JOB_SEEKER_FULFILLED': {
      return {
        ...state,
        isLoading: false,
        isError: false,
        isSuccess: true,
        alertMsg: action.payload.data.message,
        profileJobSeeker: action.payload.data.result,
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