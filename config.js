const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT
global.appUrl=process.env.APP_URL || ""                       // put your app url here,
global.email ="saimsamsun789@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || ""
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || ""

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/Suhail-Md";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://github.com/SuhailTechInfo/Suhail-Md/blob/main/lib/assets/suhail.jpg?raw=true" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ" 


global.devs = "923184474176" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "923184474176";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '0'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || "false";  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "text" // "text" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "false"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923184474176,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_18_39_07_08_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNzIsXG4gICAgICAgIDIxOCxcbiAgICAgICAgMjI3LFxuICAgICAgICAxMTMsXG4gICAgICAgIDE4MSxcbiAgICAgICAgNjAsXG4gICAgICAgIDIxMixcbiAgICAgICAgMTI3LFxuICAgICAgICAxODYsXG4gICAgICAgIDE3MixcbiAgICAgICAgMjMyLFxuICAgICAgICAyMTksXG4gICAgICAgIDIwMCxcbiAgICAgICAgMjI0LFxuICAgICAgICAxNyxcbiAgICAgICAgMjQ1LFxuICAgICAgICA0MyxcbiAgICAgICAgMTQ4LFxuICAgICAgICAzNSxcbiAgICAgICAgMTAyLFxuICAgICAgICAxMDksXG4gICAgICAgIDE1OSxcbiAgICAgICAgMTMsXG4gICAgICAgIDE4MCxcbiAgICAgICAgMjM3LFxuICAgICAgICAyMjYsXG4gICAgICAgIDI0LFxuICAgICAgICAxNTQsXG4gICAgICAgIDEsXG4gICAgICAgIDk4LFxuICAgICAgICAxNzAsXG4gICAgICAgIDc4XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDEzMSxcbiAgICAgICAgMjUwLFxuICAgICAgICAxMDksXG4gICAgICAgIDk0LFxuICAgICAgICAyMzMsXG4gICAgICAgIDE0OSxcbiAgICAgICAgMTc5LFxuICAgICAgICAyNSxcbiAgICAgICAgMTAwLFxuICAgICAgICAxOTIsXG4gICAgICAgIDEwLFxuICAgICAgICAyMjEsXG4gICAgICAgIDE1OSxcbiAgICAgICAgMTcwLFxuICAgICAgICAyMjQsXG4gICAgICAgIDE2NSxcbiAgICAgICAgMjMzLFxuICAgICAgICA2OSxcbiAgICAgICAgMjIzLFxuICAgICAgICAyNDUsXG4gICAgICAgIDQ4LFxuICAgICAgICA2OSxcbiAgICAgICAgMjQyLFxuICAgICAgICA0MCxcbiAgICAgICAgMjMsXG4gICAgICAgIDIyLFxuICAgICAgICA0OCxcbiAgICAgICAgMjcsXG4gICAgICAgIDEyMSxcbiAgICAgICAgMTYzLFxuICAgICAgICA1NyxcbiAgICAgICAgODdcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwicGFpcmluZ0VwaGVtZXJhbEtleVBhaXJcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDEzNixcbiAgICAgICAgNDksXG4gICAgICAgIDI1NSxcbiAgICAgICAgMjM1LFxuICAgICAgICA0OSxcbiAgICAgICAgMTQ5LFxuICAgICAgICAyMTgsXG4gICAgICAgIDEyNyxcbiAgICAgICAgMTQ4LFxuICAgICAgICAxMzYsXG4gICAgICAgIDE3MSxcbiAgICAgICAgMTgyLFxuICAgICAgICA3LFxuICAgICAgICAyMTgsXG4gICAgICAgIDYzLFxuICAgICAgICAxOTIsXG4gICAgICAgIDI0NixcbiAgICAgICAgMjcsXG4gICAgICAgIDY5LFxuICAgICAgICAxMSxcbiAgICAgICAgMTgyLFxuICAgICAgICA4MSxcbiAgICAgICAgMTQ0LFxuICAgICAgICAxMzEsXG4gICAgICAgIDE3NCxcbiAgICAgICAgNixcbiAgICAgICAgMzYsXG4gICAgICAgIDM3LFxuICAgICAgICAxMzMsXG4gICAgICAgIDg1LFxuICAgICAgICAyMTksXG4gICAgICAgIDY5XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDIxMSxcbiAgICAgICAgMTk3LFxuICAgICAgICAxNTIsXG4gICAgICAgIDI5LFxuICAgICAgICAxMDEsXG4gICAgICAgIDE3MixcbiAgICAgICAgOSxcbiAgICAgICAgNTAsXG4gICAgICAgIDEzNCxcbiAgICAgICAgMzYsXG4gICAgICAgIDQ4LFxuICAgICAgICA2MSxcbiAgICAgICAgMjE3LFxuICAgICAgICAxMDgsXG4gICAgICAgIDMzLFxuICAgICAgICA1NixcbiAgICAgICAgMTY4LFxuICAgICAgICAyNTUsXG4gICAgICAgIDk2LFxuICAgICAgICAxNTYsXG4gICAgICAgIDE2NixcbiAgICAgICAgMjI3LFxuICAgICAgICAyMDYsXG4gICAgICAgIDE1NyxcbiAgICAgICAgMTc2LFxuICAgICAgICAxMDQsXG4gICAgICAgIDMsXG4gICAgICAgIDI0MSxcbiAgICAgICAgNTAsXG4gICAgICAgIDksXG4gICAgICAgIDIwNSxcbiAgICAgICAgMjFcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkSWRlbnRpdHlLZXlcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDY0LFxuICAgICAgICAxMDYsXG4gICAgICAgIDI0MSxcbiAgICAgICAgMTQ4LFxuICAgICAgICAxMDEsXG4gICAgICAgIDY0LFxuICAgICAgICAzNixcbiAgICAgICAgNTksXG4gICAgICAgIDYwLFxuICAgICAgICAyMjMsXG4gICAgICAgIDEwOCxcbiAgICAgICAgMTAxLFxuICAgICAgICAyNDIsXG4gICAgICAgIDc5LFxuICAgICAgICA2LFxuICAgICAgICAyMzYsXG4gICAgICAgIDE3OSxcbiAgICAgICAgNjMsXG4gICAgICAgIDE1OCxcbiAgICAgICAgMTkzLFxuICAgICAgICAxMTksXG4gICAgICAgIDQzLFxuICAgICAgICA1NyxcbiAgICAgICAgMjA5LFxuICAgICAgICAxOTMsXG4gICAgICAgIDE5OCxcbiAgICAgICAgMTQsXG4gICAgICAgIDY0LFxuICAgICAgICAyMTIsXG4gICAgICAgIDI1LFxuICAgICAgICA5OSxcbiAgICAgICAgNzVcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNTgsXG4gICAgICAgIDE2MSxcbiAgICAgICAgNDksXG4gICAgICAgIDg1LFxuICAgICAgICAyMjQsXG4gICAgICAgIDQ0LFxuICAgICAgICAxODAsXG4gICAgICAgIDIxMyxcbiAgICAgICAgMTg0LFxuICAgICAgICA2MSxcbiAgICAgICAgMTgzLFxuICAgICAgICAxNDEsXG4gICAgICAgIDE4MyxcbiAgICAgICAgMTgyLFxuICAgICAgICAxNDYsXG4gICAgICAgIDI5LFxuICAgICAgICA2NCxcbiAgICAgICAgNjQsXG4gICAgICAgIDEyNCxcbiAgICAgICAgMTksXG4gICAgICAgIDQ0LFxuICAgICAgICA2MSxcbiAgICAgICAgODksXG4gICAgICAgIDE5OCxcbiAgICAgICAgMjA3LFxuICAgICAgICA5NixcbiAgICAgICAgMjIzLFxuICAgICAgICA1LFxuICAgICAgICA3LFxuICAgICAgICA4NyxcbiAgICAgICAgMjQ2LFxuICAgICAgICA3NFxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRQcmVLZXlcIjoge1xuICAgIFwia2V5UGFpclwiOiB7XG4gICAgICBcInByaXZhdGVcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAxMDQsXG4gICAgICAgICAgMTE1LFxuICAgICAgICAgIDExNixcbiAgICAgICAgICA1MyxcbiAgICAgICAgICAxNzUsXG4gICAgICAgICAgMTg3LFxuICAgICAgICAgIDQ2LFxuICAgICAgICAgIDE0MCxcbiAgICAgICAgICAxMzUsXG4gICAgICAgICAgMTcsXG4gICAgICAgICAgNTUsXG4gICAgICAgICAgNjksXG4gICAgICAgICAgMTQsXG4gICAgICAgICAgNDUsXG4gICAgICAgICAgMjA1LFxuICAgICAgICAgIDc1LFxuICAgICAgICAgIDIxNixcbiAgICAgICAgICAxMzQsXG4gICAgICAgICAgMTIsXG4gICAgICAgICAgNTUsXG4gICAgICAgICAgMjAxLFxuICAgICAgICAgIDU5LFxuICAgICAgICAgIDE0MixcbiAgICAgICAgICA4MixcbiAgICAgICAgICA4MCxcbiAgICAgICAgICA5NCxcbiAgICAgICAgICA3MyxcbiAgICAgICAgICA3LFxuICAgICAgICAgIDIwLFxuICAgICAgICAgIDE0MyxcbiAgICAgICAgICAzMixcbiAgICAgICAgICA2OVxuICAgICAgICBdXG4gICAgICB9LFxuICAgICAgXCJwdWJsaWNcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA4MSxcbiAgICAgICAgICAxOTgsXG4gICAgICAgICAgMCxcbiAgICAgICAgICAxNyxcbiAgICAgICAgICA4NyxcbiAgICAgICAgICAxNjcsXG4gICAgICAgICAgODgsXG4gICAgICAgICAgNzEsXG4gICAgICAgICAgMTI5LFxuICAgICAgICAgIDkxLFxuICAgICAgICAgIDIwMixcbiAgICAgICAgICAxNjgsXG4gICAgICAgICAgMTIzLFxuICAgICAgICAgIDIzNixcbiAgICAgICAgICAxMzQsXG4gICAgICAgICAgMTkwLFxuICAgICAgICAgIDE1NCxcbiAgICAgICAgICA1MSxcbiAgICAgICAgICAxMTgsXG4gICAgICAgICAgMTMyLFxuICAgICAgICAgIDI5LFxuICAgICAgICAgIDc0LFxuICAgICAgICAgIDIyLFxuICAgICAgICAgIDEzNixcbiAgICAgICAgICAyNDksXG4gICAgICAgICAgMjI0LFxuICAgICAgICAgIDI1MyxcbiAgICAgICAgICA0NCxcbiAgICAgICAgICA4MSxcbiAgICAgICAgICAxNDIsXG4gICAgICAgICAgMTAyLFxuICAgICAgICAgIDIxXG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9LFxuICAgIFwic2lnbmF0dXJlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNDYsXG4gICAgICAgIDIwOCxcbiAgICAgICAgOTAsXG4gICAgICAgIDE5NCxcbiAgICAgICAgMjIwLFxuICAgICAgICAzNyxcbiAgICAgICAgNzIsXG4gICAgICAgIDQ0LFxuICAgICAgICAyNTEsXG4gICAgICAgIDIzMCxcbiAgICAgICAgMTI3LFxuICAgICAgICA1MCxcbiAgICAgICAgMTE0LFxuICAgICAgICA4MSxcbiAgICAgICAgMTI0LFxuICAgICAgICAzLFxuICAgICAgICAyNCxcbiAgICAgICAgMjM3LFxuICAgICAgICA5MyxcbiAgICAgICAgMjQsXG4gICAgICAgIDE5NixcbiAgICAgICAgMTc2LFxuICAgICAgICAxMjgsXG4gICAgICAgIDQ0LFxuICAgICAgICAyMzAsXG4gICAgICAgIDE2MSxcbiAgICAgICAgMTcxLFxuICAgICAgICA3NyxcbiAgICAgICAgMTE5LFxuICAgICAgICAyNDMsXG4gICAgICAgIDE3MSxcbiAgICAgICAgMTgzLFxuICAgICAgICAxMzMsXG4gICAgICAgIDMwLFxuICAgICAgICAxODEsXG4gICAgICAgIDE3NyxcbiAgICAgICAgOTYsXG4gICAgICAgIDkxLFxuICAgICAgICAyMzQsXG4gICAgICAgIDI0NCxcbiAgICAgICAgOTcsXG4gICAgICAgIDIwMCxcbiAgICAgICAgNjEsXG4gICAgICAgIDIxMCxcbiAgICAgICAgNDUsXG4gICAgICAgIDE2MCxcbiAgICAgICAgMTgwLFxuICAgICAgICAyOSxcbiAgICAgICAgMjEsXG4gICAgICAgIDEwMSxcbiAgICAgICAgMTczLFxuICAgICAgICAyMzMsXG4gICAgICAgIDg3LFxuICAgICAgICAyMTQsXG4gICAgICAgIDE0MixcbiAgICAgICAgMTExLFxuICAgICAgICA4NCxcbiAgICAgICAgNjAsXG4gICAgICAgIDExMyxcbiAgICAgICAgMjUwLFxuICAgICAgICAxOTAsXG4gICAgICAgIDE2MyxcbiAgICAgICAgMTg5LFxuICAgICAgICAxNDBcbiAgICAgIF1cbiAgICB9LFxuICAgIFwia2V5SWRcIjogMVxuICB9LFxuICBcInJlZ2lzdHJhdGlvbklkXCI6IDYxLFxuICBcImFkdlNlY3JldEtleVwiOiBcIlpObjJYVTdsUC9ZZjNFcVgyVUFzeDloU2VRam4vQit1WkpaY1I4RlJReEk9XCIsXG4gIFwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzXCI6IFtdLFxuICBcIm5leHRQcmVLZXlJZFwiOiAzMSxcbiAgXCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZFwiOiAzMSxcbiAgXCJhY2NvdW50U3luY0NvdW50ZXJcIjogMCxcbiAgXCJhY2NvdW50U2V0dGluZ3NcIjoge1xuICAgIFwidW5hcmNoaXZlQ2hhdHNcIjogZmFsc2VcbiAgfSxcbiAgXCJkZXZpY2VJZFwiOiBcImZZWHZmUGdfU2s2TEpWVkdsaEQ0ZFFcIixcbiAgXCJwaG9uZUlkXCI6IFwiYjBiZjE1ZTktZGZkYi00MmE4LTg1M2UtMzE2ZmQ1ZGNlYzQ5XCIsXG4gIFwiaWRlbnRpdHlJZFwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDE4MyxcbiAgICAgIDcwLFxuICAgICAgMSxcbiAgICAgIDIxNyxcbiAgICAgIDMyLFxuICAgICAgMTY5LFxuICAgICAgMjQwLFxuICAgICAgNDUsXG4gICAgICAxMzUsXG4gICAgICAyMzYsXG4gICAgICAyNDAsXG4gICAgICAxNzksXG4gICAgICA1MCxcbiAgICAgIDgzLFxuICAgICAgMTQsXG4gICAgICAyMzAsXG4gICAgICAxNzQsXG4gICAgICA2MixcbiAgICAgIDI1MyxcbiAgICAgIDk2XG4gICAgXVxuICB9LFxuICBcInJlZ2lzdGVyZWRcIjogdHJ1ZSxcbiAgXCJiYWNrdXBUb2tlblwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDEyOSxcbiAgICAgIDE1OSxcbiAgICAgIDEwLFxuICAgICAgNDAsXG4gICAgICAyNTQsXG4gICAgICAyMDAsXG4gICAgICAyMDgsXG4gICAgICAxODcsXG4gICAgICAxMDksXG4gICAgICAyNDQsXG4gICAgICAxODIsXG4gICAgICAxMDksXG4gICAgICAzOCxcbiAgICAgIDE1NyxcbiAgICAgIDE2LFxuICAgICAgMzUsXG4gICAgICAyMTUsXG4gICAgICAyNTEsXG4gICAgICA1MixcbiAgICAgIDE1M1xuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25cIjoge30sXG4gIFwicGFpcmluZ0NvZGVcIjogXCJYOUVYRE4yRVwiLFxuICBcIm1lXCI6IHtcbiAgICBcImlkXCI6IFwiMjU0NzY4MTA0MzAxOjQzQHMud2hhdHNhcHAubmV0XCIsXG4gICAgXCJsaWRcIjogXCIyMjczODg4ODk3OTY3NDE6NDNAbGlkXCJcbiAgfSxcbiAgXCJhY2NvdW50XCI6IHtcbiAgICBcImRldGFpbHNcIjogXCJDSXVJeWRVQ0VQSGtzTFFHR0FnZ0FDZ0FcIixcbiAgICBcImFjY291bnRTaWduYXR1cmVLZXlcIjogXCJvSDRMaEtRVVJBb1lCaFpERCtnZEZpcU1ZRTFxMzY3TjZTa3hZdUw4YUNVPVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZVwiOiBcImxGZnJVMDI0NHFaWVZMRnFrZ0h1ZjZGYVRSYXlzaXQ2TTdwYnNxVGcyQ0RzdFFaR1FvVnNBdzRIZnNXamlacmtxQndtcnZVZEYyU3QzOUZuUktCY0FnPT1cIixcbiAgICBcImRldmljZVNpZ25hdHVyZVwiOiBcIlZiTWszaG1jMmVseDd3U0tLTmZuQ3RQbmpaQmEvemF4Mm9uTlN5N0V6dTJLN3Q3UDQ3UURNbmF1dTJWQjVBaGdEREFJa0lVUjV2Z2xraDJMTHJ6ZmpRPT1cIlxuICB9LFxuICBcInNpZ25hbElkZW50aXRpZXNcIjogW1xuICAgIHtcbiAgICAgIFwiaWRlbnRpZmllclwiOiB7XG4gICAgICAgIFwibmFtZVwiOiBcIjI1NDc2ODEwNDMwMTo0M0BzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImRldmljZUlkXCI6IDBcbiAgICAgIH0sXG4gICAgICBcImlkZW50aWZpZXJLZXlcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA1LFxuICAgICAgICAgIDE2MCxcbiAgICAgICAgICAxMjYsXG4gICAgICAgICAgMTEsXG4gICAgICAgICAgMTMyLFxuICAgICAgICAgIDE2NCxcbiAgICAgICAgICAyMCxcbiAgICAgICAgICA2OCxcbiAgICAgICAgICAxMCxcbiAgICAgICAgICAyNCxcbiAgICAgICAgICA2LFxuICAgICAgICAgIDIyLFxuICAgICAgICAgIDY3LFxuICAgICAgICAgIDE1LFxuICAgICAgICAgIDIzMixcbiAgICAgICAgICAyOSxcbiAgICAgICAgICAyMixcbiAgICAgICAgICA0MixcbiAgICAgICAgICAxNDAsXG4gICAgICAgICAgOTYsXG4gICAgICAgICAgNzcsXG4gICAgICAgICAgMTA2LFxuICAgICAgICAgIDIyMyxcbiAgICAgICAgICAxNzQsXG4gICAgICAgICAgMjA1LFxuICAgICAgICAgIDIzMyxcbiAgICAgICAgICA0MSxcbiAgICAgICAgICA0OSxcbiAgICAgICAgICA5OCxcbiAgICAgICAgICAyMjYsXG4gICAgICAgICAgMjUyLFxuICAgICAgICAgIDEwNCxcbiAgICAgICAgICAzN1xuICAgICAgICBdXG4gICAgICB9XG4gICAgfVxuICBdLFxuICBcInBsYXRmb3JtXCI6IFwiYW5kcm9pZFwiLFxuICBcImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcFwiOiAxNzIwNDYzOTg5LFxuICBcIm15QXBwU3RhdGVLZXlJZFwiOiBcIkFBQUFBTjBOXCJcbn0iLAogICJhcHAtc3RhdGUtc3luYy1rZXktQUFBQUFOME4uanNvbiI6ICJ7XCJrZXlEYXRhXCI6XCJqaFhWMlJHdG42SFU0T2ZyeG1jd1FHWGc3MmdISkFpZHBqSnZPR0VHSkVnPVwiLFwiZmluZ2VycHJpbnRcIjp7XCJyYXdJZFwiOjcxNjMyNTg5OSxcImN1cnJlbnRJbmRleFwiOjMsXCJkZXZpY2VJbmRleGVzXCI6WzAsMSwzXX0sXCJ0aW1lc3RhbXBcIjpcIjE3MjAxNDE0MzAwMTZcIn0iCn0="  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.8",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "sᴜʜᴀɪʟ-ᴍᴅ",
  ownername:process.env.OWNER_NAME|| "Suhail",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "private",
  LANG: ( process.env.THEME ||  "SUHAIL"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "";
global.aitts_Voice_Id = process.env.AITTS_ID|| "37";





















global.rank = "updated"
global.isMongodb = false; 
let file = require.resolve(__filename)
fs.watchFile(file, () => { fs.unwatchFile(file);console.log(`Update'${__filename}'`);delete require.cache[file];	require(file); })
 

// ========================= [ Disables in V.1.2.8 ] ===============================\\  
  //style : process.env.STYLE || "2",  // put '1' & "2" here to check bot styles
  //readmessage:process.env.READ_MESSAGE|| "false",
  //warncount: process.env.WARN_COUNT || 3,
  //userImages:process.env.USER_IMAGES|| "text",  // SET IMAGE AND VIDEO URL FOR BOT MENUS 
  //disablepm: process.env.DISABLE_PM || "false",
  //MsgsInLog: process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
  //readcmds:process.env.READ_COMMANDS|| "false", 
  //alwaysonline:process.env.WAPRESENCE|| "unavailable", // 'unavailable' | 'online' | 'composing' | 'recording' | 'paused'
  //read_status: process.env.AUTO_READ_STATUS || "false",
  //save_status: process.env.AUTO_SAVE_STATUS || "false",
  //aitts_Voice_Id : process.env.AITTS_ID || "37",
  //ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY  || "",
