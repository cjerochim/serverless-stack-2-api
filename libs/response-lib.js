

const headers = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Credentials': true,
};


const parseBody = body => {
  if(typeof body === 'string') return JSON.parse(body);
  return body;
}

const buildResponse = headers => (statusCode, body) => ({
  statusCode,
  headers, 
  body: JSON.stringify(body),
});


const response = buildResponse(headers);
const failure = body => response(500, body);
const success = body => response(200, body);


export {
  parseBody,
  buildResponse,
  response,
  failure,
  success,
}