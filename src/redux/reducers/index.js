import {combineReducers} from 'redux';

import auth from './auth';
import jobseeker from './jobseeker';
import company from './company';
import user from './user';
import message from './message';
import seekers from './seeker'

export default combineReducers({
  auth,
  jobseeker,
  company,
  user,
  message,
  seekers
});
