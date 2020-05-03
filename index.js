const Discord = require('discord.js');
require('dotenv').config();
const client = new Discord.Client();

client.once('ready', () => {
	console.log('Ready!');
});
client.on('message', message => {
	if (message.content === '!basil') {
		message.channel.send('Hi!');
	}
});
console.log(process.env.DISCORD_SECRET_ID);
client.login(process.env.DISCORD_SECRET_ID);