const Discord = require("discord.js");

var bot = new Discord.Client();

bot.on("ready", function() {
    bot.user.setGame("veiller sur ses enfants");
    console.log("Le bot a bien ete connecte");
});

bot.login("NDA2OTE0Mjc0ODUwNzY2ODQ4.DU-J0g.gbgiQ0GsME_FvGGrrpkrqqpoLhE");
