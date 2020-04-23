const AWS = require('aws-sdk');
const dyDB = new AWS.DynamoDB.DocumentClient({region: 'us-east-1'});

exports.handler = async (event, context, callback) => {
    //Don't do this in PROD
    const requestID = context.awsRequestId;
    await createMessage(requestID).then(() => {
        callback(null, {
            statusCode: 201,
            body: '',
            headers: {
                'Access-Control-Allow-Origin' : '*'
            }
        })
    }).catch((err) => {
        console.error(err)
    });
};

function createMessage(requestID)
{
    const params = {
        TableName: 'msg',
        Item: {
            'msgID' : requestID,
            'msg' : 'Hello from lambda'
        }
    }
    return dyDB.put(params).promise();
}
