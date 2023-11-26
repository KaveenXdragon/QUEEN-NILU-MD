/*
WHATSAPP BOT BY Kaveen Chamodya
WHATSAPP - 94761544363
SUPPORT GROUP - https://chat.whatsapp.com/EsfrlG2HtbqDD3DZz1zvNw
YOUTUBE - https://www.youtube.com/@user-br5rt1bw9z
*/

const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({ path: './config.env' });

function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}

// PUT YOUR SESSION ID HERE  ##Required 

global.SESSION_ID = 'QueenNilu;;;U3ZlkDpb#MSTnkUuZEro_U2qDdOePUQ8EbKc0PBPYvXNvZTLR8wg' // PUT your session ID BY scan QR 

// databse URL  ##Required 
global.POSTGRESQL_URL = 'postgres://kaveen_md_user:Ue846oZhkhbZjsRXkb5XKFSg7C8p3MXh@dpg-cl6fons72pts73fvmpr0-a.frankfurt-postgres.render.com/kaveen_md'

 

// ⚙️ OWNER SETTINGS  ⚙️

global.OWNER_NUMBER = '94761544363'

global.OWNER_NAME = 'Kaviya_X'

global.TIMEZONE = 'Asia/Colombo' 

global.INBOX_BLOCK_MESSAGE = 'Inbox Not Allowed' // Inboc Block Message

global.INBOX_BLOCK = 'true' // TO Inbox Block On put true

global.READ_MESSAGE = "true" 

global.OPENAI_API_KEY = "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" 

/*
⚙️ BOT  SETTINGS  ⚙️
*/

global.BOT_NAME = 'ǫᴜᴇᴇɴ ɴɪʟᴜ'

global.FOOTER = 'Queen Nilu 2023'

global.BOT_OFFLINE = false    //  Always Onlne -  | false offline -True

global.STICKER_NAME = '@Kaviya 🤹‍♂️' //sticker

global.LANG = 'SI' // Language (EN-  TO english  ,  SI- TO sinhala )

global.PREFIX = '.' // Bot Prefix

global.CAPTION = 'ǫᴜᴇᴇɴ ɴɪʟᴜ  © 2023' // Caption

global.ALIVELOGO = 'https://telegra.ph/file/0ffb6ea6280d48b932bb6.jpg' // Set Alive Logo link 

global.ALIVE_MESSAGE = 'Hello I m alive Now' // Set Alive Message

global.MAX_SIZE = '500' // Bot Uloading Max size 

global.ANTI_BAD = true // Antibad (on = True , Off = False )

global.ANTI_BAD_ACTION = true

global.ANTI_LINK = true //Anti Link (on = True , Off = False )

global.ANTI_BOTS = true

global.ONLY_GROUP = 'false' // Only group mode

global.GROUP_LINK = 'https://chat.whatsapp.com/EsfrlG2HtbqDD3DZz1zvNw' // ur group link


/* 18 + Download Settings */

global.SEX_DL = 'true' // 18 + video dl

/* AUTO REPLY SETTINGS */

global.AUTO_STICKER = true

global.AUTO_REPLY = true

global.VOICE_REPLY = true


/* V card */

global.ytname = "YT: Master" //ur yt chanel name
global.socialm = "GitHub: KaveenXdragon" //ur github or insta name
global.location = "Srilanka, colombo" //ur location
