const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => { 

});

client.on('message', message => {
    if (message.content === '!konkurs') {
        message.channel.send('@Ping Ogłoszenia┇📍 Konkurs na mem miesiąca.');
        message.channel.send('**Najzabawniejszy mem wygrywa!**');
        message.channel.send('**Nagrody:**');
        message.channel.send('***Rzadka ranga***');
        message.channel.send('**10k waluty serwerowej**');
        message.channel.send('**Twój mem będzie pod !mem**');
  	}
});

// THIS  MUST  BE  THIS  WAY
client.login(process.env.BOT_TOKEN);
