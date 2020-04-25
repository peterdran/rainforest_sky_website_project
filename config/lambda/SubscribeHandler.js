const AWS = require('aws-sdk');
const dyDB = new AWS.DynamoDB.DocumentClient({region: 'us-east-1'});

exports.handler = async (event, context, callback) => {
    //Don't do this in PROD?
    
    var email = event.email;
    var discord =null;
    if(event.discord_uname)
    {
        var discord = event.discord_uname;
    }
    
    await createSub(email, discord).then(() => {
        callback(null, {
            statusCode: 200,
            body: 'Subscribed!',
            headers: {
                'Access-Control-Allow-Origin' : '*'
            }
        });
    }).catch((err) => {
        console.error(err);
    });
};

function createSub(email, discord_uname = null)
{
    const params = {
        TableName: 'ieeerfcomm_maillist',
        Item: {
            'email' : email,
            'discord_uname' : discord_uname
        }
    };
    return dyDB.put(params).promise();
}
