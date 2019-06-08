import json


def hello(event, context):
    params = json.loads(event.body)
    projects = params['projects']
