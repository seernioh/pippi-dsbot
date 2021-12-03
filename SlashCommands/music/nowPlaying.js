const player = require("../../client/player");

module.exports = {
    name: "now-playing",
    description: "shows information about the current song",
    run: async (client, interaction) => {
        const queue = player.getQueue(interaction.guildId);
        if (!queue?.playing)
            return interaction.followUp({
                content: "ไม่ได้เล่นเพลงอยู่!",
            });

        const progress = queue.createProgressBar();
        const perc = queue.getPlayerTimestamp();

        return interaction.followUp({
            embeds: [
                {
                    title: "กำลังเล่น",
                    description: `🎶 | **${queue.current.title}**! (\`${perc.progress}%\`)`,
                    fields: [
                        {
                            name: "\u200b",
                            value: progress,
                        },
                    ],
                    color: client.config.clientColor,
                    footer: {
                        text: `เพิ่มเพลงโดย ${queue.current.requestedBy.tag}`,
                    },
                },
            ],
        });
    },
};
