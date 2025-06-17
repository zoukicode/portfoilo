import { motion, AnimatePresence } from "framer-motion"
import emailjs from "emailjs-com"
import { useState, useRef } from "react"

export function Contact({text,langue,setlangue}) {
  const idee = text.contact.paragraphe
  const splitchart = idee.split("")

  const [nom, setNom] = useState("")
  const [sujet, setSujet] = useState("")
  const [email, setEmail] = useState("")
  const [notification, setNotification] = useState(null)

  const form = useRef()

  const host = import.meta.env.VITE_API_URL

  const handleSubmit = async (e) => {
    e.preventDefault()

    const message = { nom, email, sujet }

    try {
      // 1. Enregistrement dans la base
      const res = await fetch(`${host}/api/contact`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(message),
      })

      const data = await res.json()

      if (!res.ok) {
        setNotification({
          type: "error",
          message: ` Erreur : ${data.message}`,
        })
        hideNotification()
        return
      }

      // 2. Envoi via EmailJS
      emailjs
        .send(
          "service_x359sh6", // Remplace par ton ID de service
          "template_pxlfgkg", // Remplace par ton ID de template
          {
            name: nom,
            email: email,
            message: sujet,
          },
          "WJPecJrArBat35eH8" // Remplace par ta clé publique
        )
        .then(
          () => {
            setNotification({
              type: "success",
              message: "Message enregistré avec succès !",
            })
            setNom("")
            setEmail("")
            setSujet("")
            hideNotification()
          },
          (error) => {
            console.error(error)
            setNotification({
              type: "error",
              message: "✅ Enregistré mais ❌ email non envoyé.",
            })
            hideNotification()
          }
        )
    } catch (error) {
      console.error(error)
      setNotification({
        type: "error",
        message: "❌ Erreur de connexion au serveur",
      })
      hideNotification()
    }
  }

  const hideNotification = () => {
    setTimeout(() => setNotification(null), 4000)
  }

  return (
    <section id="contact" className="flex flex-col gap-10">
      <div className="flex flex-col gap-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          viewport={{ amount: 0.6 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ ease: "easeInOut", duration: 0.8 }}
        >
          <h1 className="text-3xl font-bold">Me Contacter</h1>
          <h1 className="text-3xl font-bold">{text.contact.titre}</h1>
        </motion.div>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: false, amount: 0.6 }}
          transition={{ ease: "easeInOut", delay: 0.4, duration: 0.01 }}
          id="idee"
        >
          {splitchart.map((v, i) => (
            <motion.span
              key={i}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true, amount: 0.6 }}
              transition={{ ease: "linear", delay: i * 0.03, duration: 0.01 }}
            >
              {v}
            </motion.span>
          ))}
        </motion.p>
      </div>

      <form
        ref={form}
        onSubmit={handleSubmit}
        className="lg:w-150 flex flex-col gap-5 w-full"
      >
        <input
          className="outline-none w-full px-5 rounded-md h-12 bg-white/10 text-white"
          type="text"
          placeholder={text.contact.nom}
          value={nom}
          onChange={(e) => setNom(e.target.value)}
        />
        <input
          className="outline-none w-full px-5 rounded-md h-12 bg-white/10 text-white"
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <textarea
          className="outline-none w-full px-5 py-3 rounded-md bg-white/10 text-white"
          placeholder="Sujet"
          value={sujet}
          onChange={(e) => setSujet(e.target.value)}
        />
              <button
          className="w-full h-12 bg-[#263b7a] rounded-md text-white"
          type="submit"
        >
          {text.contact.submitbutton}
        </button>
      </form>

      {/* Notification animée */}
      <AnimatePresence>
        {notification && (
          <motion.div
            key="notification"
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -30 }}
            transition={{ duration: 0.5 }}
            className={`fixed top-5 left-1/2 transform -translate-x-1/2 px-6 py-3 rounded-lg shadow-md z-50 text-white ${
              notification.type === "success"
                ? "bg-green-500"
                : "bg-red-500"
            }`}
          >
            {notification.message}
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  )
}
