const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT
global.appUrl=process.env.APP_URL || ""                       // put your app url here,
global.email ="saimsamsun789@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || " mongodb+srv://theobot:theobot@cluster0.nj0fs2q.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || "mongodb+srv://theobot:theobot@cluster0.nj0fs2q.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Africa/Lagos";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/Suhail-Md";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://github.com/SuhailTechInfo/Suhail-Md/blob/main/lib/assets/suhail.jpg?raw=true" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "ᴘᴏᴡᴇʀᴇᴅ ʙʏ THEO²²¹-ᴍᴅ" 


global.devs = "923184474176" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "2349134983467";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '0'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || "false";  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "https://i.postimg.cc/Jz0Lnts6/theohacker2.jpg" // "text" // set Image/video urls here
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


global.SESSION_ID = process.env.SESSION_ID ||  
"SUHAIL_09_54_07_11_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTYwLFxuICAgICAgICAxMzMsXG4gICAgICAgIDEwNCxcbiAgICAgICAgNjksXG4gICAgICAgIDgwLFxuICAgICAgICA4NixcbiAgICAgICAgMjM5LFxuICAgICAgICA5MCxcbiAgICAgICAgMjM0LFxuICAgICAgICA2NyxcbiAgICAgICAgMjcsXG4gICAgICAgIDI1NCxcbiAgICAgICAgMTcwLFxuICAgICAgICAyMjEsXG4gICAgICAgIDIzLFxuICAgICAgICAxNDgsXG4gICAgICAgIDE4MSxcbiAgICAgICAgNzIsXG4gICAgICAgIDE4NCxcbiAgICAgICAgODAsXG4gICAgICAgIDU4LFxuICAgICAgICAxNDUsXG4gICAgICAgIDE1NixcbiAgICAgICAgMjMyLFxuICAgICAgICA0OCxcbiAgICAgICAgMTE0LFxuICAgICAgICAxNzYsXG4gICAgICAgIDg4LFxuICAgICAgICAxMjUsXG4gICAgICAgIDI5LFxuICAgICAgICAxMTEsXG4gICAgICAgIDExOFxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA4MSxcbiAgICAgICAgMTA4LFxuICAgICAgICA5NixcbiAgICAgICAgMTg1LFxuICAgICAgICA5NixcbiAgICAgICAgMTkwLFxuICAgICAgICAxOCxcbiAgICAgICAgMjUwLFxuICAgICAgICAyMzAsXG4gICAgICAgIDIzLFxuICAgICAgICAxNzMsXG4gICAgICAgIDE5OCxcbiAgICAgICAgMjAsXG4gICAgICAgIDE1MCxcbiAgICAgICAgMjMzLFxuICAgICAgICAyMTEsXG4gICAgICAgIDc3LFxuICAgICAgICAxOTgsXG4gICAgICAgIDEzLFxuICAgICAgICA3MixcbiAgICAgICAgMjAxLFxuICAgICAgICAyMjYsXG4gICAgICAgIDY0LFxuICAgICAgICAyMTIsXG4gICAgICAgIDU2LFxuICAgICAgICA3NixcbiAgICAgICAgMjAxLFxuICAgICAgICA3OCxcbiAgICAgICAgMjQ4LFxuICAgICAgICAzOSxcbiAgICAgICAgMTA5LFxuICAgICAgICAxMDVcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwicGFpcmluZ0VwaGVtZXJhbEtleVBhaXJcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDI0OCxcbiAgICAgICAgMjA5LFxuICAgICAgICA2MCxcbiAgICAgICAgMTMyLFxuICAgICAgICAyNDMsXG4gICAgICAgIDY3LFxuICAgICAgICAyNDQsXG4gICAgICAgIDM3LFxuICAgICAgICAyMzYsXG4gICAgICAgIDIwMyxcbiAgICAgICAgMzIsXG4gICAgICAgIDEwNCxcbiAgICAgICAgMTQwLFxuICAgICAgICAyMTAsXG4gICAgICAgIDYwLFxuICAgICAgICA4MyxcbiAgICAgICAgMjM1LFxuICAgICAgICAyMzMsXG4gICAgICAgIDgzLFxuICAgICAgICAxNzgsXG4gICAgICAgIDI1NCxcbiAgICAgICAgMixcbiAgICAgICAgMjI0LFxuICAgICAgICA1LFxuICAgICAgICA3NSxcbiAgICAgICAgOTUsXG4gICAgICAgIDE3NixcbiAgICAgICAgMTQ5LFxuICAgICAgICAzNixcbiAgICAgICAgMTcsXG4gICAgICAgIDIyMyxcbiAgICAgICAgODFcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgOTMsXG4gICAgICAgIDYsXG4gICAgICAgIDE0OSxcbiAgICAgICAgNjUsXG4gICAgICAgIDIzMixcbiAgICAgICAgOTksXG4gICAgICAgIDkzLFxuICAgICAgICAxMTYsXG4gICAgICAgIDIxMyxcbiAgICAgICAgNzAsXG4gICAgICAgIDY3LFxuICAgICAgICAyNDgsXG4gICAgICAgIDE5NyxcbiAgICAgICAgMTQ2LFxuICAgICAgICAxODksXG4gICAgICAgIDIsXG4gICAgICAgIDE4NyxcbiAgICAgICAgMjQxLFxuICAgICAgICA3MyxcbiAgICAgICAgMTgzLFxuICAgICAgICA4MyxcbiAgICAgICAgMjI1LFxuICAgICAgICA5OSxcbiAgICAgICAgMzksXG4gICAgICAgIDEyMixcbiAgICAgICAgMTI4LFxuICAgICAgICAxMjksXG4gICAgICAgIDgwLFxuICAgICAgICAxMTgsXG4gICAgICAgIDY1LFxuICAgICAgICAyMjcsXG4gICAgICAgIDVcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkSWRlbnRpdHlLZXlcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDQwLFxuICAgICAgICAxNzMsXG4gICAgICAgIDE0MyxcbiAgICAgICAgMjI5LFxuICAgICAgICAyMTcsXG4gICAgICAgIDg0LFxuICAgICAgICA0OCxcbiAgICAgICAgMTIwLFxuICAgICAgICAxMzUsXG4gICAgICAgIDE1NixcbiAgICAgICAgMTEwLFxuICAgICAgICA2NyxcbiAgICAgICAgMjE0LFxuICAgICAgICA2NyxcbiAgICAgICAgOTAsXG4gICAgICAgIDM0LFxuICAgICAgICAxNjIsXG4gICAgICAgIDIxNSxcbiAgICAgICAgNDIsXG4gICAgICAgIDE4NixcbiAgICAgICAgMTUxLFxuICAgICAgICAxNjQsXG4gICAgICAgIDI5LFxuICAgICAgICAyNDksXG4gICAgICAgIDE3MCxcbiAgICAgICAgNTUsXG4gICAgICAgIDE1MyxcbiAgICAgICAgNjMsXG4gICAgICAgIDQsXG4gICAgICAgIDgwLFxuICAgICAgICAzMCxcbiAgICAgICAgMTI3XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDEyNSxcbiAgICAgICAgMTkwLFxuICAgICAgICA0NyxcbiAgICAgICAgMTE2LFxuICAgICAgICAxNTYsXG4gICAgICAgIDE3MSxcbiAgICAgICAgMjE1LFxuICAgICAgICAxMDksXG4gICAgICAgIDI4LFxuICAgICAgICAyNDksXG4gICAgICAgIDI4LFxuICAgICAgICAyMDYsXG4gICAgICAgIDc0LFxuICAgICAgICAyMDAsXG4gICAgICAgIDIxNyxcbiAgICAgICAgMjUyLFxuICAgICAgICAzMSxcbiAgICAgICAgMTgzLFxuICAgICAgICAzNSxcbiAgICAgICAgNzQsXG4gICAgICAgIDExMixcbiAgICAgICAgMTkwLFxuICAgICAgICAxMDQsXG4gICAgICAgIDY4LFxuICAgICAgICAyMDUsXG4gICAgICAgIDEyNSxcbiAgICAgICAgNjAsXG4gICAgICAgIDI0OCxcbiAgICAgICAgMTMsXG4gICAgICAgIDE4NCxcbiAgICAgICAgMjEyLFxuICAgICAgICAxMVxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRQcmVLZXlcIjoge1xuICAgIFwia2V5UGFpclwiOiB7XG4gICAgICBcInByaXZhdGVcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA0OCxcbiAgICAgICAgICAxNzgsXG4gICAgICAgICAgMTg5LFxuICAgICAgICAgIDY4LFxuICAgICAgICAgIDE4OSxcbiAgICAgICAgICA5NixcbiAgICAgICAgICAxNzUsXG4gICAgICAgICAgNDksXG4gICAgICAgICAgMjA4LFxuICAgICAgICAgIDE5OCxcbiAgICAgICAgICAyNDIsXG4gICAgICAgICAgMTM1LFxuICAgICAgICAgIDE5NCxcbiAgICAgICAgICA3MSxcbiAgICAgICAgICAxNTksXG4gICAgICAgICAgNDgsXG4gICAgICAgICAgNixcbiAgICAgICAgICAxODYsXG4gICAgICAgICAgMTIxLFxuICAgICAgICAgIDc4LFxuICAgICAgICAgIDEzNixcbiAgICAgICAgICAyMTUsXG4gICAgICAgICAgMjI0LFxuICAgICAgICAgIDk4LFxuICAgICAgICAgIDEwNyxcbiAgICAgICAgICAyMzUsXG4gICAgICAgICAgMjQ5LFxuICAgICAgICAgIDE3MyxcbiAgICAgICAgICAxNyxcbiAgICAgICAgICAxNTAsXG4gICAgICAgICAgNyxcbiAgICAgICAgICA4M1xuICAgICAgICBdXG4gICAgICB9LFxuICAgICAgXCJwdWJsaWNcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA0MixcbiAgICAgICAgICA4MixcbiAgICAgICAgICAxOTcsXG4gICAgICAgICAgNTMsXG4gICAgICAgICAgMjMwLFxuICAgICAgICAgIDI1MyxcbiAgICAgICAgICAyMzgsXG4gICAgICAgICAgMTEwLFxuICAgICAgICAgIDI5LFxuICAgICAgICAgIDE0MSxcbiAgICAgICAgICA3OSxcbiAgICAgICAgICAyMTIsXG4gICAgICAgICAgMTE4LFxuICAgICAgICAgIDI3LFxuICAgICAgICAgIDIyNyxcbiAgICAgICAgICA5NCxcbiAgICAgICAgICAxNDEsXG4gICAgICAgICAgMjMxLFxuICAgICAgICAgIDk3LFxuICAgICAgICAgIDIsXG4gICAgICAgICAgMjEwLFxuICAgICAgICAgIDE4MCxcbiAgICAgICAgICA2NyxcbiAgICAgICAgICAyMDUsXG4gICAgICAgICAgMTQyLFxuICAgICAgICAgIDYwLFxuICAgICAgICAgIDEzMyxcbiAgICAgICAgICAzMCxcbiAgICAgICAgICAxODQsXG4gICAgICAgICAgNDksXG4gICAgICAgICAgNDcsXG4gICAgICAgICAgNjJcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH0sXG4gICAgXCJzaWduYXR1cmVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxMzQsXG4gICAgICAgIDIxMixcbiAgICAgICAgMTEyLFxuICAgICAgICAxMjYsXG4gICAgICAgIDEwMSxcbiAgICAgICAgMTE5LFxuICAgICAgICAxMzgsXG4gICAgICAgIDIzOCxcbiAgICAgICAgMTAxLFxuICAgICAgICAxNzEsXG4gICAgICAgIDg4LFxuICAgICAgICAyNDksXG4gICAgICAgIDE0OSxcbiAgICAgICAgMjE0LFxuICAgICAgICAxNjUsXG4gICAgICAgIDQxLFxuICAgICAgICA3OSxcbiAgICAgICAgMTcyLFxuICAgICAgICA3NyxcbiAgICAgICAgMjcsXG4gICAgICAgIDEzNSxcbiAgICAgICAgMTkyLFxuICAgICAgICAxMTQsXG4gICAgICAgIDEyMCxcbiAgICAgICAgMTU0LFxuICAgICAgICA0OSxcbiAgICAgICAgMjM4LFxuICAgICAgICAyNDcsXG4gICAgICAgIDE0LFxuICAgICAgICA2MixcbiAgICAgICAgMjEwLFxuICAgICAgICAxMzYsXG4gICAgICAgIDQ3LFxuICAgICAgICAyMTMsXG4gICAgICAgIDIwNyxcbiAgICAgICAgMTAsXG4gICAgICAgIDIxLFxuICAgICAgICA1MCxcbiAgICAgICAgNzgsXG4gICAgICAgIDYxLFxuICAgICAgICAyMDQsXG4gICAgICAgIDEwOCxcbiAgICAgICAgNjEsXG4gICAgICAgIDIwMyxcbiAgICAgICAgMTYsXG4gICAgICAgIDI0LFxuICAgICAgICA2NSxcbiAgICAgICAgOTcsXG4gICAgICAgIDQwLFxuICAgICAgICAyMzIsXG4gICAgICAgIDE5MyxcbiAgICAgICAgNTcsXG4gICAgICAgIDI0MCxcbiAgICAgICAgNTksXG4gICAgICAgIDE4NyxcbiAgICAgICAgNTgsXG4gICAgICAgIDI5LFxuICAgICAgICAxMjgsXG4gICAgICAgIDY3LFxuICAgICAgICAxNTAsXG4gICAgICAgIDkxLFxuICAgICAgICAyMjUsXG4gICAgICAgIDIyMyxcbiAgICAgICAgMTM0XG4gICAgICBdXG4gICAgfSxcbiAgICBcImtleUlkXCI6IDFcbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25JZFwiOiA4NCxcbiAgXCJhZHZTZWNyZXRLZXlcIjogXCJha3lFRUxCRCtwZWtIbHA1dWVmbjN1WVJYd3ZRT2VNSkR1L2xSSlhVRU9rPVwiLFxuICBcInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlc1wiOiBbXSxcbiAgXCJuZXh0UHJlS2V5SWRcIjogMzEsXG4gIFwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWRcIjogMzEsXG4gIFwiYWNjb3VudFN5bmNDb3VudGVyXCI6IDAsXG4gIFwiYWNjb3VudFNldHRpbmdzXCI6IHtcbiAgICBcInVuYXJjaGl2ZUNoYXRzXCI6IGZhbHNlXG4gIH0sXG4gIFwiZGV2aWNlSWRcIjogXCJlWUtTWUFkQVRadTZJM3FmV21hSUZRXCIsXG4gIFwicGhvbmVJZFwiOiBcImIxNTUwMjcxLWVjMzctNGI5MS05Yzg3LWU2YjZjN2NiMWNhYVwiLFxuICBcImlkZW50aXR5SWRcIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAxNDcsXG4gICAgICAxODIsXG4gICAgICA4NyxcbiAgICAgIDExNixcbiAgICAgIDIxOSxcbiAgICAgIDI0MixcbiAgICAgIDI1MCxcbiAgICAgIDM2LFxuICAgICAgNzQsXG4gICAgICA2NCxcbiAgICAgIDU5LFxuICAgICAgNDcsXG4gICAgICAxNjYsXG4gICAgICAyMyxcbiAgICAgIDIzMixcbiAgICAgIDkxLFxuICAgICAgMyxcbiAgICAgIDE4NCxcbiAgICAgIDE5NixcbiAgICAgIDEyNlxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RlcmVkXCI6IGZhbHNlLFxuICBcImJhY2t1cFRva2VuXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMTc1LFxuICAgICAgMTksXG4gICAgICAxMTYsXG4gICAgICAyNDAsXG4gICAgICAxMzMsXG4gICAgICAyLFxuICAgICAgMSxcbiAgICAgIDIxMyxcbiAgICAgIDE5LFxuICAgICAgNSxcbiAgICAgIDY3LFxuICAgICAgMTQwLFxuICAgICAgMjYsXG4gICAgICAyOSxcbiAgICAgIDEwNSxcbiAgICAgIDE3MixcbiAgICAgIDI0LFxuICAgICAgMTY1LFxuICAgICAgMjI5LFxuICAgICAgNTRcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uXCI6IHt9LFxuICBcImFjY291bnRcIjoge1xuICAgIFwiZGV0YWlsc1wiOiBcIkNPL21nRnNRMzllK3RBWVlEaUFBS0FBPVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZUtleVwiOiBcIkZYUGxWdXpPTVU4dWNySHd2TmpjTmlOd29Zc0xKWVU3eVhXSUFmc3plQ1U9XCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlXCI6IFwiSWZLRXdld2RGbW53bEovSzdQb1RKUDdLSUZZaGpXbW1ENnNXdVVSeExMb3RwMjQxM3crL2JwbTVDZ3RXNFJRd0tla3pwaGJwTjR1Q1FUV3orWlZMRHc9PVwiLFxuICAgIFwiZGV2aWNlU2lnbmF0dXJlXCI6IFwibFIzQXVZYXlTSSs4R2NWWm9SZ1QzaHhsU0ZNZ3kwLzB4MFFKVlFWb1JweGJrWXJWWG82Z3VaTWZhK0FhbDh1U2JzSUxSVDJxWXJnWlRrVWpJcUhKaFE9PVwiXG4gIH0sXG4gIFwibWVcIjoge1xuICAgIFwiaWRcIjogXCIyMzQ5MTM0OTgzNDY3OjU5QHMud2hhdHNhcHAubmV0XCIsXG4gICAgXCJuYW1lXCI6IFwiVGhlb1wiLFxuICAgIFwibGlkXCI6IFwiMTM3OTE0OTIzNjIzNjk6NTlAbGlkXCJcbiAgfSxcbiAgXCJzaWduYWxJZGVudGl0aWVzXCI6IFtcbiAgICB7XG4gICAgICBcImlkZW50aWZpZXJcIjoge1xuICAgICAgICBcIm5hbWVcIjogXCIyMzQ5MTM0OTgzNDY3OjU5QHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZGV2aWNlSWRcIjogMFxuICAgICAgfSxcbiAgICAgIFwiaWRlbnRpZmllcktleVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDUsXG4gICAgICAgICAgMjEsXG4gICAgICAgICAgMTE1LFxuICAgICAgICAgIDIyOSxcbiAgICAgICAgICA4NixcbiAgICAgICAgICAyMzYsXG4gICAgICAgICAgMjA2LFxuICAgICAgICAgIDQ5LFxuICAgICAgICAgIDc5LFxuICAgICAgICAgIDQ2LFxuICAgICAgICAgIDExNCxcbiAgICAgICAgICAxNzcsXG4gICAgICAgICAgMjQwLFxuICAgICAgICAgIDE4OCxcbiAgICAgICAgICAyMTYsXG4gICAgICAgICAgMjIwLFxuICAgICAgICAgIDU0LFxuICAgICAgICAgIDM1LFxuICAgICAgICAgIDExMixcbiAgICAgICAgICAxNjEsXG4gICAgICAgICAgMTM5LFxuICAgICAgICAgIDExLFxuICAgICAgICAgIDM3LFxuICAgICAgICAgIDEzMyxcbiAgICAgICAgICA1OSxcbiAgICAgICAgICAyMDEsXG4gICAgICAgICAgMTE3LFxuICAgICAgICAgIDEzNixcbiAgICAgICAgICAxLFxuICAgICAgICAgIDI1MSxcbiAgICAgICAgICA1MSxcbiAgICAgICAgICAxMjAsXG4gICAgICAgICAgMzdcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH1cbiAgXSxcbiAgXCJwbGF0Zm9ybVwiOiBcInNtYmFcIixcbiAgXCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXBcIjogMTcyMDY5MTY4NVxufSIKfQ=="


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.8",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ THEO²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "THEO-MD",
  ownername:process.env.OWNER_NAME|| "THEO_IDOLO",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "L8e5TsVFZnusbQChjuCsVfCR",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "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",
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
