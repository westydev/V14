const Premium = require('../../database/Schemas/Premium')
const { BOT } = require("../../Settings/Config")

module.exports = {
  name: 'ready',
  once: true,
 async execute (client) {
    const now = new Date()
    const date = now.toLocaleDateString(undefined, { day: '2-digit', month: '2-digit', year: 'numeric' }) + ' - ' + now.toLocaleTimeString(undefined, { hour: '2-digit', minute: '2-digit', second: '2-digit' })
    console.log(`"${client.user.tag}" adı ile "${date}" tarihinde bot Aktif edildi.`)
      client.user.setActivity("Kayıt olmayan kişileri gözlüyor...", "https://rapp");

      

      setInterval(async() => {
        const premiums = await Premium.find()
        premiums.forEach(async preusers => {
          if(preusers.finishData < Date.now()) {
            await client.channels.cache.get("1045775893584433203").send({ content: `<@${preusers.userID}> Premiumu Bitdi.` })
            await Premium.findOneAndRemove({ userID: preusers.userID })
            await client.guilds.cache.get(BOT.guildId).members.cache.get(preusers.userID).roles.remove("1045064814789132398")
          }
        });
      }, 3000);
  }
}
