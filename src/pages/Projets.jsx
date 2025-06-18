import { motion } from "framer-motion";
import projetImage from '/projets/Capture d’écran (135).png';
import Header from './Header';

export function Projets({ text, langue, setLangue }) {

  const projetsJson = [
    {
      img: projetImage,
      nom: "Dashboard",
      description: "Ceci est un projet demo que j'ai réalisé .",
    },
    {
      img: projetImage,
      nom: "Dashboard",
      description: "Ceci est une description du projet.",
    },
    ];

  return (
    <section id="projets" className="relative">
      {/* svg style */}
      <div className="z-[-1] absolute bottom-[-170px] right-0 opacity-50">
        <svg width="1285" height="932" viewBox="0 0 1285 932" fill="none" xmlns="http://www.w3.org/2000/svg">
          <g clipPath="url(#clip0_18_2)">
            <rect x="1285.45" y="693" width="167.821" height="311.839" transform="rotate(40 1285.45 693)" fill="url(#paint0_linear_18_2)" fillOpacity="0.3" />
            <rect x="1287.83" y="793.704" width="88.5421" height="224.218" transform="rotate(40 1287.83 793.704)" fill="#101C48" fillOpacity="0.31" stroke="#263B7A" />
          </g>
          <defs>
            <linearGradient id="paint0_linear_18_2" x1="1453.27" y1="835.753" x2="1301.58" y2="797.732" gradientUnits="userSpaceOnUse">
              <stop stopColor="#263B7A" />
              <stop offset="1" stopColor="#101C48" />
            </linearGradient>
            <clipPath id="clip0_18_2">
              <rect width="1285" height="932" fill="white" />
            </clipPath>
          </defs>
        </svg>
      </div>

      <section className="flex flex-col gap-10 w-[90%] mx-auto overflow-x-hidden">
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          viewport={{ amount: 0.5 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ ease: "easeInOut", duration: 0.8 }}
          className="text-3xl font-bold"
        >
          {text.nav[0]}
        </motion.h1>

        <motion.div
          initial={{ opacity: 0, x: 100 }}
          viewport={{ amount: 0.5 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ ease: "easeInOut", duration: 0.8 }}
          className="lg:w-[50%] w-[100%] overflow-x-hidden"
        >
          <p>{text.projets.paragraphe}</p>
          <p>Chaque projet est le fruit d’une recherche d’efficacité, de performance et d’une bonne expérience utilisateur.</p>
        </motion.div>

        <div className="lg:flex-row flex flex-col justify-start gap-5 items-center">
          {projetsJson.map((projet, index) => (
            <div key={index} className="lg:w-[400px] w-full p-6 rounded-md bg-white/5 backdrop-blur-sm shadow-lg hover:shadow-xl transition-shadow">
              <img className="w-full h-48 object-cover rounded-t-md mb-4" src={projet.img} alt={`Projet ${index + 1}`} />
              <div className="flex flex-col gap-3">
                <h2 className="text-xl font-bold text-white">{projet.nom}</h2>
                <p className="text-gray-300">{projet.description}</p>
                <div className="flex justify-center gap-4">
                 <a
  className="px-4 py-2 hover:bg-blue-600 rounded-md transition bg-white"
  href="https://github.com"
  target="_blank"
  rel="noopener noreferrer"
>
  <svg viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg" fill="#263b7a" width="24" height="24">
    <path d="M24,2.5A21.5,21.5,0,0,0,17.2,44.4c1.08.2,1.47-.46,1.47-1s0-1.86,0-3.65c-6,1.3-7.24-2.88-7.24-2.88A5.7,5.7,0,0,0,9,33.68c-1.95-1.33.15-1.31.15-1.31a4.52,4.52,0,0,1,3.29,2.22c1.92,3.29,5,2.34,6.26,1.79a4.61,4.61,0,0,1,1.37-2.88c-4.78-.54-9.8-2.38-9.8-10.62a8.29,8.29,0,0,1,2.22-5.77,7.68,7.68,0,0,1,.21-5.69s1.8-.58,5.91,2.2a20.46,20.46,0,0,1,10.76,0c4.11-2.78,5.91-2.2,5.91-2.2a7.74,7.74,0,0,1,.21,5.69,8.28,8.28,0,0,1,2.21,5.77c0,8.26-5,10.07-9.81,10.61a5.12,5.12,0,0,1,1.46,4c0,2.87,0,5.19,0,5.9s.39,1.24,1.48,1A21.5,21.5,0,0,0,24,2.5Z"/>
  </svg>
</a>

                <a
  className="px-4 py-2 hover:bg-gray-600 rounded-md transition bg-white"
  href="https://monsite.com"
  target="_blank"
  rel="noopener noreferrer"
>
  <svg viewBox="0 0 24 24" fill="#263b7a" xmlns="http://www.w3.org/2000/svg" width="24" height="24">
    <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.477 2 12s4.477 10 10 10 10-4.477 10-10S17.523 2 12 2zm0 2a8 8 0 100 16 8 8 0 000-16zm1 11v-2h2v-2h-2V9h-2v2H9v2h2v2h2z"/>
  </svg>
</a>

                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </section>
  );
}
