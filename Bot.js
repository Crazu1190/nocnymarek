const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => { 

});

client.on('message', message => {
    if (message.content === '!mem') {
        message.channel.send('**Bot został wyłączony!**');
        message.channel.send('**Przez:** Crazy1190');
        message.channel.send('**Powód:** Nie podano');
  	}
});

// THIS  MUST  BE  THIS  WAY
client.login(process.env.BOT_TOKEN);
