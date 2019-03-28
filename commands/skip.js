module.exports = {
    name: "skip",
    description: "Skip the currently playing song.",
    execute(message, args, music){
        const ytdl = require('ytdl-core');
        const { voiceChannel } = message.member;

        if (music.size() <= 1 || !voiceChannel.connection.speaking) return message.channel.send("I can't! >.<'")

        voiceChannel.leave()
        voiceChannel.join().then(connection => {

            var dispatcher = connection;

            try{
                const stream = ytdl(music.getFirst(), { filter: 'audioonly'});
                music.print()
                dispatcher = connection.playStream(stream);
                message.channel.send(`Playing Video!`)
                
            } catch (e){
                console.log(e)
                return message.channel.send("Invalid url >(");
            }

            try{
                dispatcher.on('end', () => {
                    music.removeFirst()
                    if (music.empty()) return message.channel.send("No more videos to play :[");
                    const stream = ytdl(music.getFirst(), { filter: 'audioonly'});
                    dispatcher = connection.playStream(stream);
                    console.log("Song ended")
                });
            } catch (e) {
                return message.channel.send("No more videos to play :[");
            }
        })
    },
}