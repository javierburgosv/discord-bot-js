module.exports = {
	name: 'whisper',
	description: 'Sends a private message to the user specified.',
	execute(message, args) {
        message.channel.send(`Someone sent a whisper to ${args[0]}`)
        var msg = ''
        args.forEach(element => {
            msg += (' ' + element)
        })
        message.mentions.users.first().send(msg);
        message.delete()
	},
};