//══════════════════════════════════════════════════════════════════════════════════════════════════════//
//                                                                                                      //
//                                   𝗤𝗨𝗘𝗘𝗡-𝗔𝗡𝗝𝗨 𝗫ᴾᴿᴼ 𝐁𝐎𝐓                                               //
//                                                                                                      //
//                                         Ｖ：5.0.0                                                       //
//
//
//░██████╗░██╗░░░██╗███████╗███████╗███╗░░██╗  ░█████╗░███╗░░██╗░░░░░██╗██╗░░░██╗  ██╗░░██╗██████╗░██████╗░░█████╗░
//██╔═══██╗██║░░░██║██╔════╝██╔════╝████╗░██║  ██╔══██╗████╗░██║░░░░░██║██║░░░██║  ╚██╗██╔╝██╔══██╗██╔══██╗██╔══██╗
//██║██╗██║██║░░░██║█████╗░░█████╗░░██╔██╗██║  ███████║██╔██╗██║░░░░░██║██║░░░██║  ░╚███╔╝░██████╔╝██████╔╝██║░░██║
//╚██████╔╝██║░░░██║██╔══╝░░██╔══╝░░██║╚████║  ██╔══██║██║╚████║██╗░░██║██║░░░██║  ░██╔██╗░██╔═══╝░██╔══██╗██║░░██║
//░╚═██╔═╝░╚██████╔╝███████╗███████╗██║░╚███║  ██║░░██║██║░╚███║╚█████╔╝╚██████╔╝  ██╔╝╚██╗██║░░░░░██║░░██║╚█████╔╝
//░░░╚═╝░░░░╚═════╝░╚══════╝╚══════╝╚═╝░░╚══╝  ╚═╝░░╚═╝╚═╝░░╚══╝░╚════╝░░╚═════╝░  ╚═╝░░╚═╝╚═╝░░░░░╚═╝░░╚═╝░╚════╝░
//
//
//
//══════════════════════════════════════════════════════════════════════════════════════════════════════//
//*
//  * @project_name : © 𝚀𝚄𝙴𝙴𝙽 𝙰𝙽𝙹𝚄 𝗑ᴾᴿᴼ
//  * @version      : 5.0
//  * @author       : Janith Rashmika
//  * @youtube      : https://www.youtube.com/@gamingrash2006
//  * @description  : © 𝚀𝚄𝙴𝙴𝙽 𝙰𝙽𝙹𝚄 𝗑ᴾᴿᴼ, A Multi-functional WhatsApp bot created by Janith Rashmika.
//*
//*
//Base by Janith Rashmika
//GitHub: @Mrrashmika
//WhatsApp: +94717775628
//Want more free bot scripts? Subscribe to my YouTube channel: https://youtube.com/@gamingrash2006
//   * Created By GitHub: Mrrashmika
//   * Credit To Janith Rashmika
//   * © 2025 © 𝚀𝚄𝙴𝙴𝙽 𝙰𝙽𝙹𝚄 𝗑ᴾᴿᴼ-V4.
// ⛥┌┤
// */

const fs = require("fs");
if (fs.existsSync("config.env"))
  require("dotenv").config({ path: "./config.env" });

