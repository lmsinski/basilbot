const Discord = require('discord.js');
const moment = require('moment');
const client = new Discord.Client();
const { prefix, token, formatter } = require('./config.json');

client.once('ready', () => {
	console.log('Ready!');
});
client.on('message', message => {
	if (!message.content.startsWith(prefix) || message.author.bot) return;

	const args = message.content.slice(prefix.length).trim().split(/ +/);
	const command = args.shift().toLowerCase();

	if (command === 'basil') {
		message.channel.send('Hi!');
	} else if (command === 'stam') {
		const amt = parseInt(args[0]);
		
		if (isNaN(amt)) {
			return message.reply('not a valid number!');
		} else if (amt <= 1 || amt > 119) {
			return message.reply('you must input a number between 1 and 119!');
		}
		const min = (120 - amt) * 8;
		const currentDate = message.createdAt;
		const newDate = new Date(currentDate.getTime() + min*60000);
		return message.reply(moment(newDate).format(formatter));
	}
});

client.login(token);