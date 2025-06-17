import mysql from 'mysql2'
import dotenv from 'dotenv'

dotenv.config()
const db = mysql.createConnection({
  host: process.env.DB_HOST,
  port: process.env.DB_PORT,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
})

// connexion a la base de donnée

// const db = mysql.createConnection(
//     {
//         user:'root',
//         password:'',
//         database:'portfoillo',
//         host:'localhost'
//     }
// )
db.connect((err)=>{
    if(err){
         throw new console.error('echec de connexion a la base de donnée')
    }
    console.log('connexion reussi')
    
})

export default db
