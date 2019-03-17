module.exports = {
    name: "play",
    description: "Reproduces the sound of a Youtube video on the voice channel.",
    execute(message, args){
        const ytdl = require('ytdl-core');
        const { voiceChannel } = message.member;

        if (!voiceChannel) return message.reply('Please join a voice channel first!');
        
        voiceChannel.join().then(connection => {
            try{
                const stream = ytdl(args[0], { filter: 'audioonly'});
                const dispatcher = connection.playStream(stream);
                message.channel.send(`Playing Video!`)
            } catch (e){
                return message.channel.send("Invalid url >(");
            }
            //dispatcher.on('end', () => voiceChannel.leave());
        });
            
    },
}