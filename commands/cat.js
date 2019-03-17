module.exports = {
    name: "cat",
    description: "Sends a random cat image",
    async execute(message){
        
        const fetch = require('superagent')

        let { body } = await fetch
        .get('aws.random.cat/meow')
        if(!{body}) return message.channel.send("Seems like the cats are hiding :[ Try again!");

        message.channel.send(body.file)
        
    }
}