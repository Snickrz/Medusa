const Discord = require("discord.js");

var bot = new Discord.Client();

const PREFIX = "!";

bot.on("ready", function() {
    bot.user.setGame("veiller sur ses enfants");
    console.log("Le bot a bien ete connecte");
});

bot.on('message', function(message) {
    
    if(message.content === 'bonjour') {
     message.reply('Bonjour, fils.')  
    }
    
});

bot.on('message', async function(message) {
    if(message.author.equals(bot.user)) return;
    
    if(!message.content.startsWith(PREFIX)) return;
    
    var args = message.content.substring(PREFIX.length).split (" ")
    
    switch (args[0].toLowerCase()) {
            
        case "blague":
           message.channel.send('Tu sais ce qui est marrant, un catamaran.');
            break;
  
        case "twix":
           message.channel.send('Me parles pas de lui stp.');
            break;
            
        case "mars":
           message.channel.send('Mon roi, celui avec qui je partage ma vie...');
            break;
            
        case "snickerz":
           message.channel.send('Mon créateur...');
            break;
            
            

        case "pool":
            
            var yes = Math.floor(Math.random() * (100 - 0)) + 0;
            var no = 100 - yes;
            
            if (yes < no) {
             message.channel.send("non (" + no + "%)" );
}
            else if (yes > no) {
             message.channel.send("oui (" + yes + "%)");
}
            else{
             message.channel.send("50-50");
}          
            break;
            
        case "join":
            voiceConnection.channel.join();
            break;
    
    }
});
    

bot.login("NDA2OTE0Mjc0ODUwNzY2ODQ4.DU-J0g.gbgiQ0GsME_FvGGrrpkrqqpoLhE");
