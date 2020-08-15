export default {
  s3: {
    REGION: "us-east-2",
    BUCKET: "notes-app-uploads-db-bucket",
  },
  apiGateway: {
    REGION: "us-east-2",
    URL: "https://f1yl5voy8a.execute-api.us-east-2.amazonaws.com/prod",
  },
  cognito: {
    REGION: "us-east-2",
    USER_POOL_ID: "us-east-2_9Xj3ivDxg",
    APP_CLIENT_ID: "7f1t6og0boekjie5mp2ihri6nv",
    IDENTITY_POOL_ID: "us-east-2:bb2728ea-b5a9-4ac1-881c-ff2ae545743e",
  },
  MAX_ATTACHMENT_SIZE: 5000000,
  STRIPE_KEY:
    "pk_test_51HEP9wDtye4ifCWOVargMootU8aVSkWjQdCIGMed2Xeku3xX4x3TdjjCr7fBfBIRrazKEAdesLCuXoRJTRIRVC1x00RSoaAT6a",
};
