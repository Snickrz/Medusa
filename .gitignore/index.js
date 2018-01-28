const Discord = require("discord.js");

var bot = new Discord.Client();

const PREFIX = "!";

bot.on("ready", function() {
    bot.user.setGame("veiller sur ses enfants.");
    console.log("Le bot a bien ete connecte");
});

bot.on('message', function(message) {
    
    if(message.content === 'bonjour') {
     message.reply('Bonjour, Fils.')  
    }
    
});

bot.on('message', async function(message) {
    if(message.author.equals(bot.user)) return;
    
    if(!message.content.startsWith(PREFIX)) return;
    
    var args = message.content.substring(PREFIX.length).split (" ");
    
    switch (args[0].toLowerCase()) {
            
        case "blague":
           message.reply('Tu sais ce qui est marrant, un catamaran.');
            break;
  
        case "enzo":
           message.reply('Me parles pas de lui stp.');
            break;
    }
    
});
    

bot.login("NDA2OTE0Mjc0ODUwNzY2ODQ4.DU-J0g.gbgiQ0GsME_FvGGrrpkrqqpoLhE");
