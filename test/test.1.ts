import test, { ExecutionContext } from 'ava';
import axios, { AxiosResponse, AxiosInstance } from 'axios';
const AxiosLogger = require('axios-logger');

const instance: AxiosInstance = axios.create();
instance.interceptors.request.use(AxiosLogger.requestLogger, AxiosLogger.errorLogger);
instance.interceptors.response.use(AxiosLogger.responseLogger, AxiosLogger.errorLogger);

test.skip('[1221341234] Skipped test', async (t) => {
  await instance('http://ipv4.icanhazip.com');
  t.pass();
});
