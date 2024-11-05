import { createHash } from 'crypto'
let handler = async function (m, { conn, args, usedPrefix}) {
  if (!args[0]) return m.reply(`ᡣ𐭩 Ingresa tu número de serie junto al comando.`)
  let user = global.db.data.users[m.sender]
  let sn = createHash('md5').update(m.sender).digest('hex')
  if (args[0] !== sn) return m.reply('ᡣ𐭩 Número de serie incorrecto')
  user.registered = false
  m.reply(`ᡣ𐭩 Registro eliminado con éxito.`)
}
handler.help = ['unreg'] 
handler.tags = ['rg']

handler.command = ['unreg'] 
handler.register = true

export default handler
