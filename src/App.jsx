import './App.css'
import Header from './pages/Header.jsx'
import { Projets } from './pages/Projets.jsx'
import { Contact } from './pages/Contacte.jsx'
import { Competence } from './pages/Competence.jsx'
import { Propos } from './pages/Propos.jsx'
import { Pied } from './pages/Pied.jsx'
import { useRef, useState } from 'react'
import Version from './pages/Langue'
function App() {

   const [langue, setLangue] = useState('FR');
 const text = Version[langue]

  return (

    <section class="flex flex-col gap-20">
      <div>
      <Header Version={Version} text={text} langue={langue} setLangue={setLangue}/>
    </div>
    <div>
      <Projets text={text} langue={langue} setLangue={setLangue}/>
    </div>
    <section class=" lg:flex-row flex justify-between flex-col gap-10 items-center w-[90%] mx-auto">
      <div class=" flex flex-col gap-10">
        <div><Competence text={text} langue={langue} setLangue={setLangue}/></div>
      <div><Propos text={text} langue={langue} setLangue={setLangue}/></div>
      </div>
      <div class="w-[100%]"><Contact text={text} langue={langue} setLangue={setLangue}/></div>
    </section>
    {/* Footer section */}
    <section>
      <Pied Version={Version} text={text} langue={langue} setLangue={setLangue}/>
    </section>
    </section>
  )
}

export default App
