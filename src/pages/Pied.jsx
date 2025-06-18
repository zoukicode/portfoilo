import { Social } from "./Social"
import logo from '/logo.png'
export function Pied({Version, text,langue,setlangue}){
    const scrollToSection = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };
    return(
        <div>
             <footer class="text-base flex flex-col gap-10 justify-around items-center pb-10 sm:flex-row">
                <div>
                <Social/>
            </div>
        <div><ul class="flex flex-col gap-2">
                <li onClick={()=>scrollToSection('header')}>{langue ==="FR"?'Moi':'Me'}</li>
            {text.nav.map((e,i)=>(
                            <li key={i} onClick={()=>scrollToSection(Version.section[i])}>{e}</li>
                          ))}
            </ul>
            </div>
             <div class="flex flex-col items-center">
                <div className="flex items-center">
                                  <img className='w-20' src={logo} alt="logo app"/>
                                 <h1 class="font-bold text-3xl  italic">Zoukicode</h1>
                                </div>
            <p class="opacity-[0.5] ">@copy, 2025</p>
        </div>
            
    </footer>
        </div>
    )
}