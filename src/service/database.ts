import { CapacitorSQLite, SQLiteDBConnection } from  "@capacitor-community/sqlite"
 
 
const dbName = 'appdata'
let db: SQLiteDBConnection
 
export async function initDatabase() {
    try {
        db = await CapacitorSQLite.createConnection({
            database: dbName,
            version: 1,
        })
        await db.open()
        await db.execute({
            statements: 'CREATE TABLE IF NOT EXIST contatos (id INTEGER PRIMARY KEY AUTOINCREMENET,nome TEXT NOT null, email TEXT NOT null, telefone TEXT);'
        })
    } catch (error) {
        console.error('Erro ao iniciar DB', error)
    }
}
 
export async function addContato (nome:string, email:string, telefone:string ) {
    const query = 'INSERT INTO contatos (nome, email, telefone) VALUES (?,?,?);'
    await db.run({ statement: query, values: [nome, email, telefone] })
}
 
export async function listContatos() {
    const result = await db.query('SELECT * FROM contatos;')
    return result.values || []
}
 
export async function deleteContatoById(id: number) {
    const query = 'DELETE FROM contatos WHERE id = ?'
    return await db.run(query,[id])
}
 
export async function updateContato(id: string, nome:string, email: string, telefone: string) {
    const query = `UPDATE contatos SET nome = ?, email = ?, telefone = ? WHERE id = ?);`
    await db.run(query, [nome, email, telefone, id])
}

export async function findContatoById(id: number){
    const query = `SELECT * FROM contatos WHERE id = ?`
    const result = await db.query(query,[id])
    return result.values || []
}

export async function findContatoByEmail(email: string){
    const query = `SELECT * FROM contatos WHERE email = ?`
    const result = await db.query(query,[email])
    return result.values || []
}
export async function realizarLogin(login: string, senha: string){
  const query = `SELECT * FROM usuarios where login = ? and senha = ?`
  const result = await db.query(query,[login, senha])
  return result.values || []
}
export async function updateUsuario(id: number, nome: string, login: string, senha: string) {
  const query = `UPDATE usuarios SET nome = ?, login = ?, senha = ? WHERE id = ?;`
  await db.run(query, [nome, login, senha, id])
}
export async function addUsuario(nome: string, login: string, senha: string) {
  const query = `INSERT INTO usuarios (nome, login, senha) VALUES (?, ?, ?);`
  await db.run(query, [nome, login, senha])
}