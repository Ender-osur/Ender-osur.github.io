import Image from "next/image";
import styles from "./about.module.css";

export default function about() {
  return (
    <div
      className="w-[100%] flex flex-col sm:items-center  sm:justify-center sm:h-[auto] h-[100%] "
    >
      <section
        className="flex flex-col w-[100%] lg:flex-row  h-[60vh] lg:justify-between sm:px-32 lg:items-center"
      >
        <h1 className="text-3xl font-bold sm:text-5xl text-slate-100">
          Hola, soy
          <div className="sm:h-[250px] w-[auto]">
            <span className="text-[#2cbcc2] sm:text-7xl text-balance flex  justify-center lg:justify-start items-start flex-col">
              Ender Garizabal
              <span
                className="text-3xl text-[#cefdff]"
              >(Ender-osur)</span>
            </span>
          </div>
        </h1>
        <Image
          src="../../face.webp"
          width={380}
          height={380}
          alt="Foto de perfil"
          className="lg:min-w-[320px] md:min-w-[270px] sm:min-w-[210px] min-w-[380px] overflow-hidden rounded-xl object-cover text-[#fff]"
        />
      </section>
      <section className={`sm:px-32`}>
        <p className="mt-4 text-muted-foreground md:text-xl text-slate-300">
          Inicié desarrollando sistemas IoT con PIC y mikroC y con ESP32
          micropython; usé ec2 de AWS, MQTT, flask y mariadb. Luego me introduje
          al desarrollo web y ahora es a lo que me dedico. Tengo más de 1 año
          trabajando en proyectos personales, Freelancer y académicos con Stack
          Javascript. Además, trabajé 18 meses React Native y NextJS para un
          proyecto de patente en la Universidad del Magdalena, Colombia
        </p>
      </section>
    </div>
  );
}
