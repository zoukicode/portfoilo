import { useRef, useState } from 'react'
import { motion } from "framer-motion";
import zoukiImage from '/zouki-removebg-preview.png'
import logo from '/logo.png'


export default function Header({Version, text, langue, setLangue }){

 const [click, setclick] = useState('hidden'); 

  const handleChange = (event) => {
    setLangue(event.target.value); 
  };

        // pour le scrolle
   const scrollToSection = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

    return(
      
        <header id="header" class="relative ">
                                <svg class="z-[-1] absolute top-0 left-0 w-[100%]"  height="483"  fill="none" xmlns="http://www.w3.org/2000/svg">
<g clip-path="url(#clip0_10_3)">
<path d="M112 -100C233.03 -100 331 -9.70896 331 101.5C331 212.709 233.03 303 112 303C-9.03001 303 -107 212.709 -107 101.5C-107 -9.70896 -9.03001 -100 112 -100Z" stroke="#0EA5E9" stroke-width="2"/>
<path d="M88.5438 237.654C2.89228 242.178 -86.3197 208.784 -115.622 160.684C-144.925 112.584 -114.671 49.961 -58.7828 9.03163C-3.1636 -32.1905 78.3578 -51.4267 148.903 -24.7583C219.759 1.96482 279.555 75.0684 268.428 132.722C256.949 190.56 174.506 233.185 88.5438 237.654Z" fill="#263b7a" fill-opacity="0.31"/>
<path d="M204.5 206C204.5 206 179.894 186.14 162 177C144.781 168.205 115.5 160 115.5 160" stroke="#0EA5E9" stroke-width="2"/>
</g>
<defs>
<clipPath id="clip0_10_3">
<rect width="483" height="858" fill="white" transform="matrix(0 -1 1 0 0 483)"/>
</clipPath>
</defs>
</svg>

            {/* deuxieme svg */}
            <div class=" absolute left-0 bottom-[-20px]  z-[-1] "  >
                <div class="z-[-1] position absolute left-15 bottom-[-150px] bg-cyan-400 blur-xl opacity-7 w-[200px] h-[200px] rounded-[50%]"></div>
       
<svg class="w-100%" height="376"  fill="none" xmlns="http://www.w3.org/2000/svg">
<g clip-path="url(#clip0_14_3)">
<path d="M39.391 462.917C-17.5151 476.903 -81.2929 464.316 -106.632 433.722C-131.972 403.128 -119.087 354.702 -86.4467 318.513C-54.0209 282.15 -1.62435 258.199 48.8396 268.339C99.5182 278.479 148.264 323.059 147.62 365.541C146.761 408.198 96.5119 448.932 39.391 462.917Z" fill="#101C48" fill-opacity="0.31"/>
<path d="M70.5 207C138.086 207 193 266.027 193 339C193 411.973 138.086 471 70.5 471C2.91362 471 -52 411.973 -52 339C-52 266.027 2.91362 207 70.5 207Z" stroke="#0EA5E9" stroke-width="2"/>
</g>
<defs>
<clipPath id="clip0_14_3">
<rect width="562" height="376" fill="white"/>
</clipPath>
</defs>
</svg>
            </div>

       
       

            {/* navigation */}
            <nav className={`${click === 'visible' ? 'fixed' : 'block'} text-base z-99 flex w-[90%] mx-auto justify-between py-5  items-center` }>
                <div className="flex items-center">
                  <img className='w-20' src={logo} alt="logo app"/>
                  <h1  className={` font-bold text-[30px] `}>Zoukicode</h1>
                </div>
                      <ul  class={` lg:flex hidden   gap-20 z-50 }`}>
                          {text.nav.map((e,i)=>(
                            <li key={i} onClick={()=>scrollToSection(Version.section[i])}>{e}</li>
                          ))}
                            </ul>

                   <ul className={`${click === 'visible' ? ' left-[0] ' : ' left-[-100%]'}  transition-all ease-in-out duration-500 items-center text-justify  gap-20 justify-center lg:hidden flex flex-col fixed top-0 left-[-100%]  md:w-[50%]  w-[100%] h-[100vh]  bg-black/95`}>
                {text.nav.map((lienNav,i)=>(
                            <li key={i} onClick={()=>{setclick('hidden') ; scrollToSection(Version.section[i])}}>{lienNav}</li>
                          ))}
                </ul>
                {/* selection de la langue */}
      <section className={`${click === 'visible' ? 'block absolute left-3' : ' hidden'} md:block`}>
         <div className={`relative flex z-[999]`}>
  <select
    value={langue}
    onChange={handleChange}
    className="appearance-none bg-transparent text-white border border-cyan-500 rounded px-4 py-2 pr-8 cursor-pointer focus:outline-none focus:ring-2 focus:ring-cyan-400"
  >
    <option className="bg-[#263b7a]" value="FR">FR</option>
    <option className="bg-[#263b7a]" value="EN">EN</option>
  </select>

  {/* Chevron optionnel */}
  <div className="pointer-events-none absolute top-1/2 right-3 transform -translate-y-1/2 text-white">
    ▼
  </div>
</div>
      </section>

                {/* button menu */}
                <div onClick={()=>{if(click === 'hidden' ) {setclick('visible')}else{setclick('hidden')}}} id="menu" class="lg:hidden flex flex-col gap-1 z-98 cursor-pointer">
                    <div class={`${click === 'visible' ? 'rotate-60' : ''} h-1 w-6 bg-white transition-all ease-in-out duration-500`}></div>
                    <div class="h-1 w-6 bg-white"></div>
                    <div class={`${click === 'visible' ? 'rotate-[-60deg]' : ''} h-1 w-6 bg-white transition-all ease-in-out duration-500`}></div>
                </div>
            </nav>

            <div class="lg:flex-row flex justify-around flex-col  items-center h-[100%] w-[90%] mx-auto">

{/* contaner from img */}
               <motion.div
                initial={{ opacity: 0, scale:0}}  // état de départ
      animate={{ opacity: 1, scale:1}}    // état final
      transition={{ duration: 1 }}    // durée de l'animation
               class="relative mb-5 lg:mb-20 rounded-[47%] md:w-2/4 ">
  <div class="absolute bottom-0 h-80 lg:h-90 w-[90%] lg:w-100 bg-cyan-400 opacity-20 rounded-[50%]"> </div>
      <img src={zoukiImage}  class="relative object-cover  z-20 lg:w-100 w-[90%] h-90 lg:h-100 rounded-[47%]" alt="zoukicode image"/>
</motion.div>
               <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 2, ease: "easeInOut" }}
      className="flex flex-col gap-2 lg:w-2/4"
    >
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: 1, duration: 0.8 }}
        className="text-[30px]"
      >
        {text.header.hello}
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.2, duration: 0.8 }}
        className="font-bold text-[50px]"
      >
        AGRIGNAN Marzouk
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.4, duration: 0.8 }}
        className="opacity-[0.7] text-[30px]"
      >
        {text.header.profetion}
      </motion.div>

      <motion.p
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.6, duration: 0.8 }}
      >
{text.header.description}
      </motion.p>

      <motion.p
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.8, duration: 0.8 }}
      >
        {text.header.annonce}
      </motion.p>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: 2, duration: 0.8 }}
        className="opacity-[0.7] text-[30px]"
      >
        Lomé, Togo
      </motion.div>

      <motion.button
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: 2.2, duration: 0.8 }}
        onClick={() => scrollToSection("projets")}
        className="bg-[#263b7a] text-white px-4 py-2 rounded mt-4"
      >
        {text.header.button}
      </motion.button>
    </motion.div>
            </div>
  

        </header>
    )
}