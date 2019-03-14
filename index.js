const dotenv = require('dotenv');
const config = require('./config.json')
const {Client, RichEmbed} = require('discord.js')
const client = new Client();

dotenv.load();

client.on('ready', () => {
    console.log(`Logged in as ${client.user.tag}!`);
  });


client.on('message', msg => {

  //Procesar comando
  const prefix = config.prefix
  if (msg.content.indexOf(prefix) !== 0) return;
  const args = msg.content.slice(prefix).trim().split(/ +/g);
  const command = args.shift().toLowerCase();
  const channel = msg.channel
  

  switch(command){
    case 'ping':
      ping(channel)
      break
    
    default:
      channel.send("Command not found. Use '" + prefix + "help'.")
      break
  }


});

function ping(channel){
  channel.send("pong")
}

  
client.login(process.env.TOKEN)