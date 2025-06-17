import express from 'express'
import cors from 'cors'
import db from './index.js'

const app = express()

app.use(express.json())
app.use(cors())

const saveContact = "INSERT INTO contacts (nom_client, sujet, email) VALUES (?,?,?)"

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
    console.log('Serveur à l\'écoute sur http://localhost:3000')
})
