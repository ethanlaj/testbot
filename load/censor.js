module.exports.run = async (bot) => {
	bot.on("message", (msg) => {
		if (msg.author.bot) return;
		let text = msg.content.toLowerCase().replace(/[^\w\s]/gi, "");
		let hardwords = ["anal", "anus", "bitch", "blowjob", "buttplug", "clitoris", "coon", "cunt", "dildo", "dyke", "faggot", "feck", "fellate", "fellatio", "flange", "fuck", "jizz", "labia", "muff", "nigga", "nigger", "nibba", "nob head", "shit", "slut", "whore"];
		let softwords = ["asshole", "ballsack", "bastard", "bollock", "bollok", "boner", "boob", "bugger", "cock", "dick", "fag", "fudgepacker", "knob end", "penis", "piss", "prick", "pube", "pussy", "queer", "scrotum", "sex", "spunk", "tit", "tosser", "turd", "twat", "vagina", "wank"];

		let msgarray = text.split(" ").filter((m) => hardwords.includes(m));
		if (msgarray.length > 0) {
			msg.delete();
			msg.reply("Please do not use vulgarities!").then((msg) => {
				msg.delete(2500);}).catch();
			return;
		}
		if (softwords.includes(text.trim())) {
			msg.delete();
			msg.reply("Please do not use vulgarities!").then((msg) => {
				msg.delete(2500);}).catch();
			return;
		}
	});
};