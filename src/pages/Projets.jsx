import { motion } from "framer-motion";
import projetImage from '/projets/Capture d’écran (135).png';
import Header from './Header';

export function Projets({ text, langue, setLangue }) {

  const projetsJson = [
    {
      img: projetImage,
      nom: "SAMANEA HILL",
      description: " Tableau de bord intelligent destiné aux professionnels de l'immobilier, conçu pour optimiser la gestion des leads, le suivi des ventes et la performance des campagnes marketing. .",
      lien:"https://dashboard-apparte.vercel.app/",
      gitup:""
    },
    {
      img: projetImage,
      nom: "Féminité Sans Abri",
      description: "SIte web de Féminité Sans Abri  qui lutte contre la précarité hygiénique chez les femmes sans domicile ou en grande difficulté..",
      lien:"https://zoukicode.vercel.app/",
      gitup:""
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
            <div key={index} className="lg:w-[400px] h-120 flex flex-col justify-between w-full p-6 rounded-md bg-white/5 backdrop-blur-sm shadow-lg hover:shadow-xl transition-shadow">
              <img className="w-full h-48 object-cover rounded-t-md mb-4" src={projet.img} alt={`Projet ${index + 1}`} />
                <h2 className="text-xl font-bold text-white">{projet.nom}</h2>
                <p className="text-gray-300">{projet.description}</p>
                <div className="flex justify-between gap-4">
                  {/* lien vers le gitup */}
                 <a
  className="px-4 py-2  rounded-md transition"
  href={projet.gitup}
  target="_blank"
>
  <svg viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg" fill="#263b7a" width="40" height="40">
    <path d="M24,2.5A21.5,21.5,0,0,0,17.2,44.4c1.08.2,1.47-.46,1.47-1s0-1.86,0-3.65c-6,1.3-7.24-2.88-7.24-2.88A5.7,5.7,0,0,0,9,33.68c-1.95-1.33.15-1.31.15-1.31a4.52,4.52,0,0,1,3.29,2.22c1.92,3.29,5,2.34,6.26,1.79a4.61,4.61,0,0,1,1.37-2.88c-4.78-.54-9.8-2.38-9.8-10.62a8.29,8.29,0,0,1,2.22-5.77,7.68,7.68,0,0,1,.21-5.69s1.8-.58,5.91,2.2a20.46,20.46,0,0,1,10.76,0c4.11-2.78,5.91-2.2,5.91-2.2a7.74,7.74,0,0,1,.21,5.69,8.28,8.28,0,0,1,2.21,5.77c0,8.26-5,10.07-9.81,10.61a5.12,5.12,0,0,1,1.46,4c0,2.87,0,5.19,0,5.9s.39,1.24,1.48,1A21.5,21.5,0,0,0,24,2.5Z"/>
  </svg>
</a>

{/* lien vers le site */}
                <a
  className="px-2 py-1 rounded-md transition bg-blue-200"
  href={projet.lien}
  target="_blank"
>
  <svg viewBox="0 0 24.00 24.00" width="40" height="40" xmlns="http://www.w3.org/2000/svg" fill="#263b7a" stroke="#263b7a" stroke-width="0.00024000000000000003"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"><path d="M20.501 6.028V6h-.02A10.28 10.28 0 0 0 4.519 6H4.5v.028a10.262 10.262 0 0 0 0 12.944V19h.02a10.28 10.28 0 0 0 15.962 0h.021v-.028a10.262 10.262 0 0 0 0-12.944zM13 6V3.272A4.533 4.533 0 0 1 15.54 6zm2.935 1a16.827 16.827 0 0 1 .853 5H13V7zM12 3.272V6H9.46A4.533 4.533 0 0 1 12 3.272zM12 7v5H8.212a16.827 16.827 0 0 1 .853-5zm-4.787 5H3.226a9.234 9.234 0 0 1 1.792-5h2.984a17.952 17.952 0 0 0-.79 5zm0 1a17.952 17.952 0 0 0 .789 5H5.018a9.234 9.234 0 0 1-1.792-5zm1 0H12v5H9.065a16.827 16.827 0 0 1-.853-5zM12 19v2.728A4.533 4.533 0 0 1 9.46 19zm1 2.728V19h2.54A4.533 4.533 0 0 1 13 21.728zM13 18v-5h3.788a16.827 16.827 0 0 1-.853 5zm4.787-5h3.987a9.234 9.234 0 0 1-1.792 5h-2.984a17.952 17.952 0 0 0 .79-5zm0-1a17.952 17.952 0 0 0-.789-5h2.984a9.234 9.234 0 0 1 1.792 5zm1.352-6h-2.501a8.524 8.524 0 0 0-1.441-2.398A9.306 9.306 0 0 1 19.139 6zM9.803 3.602A8.524 8.524 0 0 0 8.363 6H5.86a9.306 9.306 0 0 1 3.942-2.398zM5.861 19h2.501a8.524 8.524 0 0 0 1.441 2.398A9.306 9.306 0 0 1 5.861 19zm9.336 2.398A8.524 8.524 0 0 0 16.637 19h2.502a9.306 9.306 0 0 1-3.942 2.398z"></path><path fill="none" d="M0 0h24v24H0z"></path></g></svg>
</a>
                </div>
            </div>
          ))}
        </div>
      </section>
    </section>
  );
}
