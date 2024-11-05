let handler = async (m, { conn, usedPrefix, isOwner }) => {
let vcard = `BEGIN:VCARD\nVERSION:3.0\nN:Lunita;;\nFN:Lunita\nORG:Lunita\nTITLE:\nitem1.TEL;waid=5216122294403:5216122294403\nitem1.X-ABLabel:Nao\nX-WA-BIZ-DESCRIPTION:\nX-WA-BIZ-NAME:Lunita\nEND:VCARD`
await conn.sendMessage(m.chat, { contacts: { displayName: 'おDanịel.xyz⁩', contacts: [{ vcard }] }}, {quoted: m})
}
handler.help = ['owner']
handler.tags = ['main']
handler.command = ['owner', 'creator', 'creador', 'dueño'] 

export default handler
