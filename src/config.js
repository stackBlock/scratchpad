export default {
    MAX_ATTACHMENT_SIZE: 5000000,
    s3: {
        REGION: "us-east-1",
        BUCKET: "stachowitz-serverless"
    },
    apiGateway: {
        REGION: "us-east-1",
        URL: "https://57m9facagg.execute-api.us-east-1.amazonaws.com/prod"
    },
    cognito: {
        REGION: "us-east-1",
        USER_POOL_ID: "us-east-1_TD3ab7n1E",
        APP_CLIENT_ID: "56m6pq0u0100aihl3v0lf2o34i",
        IDENTITY_POOL_ID: "us-east-1:5cb615c2-5248-499b-90c8-2acb7cc1bb92"
    }
};