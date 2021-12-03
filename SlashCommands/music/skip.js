
const player = require("../../client/player");

module.exports = {
    name: "skip",
    description: "skip the current song",
    run: async (client, interaction, args) => {
        const queue = player.getQueue(interaction.guildId);
        if (!queue?.playing)
            return interaction.followUp({
                content: "ไม่ได้เล่นเพลงอยู่!",
            });

        await queue.skip();

        interaction.followUp({ content: "ข้ามให้แล้ว!" });
    },
};
