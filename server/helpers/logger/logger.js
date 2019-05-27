import axios from 'axios';
import moment from 'moment';

const logBody = ({
  type,
  endpoint,
  method,
  success,
  err,
  bodyRequest,
  bodyResponse,
  locale,
}) => (
  (type === 'INFO') ? {
    '@timestamp': new Date().toISOString(),
    type,
    endpoint,
    method,
    locale,
  } : {
    '@timestamp': new Date().toISOString(),
    type,
    endpoint,
    method,
    success,
    err,
    bodyRequest,
    bodyResponse,
    locale,
  }
);

const logConsole = (params) => {
  // eslint-disable-next-line no-console
  console.log(logBody(params));
};

const logELK = (data) => {
  const timestampIndex = moment().format('YYYY-MM-DD');
  const url = `${process.env.urlLogger}/${process.env.projectName}-${timestampIndex}/${process.env.projectName}-${timestampIndex}`;

  axios({
    method: 'post',
    url,
    data,
  });
};

export const logger = (params) => {
  if (process.env.urlLogger && (process.env.ENV !== 'development' || process.env.ENV !== 'test')) {
    logELK(logBody(params));
  } else {
    logConsole(params);
  }
};
