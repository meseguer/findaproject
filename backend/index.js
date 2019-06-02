// index.js
const serverless = require('serverless-http');
const bodyParser = require('body-parser');
const express = require('express');
const app = express();
const AWS = require('aws-sdk');

const IS_OFFLINE = process.env.IS_OFFLINE;
let dynamoDb;
if (IS_OFFLINE === 'true') {
  dynamoDb = new AWS.DynamoDB.DocumentClient({
    region: 'localhost',
    endpoint: 'http://localhost:8000'
  });
} else {
  dynamoDb = new AWS.DynamoDB.DocumentClient();
}

app.use(bodyParser.json({ strict: false }));

const { check } = require('express-validator/check');

app.use('/projects', require('./routes/project'));

module.exports.handler = serverless(app);
