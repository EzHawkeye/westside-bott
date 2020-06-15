const discord = require("discord.js");

module.exports.run = async (bot, message, args) => {



// !clear aantal
if (!message.member.hasPermission("MANAGE_MESSAGES")) return message.reply("Jij kan dit lekker niet HAHA !");

if (!args[0]) return message.reply("Geef een aantal op dat je wilt verwijderen zebi !");

if (Number.isInteger(parseInt(args[0]))) {

    var aantal = parseInt(args[0]) + 1;

    message.channel.bulkDelete(aantal).then(() => { 

        if (args[0] == 0) {

            message.reply(`Hoe ga je 0 berichten verwijderen a shwempie !`).then(msg => msg.delete({timeout: 3000}));
        
        } else if (args[0] == 1) {
        
            message.reply(`Wow, ik heb 1 bericht verwijderd.`).then(msg => msg.delete({timeout: 3000}));
        
        } else {
        
            message.reply(`Jesus, ik heb ${args[0]} berichten verwijderd.`).then(msg => msg.delete({timeout: 3000}));
        
        }

    });

} else {
    return message.reply("Geef een aantal op stoempie !");
}


}

module.exports.help = {
    name: "cls"
}