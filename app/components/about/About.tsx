import Image from "next/image"
import "./about.css"

export default function about() {
  return (
    <div id="about-container" className="w-[80%] flex flex-col items-center justify-center">
      <section id="about-section-one" className="flex flex-row w-[100%] h-[60vh] justify-between px-14 items-center">
        <h1 className="text-3xl font-bold sm:text-5xl text-slate-100">
          Hola, soy 
          <div className=" w-[max-content]">
            <span
              className="text-[#2cbcc2] sm:text-7xl"
            >
              Ender-osur
            </span>
          </div>
        </h1>
          <Image
            src="/endergarizabal.github.io/face.webp"
            width="280"
            height="280"
            alt="Foto de perfil"
            className="aspect-square overflow-hidden rounded-xl object-cover"
          />
      </section>
      <section
        className=''
        id="about-section-two"
      >
        <p className="mt-4 text-muted-foreground md:text-xl text-slate-300">
                              Mis comienzos fueron <span>desarrollo de hardware </span> 
              y sistemas IoT con PIC con mikroC y ESP32 con micropython usando ec2 de AWS, MQTT, flask y mariadb. Actualmente, tengo
              más de 3 años trabajando entre proyectos personales como Freelancer
              y académicos con ReactJS, React Native y NextJS para un proyecto de
              patente en la Universidad del Magdalena, Colombia
        </p>
      </section>
    </div>
  )
}
