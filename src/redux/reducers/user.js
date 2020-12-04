const initialStateCompany = {
  isSuccess: false,
  isLoading: false,
  isError: false,
  alertMsg: '',
  userInfo: {},
  jobSeeker: {},
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
    case 'SHOW_JOBSEEKER_PENDING': {
      return {
        ...state,
        isLoading: true,
        isError: false,
        alertMsg: '',
      };
    }
    case 'SHOW_JOBSEEKER_REJECTED': {
      return {
        ...state,
        isLoading: false,
        isError: true,
        alertMsg: 'Failed get info user',
      };
    }
    case 'SHOW_JOBSEEKER_FULFILLED': {
      return {
        ...state,
        isLoading: false,
        isError: false,
        jobSeeker: action.payload.data.result,
        alertMsg: '',
      };
    }
    case 'EDIT_JOBSEEKER_PENDING': {
      return {
        ...state,
        isLoading: true,
        isError: false,
        alertMsg: '',
      };
    }
    case 'EDIT_JOBSEEKER_REJECTED': {
      return {
        ...state,
        isLoading: false,
        isError: true,
        alertMsg: 'Failed update info user',
      };
    }
    case 'EDIT_JOBSEEKER_FULFILLED': {
      return {
        ...state,
        isLoading: false,
        isError: false,
        // jobSeeker: action.payload.data.result,
        alertMsg: '',
      };
    }

    default: {
      return state;
    }
  }
};
