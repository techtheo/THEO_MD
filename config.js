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
global.DATABASE_URL = process.env.DATABASE_URL || ""

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
 "SUHAIL_09_35_07_11_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjQ4LFxuICAgICAgICA1MCxcbiAgICAgICAgMTE4LFxuICAgICAgICAyMjMsXG4gICAgICAgIDIwMCxcbiAgICAgICAgMjM3LFxuICAgICAgICAxNjYsXG4gICAgICAgIDEyMyxcbiAgICAgICAgMjExLFxuICAgICAgICA3MixcbiAgICAgICAgOSxcbiAgICAgICAgMTk1LFxuICAgICAgICAyMzgsXG4gICAgICAgIDIxNyxcbiAgICAgICAgMTE2LFxuICAgICAgICAxNTksXG4gICAgICAgIDUsXG4gICAgICAgIDI0NyxcbiAgICAgICAgMjEwLFxuICAgICAgICAyMDgsXG4gICAgICAgIDkyLFxuICAgICAgICAyMjMsXG4gICAgICAgIDI4LFxuICAgICAgICAxMjMsXG4gICAgICAgIDIwLFxuICAgICAgICAyNixcbiAgICAgICAgMjUyLFxuICAgICAgICAxMCxcbiAgICAgICAgMjM4LFxuICAgICAgICAyMjMsXG4gICAgICAgIDcwLFxuICAgICAgICAxMDVcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTY2LFxuICAgICAgICAyOCxcbiAgICAgICAgMTYwLFxuICAgICAgICAyNDYsXG4gICAgICAgIDU2LFxuICAgICAgICAxNDksXG4gICAgICAgIDk1LFxuICAgICAgICAyMDgsXG4gICAgICAgIDEzOCxcbiAgICAgICAgMjM3LFxuICAgICAgICAyNDYsXG4gICAgICAgIDIzNixcbiAgICAgICAgMTc0LFxuICAgICAgICAyNDQsXG4gICAgICAgIDE1NSxcbiAgICAgICAgMTgsXG4gICAgICAgIDkyLFxuICAgICAgICAyMzYsXG4gICAgICAgIDIyNSxcbiAgICAgICAgMjM2LFxuICAgICAgICA2OCxcbiAgICAgICAgMTA4LFxuICAgICAgICA5NyxcbiAgICAgICAgMTQ5LFxuICAgICAgICA1LFxuICAgICAgICAyMTAsXG4gICAgICAgIDE2NixcbiAgICAgICAgMjM2LFxuICAgICAgICAxMzAsXG4gICAgICAgIDEzNSxcbiAgICAgICAgODcsXG4gICAgICAgIDc0XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyXCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA1NixcbiAgICAgICAgMTYzLFxuICAgICAgICA3MixcbiAgICAgICAgMjUzLFxuICAgICAgICA1MSxcbiAgICAgICAgMTU1LFxuICAgICAgICAxMDksXG4gICAgICAgIDc3LFxuICAgICAgICAxODksXG4gICAgICAgIDM4LFxuICAgICAgICAxNCxcbiAgICAgICAgMTQsXG4gICAgICAgIDE2MixcbiAgICAgICAgNDEsXG4gICAgICAgIDk5LFxuICAgICAgICAxMjksXG4gICAgICAgIDEyMixcbiAgICAgICAgMjksXG4gICAgICAgIDE1NSxcbiAgICAgICAgMTEzLFxuICAgICAgICAxMTIsXG4gICAgICAgIDE0MyxcbiAgICAgICAgMTY3LFxuICAgICAgICAyMDMsXG4gICAgICAgIDE2LFxuICAgICAgICAxOCxcbiAgICAgICAgNjksXG4gICAgICAgIDg3LFxuICAgICAgICAyNDUsXG4gICAgICAgIDE4NCxcbiAgICAgICAgMzEsXG4gICAgICAgIDk3XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDEyMCxcbiAgICAgICAgNDUsXG4gICAgICAgIDE3OSxcbiAgICAgICAgMTAyLFxuICAgICAgICAyNDAsXG4gICAgICAgIDIsXG4gICAgICAgIDQzLFxuICAgICAgICAxNDcsXG4gICAgICAgIDc5LFxuICAgICAgICAyMjQsXG4gICAgICAgIDk0LFxuICAgICAgICAyMDIsXG4gICAgICAgIDcyLFxuICAgICAgICAxNTMsXG4gICAgICAgIDE5LFxuICAgICAgICAxMDksXG4gICAgICAgIDIxNyxcbiAgICAgICAgMTY5LFxuICAgICAgICAyNDYsXG4gICAgICAgIDIwOSxcbiAgICAgICAgNzgsXG4gICAgICAgIDgxLFxuICAgICAgICAxMDEsXG4gICAgICAgIDE0LFxuICAgICAgICAxNjEsXG4gICAgICAgIDIxMyxcbiAgICAgICAgMTAyLFxuICAgICAgICAxNSxcbiAgICAgICAgMTczLFxuICAgICAgICA0NixcbiAgICAgICAgMTg2LFxuICAgICAgICAxMjNcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkSWRlbnRpdHlLZXlcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDgsXG4gICAgICAgIDIwOSxcbiAgICAgICAgMTc1LFxuICAgICAgICAzMSxcbiAgICAgICAgNjYsXG4gICAgICAgIDIwOSxcbiAgICAgICAgNzEsXG4gICAgICAgIDI1LFxuICAgICAgICAyMjksXG4gICAgICAgIDE2NixcbiAgICAgICAgODksXG4gICAgICAgIDEyNyxcbiAgICAgICAgMTgyLFxuICAgICAgICAyNDAsXG4gICAgICAgIDE1NSxcbiAgICAgICAgMTM1LFxuICAgICAgICA3MCxcbiAgICAgICAgMjA3LFxuICAgICAgICA3NCxcbiAgICAgICAgOTQsXG4gICAgICAgIDI0MyxcbiAgICAgICAgMTcyLFxuICAgICAgICAxNDAsXG4gICAgICAgIDEwMCxcbiAgICAgICAgMTg4LFxuICAgICAgICAyNSxcbiAgICAgICAgMjMzLFxuICAgICAgICAyNTEsXG4gICAgICAgIDUxLFxuICAgICAgICAyNDIsXG4gICAgICAgIDI1MixcbiAgICAgICAgMTE2XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE3MixcbiAgICAgICAgMTgzLFxuICAgICAgICAxMjUsXG4gICAgICAgIDE0MixcbiAgICAgICAgNjcsXG4gICAgICAgIDI5LFxuICAgICAgICAyNTEsXG4gICAgICAgIDIzNCxcbiAgICAgICAgMTQ3LFxuICAgICAgICAxMjYsXG4gICAgICAgIDc0LFxuICAgICAgICAyMjAsXG4gICAgICAgIDEyMSxcbiAgICAgICAgMTcyLFxuICAgICAgICAxMTEsXG4gICAgICAgIDEyNixcbiAgICAgICAgMzQsXG4gICAgICAgIDMxLFxuICAgICAgICAxMzMsXG4gICAgICAgIDQwLFxuICAgICAgICAxNzksXG4gICAgICAgIDE0NixcbiAgICAgICAgMjI5LFxuICAgICAgICAxNTYsXG4gICAgICAgIDIzNixcbiAgICAgICAgOTEsXG4gICAgICAgIDMwLFxuICAgICAgICAxMzgsXG4gICAgICAgIDEwMyxcbiAgICAgICAgMTc4LFxuICAgICAgICAxMDQsXG4gICAgICAgIDI2XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZFByZUtleVwiOiB7XG4gICAgXCJrZXlQYWlyXCI6IHtcbiAgICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDg4LFxuICAgICAgICAgIDAsXG4gICAgICAgICAgMzIsXG4gICAgICAgICAgMTg4LFxuICAgICAgICAgIDIzLFxuICAgICAgICAgIDE2MSxcbiAgICAgICAgICA5OSxcbiAgICAgICAgICAxMzQsXG4gICAgICAgICAgODcsXG4gICAgICAgICAgMjIzLFxuICAgICAgICAgIDM1LFxuICAgICAgICAgIDI1MCxcbiAgICAgICAgICAyMjgsXG4gICAgICAgICAgMjA5LFxuICAgICAgICAgIDE3NSxcbiAgICAgICAgICAxMzEsXG4gICAgICAgICAgMjA4LFxuICAgICAgICAgIDE2NyxcbiAgICAgICAgICAyOCxcbiAgICAgICAgICA5NixcbiAgICAgICAgICAyMixcbiAgICAgICAgICAyNDAsXG4gICAgICAgICAgMTY3LFxuICAgICAgICAgIDEyLFxuICAgICAgICAgIDE0OSxcbiAgICAgICAgICA4LFxuICAgICAgICAgIDEzMixcbiAgICAgICAgICAzNSxcbiAgICAgICAgICA0NyxcbiAgICAgICAgICAxNCxcbiAgICAgICAgICAyNDAsXG4gICAgICAgICAgOThcbiAgICAgICAgXVxuICAgICAgfSxcbiAgICAgIFwicHVibGljXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMTYxLFxuICAgICAgICAgIDExMSxcbiAgICAgICAgICA3OSxcbiAgICAgICAgICA5OSxcbiAgICAgICAgICA3MCxcbiAgICAgICAgICA4NyxcbiAgICAgICAgICAxMTEsXG4gICAgICAgICAgMTg1LFxuICAgICAgICAgIDE5MyxcbiAgICAgICAgICA5NixcbiAgICAgICAgICAxMzEsXG4gICAgICAgICAgNzksXG4gICAgICAgICAgMzgsXG4gICAgICAgICAgNzgsXG4gICAgICAgICAgMzksXG4gICAgICAgICAgMTAyLFxuICAgICAgICAgIDEzMCxcbiAgICAgICAgICAxNDYsXG4gICAgICAgICAgMTgyLFxuICAgICAgICAgIDIwLFxuICAgICAgICAgIDEzNyxcbiAgICAgICAgICA3NCxcbiAgICAgICAgICAyMixcbiAgICAgICAgICAxMjUsXG4gICAgICAgICAgMTYsXG4gICAgICAgICAgMTEwLFxuICAgICAgICAgIDE0LFxuICAgICAgICAgIDE2MSxcbiAgICAgICAgICA4NyxcbiAgICAgICAgICAxODYsXG4gICAgICAgICAgMTEwLFxuICAgICAgICAgIDY4XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9LFxuICAgIFwic2lnbmF0dXJlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjE4LFxuICAgICAgICAxMDAsXG4gICAgICAgIDc5LFxuICAgICAgICAxODksXG4gICAgICAgIDE1NixcbiAgICAgICAgMTI2LFxuICAgICAgICA2MixcbiAgICAgICAgNyxcbiAgICAgICAgMTQ2LFxuICAgICAgICA5MCxcbiAgICAgICAgMTQxLFxuICAgICAgICAyMTIsXG4gICAgICAgIDc5LFxuICAgICAgICAxMzUsXG4gICAgICAgIDE4MixcbiAgICAgICAgMTE4LFxuICAgICAgICAxNDUsXG4gICAgICAgIDcyLFxuICAgICAgICAxNzQsXG4gICAgICAgIDU1LFxuICAgICAgICA4NixcbiAgICAgICAgMjE3LFxuICAgICAgICAyMjcsXG4gICAgICAgIDE3NSxcbiAgICAgICAgMTE5LFxuICAgICAgICAxMCxcbiAgICAgICAgMTg0LFxuICAgICAgICAzMyxcbiAgICAgICAgMTgxLFxuICAgICAgICAxMjMsXG4gICAgICAgIDkzLFxuICAgICAgICA5NSxcbiAgICAgICAgMjUxLFxuICAgICAgICAxMzQsXG4gICAgICAgIDMsXG4gICAgICAgIDI0MSxcbiAgICAgICAgOTMsXG4gICAgICAgIDQzLFxuICAgICAgICA2NixcbiAgICAgICAgMjcsXG4gICAgICAgIDI0OCxcbiAgICAgICAgMTY1LFxuICAgICAgICAxNzcsXG4gICAgICAgIDI1NCxcbiAgICAgICAgNTIsXG4gICAgICAgIDE3MSxcbiAgICAgICAgMTYzLFxuICAgICAgICAxNTksXG4gICAgICAgIDI0MSxcbiAgICAgICAgMSxcbiAgICAgICAgMzksXG4gICAgICAgIDE0LFxuICAgICAgICAxNDksXG4gICAgICAgIDE2MSxcbiAgICAgICAgOTEsXG4gICAgICAgIDE2OCxcbiAgICAgICAgMTc2LFxuICAgICAgICAxMTQsXG4gICAgICAgIDMxLFxuICAgICAgICA0MyxcbiAgICAgICAgMjA5LFxuICAgICAgICA4LFxuICAgICAgICA0MCxcbiAgICAgICAgNVxuICAgICAgXVxuICAgIH0sXG4gICAgXCJrZXlJZFwiOiAxXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uSWRcIjogNTAsXG4gIFwiYWR2U2VjcmV0S2V5XCI6IFwiTE9oOTZFMXJOQlFUQXJ1TElVM0R1RmkwSG8ySi9RRnV1VGROZXZBelNrOD1cIixcbiAgXCJwcm9jZXNzZWRIaXN0b3J5TWVzc2FnZXNcIjogW10sXG4gIFwibmV4dFByZUtleUlkXCI6IDMxLFxuICBcImZpcnN0VW51cGxvYWRlZFByZUtleUlkXCI6IDMxLFxuICBcImFjY291bnRTeW5jQ291bnRlclwiOiAwLFxuICBcImFjY291bnRTZXR0aW5nc1wiOiB7XG4gICAgXCJ1bmFyY2hpdmVDaGF0c1wiOiBmYWxzZVxuICB9LFxuICBcImRldmljZUlkXCI6IFwiQ3hHZVVTRGFSOFd3NE0td0NTMUZ5QVwiLFxuICBcInBob25lSWRcIjogXCI3MTE5ZTFlNy03MzQzLTRhMGYtYmVhNy1mMWY0OGNjMzgwNzlcIixcbiAgXCJpZGVudGl0eUlkXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMTk5LFxuICAgICAgMjAzLFxuICAgICAgMTYsXG4gICAgICAyOCxcbiAgICAgIDIyMyxcbiAgICAgIDY5LFxuICAgICAgMjksXG4gICAgICAxNjUsXG4gICAgICAyLFxuICAgICAgMTY3LFxuICAgICAgMTk3LFxuICAgICAgOTcsXG4gICAgICA0LFxuICAgICAgNTgsXG4gICAgICAxMTcsXG4gICAgICAyMDcsXG4gICAgICAxMDMsXG4gICAgICAyNDgsXG4gICAgICA2MCxcbiAgICAgIDk0XG4gICAgXVxuICB9LFxuICBcInJlZ2lzdGVyZWRcIjogZmFsc2UsXG4gIFwiYmFja3VwVG9rZW5cIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICA2OCxcbiAgICAgIDUwLFxuICAgICAgMjEsXG4gICAgICAyMDIsXG4gICAgICA5NSxcbiAgICAgIDI4LFxuICAgICAgMjIxLFxuICAgICAgMTY1LFxuICAgICAgMTYwLFxuICAgICAgMTg5LFxuICAgICAgNDYsXG4gICAgICAxNzUsXG4gICAgICAxNjgsXG4gICAgICAxMTgsXG4gICAgICAzOCxcbiAgICAgIDQsXG4gICAgICAxNTAsXG4gICAgICAxNzEsXG4gICAgICA1OCxcbiAgICAgIDEzMVxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25cIjoge30sXG4gIFwiYWNjb3VudFwiOiB7XG4gICAgXCJkZXRhaWxzXCI6IFwiQ08vbWdGc1FzODYrdEFZWURTQUFLQUE9XCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlS2V5XCI6IFwiRlhQbFZ1ek9NVTh1Y3JId3ZOamNOaU53b1lzTEpZVTd5WFdJQWZzemVDVT1cIixcbiAgICBcImFjY291bnRTaWduYXR1cmVcIjogXCJDSnJtU0kzbmhqOVNtTEdPWmR0NTIxVmxrSU9FN1ZkZkZYU3NFR1ltWUV6amxvRFllbTdhZHowZzhWZHpyS0tXeGNTMmI3MHJwdVg5SGVqeDB5bUxEdz09XCIsXG4gICAgXCJkZXZpY2VTaWduYXR1cmVcIjogXCI4L09FT0R2dGJPNGVTcS9kbnFmL2xTUFg5SEpBcTFoQ1NybXcyZHhueHoxd2ZqWkwyYnlmMmxNbGN6VklHZGFCdXFTdkQ1RUQ1ekZudC8zb054MXRCZz09XCJcbiAgfSxcbiAgXCJtZVwiOiB7XG4gICAgXCJpZFwiOiBcIjIzNDkxMzQ5ODM0Njc6NThAcy53aGF0c2FwcC5uZXRcIixcbiAgICBcIm5hbWVcIjogXCJUaGVvXCIsXG4gICAgXCJsaWRcIjogXCIxMzc5MTQ5MjM2MjM2OTo1OEBsaWRcIlxuICB9LFxuICBcInNpZ25hbElkZW50aXRpZXNcIjogW1xuICAgIHtcbiAgICAgIFwiaWRlbnRpZmllclwiOiB7XG4gICAgICAgIFwibmFtZVwiOiBcIjIzNDkxMzQ5ODM0Njc6NThAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJkZXZpY2VJZFwiOiAwXG4gICAgICB9LFxuICAgICAgXCJpZGVudGlmaWVyS2V5XCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNSxcbiAgICAgICAgICAyMSxcbiAgICAgICAgICAxMTUsXG4gICAgICAgICAgMjI5LFxuICAgICAgICAgIDg2LFxuICAgICAgICAgIDIzNixcbiAgICAgICAgICAyMDYsXG4gICAgICAgICAgNDksXG4gICAgICAgICAgNzksXG4gICAgICAgICAgNDYsXG4gICAgICAgICAgMTE0LFxuICAgICAgICAgIDE3NyxcbiAgICAgICAgICAyNDAsXG4gICAgICAgICAgMTg4LFxuICAgICAgICAgIDIxNixcbiAgICAgICAgICAyMjAsXG4gICAgICAgICAgNTQsXG4gICAgICAgICAgMzUsXG4gICAgICAgICAgMTEyLFxuICAgICAgICAgIDE2MSxcbiAgICAgICAgICAxMzksXG4gICAgICAgICAgMTEsXG4gICAgICAgICAgMzcsXG4gICAgICAgICAgMTMzLFxuICAgICAgICAgIDU5LFxuICAgICAgICAgIDIwMSxcbiAgICAgICAgICAxMTcsXG4gICAgICAgICAgMTM2LFxuICAgICAgICAgIDEsXG4gICAgICAgICAgMjUxLFxuICAgICAgICAgIDUxLFxuICAgICAgICAgIDEyMCxcbiAgICAgICAgICAzN1xuICAgICAgICBdXG4gICAgICB9XG4gICAgfVxuICBdLFxuICBcInBsYXRmb3JtXCI6IFwic21iYVwiLFxuICBcImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcFwiOiAxNzIwNjkwNDkwXG59Igp9 " 
  // PUT your SESSION_ID 


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
