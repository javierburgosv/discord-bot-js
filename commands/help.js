module.exports = {
	name: 'help',
	description: 'Shows all commands available.',
	execute(message, args) {
        //TODO: Link to all the commands
		message.channel.send('All commands: ')
	},
};