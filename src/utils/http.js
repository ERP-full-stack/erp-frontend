import axios from 'axios';
import { HOST } from './../config';

const service = axios.create({
  baseURL: HOST,
  timeout: 20000,
  headers: { format: 'JSON' },
});

export default service;
