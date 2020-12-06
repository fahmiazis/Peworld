import http from '../../helpers/http';
import qs from 'querystring';

export default {
  addExperience: (token, data) => ({
    type: 'ADD_EXPERIENCE',
    payload: http(token).post('job-seeker/experience', qs.stringify(data)),
  }),
  editExperience: (token, data, id) => ({
    type: 'EDIT_EXPERIENCE',
    payload: http(token).patch(`job-seeker/experience/${id}`, qs.stringify(data)),
  }),
  deleteExperience: (token, id) => ({
    type: 'DELETE_EXPERIENCE',
    payload: http(token).delete(`job-seeker/experience/${id}`),
  })
};
