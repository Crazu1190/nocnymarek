const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => { 

});

client.on('message', message => {
    if (message.content === '!mem') {
        message.channel.send('**Konkurs się jeszcze nie zakończył!');
        message.channel.send('');
        message.channel.send('');
  	}
});

// THIS  MUST  BE  THIS  WAY
client.login(process.env.BOT_TOKEN);
