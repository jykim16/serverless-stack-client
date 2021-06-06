const config = {
  s3: {
    REGION: "us-east-1",
    BUCKET: "jkim-serverless",
  },
  apiGateway: {
    REGION: "us-east-1",
    URL: "https://5mhvxt5c6g.execute-api.us-east-1.amazonaws.com/prod"
  },
  cognito: {
    REGION: "us-east-1",
    USER_POOL_ID: "us-east-1_VqJpJtWVF",
    APP_CLIENT_ID: "1mpha1a3sj98e4istd46uhehka",
    IDENTITY_POOL_ID: "69a18b4c-975c-4b36-9af2-6c48c6127edc"
  }
}
export default config