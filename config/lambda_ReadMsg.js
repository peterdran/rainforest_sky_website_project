const AWS = require('aws-sdk');
const dyDB = new AWS.DynamoDB.DocumentClient({region: 'us-east-1'});

exports.handler = async (event, context, callback) => {
    //Don't do this in PROD
    await readMessage().then(data => {
        data.Items.forEach(function(item) {
            console.log(item.message)
        });
        callback(null, {
            statusCode: 200,
            body: data.Items,
            headers: {
                'Access-Control-Allow-Origin' : '*'
            },
        })
    }).catch((err) => {
        console.error(err);
    })
};

function readMessage()
{
    const params = {
        TableName: 'msg',
        Limit: 10
    }
    return dyDB.scan(params).promise();
}
