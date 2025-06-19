import express from 'express'
import cors from 'cors'
import db from './server.js'

const app = express()

app.use(express.json())
app.use(cors())

const saveContact = "INSERT INTO contact (nom_client, sujet, email) VALUES (?,?,?)"

//page d'acceuill du serveur
app.get('/', (req, res) => {
  res.send(`
    <html>
      <head><title>Accueil</title></head>
      <body><h1>Bienvenue</h1></body>
    </html>
  `);
});

app.post('/api/contact', (req, res) => {
    const { nom, sujet, email } = req.body

    if (!nom || !sujet || !email) {
        return res.status(400).json({ message: "Tous les champs sont requis" })
    }

    db.query(saveContact, [nom, sujet, email], (err, result) => {
        if (err) {
            console.log('Erreur SQL:', err)
            return res.status(500).json({ message: "Erreur lors de l'enregistrement" })
        }

        res.status(200).json({ message: "Enregistré avec succès" })
    })
})

app.listen(3000, () => {
    console.log('Serveur démarer')
})
