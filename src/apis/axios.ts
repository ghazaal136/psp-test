import axios from 'axios';

import { baseUrls } from './base-urls';

const apiServer = axios.create({
  baseURL: baseUrls.apiServer,
});

export const axiosInstances = {
  apiServer,
};
