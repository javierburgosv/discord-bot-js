const dotenv = require('dotenv');
const config = require('./config.json');
const {Client, RichEmbed} = require('discord.js');
const client = new Client();

//Alarm
var date = new Date()

//momentjs
var moment = require('moment')
moment().format();

dotenv.load();

client.on('ready', () => {
    console.log(`Logged in as ${client.user.tag}!`);
  });


client.on('message', msg => {

  //separate the command into prefix|command|args...
  
  if (msg.author.bot) return;
  if (msg.content.indexOf(config.prefix) !== 0) return;
  const args = msg.content.slice(config.prefix.length).trim().split(/ +/g);
  const command = args.shift().toLowerCase();

  switch(command){
    
    case 'ping':
      msg.channel.send("pong")
      break
    
    case 'sendcats':
      msg.channel.send("Sending cats every 24h.")
      break
    
    case 'nomorecats':
      msg.channel.send("No more cats... :confused:")

      break

    default:
      msg.channel.send("Command not found " + msg +" . Use " + config.prefix + "help.")
      break
  }

});

client.login(process.env.TOKEN)
