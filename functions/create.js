import uuid from 'uuid';
import * as dynamoDBLib from '../libs/dynamodb-lib';
import { success, failure, parseBody } from '../libs/response-lib';


export async function main(event, context, callback) {
  const data = parseBody(event.body);
  const params = {
    TableName: 'notes',
    Item: {
      userId: event.requestContext.identity.cognitoIdentityId,
      noteId: uuid.v1(),
      content: data.content,
      attachment: data.attachment,
      createdAt: Date.now(), 
    }
  };

  try {
    await dynamoDBLib.call('put', params);
    callback(null, success(params.Item));
  } catch(e) {
    console.error(e);
    callback(null, failure({ status: false }));
  }
};