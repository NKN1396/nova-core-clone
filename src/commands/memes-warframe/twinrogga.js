var { Command } = require("discord.js-commando")
var selectRandomly = require("./../../utils/selectRandomly")

module.exports = class command extends Command {
	constructor(client) {
		super(client, {
			name: "twinrogga",
			aliases: [
				"twinrogga",
				"rogga"
			],
			group: "memes-warframe",
			memberName: "twinrogga",
			description: "Twin Rogga"
		})
	}
	
	async run(msg, args) {
		var options = [
			{embed: {image: {url: "https://cdn.discordapp.com/attachments/437703489347649539/439740738474082314/twinrogga.png"}}}
		]
		var choice = selectRandomly(options, args)
		var out = (options.length > 1)?`${this.name} ${options.indexOf(choice) + 1}/${options.length}`:""
		try {
			if(out) {
				if(choice.embed){
					await msg.channel.send(out, choice)
				}
				else {
					await msg.channel.send(`${out}\n${choice}`)
				}
			}
			else {
				await msg.channel.send(choice)
			}
			msg.react("✅")
		} catch (e) {
			console.error(e)
		}
	}
}
