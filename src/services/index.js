import axios from 'axios';
import * as config from '../helpers';

axios.defaults.baseURL = `${config.apiURL}:${config.apiPort}`;
axios.defaults.timeout = 25000;

export * from './auth.service';
export * from './notification.service';
