const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => { 

});

client.on('message', message => {
    if (message.content === 'Kurwa') {
        message.reply('nie używaj przekleństw');
        message.channel.send('Została powiadomiona administracja!');
        message.channel.send('<@&606831836668231681>');
  	}
});

// THIS  MUST  BE  THIS  WAY
client.login(process.env.BOT_TOKEN);
