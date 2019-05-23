import json
import discord
import boto3

def hello(event, context):
    dynamodb = boto3.resource('dynamodb', endpoint_url='http://localhost:8000')
    projects = dynamodb.Table('projects')
    response = projects.scan()
    projects = response['Items']
    for project in projects:
        print(project['content'])

    body = {
        "message": "Go Serverless v1.0! Your function executed successfully!",
        "input": event
    }
    
    response = {
        "statusCode": 200,
        "body": json.dumps(body)
    }

    return response

