import Menu from "../icons/preact/Menu.jsx"
import Close from "../icons/preact/Close.jsx"
import { useState } from "preact/hooks"

function Header() {
  
  const [menu, setMenu] = useState(false)
  
  return (
    <header class="container w-full mx-auto md:max-w-2xl lg:max-w-4xl transition-all">
      <div class="p-5 h-20 flex items-center justify-between">
        <h1 class="text-xl lg:text-2xl">
          Chris
          <span class="text-cyan-400">.dev</span>
        </h1>

        <nav class={`fixed top-0 right-0 w-3/5 sm:w-2/4 h-screen bg-black/20 backdrop-blur-md transition-all ${menu ? "translate-x-0" : "translate-x-full"} md:static md:w-auto md:h-auto md:bg-transparent md:translate-x-0`}>
          <ul class="flex flex-col gap-2 h-full justify-center text-center p-5 md:flex-row md:p-0 md:text-sm lg:text-base">
            <li>
              <a onClick={()=>setMenu(false)} class="block bg-white/5 rounded-md px-4 py-1 hover:bg-white/5 transition-colors" href="#inicio">Inicio</a>
            </li>
            <li>
              <a onClick={()=>setMenu(false)} class="block rounded-md px-4 py-1 hover:bg-white/5 transition-colors" href="#experiencia">Experiencia</a>
            </li>
            <li>
              <a onClick={()=>setMenu(false)} class="block rounded-md px-4 py-1 hover:bg-white/5 transition-colors" href="#proyectos">Proyectos</a>
            </li>
            <li>
              <a onClick={()=>setMenu(false)} class="block rounded-md px-4 py-1 hover:bg-white/5 transition-colors" href="#sobre-mi">Sobre mi</a>
            </li>
            <li>
              <a onClick={()=>setMenu(false)} class="block rounded-md px-4 py-1 hover:bg-white/5 transition-colors" href="#contacto">Contacto</a>
            </li>
          </ul>

          <button onClick={()=>setMenu(false)} class="absolute top-5 right-5 hover:rotate-180 transition-transform">
            <Close class="md:hidden"/>
          </button>
        </nav>

        <button class="md:hidden" onClick={()=>setMenu(true)}>
          <Menu />
        </button>

      </div>  
    </header>
  )
}

export default Header
