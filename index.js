const dotenv = require('dotenv');
const {Client, RichEmbed} = require('discord.js')
const client = new Client();
const config = require('./config.json')

dotenv.load();

client.on('ready', () => {
    console.log(`Logged in as ${client.user.tag}!`);
  });

client.on('message', msg => {
  if (msg.content.indexOf(config.prefix) !== 0) return;
 
  const args = msg.content.slice(config.prefix.length).trim().split(/ +/g);
  const command = args.shift().toLowerCase();

  if(command === 'ping')
    msg.reply('pong')

  if(command === 'marquito'){
    const embed = new RichEmbed()
      .setTitle("Marquito")
      .setColor('0xFF0000')
      .setDescription('Esto es la descripción')
    msg.channel.send(embed)
  }

  if(command === 'myavatar')
    msg.reply(msg.author.avatarURL)

  if(command === 'avatar'){
    if (args[0] == null)  return;
    let localUser = msg.mentions.users.first()
    msg.channel.send(localUser.avatarURL)
  }

  });

  client.on('guildMemberAdd', member => {
    const channel = member.guild.channels.find(ch => ch.name === 'member-log');
    if (!channel) return;
    channel.send(`Hombreeee, ${member}`);
  });

client.login(process.env.TOKEN)