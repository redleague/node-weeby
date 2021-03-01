import { version } from '../../package.json';
import { baseURL } from './Constants';
import axios from 'axios';

export function createClient(token: string) {
  return axios.create({
    baseURL: baseURL,
    headers: {
      'User-Agent': `Node-Weeby HTTP Handler (version: ${version})`,
      'Authorization': `Bearer ${token}`,
    },
  });
}
