const fs = require('fs-extra')
if (fs.existsSync('config.env')) require('dotenv').config({ path: __dirname+'/config.env' })


//═══════[Required Variables]════════\\
process.env.OWNER_NUMBER = process.env.OWNER_NUMBER || '254781263753'
global.owner = process.env.OWNER_NUMBER.split(",")
global.mongodb = process.env.MONGODB_URI || "mongodb+srv://Krishna:pss968048@cluster0.4rfuzro.mongodb.net/?retryWrites=true&w=majority"
global.port= process.env.PORT || 5000
global.email = 'crazycvv@gmail.com'
global.github = 'https://github.com/CrazyPrince/CRAZY-MD'
global.location = 'Sultanpur IN'
global.gurl = 'https://instagram.com/' // add your username
global.sudo = process.env.SUDO || '237620114013'
global.devs = '237620114013';
global.website = 'https://github.com/CrazyPrince/CRAZY-MD' //wa.me/+91000000000000
global.THUMB_IMAGE = process.env.THUMB_IMAGE || 'https://telegra.ph/file/984e15c49561a5dd9d112.jpg'
module.exports = {
  botname:   process.env.BOT_NAME === undefined ? 'Crazy Bot' : process.env.BOT_NAME,
  ownername: process.env.OWNER_NAME === undefined ? 'ALVIN' : process.env.OWNER_NAME,
  sessionName:  process.env.SESSION_ID === undefined ? '{"noiseKey":{"private":{"type":"Buffer","data":"yNE12onDVF+tT429GukB6iYlxcAGh7Pwni/6KB7WZUs="},"public":{"type":"Buffer","data":"gAAOcGK3wpDOqXmQANDzQfxEOueHLbDtAO5nQ5GbTkc="}},"pairingEphemeralKeyPair":{"private":{"type":"Buffer","data":"eKmGLibW23mVdO63CBVWzlN9N+VsPiB4Ax/bsgF+am4="},"public":{"type":"Buffer","data":"eL17VLPuXHCrTZGFSV16zkNnc0Xac9gqGlRYBuwhXFw="}},"signedIdentityKey":{"private":{"type":"Buffer","data":"4Mr0hIZUnHx4RJ7Z3CYuqtsrGpQq12snCTfvYEMf4nc="},"public":{"type":"Buffer","data":"rtpkCHLWSyOeNOzRPjTRkLk30kr2vd5Kpi+QW/BhmAw="}},"signedPreKey":{"keyPair":{"private":{"type":"Buffer","data":"SAt6QEA19IIAU7mCx7Zbb3jUPT46noSAFIGJPrJTcEM="},"public":{"type":"Buffer","data":"Hs0tI7Tmmrz3R4nCIu6ZT3vma1GbSYzmd3Q5QOHWCQo="}},"signature":{"type":"Buffer","data":"2/DHu13yzbxIJNMSZ4jPg/+kLU2NruzluBdlFG64qG6HALfvrQoC4F/WrxC6acHNl/fI+R6xYvoMGVRDIWJygw=="},"keyId":1},"registrationId":147,"advSecretKey":"YHHuXbtjhbjxk03JTPNyngfKzZls7/0DQ9x59RX1mGM=","processedHistoryMessages":[],"nextPreKeyId":31,"firstUnuploadedPreKeyId":31,"accountSyncCounter":0,"accountSettings":{"unarchiveChats":false},"deviceId":"8tbJZNY0QDCBgi7b7jgT1A","phoneId":"ff200bca-3a15-4542-bf14-45288e208502","identityId":{"type":"Buffer","data":"RAtDlj+EfZP9Oexm7+J5JgOA5ss="},"registered":true,"backupToken":{"type":"Buffer","data":"iA0QYVzBSMMMBBCeXsk4wwWe690="},"registration":{},"pairingCode":"DNDRMBAW","me":{"id":"254781263753:27@s.whatsapp.net"},"account":{"details":"CPuUwwQQ+MO8tQYYASAAKAA=","accountSignatureKey":"BoVwSmv4HtJzOOwLTT5xdG9v2TaToKmzscDJihAFejA=","accountSignature":"Xojp7sRtMW/JuqFS4RyiSi9m5hZXFsR4gDS1Kqp1SmNRrXbNwuZ9QWmXsr9xohyw65AAWHSTwz7i2ObN02iJCw==","deviceSignature":"SYbxP4LD1ecp/aZhZdBDzWLjkXlXqyLO3j0E3u5cGMgUmb3ejwwh81G1Kp3KGYQf4qHtjSrG4NQshU+sP5D2jg=="},"signalIdentities":[{"identifier":{"name":"254781263753:27@s.whatsapp.net","deviceId":0},"identifierKey":{"type":"Buffer","data":"BQaFcEpr+B7SczjsC00+cXRvb9k2k6Cps7HAyYoQBXow"}}],"platform":"android","lastAccountSyncTimestamp":1722753542,"myAppStateKeyId":"AAAAABiw"}' : process.env.SESSION_ID,
  author:  process.env.PACK_INFO.split(";")[0] === undefined ? 'CRAZY_MD' : process.env.PACK_INFO.split(";")[0],
  auto_read_status :  process.env.AUTO_READ_STATUS === undefined ? false : process.env.AUTO_READ_STATUS,
  packname:  process.env.PACK_INFO.split(";")[1] === undefined ? 'Crazy-Md' : process.env.PACK_INFO.split(";")[1],
  autoreaction:  process.env.AUTO_REACTION  === undefined ? false : process.env.AUTO_REACTION ,
  antibadword :  process.env.ANTI_BAD_WORD === undefined ? 'nbwoed' : process.env.ANTI_BAD_WORD,
  alwaysonline:  process.env.ALWAYS_ONLINE === undefined ? false : process.env.ALWAYS_ONLINE,
  antifake : process.env.FAKE_COUNTRY_CODE === undefined ? '971' : process.env.FAKE_COUNTRY_CODE,
  readmessage:  process.env.READ_MESSAGE === undefined ? false : process.env.READ_MESSAGE,
  GENIUS_API_KEY:  process.env.GENIUS_API_KEY === undefined ? '6vdum57Wo2tsKxaEGKJcvNHeSo1sd9oNTcPpDZD8E9v3mUh0jArn5TSvuvgmZLIs' : process.env.GENIUS_API_KEY,
  auto_status_saver: process.env.AUTO_STATUS_SAVER === undefined ? false : process.env.AUTO_STATUS_SAVER,
  HANDLERS:  process.env.PREFIX === undefined ? ['.'] : process.env.PREFIX,
  warncount : process.env.WARN_COUNT === undefined ? 3 : process.env.WARN_COUNT,
  disablepm:  process.env.DISABLE_PM === undefined ? false : process.env.DISABLE_PM,
  levelupmessage:  process.env.LEVEL_UP_MESSAGE === undefined ? false : process.env.LEVEL_UP_MESSAGE,
  antilink:  process.env.ANTILINK_VALUES === undefined ? 'chat.whatsapp.com' : process.env.ANTILINK_VALUES,
  antilinkaction: process.env.ANTILINK_ACTION === undefined ? 'delete' : process.env.ANTILINK_ACTION,
  BRANCH: 'main', 
  ALIVE_MESSAGE:  process.env.ALIVE_MESSAGE === undefined ? 'Hey bruh, I,m Crazy  Md...Alive Now...' : process.env.ALIVE_MESSAGE,
  autobio:  process.env.AUTO_BIO === undefined ? false : process.env.AUTO_BIO,
  OPENAI_API_KEY:  process.env.OPENAI_API_KEY === undefined ? false : process.env.OPENAI_API_KEY,
  heroku:  process.env.heroku === undefined ? false : process.env.heroku,
  HEROKU: {
    HEROKU: process.env.HEROKU ||false,
    API_KEY: process.env.HEROKU_API_KEY === undefined ? '1abfce1e-1bee-4334-9f6c-f4c1cb1cafab' : process.env.HEROKU_API_KEY,
    APP_NAME: process.env.HEROKU_APP_NAME === undefined ? 'zeropgg' : process.env.HEROKU_APP_NAME
},
  VERSION: process.env.VERSION === undefined ? 'v.0.0.1' : process.env.VERSION,
  LANG: process.env.THEME|| 'CRAZY',
  WORKTYPE: process.env.WORKTYPE === undefined ? 'private' : process.env.WORKTYPE,
  LG: process.env.LG === undefined ? 'false' : process.env.LG,
};


let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(`Update'${__filename}'`)
    delete require.cache[file]
	require(file)
})
