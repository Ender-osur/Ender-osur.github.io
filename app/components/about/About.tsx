import Image from "next/image";
import styles from "./about.module.css";
import { Linkedin, Github, Twitter } from "../icons/Icons";

export default function About() {
  return (
    <div className="flex flex-col h-[100dvh] sm:justify-center justify-start xsm:gap-8 sm:gap-0">
      <div className="w-full flex flex-col lg:flex-row lg:gap-8 sm:gap-1 xsm:gap-2 lg:h-[50dvh] md:h-[68dvh] h-[max-content] md:gap-0 gap-2 px-4 md:px-14">
        <section className="flex flex-col w-full lg:flex-1 items-center justify-center gap-2">
          <div className="flex flex-row w-full items-center justify-between lg:justify-center lg:gap-4">
            <h1 className="text-xl font-bold sm:text-4xl text-slate-100">
              Hola, soy
              <div className="sm:h-[250px] w-auto">
                <span className="text-[#2cbcc2] sm:text-5xl text-xl text-balance flex justify-center items-start flex-col">
                  Ender Garizabal
                  <span className="text-xl md:text-2xl text-[#e9feff]">
                    (Ender-osur)
                  </span>
                </span>
              </div>
            </h1>
            <Image
              src="../../face.webp"
              width={200}
              height={200}
              alt="Foto de perfil"
              className="w-[35dvw] sm:w-[40dvw] lg:w-[15dvw] overflow-hidden rounded-[5px] object-cover text-[#fff]"
            />
          </div>
          <div className={`${styles.iconContainer} flex flex-row gap-2`}>
            <Twitter
              width="md:h-11 sm:h-8 h-5 md:w-11 sm:w-8 w-8"
              height="md:h-11 sm:h-8 h-5 md:w-11 sm:w-8 w-8"
              color="text-[#cefdff]"
            />
            <Linkedin
              width="md:h-11 sm:h-8 h-5 md:w-11 sm:w-8 w-8"
              height="md:h-11 sm:h-8 h-5 md:w-11 sm:w-8 w-8"
              color="text-[#cefdff]"
            />
            <Github
              width="md:h-11 sm:h-8 h-5 md:w-11 sm:w-8 w-8"
              height="md:h-11 sm:h-8 h-5 md:w-11 sm:w-8 w-8"
              color="text-[#cefdff]"
            />
          </div>
        </section>

        <section className="flex flex-col w-full lg:flex-1 items-start justify-center">
          <h1
            className={`text-3xl text-slate-100 font-bold tracking-tighter sm:text-5xl ${styles.textTitle} `}
          >
            Sobre mí
          </h1>
          <p className="text-muted-foreground md:text-xl text-md text-slate-300 mt-2">
            IComencé mi carrera desarrollando sistemas IoT con PIC y mikroC, así
            como con ESP32 usando MicroPython. Trabajé con tecnologías como EC2
            de AWS, MQTT, Flask y MariaDB. Más tarde, me especialicé en el
            desarrollo web y ahora me dedico a ello de lleno. Cuento con más de
            un año de experiencia en proyectos personales, freelance y
            académicos utilizando JavaScript. Además, he trabajado durante 18
            meses con React Native y Next.js en un proyecto de patente en la
            Universidad del Magdalena en Colombia.
          </p>
          <div className={`${styles.iconContainer} flex flex-row gap-2 mt-4`}>
            <Twitter />
            <Linkedin />
            <Github />
          </div>
        </section>
      </div>
      <section className="flex flex-col items-center justify-center w-full h-[max-content] text-center mt-8 bg-slate-600">
        <h2 className="text-xl sm:text-4xl font-bold text-[#ffcc00]">
          🚧 Portafolio en construcción: última actualización agosto 2024🚧
        </h2>
        <p className="text-md sm:text-2xl text-slate-300 lg:mt-4 mt-1">
          Estamos trabajando en este portafolio para traerte algo increíble.
          ¡Vuelve pronto para más actualizaciones!
        </p>
      </section>
    </div>
  );
}
