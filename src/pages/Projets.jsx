import { animate, motion } from "framer-motion"
import projets from '/projets/Capture d’écran (135).png'
import Header from './Header'
export function Projets({ text, langue, setLangue }){
    return(
        <section  id="projets" class="relative">
          {/* svg style */}
          <div class="absolute bottom-[-170px] right-0 opacity-50">
            <svg width="1285" height="932" viewBox="0 0 1285 932" fill="none" xmlns="http://www.w3.org/2000/svg">
<g clip-path="url(#clip0_18_2)">
<rect x="1285.45" y="693" width="167.821" height="311.839" transform="rotate(40 1285.45 693)" fill="url(#paint0_linear_18_2)" fill-opacity="0.3"/>
<rect x="1287.83" y="793.704" width="88.5421" height="224.218" transform="rotate(40 1287.83 793.704)" fill="#101C48" fill-opacity="0.31" stroke="#263B7A"/>
</g>
<defs>
<linearGradient id="paint0_linear_18_2" x1="1453.27" y1="835.753" x2="1301.58" y2="797.732" gradientUnits="userSpaceOnUse">
<stop stop-color="#263B7A"/>
<stop offset="1" stop-color="#101C48"/>
</linearGradient>
<clipPath id="clip0_18_2">
<rect width="1285" height="932" fill="white"/>
</clipPath>
</defs>
</svg>
          </div>

          <section class="flex flex-col gap-10 w-[90%] mx-auto">
            <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            viewport={{amount:0.5}}
            whileInView={{ opacity: 1, y: 0}}
        transition={{ ease:"easeInOut", duration: 0.8 }}
        class="text-3xl font-bold ">
          {text.nav[0]}
          </motion.h1>
            <motion.div
            initial={{ opacity: 0, x: 100 }}
            viewport={{amount:0.5}}
            whileInView={{ opacity: 1, x: 0}}
        transition={{ ease:"easeInOut", duration: 0.8 }}
            class="lg:w-[50%] w-[100%] mx auto">
              <p>{text.projets.paragraphe}Voici quelques projets que j’ai réalisés récemment. Chaque application reflète mon souci du détail, ma maîtrise technique et ma volonté de répondre à des besoins réels.</p>
            <p>Chaque projet est le fruit d’une recherche d’efficacité, de performance et d’une bonne expérience utilisateur.</p>
            </motion.div>
            <div class="lg:flex-row  flex flex-col justify-between gap-30 items-center">
                {/* contener project */}
                              <div class="lg:w-[400px] w-[100%] p-6 rounded-md bg-white/5 backdrop-blur-sm shadow-lg hover:shadow-xl transition-shadow">
  <img 
    src={projets} 
    alt="Project" 
    class="w-full h-48 object-cover rounded-t-md mb-4"
  />
  
  <div class="flex flex-col gap-3">
    <h2 class="text-xl font-bold text-white">Nom du projet</h2>
  <p class="text-gray-300 ">Description concise du projet ici.</p>
  <div class="flex justify-center gap-4">
    <button class="px-4 py-2 bg-blue-500/80 hover:bg-blue-600 rounded-md text-white transition">
      Voir plus
    </button>
    <button class="px-4 py-2 bg-gray-700/80 hover:bg-gray-600 rounded-md text-white transition">
      Code
    </button>
  </div>
  </div>
</div>
                  {/* contener project */}
                <div class="lg:w-[400px] w-[100%] p-6 rounded-md bg-white/10 backdrop-blur-sm shadow-lg hover:shadow-xl transition-shadow">
  <img 
    src="votre-image.jpg" 
    alt="Project" 
    class="w-full h-48 object-cover rounded-t-md mb-4"
  />
  
  <h2 class="text-xl font-bold text-white mb-2">Nom du projet</h2>
  <p class="text-gray-300 mb-4">Description concise du projet ici.</p>
  
  <div class="flex justify-center gap-4">
    <button class="px-4 py-2 bg-blue-500/80 hover:bg-blue-600 rounded-md text-white transition">
      Voir plus
    </button>
    <button class="px-4 py-2 bg-gray-700/80 hover:bg-gray-600 rounded-md text-white transition">
      Code
    </button>
  </div>
</div>
                  {/* contener project */}
                               <div class="lg:w-[400px] w-[100%] p-6 rounded-md bg-white/10 backdrop-blur-sm shadow-lg hover:shadow-xl transition-shadow">
  <img 
    src="votre-image.jpg" 
    alt="Project" 
    class="w-full h-48 object-cover rounded-t-md mb-4"
  />
  
  <h2 class="text-xl font-bold text-white mb-2">Nom du projet</h2>
  <p class="text-gray-300 mb-4">Description concise du projet ici.</p>
  
  <div class="flex justify-center gap-4">
    <button class="px-4 py-2 bg-blue-500/80 hover:bg-blue-600 rounded-md text-white transition">
      Voir plus
    </button>
    <button class="px-4 py-2 bg-gray-700/80 hover:bg-gray-600 rounded-md text-white transition">
      Code
    </button>
  </div>
</div>
            </div>

          </section>
            
        </section>
    )
}