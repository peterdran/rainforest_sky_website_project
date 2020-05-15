rainforest_sky_website_project
# AWS Cloud Final Project for CTS2375 Spring 2020

#### HTML Author: Peter A. Dranishnikov

#### RF Images: Florida Polytechnic University IEEE RF Committee (used with permission)

## NOTICE: The AWS instance(s) have been shut down. The bucket contents have been moved to Backblaze and may be iterated beyond the version in the repository. The API may or may not be restored elsewhere. 
Backblaze B2 Bucket endpoint: https://f002.backblazeb2.com/file/dranishnikov-website/index.html

# API documentation:

The API provides a basic subscription management service to all users. 
The two actions implemented are Subscribe and Unsubscribe. 
Implemented in Node.js and hosted on AWS Lambda, 
the Lambda functions (named SubscribedHandler and UnsubscribeHandler respectively) add and delete from a DynamoDB NoSQL database, 
storing the subscription list to be used for a mailing list. 

API endpoint: https://cn63ilq03b.execute-api.us-east-1.amazonaws.com/RFcommMailProd/

S3 endpoint: http://dranishnikov-rainforest-sky-website-project.s3.amazonaws.com/index.html

An API client is implemented at the RF Committee subpage, near the footer. 

### Action: Subscribe
##### Method: POST
##### Input content type: application/json
##### Returns: HTTP 200, JSON with a "Subscribed" body message, null on all other conditions

This action subscribes the user to the mailing list. An email is required. 
The discord field is optional. 

##### Example: 
Request body: 
```json
{
	"email": "example1@example.com"
	"discord_uname": "optional#1234"
}
```
Response: 
```json
{
  "statusCode": 200,
  "body": "Subscribed!",
  "headers": {
    "Access-Control-Allow-Origin": "*"
  }
}
```

### Action: Unsubscribe
##### Method: DELETE
##### Input content type: application/json
##### Returns: HTTP 200, JSON with a "Unsubscribed" body message, null on all other conditions

This action unsubscribes the user from the mailing list. An email is required. 
The discord field is ignored. 

##### Example: 
Request body: 
```json
{
	"email": "example1@example.com"
}
```

Response: 
```json
{
  "statusCode": 200,
  "body": "Unsubscribed!",
  "headers": {
    "Access-Control-Allow-Origin": "*"
  }
}
```

## Caveats: 
Any failures in the backend fail silently. I am unable to access CloudWatch, so you'll have to live with it. Sorry. 
