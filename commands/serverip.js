const discord = require("discord.js");

module.exports.run = async (bot, message, args) => {

    return message.channel.send("Server IP:   amsterdamrp.online:30120");

}

module.exports.help = {
    name: "ip"
}