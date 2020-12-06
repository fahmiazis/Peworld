const initialStateCompany = {
  isSuccessGetProfileCompany: false,
  isSuccess: false,
  isLoading: false,
  isError: false,
  isAvaUpdated: false,
  isProfileUpdated: false,
  alertMsg: '',
  profileCompany: {},
  listJobSeeker: [],
  listFullStackJobSeeker: [],
  listMobileJobSeeker: [],
  listWebJobSeeker: [],
  detailSeeker: {},
  resultSearch: [],
};

export default (state = initialStateCompany, action) => {
  switch (action.type) {
    case 'LOGOUT': {
      return {
        isSuccessGetProfileCompany: false,
        isSuccess: false,
        isLoading: false,
        isError: false,
        alertMsg: '',
        profileCompany: {},
        listJobSeeker: [],
        listFullStackJobSeeker: [],
        listMobileJobSeeker: [],
        listWebJobSeeker: [],
        detailSeeker: {},
        resultSearch: [],
      };
    }
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
        isProfileUpdated: false,
        isSuccessGetProfileCompany: true,
        alertMsg: '',
        profileCompany: action.payload.data.result,
      };
    }
    case 'GET_LIST_JOBSEEKER_PENDING': {
      return {
        ...state,
        isLoading: true,
        isSuccess: false,
        isError: false,
        alertMsg: 'Loading...',
      };
    }
    case 'GET_LIST_JOBSEEKER_REJECTED': {
      return {
        ...state,
        isSuccess: false,
        isLoading: false,
        isError: true,
        alertMsg: 'Error',
      };
    }
    case 'GET_LIST_JOBSEEKER_FULFILLED': {
      return {
        ...state,
        isLoading: false,
        isError: false,
        isSuccess: true,
        // alertMsg: action.payload.data.message,
        listJobSeeker: action.payload.data.result.rows,
      };
    }
    case 'GET_LIST_FULLSTACK_JOBSEEKER_PENDING': {
      return {
        ...state,
        isLoading: true,
        isSuccess: false,
        isError: false,
        alertMsg: 'Loading...',
      };
    }
    case 'GET_LIST_FULLSTACK_JOBSEEKER_REJECTED': {
      return {
        ...state,
        isSuccess: false,
        isLoading: false,
        isError: true,
        alertMsg: 'Error',
      };
    }
    case 'GET_LIST_FULLSTACK_JOBSEEKER_FULFILLED': {
      return {
        ...state,
        isLoading: false,
        isError: false,
        isSuccess: true,
        alertMsg: action.payload.data.message,
        listFullStackJobSeeker: action.payload.data.result.rows,
      };
    }
    case 'GET_LIST_MOBILE_JOBSEEKER_PENDING': {
      return {
        ...state,
        isLoading: true,
        isSuccess: false,
        isError: false,
        alertMsg: 'Loading...',
      };
    }
    case 'GET_LIST_MOBILE_JOBSEEKER_REJECTED': {
      return {
        ...state,
        isSuccess: false,
        isLoading: false,
        isError: true,
        alertMsg: 'Error',
      };
    }
    case 'GET_LIST_MOBILE_JOBSEEKER_FULFILLED': {
      return {
        ...state,
        isLoading: false,
        isError: false,
        isSuccess: true,
        alertMsg: action.payload.data.message,
        listMobileJobSeeker: action.payload.data.result.rows,
      };
    }
    case 'GET_LIST_WEB_JOBSEEKER_PENDING': {
      return {
        ...state,
        isLoading: true,
        isSuccess: false,
        isError: false,
        alertMsg: 'Loading...',
      };
    }
    case 'GET_LIST_WEB_JOBSEEKER_REJECTED': {
      return {
        ...state,
        isSuccess: false,
        isLoading: false,
        isError: true,
        alertMsg: 'Error',
      };
    }
    case 'GET_LIST_WEB_JOBSEEKER_FULFILLED': {
      return {
        ...state,
        isLoading: false,
        isError: false,
        isSuccess: true,
        alertMsg: action.payload.data.message,
        listWebJobSeeker: action.payload.data.result.rows,
      };
    }
    case 'SEARCH_JOB_SEEKER_PENDING': {
      return {
        ...state,
        isLoading: true,
        isSuccess: false,
        isError: false,
        alertMsg: 'Loading...',
      };
    }
    case 'SEARCH_JOB_SEEKER_REJECTED': {
      return {
        ...state,
        isSuccess: false,
        isLoading: false,
        isError: true,
        alertMsg: 'Error',
      };
    }
    case 'SEARCH_JOB_SEEKER_FULFILLED': {
      return {
        ...state,
        isLoading: false,
        isError: false,
        isSuccess: true,
        alertMsg: action.payload.data.message,
        resultSearch: action.payload.data.result.rows,
        pageInfo: action.payload.data.pageInfo,
      };
    }
    case 'NEXT_SEEKER_PENDING': {
      return {
        ...state,
        isLoading: true,
        isError: false,
        alertMsg: 'Loading..',
      };
    }
    case 'NEXT_SEEKER_REJECTED': {
      return {
        ...state,
        isLoading: false,
        isError: true,
        alertMsg: 'Failed get message',
      };
    }
    case 'NEXT_SEEKER_FULFILLED': {
      return {
        ...state,
        isLoading: false,
        isError: false,
        resultSearch: [
          ...state.resultSearch,
          ...action.payload.data.result.rows,
        ],
        pageInfo: action.payload.data.pageInfo,
        alertMsg: '',
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
        isProfileUpdated: true,
      };
    }
    case 'UPDATE_AVA_PENDING': {
      return {
        ...state,
        isLoading: true,
        isSuccess: false,
        isError: false,
      };
    }
    case 'UPDATE_AVA_REJECTED': {
      return {
        ...state,
        isSuccess: false,
        isLoading: false,
        isError: true,
        alertMsg: action.payload.response.data.message,
      };
    }
    case 'UPDATE_AVA_FULFILLED': {
      return {
        ...state,
        isLoading: false,
        isError: false,
        isSuccess: false,
        isAvaUpdated: true,
      };
    }
    case 'CLEAR_MESSAGE': {
      return {
        ...state,
        isSuccessGetProfileCompany: false,
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
