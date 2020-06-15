const discord = require("discord.js");

module.exports.run = async (bot, message, args) => {

    return message.channel.send("Westside IP: 95.217.239.248:30120");

}

module.exports.help = {
    name: "ip"
}