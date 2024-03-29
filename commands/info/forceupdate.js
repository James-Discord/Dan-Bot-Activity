const { exec } = require("child_process");

module.exports = {
  name: "forceupdate",
  description: "forceupdate",
  async execute(client, interaction) {
    const { member } = interaction;
    if (member.roles.cache.find(r => r.id === "778237595477606440")) {
      exec(`git pull`, (error, stdout) => {
        let response = (error || stdout);
        if (!error) {
          if (response.includes("Already up to date.")) {
            interaction.reply('Bot already up to date. No changes since last pull');
          } else {
            interaction.reply('Pulled from GitHub. Restarting bot. \n\nLogs: \n```' + response + "```");
            setTimeout(() => {
              process.exit();
            }, 1000);
          }
        }
      });
    } else {
      interaction.reply('OwO');
    }
  }
};
