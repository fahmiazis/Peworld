const initialStateProfile = {
  isSuccessGetProfileSeeker: false,
  isSuccess: false,
  isLoading: false,
  isError: false,
  alertMsg: '',
  profileJobSeeker: {},
  detailCompany: {},
  listCompany: [],
  successEdit: false
};

export default (state = initialStateProfile, action) => {
  switch (action.type) {
    case 'LOGOUT': {
      return {
        isSuccessGetProfileSeeker: false,
        isSuccess: false,
        isLoading: false,
        isError: false,
        alertMsg: '',
        profileJobSeeker: {},
      };
    }
    case 'GET_PROFILE_SEEKER_PENDING': {
      return {
        ...state,
        isLoading: true,
        isSuccess: false,
        isError: false,
      };
    }
    case 'GET_PROFILE_SEEKER_REJECTED': {
      return {
        ...state,
        isSuccess: false,
        isLoading: false,
        isError: true,
        alertMsg: action.payload.response.data.message,
      };
    }
    case 'GET_PROFILE_SEEKER_FULFILLED': {
      return {
        ...state,
        isLoading: false,
        isError: false,
        isSuccessGetProfileSeeker: true,
        alertMsg: action.payload.data.message,
        profileJobSeeker: action.payload.data.result,
      };
    }
    case 'GET_LIST_COMPANY_PENDING': {
      return {
        ...state,
        isLoading: true,
        isSuccess: false,
        isError: false,
        alertMsg: 'Loading...',
      };
    }
    case 'GET_LIST_COMPANY_REJECTED': {
      return {
        ...state,
        isSuccess: false,
        isLoading: false,
        isError: true,
        alertMsg: 'Error',
      };
    }
    case 'GET_LIST_COMPANY_FULFILLED': {
      return {
        ...state,
        isLoading: false,
        isError: false,
        isSuccess: true,
        alertMsg: action.payload.data.message,
        listCompany: action.payload.data.result.rows,
      };
    }
    case 'GET_DETAIL_COMPANY_PENDING': {
      return {
        ...state,
        isLoading: true,
        isSuccess: false,
        isError: false,
        alertMsg: 'Loading...',
      };
    }
    case 'GET_DETAIL_COMPANY_REJECTED': {
      return {
        ...state,
        isSuccess: false,
        isLoading: false,
        isError: true,
        alertMsg: 'Error',
      };
    }
    case 'GET_DETAIL_COMPANY_FULFILLED': {
      return {
        ...state,
        isLoading: false,
        isError: false,
        isSuccess: true,
        alertMsg: action.payload.data.message,
        detailCompany: action.payload.data.result,
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
        isSuccessGetProfileSeeker: false,
        isSuccess: false,
        isLoading: false,
        isError: false,
        alertMsg: '',
        successEdit: false
      };
    }
    case 'EDIT_EXPERIENCE_PENDING': {
      return {
        ...state,
        isLoading: true,
      };
    }
    case 'EDIT_EXPERIENCE_REJECTED': {
      return {
        ...state,
        isLoading: false,
        isError: true,
      };
    }
    case 'EDIT_EXPERIENCE_FULFILLED': {
      return {
        ...state,
        isLoading: false,
        isError: false,
        successEdit: true,
      };
    }
    default: {
      return state;
    }
  }
};
