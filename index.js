const Discord = require('discord.js')
const client = new Discord.Client();

client.on('ready', () => {
    console.log(`Logged in as ${client.user.tag}!`);
  });

client.on('message', msg => {
    if(msg.content === 'ping')
        msg.reply('pong')
  });

client.login('NTUzMjkyOTQzNTAzMzkyNzc2.D2mHWA.DwJh7rrjZVJaZ83Z0ExTSCX3WgI')