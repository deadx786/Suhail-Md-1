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
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "923454594722";




//========================= [ BOT SETTINGS ] =========================\\
global.style = process.env.STYLE   || '5'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || "false";  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGE || process.env.USER_IMAGES || "text" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "true"
global.save_status = process.env.AUTO_SAVE_STATUS || "true"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923454594722";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923454594722,923126016416";

global.api_smd = "https://api-smd.onrender.com" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID ||  ""  /SUHAIL_03_51_05_23_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMzIsXG4gICAgICAgIDE4MyxcbiAgICAgICAgMjQwLFxuICAgICAgICAyMjQsXG4gICAgICAgIDU4LFxuICAgICAgICA3OSxcbiAgICAgICAgMjM1LFxuICAgICAgICAyMDUsXG4gICAgICAgIDE4MyxcbiAgICAgICAgNTIsXG4gICAgICAgIDIyMCxcbiAgICAgICAgMjE4LFxuICAgICAgICAxMjIsXG4gICAgICAgIDk0LFxuICAgICAgICA1NixcbiAgICAgICAgMTYwLFxuICAgICAgICAyMzgsXG4gICAgICAgIDIyMyxcbiAgICAgICAgMjU1LFxuICAgICAgICAyMDUsXG4gICAgICAgIDIwMCxcbiAgICAgICAgMTU5LFxuICAgICAgICAzNyxcbiAgICAgICAgMTQwLFxuICAgICAgICAxODYsXG4gICAgICAgIDE0NixcbiAgICAgICAgMjgsXG4gICAgICAgIDM0LFxuICAgICAgICAzNixcbiAgICAgICAgMCxcbiAgICAgICAgMjA4LFxuICAgICAgICA5M1xuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyMTgsXG4gICAgICAgIDIxMSxcbiAgICAgICAgODcsXG4gICAgICAgIDE0MCxcbiAgICAgICAgMTQyLFxuICAgICAgICAzNCxcbiAgICAgICAgMTkzLFxuICAgICAgICA0OSxcbiAgICAgICAgNjgsXG4gICAgICAgIDE3NCxcbiAgICAgICAgMzksXG4gICAgICAgIDE0MyxcbiAgICAgICAgMTMwLFxuICAgICAgICA0MCxcbiAgICAgICAgNTEsXG4gICAgICAgIDIxLFxuICAgICAgICA4MyxcbiAgICAgICAgMTM2LFxuICAgICAgICAyMjcsXG4gICAgICAgIDI0NSxcbiAgICAgICAgMTgzLFxuICAgICAgICA5MCxcbiAgICAgICAgMjIsXG4gICAgICAgIDE3MixcbiAgICAgICAgMTEzLFxuICAgICAgICAyMCxcbiAgICAgICAgMTMwLFxuICAgICAgICAyNDUsXG4gICAgICAgIDI0MSxcbiAgICAgICAgMTY2LFxuICAgICAgICAxMTIsXG4gICAgICAgIDExNVxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJwYWlyaW5nRXBoZW1lcmFsS2V5UGFpclwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNDgsXG4gICAgICAgIDUyLFxuICAgICAgICAxMDIsXG4gICAgICAgIDQ4LFxuICAgICAgICAxNjMsXG4gICAgICAgIDIzNixcbiAgICAgICAgMTk2LFxuICAgICAgICAzMixcbiAgICAgICAgMTU4LFxuICAgICAgICA4LFxuICAgICAgICAxODAsXG4gICAgICAgIDE3NCxcbiAgICAgICAgMTA0LFxuICAgICAgICAxMTQsXG4gICAgICAgIDE2OCxcbiAgICAgICAgNzAsXG4gICAgICAgIDExMyxcbiAgICAgICAgMzcsXG4gICAgICAgIDE2NSxcbiAgICAgICAgMTY1LFxuICAgICAgICAxMzYsXG4gICAgICAgIDIyNixcbiAgICAgICAgMTA4LFxuICAgICAgICAxMzEsXG4gICAgICAgIDE1MixcbiAgICAgICAgMjIxLFxuICAgICAgICAyMTcsXG4gICAgICAgIDgxLFxuICAgICAgICA2NSxcbiAgICAgICAgMjQyLFxuICAgICAgICAxNTksXG4gICAgICAgIDEyNlxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxMDEsXG4gICAgICAgIDE1LFxuICAgICAgICA3MyxcbiAgICAgICAgODYsXG4gICAgICAgIDk5LFxuICAgICAgICAyMzcsXG4gICAgICAgIDI1MyxcbiAgICAgICAgNTgsXG4gICAgICAgIDE1MSxcbiAgICAgICAgMTc0LFxuICAgICAgICAxMTQsXG4gICAgICAgIDE0NCxcbiAgICAgICAgMTQ1LFxuICAgICAgICA2MixcbiAgICAgICAgMTg2LFxuICAgICAgICAyMjQsXG4gICAgICAgIDMyLFxuICAgICAgICA4NSxcbiAgICAgICAgMTYwLFxuICAgICAgICAxMSxcbiAgICAgICAgMTc2LFxuICAgICAgICA2NixcbiAgICAgICAgMTc0LFxuICAgICAgICAxNzcsXG4gICAgICAgIDI0NCxcbiAgICAgICAgMTUwLFxuICAgICAgICA2LFxuICAgICAgICAxMTAsXG4gICAgICAgIDk0LFxuICAgICAgICAxMDUsXG4gICAgICAgIDE2LFxuICAgICAgICA3MFxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRJZGVudGl0eUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTM2LFxuICAgICAgICAyNDcsXG4gICAgICAgIDEzLFxuICAgICAgICAxMTAsXG4gICAgICAgIDEwNixcbiAgICAgICAgMjQ5LFxuICAgICAgICAxNTIsXG4gICAgICAgIDIwMyxcbiAgICAgICAgMzMsXG4gICAgICAgIDg3LFxuICAgICAgICAyNTEsXG4gICAgICAgIDE0MCxcbiAgICAgICAgMTk0LFxuICAgICAgICAyNDAsXG4gICAgICAgIDIxOCxcbiAgICAgICAgMTMzLFxuICAgICAgICA1OSxcbiAgICAgICAgMTczLFxuICAgICAgICAyMzEsXG4gICAgICAgIDE0MSxcbiAgICAgICAgMTA3LFxuICAgICAgICAxNjAsXG4gICAgICAgIDE4NixcbiAgICAgICAgMTQsXG4gICAgICAgIDExMCxcbiAgICAgICAgMTg3LFxuICAgICAgICAyMTQsXG4gICAgICAgIDE1NyxcbiAgICAgICAgMzEsXG4gICAgICAgIDExOCxcbiAgICAgICAgMzUsXG4gICAgICAgIDEyMlxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyMjAsXG4gICAgICAgIDI0MCxcbiAgICAgICAgMTgzLFxuICAgICAgICA0MyxcbiAgICAgICAgNDgsXG4gICAgICAgIDE5LFxuICAgICAgICA2LFxuICAgICAgICAzNCxcbiAgICAgICAgMTY3LFxuICAgICAgICAxMDgsXG4gICAgICAgIDEzMyxcbiAgICAgICAgMjM3LFxuICAgICAgICAxMDcsXG4gICAgICAgIDEwMCxcbiAgICAgICAgMTEwLFxuICAgICAgICA5NixcbiAgICAgICAgMTU5LFxuICAgICAgICA2OCxcbiAgICAgICAgMjIzLFxuICAgICAgICAyMDEsXG4gICAgICAgIDI1MixcbiAgICAgICAgMTY1LFxuICAgICAgICA1MCxcbiAgICAgICAgMTU1LFxuICAgICAgICAyMzYsXG4gICAgICAgIDE4MCxcbiAgICAgICAgMTU1LFxuICAgICAgICAxNzUsXG4gICAgICAgIDk4LFxuICAgICAgICAxNDEsXG4gICAgICAgIDE0MyxcbiAgICAgICAgMTAwXG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZFByZUtleVwiOiB7XG4gICAgXCJrZXlQYWlyXCI6IHtcbiAgICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDU2LFxuICAgICAgICAgIDIwOCxcbiAgICAgICAgICAxODUsXG4gICAgICAgICAgODUsXG4gICAgICAgICAgMTQ2LFxuICAgICAgICAgIDIxNixcbiAgICAgICAgICAyMzksXG4gICAgICAgICAgMTcyLFxuICAgICAgICAgIDI0OCxcbiAgICAgICAgICA4MixcbiAgICAgICAgICAxNzQsXG4gICAgICAgICAgMjAwLFxuICAgICAgICAgIDE4LFxuICAgICAgICAgIDMxLFxuICAgICAgICAgIDE2NixcbiAgICAgICAgICAyMTgsXG4gICAgICAgICAgMjMzLFxuICAgICAgICAgIDIxMCxcbiAgICAgICAgICAyMTMsXG4gICAgICAgICAgMjEwLFxuICAgICAgICAgIDk1LFxuICAgICAgICAgIDIyOSxcbiAgICAgICAgICAxMTksXG4gICAgICAgICAgMTY3LFxuICAgICAgICAgIDEzMyxcbiAgICAgICAgICAxMDgsXG4gICAgICAgICAgMTM1LFxuICAgICAgICAgIDYsXG4gICAgICAgICAgMTQzLFxuICAgICAgICAgIDI1MCxcbiAgICAgICAgICAxODUsXG4gICAgICAgICAgODJcbiAgICAgICAgXVxuICAgICAgfSxcbiAgICAgIFwicHVibGljXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMjQyLFxuICAgICAgICAgIDM4LFxuICAgICAgICAgIDk4LFxuICAgICAgICAgIDIwMixcbiAgICAgICAgICA2OSxcbiAgICAgICAgICA4NCxcbiAgICAgICAgICAxNzAsXG4gICAgICAgICAgMTM0LFxuICAgICAgICAgIDEyLFxuICAgICAgICAgIDEyMCxcbiAgICAgICAgICAyMTAsXG4gICAgICAgICAgMjIzLFxuICAgICAgICAgIDE4MCxcbiAgICAgICAgICAyMDksXG4gICAgICAgICAgMjUxLFxuICAgICAgICAgIDEyLFxuICAgICAgICAgIDE3OCxcbiAgICAgICAgICAyNyxcbiAgICAgICAgICAyMTIsXG4gICAgICAgICAgOTEsXG4gICAgICAgICAgMTA2LFxuICAgICAgICAgIDIyMCxcbiAgICAgICAgICAyNSxcbiAgICAgICAgICAyNTQsXG4gICAgICAgICAgODUsXG4gICAgICAgICAgODgsXG4gICAgICAgICAgMTQ0LFxuICAgICAgICAgIDc4LFxuICAgICAgICAgIDU0LFxuICAgICAgICAgIDkyLFxuICAgICAgICAgIDE1OSxcbiAgICAgICAgICA3MVxuICAgICAgICBdXG4gICAgICB9XG4gICAgfSxcbiAgICBcInNpZ25hdHVyZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDg0LFxuICAgICAgICAyNDYsXG4gICAgICAgIDYsXG4gICAgICAgIDIyOSxcbiAgICAgICAgMTUzLFxuICAgICAgICA0NixcbiAgICAgICAgODcsXG4gICAgICAgIDMzLFxuICAgICAgICA5LFxuICAgICAgICAyMTQsXG4gICAgICAgIDExMSxcbiAgICAgICAgMTk4LFxuICAgICAgICA3MyxcbiAgICAgICAgMjQ3LFxuICAgICAgICAxOTIsXG4gICAgICAgIDEyMixcbiAgICAgICAgMTkyLFxuICAgICAgICA4NixcbiAgICAgICAgMTE4LFxuICAgICAgICAyMzAsXG4gICAgICAgIDQzLFxuICAgICAgICAxNzMsXG4gICAgICAgIDIyLFxuICAgICAgICAxMzUsXG4gICAgICAgIDE5NyxcbiAgICAgICAgMzcsXG4gICAgICAgIDIxMixcbiAgICAgICAgNyxcbiAgICAgICAgNjIsXG4gICAgICAgIDQsXG4gICAgICAgIDY5LFxuICAgICAgICAyMDMsXG4gICAgICAgIDE4NixcbiAgICAgICAgMTMwLFxuICAgICAgICAyNDEsXG4gICAgICAgIDQyLFxuICAgICAgICAxOTcsXG4gICAgICAgIDI0NSxcbiAgICAgICAgMjAxLFxuICAgICAgICAyNTIsXG4gICAgICAgIDExMixcbiAgICAgICAgMTE1LFxuICAgICAgICAxNSxcbiAgICAgICAgMjAwLFxuICAgICAgICA4OSxcbiAgICAgICAgMTUxLFxuICAgICAgICA3MyxcbiAgICAgICAgMTcxLFxuICAgICAgICAxNzYsXG4gICAgICAgIDYzLFxuICAgICAgICAxNDcsXG4gICAgICAgIDE2OCxcbiAgICAgICAgMTAwLFxuICAgICAgICAxNzksXG4gICAgICAgIDE0MCxcbiAgICAgICAgMTk2LFxuICAgICAgICAyNDUsXG4gICAgICAgIDE5NSxcbiAgICAgICAgNDQsXG4gICAgICAgIDE1NSxcbiAgICAgICAgMjA3LFxuICAgICAgICAxMzYsXG4gICAgICAgIDI0OCxcbiAgICAgICAgNlxuICAgICAgXVxuICAgIH0sXG4gICAgXCJrZXlJZFwiOiAxXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uSWRcIjogNDAsXG4gIFwiYWR2U2VjcmV0S2V5XCI6IFwiSVR2VUw4N3hOd1R5S09lOWU1YlFNRTh6cjhOc0I0S0pNZHRUTGkyZjQrbz1cIixcbiAgXCJwcm9jZXNzZWRIaXN0b3J5TWVzc2FnZXNcIjogW10sXG4gIFwibmV4dFByZUtleUlkXCI6IDMxLFxuICBcImZpcnN0VW51cGxvYWRlZFByZUtleUlkXCI6IDMxLFxuICBcImFjY291bnRTeW5jQ291bnRlclwiOiAwLFxuICBcImFjY291bnRTZXR0aW5nc1wiOiB7XG4gICAgXCJ1bmFyY2hpdmVDaGF0c1wiOiBmYWxzZVxuICB9LFxuICBcImRldmljZUlkXCI6IFwiWUpiYkxudmlTakN5NFhOUmxJWE8wd1wiLFxuICBcInBob25lSWRcIjogXCIyNjQwM2I4Zi1jZjkwLTRmNjEtODgwZi0xNjQ0MDZhMDMwZjFcIixcbiAgXCJpZGVudGl0eUlkXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMjAsXG4gICAgICAyMTEsXG4gICAgICAxMCxcbiAgICAgIDY3LFxuICAgICAgNTEsXG4gICAgICAxMTgsXG4gICAgICAxNjIsXG4gICAgICA4OSxcbiAgICAgIDgsXG4gICAgICAxNyxcbiAgICAgIDI4LFxuICAgICAgMjUxLFxuICAgICAgMjQ1LFxuICAgICAgMTQ0LFxuICAgICAgNzksXG4gICAgICA4MSxcbiAgICAgIDIyNCxcbiAgICAgIDE5MixcbiAgICAgIDIyLFxuICAgICAgMjA1XG4gICAgXVxuICB9LFxuICBcInJlZ2lzdGVyZWRcIjogZmFsc2UsXG4gIFwiYmFja3VwVG9rZW5cIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICA4NCxcbiAgICAgIDExMixcbiAgICAgIDEyMyxcbiAgICAgIDE4MixcbiAgICAgIDE5LFxuICAgICAgMjQ1LFxuICAgICAgMTk3LFxuICAgICAgOTEsXG4gICAgICAxMDYsXG4gICAgICAxMjAsXG4gICAgICAyNDksXG4gICAgICAxLFxuICAgICAgMjM0LFxuICAgICAgMjUzLFxuICAgICAgNixcbiAgICAgIDMsXG4gICAgICAxNjUsXG4gICAgICA5MCxcbiAgICAgIDMwLFxuICAgICAgNzRcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uXCI6IHt9LFxuICBcImFjY291bnRcIjoge1xuICAgIFwiZGV0YWlsc1wiOiBcIkNMbm92NGNDRUxINnVySUdHQUVnQUNnQVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZUtleVwiOiBcImRBdWFYRnZicGJhRENWNzUxNjhnNlp5cHU3dG1Vb2pKRGt4ODI4WXJOeGc9XCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlXCI6IFwiMno4SE11Qlp4WUlGcGdPVVdUbXBPNGhCNHNXb2w4bXl1bHoxNWhReldTYXpYV1hpZkpYZWY5Z2tHTVVDQy9jWFIwUHlwbFZSK3hsd2srcjZlUXA5Qmc9PVwiLFxuICAgIFwiZGV2aWNlU2lnbmF0dXJlXCI6IFwiU2lXQ0xJS0prMWk3cFJQWVRYM0J5T1V5VllRampkb3B5b0o0ZlVQWHpWbTl4ZDhvYi85MTRhUmJqNzVBUmRac0U1bElJNVJENWlCdWhkZmJ4Rkc5QkE9PVwiXG4gIH0sXG4gIFwibWVcIjoge1xuICAgIFwiaWRcIjogXCI5MjM0NTQ1OTQ3MjI6OUBzLndoYXRzYXBwLm5ldFwiLFxuICAgIFwibmFtZVwiOiBcIuS5myDwnZmP8J2ZgyfYuSDwnZmK8J2ZjvCdmLzwnZmI8J2YvFwiLFxuICAgIFwibGlkXCI6IFwiNTU5MDc4NDA5OTk1MTY6OUBsaWRcIlxuICB9LFxuICBcInNpZ25hbElkZW50aXRpZXNcIjogW1xuICAgIHtcbiAgICAgIFwiaWRlbnRpZmllclwiOiB7XG4gICAgICAgIFwibmFtZVwiOiBcIjkyMzQ1NDU5NDcyMjo5QHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZGV2aWNlSWRcIjogMFxuICAgICAgfSxcbiAgICAgIFwiaWRlbnRpZmllcktleVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDUsXG4gICAgICAgICAgMTE2LFxuICAgICAgICAgIDExLFxuICAgICAgICAgIDE1NCxcbiAgICAgICAgICA5MixcbiAgICAgICAgICA5MSxcbiAgICAgICAgICAyMTksXG4gICAgICAgICAgMTY1LFxuICAgICAgICAgIDE4MixcbiAgICAgICAgICAxMzEsXG4gICAgICAgICAgOSxcbiAgICAgICAgICA5NCxcbiAgICAgICAgICAyNDksXG4gICAgICAgICAgMjE1LFxuICAgICAgICAgIDE3NSxcbiAgICAgICAgICAzMixcbiAgICAgICAgICAyMzMsXG4gICAgICAgICAgMTU2LFxuICAgICAgICAgIDE2OSxcbiAgICAgICAgICAxODcsXG4gICAgICAgICAgMTg3LFxuICAgICAgICAgIDEwMixcbiAgICAgICAgICA4MixcbiAgICAgICAgICAxMzYsXG4gICAgICAgICAgMjAxLFxuICAgICAgICAgIDE0LFxuICAgICAgICAgIDc2LFxuICAgICAgICAgIDEyNCxcbiAgICAgICAgICAyMTksXG4gICAgICAgICAgMTk4LFxuICAgICAgICAgIDQzLFxuICAgICAgICAgIDU1LFxuICAgICAgICAgIDI0XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9XG4gIF0sXG4gIFwicGxhdGZvcm1cIjogXCJzbWJhXCIsXG4gIFwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wXCI6IDE3MTY0MzYyNzcsXG4gIFwibXlBcHBTdGF0ZUtleUlkXCI6IFwiQUFBQUFBZFhcIlxufSIsCiAgImFwcC1zdGF0ZS1zeW5jLWtleS1BQUFBQUFkWC5qc29uIjogIntcImtleURhdGFcIjpcImRSTUE2Q3hmeHk2Q0F0TzJRUGJjTjRHOHVGVUx2dSswQWpXSXBBNllaMjg9XCIsXCJmaW5nZXJwcmludFwiOntcInJhd0lkXCI6NTUyNTk2NTM3LFwiY3VycmVudEluZGV4XCI6MSxcImRldmljZUluZGV4ZXNcIjpbMCwxXX0sXCJ0aW1lc3RhbXBcIjpcIjE3MTY0MzYyODUwNTZcIn0iCn0=/ PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.4",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "The-Usama",
  ownername:process.env.OWNER_NAME|| "The usama",


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
