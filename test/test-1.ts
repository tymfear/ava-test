import test, { ExecutionContext } from "ava";
import axios, { AxiosResponse, AxiosInstance } from "axios";
const AxiosLogger = require("axios-logger");

const instance: AxiosInstance = axios.create();
instance.interceptors.request.use(
  AxiosLogger.requestLogger,
  AxiosLogger.errorLogger
);
instance.interceptors.response.use(
  AxiosLogger.responseLogger,
  AxiosLogger.errorLogger
);

// test.before(() => {
//   throw Error("adad");
// });

test("[21312] Another test 2", async (t: ExecutionContext) => {
  const result: AxiosResponse = await instance("http://ipv4.icanhazip.com");

  t.is(result.data, "asd");
});
