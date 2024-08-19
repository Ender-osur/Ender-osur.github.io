import Image from 'next/image'
import styles from "./navbar.module.css"


export default function Navbar() {
  return (
      <div id="navbar-container" className="px-5 lg:px-6 h-15 flex items-center justify-between p-2">
        <div
          className='overflow-hidden bg-slate-50 flex items-center justify-center md:w-[70px] sm:w-[50px] w-[30px] aspect-square rounded-[50px]'
        >
          <Image
            src="../Logo_transp.png"
            width="60"
            height="60"
            alt="Logo"
            className="m-0 aspect-square"
          />
        </div>
        <nav className="flex flex-1 justify-around sm:justify-center sm:gap-8 text-slate-50">
          <a className={`text-base md:text-lg lg:text-[1.5rem] font-[300] hover:underline underline-offset-4" href="#" rel="ugc ${styles.textMenu}`}>
            Sobre mí
          </a>
          <a className={`text-base md:text-lg lg:text-[1.5rem] font-[300] hover:underline underline-offset-4" href="#" rel="ugc ${styles.textMenu}`}>
            Proyectos
          </a>
          <a className={`text-base md:text-lg lg:text-[1.5rem] font-[300] hover:underline underline-offset-4" href="#" rel="ugc ${styles.textMenu}`}>
            Contacto
          </a>
        </nav>
        <button
          className={`${styles.themeButton}`}>
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
