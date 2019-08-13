const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => { 

});

client.on('message', message => {
    if (message.content === '!konkurs') {
        message.channel.send('@everyone Konkurs na mem miesiąca.');
        message.channel.send('Wymagania:');
        message.channel.send('**Dołączyć na serwer discord:**');
        message.channel.send('https://discord.gg/StJHcnV');
        message.channel.send('**Nagrody;**');
        message.channel.send('***Rzadka ranga***');
        message.channel.send('**10k waluty serwerowej**');
        message.channel.send('**Twój mem będzie pod !mem**');
  	}
});

// THIS  MUST  BE  THIS  WAY
client.login(process.env.BOT_TOKEN);
