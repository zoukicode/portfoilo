import { motion } from "framer-motion"
export function Propos({text,langue,setLangue}){
    return(
        <section id="propos" class="flex flex-col gap-10 ">
            <motion.h1 
             initial={{ opacity: 0, y: 30 }}
            viewport={{amount:0.5}}
            whileInView={{ opacity: 1, y: 0}}
        transition={{ ease:"easeInOut", duration: 0.8 }}
            class="text-3xl font-bold">
                {text.propos.titre} {/*titre de la section*/}
                </motion.h1>
<div class=" border-l-3 border-[#263b7a] pl-4 flex flex-col gap-2">
            <p class="before:rounded-[50%] relative before:w-5 before:h-5 before:absolute before:bg-[#0EA5E9] before:content-[''] before:left-[-27px]">
{text.propos.introduction}
 </p>
<p class="before:rounded-[50%] relative before:w-5 before:h-5 before:absolute before:bg-[#0EA5E9] before:content-[''] before:left-[-27px]">
    {text.propos.objectif}
    </p>

<div className="before:rounded-[50%] relative before:w-5 before:h-5 before:absolute before:bg-[#0EA5E9] before:content-[''] before:left-[-27px]">
  <p>{text.propos.service}</p>
  {text.propos.type.map((v, i) => (
    <p class="pl-5" key={i}>{v}</p>
  ))}
</div>
            
            <p class="before:rounded-[50%] relative before:w-5 before:h-5 before:absolute before:bg-[#0EA5E9] before:content-[''] before:left-[-26px]">
{text.propos.conclusion} 
    </p>  
    </div>     
     </section>

    )
}