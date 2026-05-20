import dotenv from 'dotenv';
dotenv.config();

export const ENV = {
  SF_USERNAME: process.env.SF_USERNAME!,
  SF_PASSWORD: process.env.SF_PASSWORD!,
  SF_URL: 'https://login.salesforce.com',
  SF_ORG_URL: 'https://codewithab-dev-ed.develop.my.salesforce.com',
};