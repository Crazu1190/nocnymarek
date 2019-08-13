const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => { 

});

client.on('message', message => {
    if (message.content === '!mem') {
        message.channel.send('```Konkurs się jeszcze nie skończył. Czekaj cierpliwie na zakończenie. Koniec konkursu: 01.09.2019r.```');
  	}
});

// THIS  MUST  BE  THIS  WAY
client.login(process.env.BOT_TOKEN);
