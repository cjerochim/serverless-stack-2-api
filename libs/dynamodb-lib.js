import AWS from 'aws-sdk';

AWS.config.update({ region: 'us-east-1' });

const call = (action, params) => {
  const dynamoDB = new AWS.DynamoDB.DocumentClient();
  return dynamoDB[action](params).promise();
}


export {
  call
}