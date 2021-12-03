const player = require("../../client/player");

module.exports = {
    name: "volume",
    description: "change or check the volume of the current song",
    options: [
        {
            name: "percentage",
            description: "percentage to change the volume to",
            type: "INTEGER",
            required: false,
        },
    ],
    run: async (client, interaction) => {
        const volumePercentage = interaction.options.getInteger("percentage");
        const queue = player.getQueue(interaction.guildId);
        if (!queue?.playing)
            return interaction.followUp({
                content: "ไม่ได้เล่นเพลงอยู่!",
            });

        if (!volumePercentage)
            return interaction.followUp({
                content: `ระดับเสียงตอนนี้ \`${queue.volume}%\``,
            });

        if (volumePercentage < 0 || volumePercentage > 100)
            return interaction.followUp({
                content: "ต้องมากกว่า 0 และตํ่ากว่า 100",
            });

        queue.setVolume(volumePercentage);

        return interaction.followUp({
            content: `ระดับเสียงถูกปรับเป็น \`${volumePercentage}%\``,
        });
    },
};
