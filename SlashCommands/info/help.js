const { Client, CommandInteraction } = require("discord.js");
const { MessageEmbed } = require("discord.js");

module.exports = {
    name: "help",
    description: "all commands",
    type: 'CHAT_INPUT',
    /**
     *
     * @param {Client} client
     * @param {CommandInteraction} interaction
     * @param {String[]} args
     */
     run: async (client, interaction, args) => {
        return interaction.followUp({
            embeds: [
                {
                    title: "คำสั่งทั้งหมด",
                    description: "คำสั่งทั้งหมดใช้ Slash command (/) \n พิมพ์ / เพื่อดูคำสั่ง",
                    thumbnail: {
                        url: "https://pbs.twimg.com/profile_images/922788091475189760/i4hct5BA_400x400.jpg"
                    },
                    image: {
                        url: "https://cdn.discordapp.com/attachments/880695008611688478/916204553819553843/Screenshot_2021-12-03_113231.png",
                    },
                    color: "0x0099ff",
                },
            ],
        });
    }
};
