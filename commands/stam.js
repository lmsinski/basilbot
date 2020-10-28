const moment = require('moment');
const { formatter } = require('../config.json');

module.exports = {
    name: 'stam',
	description: 'Genshin stamina command',
	args: true,
	usage: '<number>',
    execute(message, args) {
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
}