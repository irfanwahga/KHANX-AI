const {cmd , commands} = require('../command')

cmd({
    pattern: "owner",
    desc: "owner the bot",
    category: "main",
    react: "👨‍💻",
    filename: __filename
},

async(conn, mek, m,{from, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply}) => {
try{

let dec = ` *Hello there IRFAN WAHGA BOT User! 👋🏻* 

> KHANX-Ai is a beta version of KHAN-AI also it provide enhanced functionality to users

 *Thanks for using IRFAN_WAHGA BOT 🇵🇰* 

> Contact IRFAN WAHGA :- ⤵️
 
https://wa.me/+923261761538

 Dont forget to give star 🌟 to repo ⬇️

https://github.com/irfanwahga `
await conn.sendMessage(from,{image:{url: `https://i.ibb.co/ByfMwD9/file-3775.jpg`},caption:dec},{quoted:mek});

}catch(e){
console.log(e)
reply(`${e}`)
}
})
