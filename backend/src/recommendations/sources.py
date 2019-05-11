import json
import discord

messages = []
async def getProjects():
    client = discord.Client()
    await client.login('NTc2Nzc3NzE4NzcyMDA2OTMy.XNbcPA.AAWF1eQ_VdnY1FZxiZq2XJ89SK4')
    print('We have logged in as {0.user}'.format(client))
    channel = client.get_channel(576780855175806997)
    messages = await channel.history(limit=123).flatten()
