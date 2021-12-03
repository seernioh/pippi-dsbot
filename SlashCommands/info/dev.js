const { Client, CommandInteraction } = require("discord.js");
const { MessageEmbed } = require("discord.js");

module.exports = {
    name: "dev",
    description: "หล่อเท่",
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
                    title: "Developer (ผู้พัฒนา)",
                    description: "<@188927022808956928> \n Contact : https://github.com/seernioh \n <@335704331905138689> \n Contact : https://github.com/ssarunyu",
                    image: {
                        url: "https://i.pinimg.com/originals/c3/2e/5a/c32e5a930482ce4d1d71d54fbb190414.jpg",
                    },
                    color: "0x0099ff",
                },
            ],
        });
    }
}; 
