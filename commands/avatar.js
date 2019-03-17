module.exports = {
	name: 'avatar',
	description: 'Sends the avatar image of the user tagged.',
	execute(message) {
        message.channel.send(message.mentions.users.first().avatarURL)
	},
};