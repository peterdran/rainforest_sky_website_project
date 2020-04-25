const AWS = require('aws-sdk');
const dyDB = new AWS.DynamoDB.DocumentClient({region: 'us-east-1'});

exports.handler = async (event, context, callback) => {
    //Don't do this in PROD?
    var email = event.email;
    
    await removeSub(email).then(() => {
        callback(null, {
            statusCode: 200,
            body: 'Unsubscribed!',
            headers: {
                'Access-Control-Allow-Origin' : '*'
            }
        });
    }).catch((err) => {
        console.error(err);
    });
};

function removeSub(email)
{
    const params = {
        TableName: 'ieeerfcomm_maillist',
        Key: {
            'email': email
        }
        /*
        Item: {
            'email' : email
        }*/
    };
    return dyDB.delete(params).promise();
}
