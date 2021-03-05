const dbd = require("dbd.js")
const { NONAME } = require("dns")
 
const bot = new dbd.Bot({
token: "-", 
prefix: "!" 
})
 
bot.onMessage("PFFL Bot is now online!")
 
const fs = require('fs')

const folders = fs.readdirSync("./commands/")

for (const files of folders) {
const folder = fs.readdirSync(`./commands/${files}/`).filter(file => file.endsWith(".js"))

for (const commands of folder) {
const command = require(`./commands/${files}/${commands}`) 
bot.command(command)
} 
}

bot.status({
  text: "PFFL Signing's Chat | $allMembersCount Members",
  type: "WATCHING",
  time: 10
})

bot.awaitedCommand({
  name: "Accepted",
  code: `✔ <@$mentioned[1]> has accepted the offer, Please head to <#800492387704766474> and sign them!`
  })

  bot.awaitedCommand({
      name: "Declined",
      code: `❌ <@$mentioned[1]> has declined the offer, L for your team.`
      })

      bot.variables({
        Team: "NoName",
        Demands: "2",
        HC: "Role",
        AC: "RoleR"
      })

      