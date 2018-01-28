const Discord = require("discord.js");

var bot = new Discord.Client();

bot.on("ready", function() {
    bot.user.setGame("veiller sur ses enfants");
    console.log("Le bot a bien ete connecte");
});

bot.login("WP0YTuZTMAEWjJy13HYFAs0-VLGRd3VD");
