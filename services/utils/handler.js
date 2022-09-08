export default function handler(lambda) {
    return async function (event, context) {
      let body, statusCode;
  
      try {
        // Run the Lambda
        const userId = event.requestContext.authorizer.iam.cognitoIdentity.identityId;
        body = await lambda(event, userId, context);
        statusCode = 200;
      } catch (e) {
        console.error(e);
        body = { error: e.message };
        statusCode = 500;
      }
  
      // Return HTTP response
      return {
        statusCode,
        body: JSON.stringify(body),
        headers: {
            "Access-Control-Allow-Origin": "*",
            "Access-Control-Allow-Credentials": true,
          },
        
      };
    };
  }