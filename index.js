const dotenv = require('dotenv');
const {Client, RichEmbed} = require('discord.js')
const client = new Client();
const config = require('./config.json')

dotenv.load();

client.on('ready', () => {
    console.log(`Logged in as ${client.user.tag}!`);
  });

client.on('message', msg => {
  //Procesar comando
  if (msg.content.indexOf(config.prefix) !== 0) return;
 
  const args = msg.content.slice(config.prefix.length).trim().split(/ +/g);
  const command = args.shift().toLowerCase();

  //Answer
  if(command === 'ping')
    msg.reply('pong')

  //Makes a basic Embed
  if(command === 'marquito'){
    const embed = new RichEmbed()
      .setTitle("Marquito")
      .setColor('0xFF0000')
      .setDescription('Esto es la descripción')
    msg.channel.send(embed)
  }

  //Shows your owun profile pic.
  if(command === 'myavatar')
    msg.reply(msg.author.avatarURL)

  //Shows the profile pic of an user.
  if(command === 'avatar'){
    if (args[0] == null)  return;
    let localUser = msg.mentions.users.first()
    msg.channel.send(localUser.avatarURL)
  }

  //TODO: Look for a way to find more images.
  if(command === 'cat'){
    msg.reply("https://proxy.duckduckgo.com/iu/?u=http%3A%2F%2Faehnt.com%2Fveterinary-blog%2Fwp-content%2Fuploads%2F2015%2F06%2FiStock_000001997583_Medium1.jpg&f=1")
  }

  //Sends an anonymous direct message to an user.
  if(command === 'whisper') {
    if (args[0] == null) return;
    let localUser = msg.mentions.users.first()
    var string = ' '
    args.forEach(element => {
      string += ' ' + element
    });
    localUser.send(string)
    msg.delete()
    msg.channel.send('Someone sent a whisper to: ' + localUser)
  }

  //Clears the number of messages specified
  if(command === 'clear'){

    if(args[0] > 99){
      msg.channel.send("You can only delete up to 99 messages at a time.").then(m => m.delete(3000));
      return;
    } 
    msg.channel.bulkDelete(args[0]).then(() => {
      msg.channel.send("Purged "+ args[0] + " messages.").then(m => m.delete(3000));
    });
  }

});

client.on('guildMemberAdd', member => {
  const channel = member.guild.channels.find(ch => ch.name === config.welcome);
  if (!channel) return;
  channel.send(`Hombreeee, ${member}`);
});

  
client.login(process.env.TOKEN)