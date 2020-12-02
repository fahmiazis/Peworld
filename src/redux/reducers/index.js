import {combineReducers} from 'redux';

import auth from './auth';
import jobseeker from './jobseeker';
import company from './company';

export default combineReducers({
  auth,
  jobseeker,
  company,
});
