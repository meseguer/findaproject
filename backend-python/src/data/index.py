import discord
import boto3
import uuid

def handler(event, context):
    client = discord.Client()

    @client.event
    async def on_ready():
        channel = client.get_channel(576780855175806997)
        messages = messages = await channel.history().flatten()
        # Save to database
        dynamodb = boto3.client('dynamodb', endpoint_url='http://localhost:8000')
        for message in messages: 
            dynamodb.put_item(
                TableName='projects',
                Item={'ProjectId':{'S':str(uuid.uuid4())}, 'content': {'S': message.content}}
            )
        await client.close()

    client.run('NTc2Nzc3NzE4NzcyMDA2OTMy.XNbcPA.AAWF1eQ_VdnY1FZxiZq2XJ89SK4')

