import mysql from 'mysql2'

// connexion a la base de donnée

const db = mysql.createConnection(
    {
        user:'root',
        password:'',
        database:'portfoillo',
        host:'localhost'
    }
)
db.connect((err)=>{
    if(err){
         throw new console.error('echec de connexion a la base de donnée')
    }
    console.log('connexion reussi')
    
})

export default db
