const { Message, Client } = require("discord.js");

module.exports = {
    name: "นีโอ",
    aliases: ['น'],
    /**
     *
     * @param {Client} client
     * @param {Message} message
     * @param {String[]} args
     */
    run: async (client, message, args) => {
        message.channel.send(`ผู้สร้างพระเจ้า`);
    },
};
