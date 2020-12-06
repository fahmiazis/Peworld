import http from '../../helpers/http';
import qs from 'querystring';

export default {
  addExperience: (token, data) => ({
    type: 'ADD_EXPERIENCE',
    payload: http(token).post('job-seeker/experience', qs.stringify(data)),
  }),
};
