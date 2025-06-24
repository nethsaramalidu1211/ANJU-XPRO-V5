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
    "ANJU-XPRO~eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiVURQam5OcW8xTmFKOVBRWjNCaWkvcDRBMEkrNndvVUxaczB2cW9ja1Rtaz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiMm85YXMzYzgzNWlyWGpQL1IvM1dSUVFWZkRub2xWb1o2elRPUndEUjlSaz0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJzTnRXVjJ2ekhEK1paZlZNSkV6KzN3UlBDcU5iMzhJNGVPK3Nuay9CU1hnPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJyOHhDV3RUdnN6QmJ1M3lUeEdNZjdzbkVETXhrOGdHL1NoeGZMZFc5ZVEwPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IlNHT3I2SEl5ZXRMSkN4WExsc2FJWEJxeFBwS3pEQXhKaVFrRDVSQ2Y3bXM9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkVXdU5hZ2F6SHhEUTdFK1RBUVNnVUtDbzdlNTd3YkR6VUwya0l2VEJIa3c9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiZUxkbCtTS1ZPT1MvWEE0OUQ4U3QxSG5TOFY2RGdrNW9tYzNiS2JFbXVIaz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiNnFzeHU2cExKanB5UFVnRkxKME9MU2wyb0hQSTN0UmF6dHd5Y1gvVUNEWT0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkptY3ZrMTNiQWNHV0F3RlhESndrNnNpSEppSkJ6WnU3RVZEZVQ0ZjkwRzFWY1I5ZmVjODh4ZXVKbWNTSHJWUmliblRlNjdjcmFlaE4rV0g1c1VFQkN3PT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MzIsImFkdlNlY3JldEtleSI6IkRTTDVRM1V2MTNPblBjdHIycnVnczZMQ1RuYU5STExZWjc2cVFQTGFVNTg9IiwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzIjpbXSwibmV4dFByZUtleUlkIjozMSwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWQiOjMxLCJhY2NvdW50U3luY0NvdW50ZXIiOjAsImFjY291bnRTZXR0aW5ncyI6eyJ1bmFyY2hpdmVDaGF0cyI6ZmFsc2V9LCJkZXZpY2VJZCI6IndHbzl0LTc5VEh5ci03VThrY0xrUGciLCJwaG9uZUlkIjoiNDA3NjUwYzMtMDAxOS00ZDQ3LThiNjUtYTYwZDlmMWQ3OGI5IiwiaWRlbnRpdHlJZCI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkI1QUpDc0hBMk5DRTI5bDU5Y0JQRUlLb3hrND0ifSwicmVnaXN0ZXJlZCI6dHJ1ZSwiYmFja3VwVG9rZW4iOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJRTHZYUnozMVl2ZllEeXRXTGc3d0FSeENBSDA9In0sInJlZ2lzdHJhdGlvbiI6e30sInBhaXJpbmdDb2RlIjoiVEJXOVg1OFQiLCJtZSI6eyJpZCI6Ijk0NzE0MDYzMTA4OjYzQHMud2hhdHNhcHAubmV0IiwibGlkIjoiODgzNzM4MzQzMTM4MDQ6NjNAbGlkIn0sImFjY291bnQiOnsiZGV0YWlscyI6IkNQN24wY01GRUwzdTZjSUdHQWNnQUNnQSIsImFjY291bnRTaWduYXR1cmVLZXkiOiJja1dmQ242SGY5ek92V09pWmcyK1ZJZmZrRWZWTlA5OThqcmRZeERkMzNJPSIsImFjY291bnRTaWduYXR1cmUiOiIvSEJ3UHQ4R0Rmc0o2cytmMEhWSjVXeWU4MU1yOUt2UXhCNW1OdElCZ2ZFZEFoMjRVaTloOEtLRmEwSGdwWXNVckF2clBib29CN2JFRThKUml2L3dEdz09IiwiZGV2aWNlU2lnbmF0dXJlIjoiQkh1b0hkMXRhMWxRM3RsTGE3SHgrQUVRK0FuWW5xTGtpcmNPVnA1V1FyVGh1RVU3N1Y4QTlLeE9EbU1nSXVmMllyMkdyU1o2eGxkMzJYWFVsc25TQmc9PSJ9LCJzaWduYWxJZGVudGl0aWVzIjpbeyJpZGVudGlmaWVyIjp7Im5hbWUiOiI5NDcxNDA2MzEwODo2M0BzLndoYXRzYXBwLm5ldCIsImRldmljZUlkIjowfSwiaWRlbnRpZmllcktleSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkJYSkZud3AraDMvY3pyMWpvbVlOdmxTSDM1QkgxVFQvZmZJNjNXTVEzZDl5In19XSwicGxhdGZvcm0iOiJhbmRyb2lkIiwicm91dGluZ0luZm8iOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJDQTBJQWc9PSJ9LCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXAiOjE3NTA3NTkyNDIsImxhc3RQcm9wSGFzaCI6IjNSOVozOSIsIm15QXBwU3RhdGVLZXlJZCI6IkFBQUFBR0Y1In0=",
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
