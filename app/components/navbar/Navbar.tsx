import Image from 'next/image'
import "./navbar.css"


export default function Navbar() {
  return (
      <div id="navbar-container" className="px-5 lg:px-6 h-15 flex items-center justify-between p-2">
        <div
          className='overflow-hidden bg-slate-50 flex items-center justify-center w-[60px] h-[60px] rounded-[50px]'
        >
          <Image
            src={`../Ender-osur.github.io/Logo_transp.png`}
            width="70"
            height="70"
            alt="Logo"
            className="m-0 aspect-square"
          />
        </div>
        <nav className="flex gap-8 sm:gap-14 text-slate-50">
          <a className="text-base md:text-lg lg:text-[1.5rem] font-[300] hover:underline underline-offset-4" href="#" rel="ugc">
            Sobre mí
          </a>
          <a className="text-base md:text-lg lg:text-[1.5rem] font-[300] hover:underline underline-offset-4" href="#" rel="ugc">
            Proyectos
          </a>
          <a className="text-base md:text-lg lg:text-[1.5rem] font-[300] hover:underline underline-offset-4" href="#" rel="ugc">
            Contacto
          </a>
        </nav>
        <button
          id="theme-button"
          className="">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
            className="h-6 w-6 text-slate-200"
          >
            <path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z"></path>
          </svg>
        </button>
      </div>
  )
}