function convertToBool(text, fault = "true") {
  return text === fault ? true : false;
}
module.exports = {
  SESSION_ID:
    process.env.SESSION_ID ||
    "ANJU-XPRO~eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoib0VFUUk3ZTBXejlWRGZBNldtQ0JiOHZZbXhRTTBPS2l0ZXlEb1hncDUzRT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoibEZya3V5MVJiamlwTFZoL0xZaWtRamR4QXJNdlQ3MjJVWERROEtjaStFOD0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJHTUMxQlFvbksySDAyTUkvSmdieHJsbzFWSHpyMkliRU9nSHlmMk0ra1dzPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJLNVoyNnRFdExiQ3pQanRZdDBiR0haVXRXcTR3dVEvdGZqazkzSUQ5SUE0PSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IndHUk8rQ1BIZExvQ3NoSzlvTTNtYlBlZFFWWWpFaGtOSmNtVVVUQUxvVWM9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IlJmZm9oUlFxZFhwbkk0V2h3aHZ0Y045alZlcHJvaVN0aHh2RWpYU01KbWc9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoic0dERlZWN3Y4WmRaaFNpd3QrTGlsaTNZNTFqNzQyUThHT1VyT3JITmdtND0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiYTExU2dzdFU4V1EwT0IrTnVuNlE4eUticGNiRVpGaTBDV004MjV3SlBCcz0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IjY5QWxCRFBBZkJVUko2TGZsUmtmZWo3T3lMVW95ZVBVdVYrbUVDR2tnNkJ0QVhVaEttSGF0THFwRW9iZG9ITXF0UXpmSy9SMHk5SERONG0wVUEwYkJRPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MTY5LCJhZHZTZWNyZXRLZXkiOiJwQUlvQi9qZWQ5clhFM1lrUW9EM2FRZjAvRDJjbDcwaWhNclo3K3V4R1NNPSIsInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlcyI6W10sIm5leHRQcmVLZXlJZCI6MzEsImZpcnN0VW51cGxvYWRlZFByZUtleUlkIjozMSwiYWNjb3VudFN5bmNDb3VudGVyIjowLCJhY2NvdW50U2V0dGluZ3MiOnsidW5hcmNoaXZlQ2hhdHMiOmZhbHNlfSwiZGV2aWNlSWQiOiJWRUpJbndwcFR1dTZBNzhqbFdTZV9nIiwicGhvbmVJZCI6IjI4ZjdiZmQ0LTU5YjgtNDEzMC1iODE2LWJmYTc1N2M3YjI4OCIsImlkZW50aXR5SWQiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJwa1VZaWdVa2dmaGtaWms0UUU1NGlWUTZZVk09In0sInJlZ2lzdGVyZWQiOnRydWUsImJhY2t1cFRva2VuIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiUlRVZGo0VE1WL2szUEdDNlVmaTBpK1ZJbE9vPSJ9LCJyZWdpc3RyYXRpb24iOnt9LCJwYWlyaW5nQ29kZSI6IlFDSlNWVE5QIiwibWUiOnsiaWQiOiI5NDcxNDA2MzEwODo2OUBzLndoYXRzYXBwLm5ldCIsIm5hbWUiOiLgtqLgt4rgt4Pgt4rgtqLgt4rgt4Pgt4oiLCJsaWQiOiI4ODM3MzgzNDMxMzgwNDo2OUBsaWQifSwiYWNjb3VudCI6eyJkZXRhaWxzIjoiQ0lHaWpLd0hFTSsvK01JR0dBRWdBQ2dBIiwiYWNjb3VudFNpZ25hdHVyZUtleSI6InlBd01LQzNIamJ3NkZmSE5UQXUrajBQZU1QenBMYUY0NW9tSGgrK1g0aU09IiwiYWNjb3VudFNpZ25hdHVyZSI6IlB3M3kySUc3SGJOMElQbXBFODk4OHQ5RFVIa1VReUhScVpVaDdVTmIrZFJkV09QOSt6SzgrdGdwbTU0amJXQzZUc1dId3IrWUhiMTkzM2Z6RnpIOUF3PT0iLCJkZXZpY2VTaWduYXR1cmUiOiIxSFRRQUxNblA5QXRZcWNIdXBQOSsydzI2MXVnVXNLV2tCa242MmcxNEU4OTFzRlcvdTNvbld0a0JQdWRmL2ZoSjYzTzVhSklvcDExUEE0cGRnaEtDZz09In0sInNpZ25hbElkZW50aXRpZXMiOlt7ImlkZW50aWZpZXIiOnsibmFtZSI6Ijk0NzE0MDYzMTA4OjY5QHMud2hhdHNhcHAubmV0IiwiZGV2aWNlSWQiOjB9LCJpZGVudGlmaWVyS2V5Ijp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQmNnTURDZ3R4NDI4T2hYeHpVd0x2bzlEM2pEODZTMmhlT2FKaDRmdmwrSWoifX1dLCJwbGF0Zm9ybSI6InNtYmEiLCJyb3V0aW5nSW5mbyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkNBMElBZz09In0sImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcCI6MTc1MDk5OTAwNCwibGFzdFByb3BIYXNoIjoiM1I5WjM5In0=",
  BOT_NUMBER:
    process.env.BOT_NUMBER || "95714063108",
  PASSWORD: 
    process.env.PASSWORD || "TBW9X58T",
  SUDO: process.env.SUDO
    ? process.env.SUDO.split(",")
    : ["94717775628", "94758775628"],
  PORT: process.env.PORT || "3000",
  SESSION_DIR: process.env.SESSION_DIR || "sess",
};
