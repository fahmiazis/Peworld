import http from '../../helpers/http';
import qs from 'querystring';

export default {
  addPorto: (token, data) => ({
    type: 'ADD_PORTOFOLIO',
    payload: http(token).post('job-seeker/portofolio', qs.stringify(data)),
  }),
  editPortofolio: (token, data, id) => ({
    type: 'EDIT_PORTOFOLIO',
    payload: http(token).patch(`job-seeker/portofolio/${id}`, qs.stringify(data)),
  }),
  editPortofolioImage: (token, data, id) => ({
    type: 'EDIT_PORTOFOLIO',
    payload: http(token).patch(`job-seeker/portofolio/${id}`, data),
  })
};
