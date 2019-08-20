const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => { 

});

client.on('message', message => {
    if (message.content === '!mem') {
        message.channel.send('```Konkurs na mem miesiąca się jeszcze nie skończył! Konkurs skończy się dnia: 01.09.2019```');
  	}
});

// THIS  MUST  BE  THIS  WAY
client.login(process.env.BOT_TOKEN);
