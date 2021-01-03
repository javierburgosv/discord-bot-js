module.exports = {
	name: 'avatar',
	description: 'Sends the avatar image of the user tagged.',
	execute(message) {
        	const user = message.mentions.users.first() || message.author;
    		const avatarEmbed = new Discord.RichEmbed()
        	.setColor(0x333333)
        	.setAuthor(user.username)
        	.setImage(user.avatarURL);
    	message.channel.send(avatarEmbed);
	},
};
