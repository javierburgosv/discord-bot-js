module.exports = {
    name: "bye",
    description: "Exits from the voice channel she is in.",
    execute(message){
        const { voiceChannel } = message.member;

        if (!voiceChannel) return message.reply('Hey! You are not even in the voice channel! >.<');
        if (!voiceChannel.connection) return message.reply('You must be on the same voicechannel as me to kick me! -.-');

        voiceChannel.leave();
    },
}