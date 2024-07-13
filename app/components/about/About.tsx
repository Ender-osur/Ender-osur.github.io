import Image from "next/image";
import "./about.css";

export default function about() {
  return (
    <div
      id="about-container"
      className="w-[80%] flex flex-col items-center justify-center"
    >
      <section
        id="about-section-one"
        className="flex flex-row w-[100%] h-[60vh] justify-between px-14 items-center"
      >
        <h1 className="text-3xl font-bold sm:text-5xl text-slate-100">
          Hola, soy
          <div className="h-[250px] w-[auto]">
            <span className="text-[#2cbcc2] sm:text-7xl text-balance flex justify-start items-start flex-col">
              Ender Garizabal
              <span
                className="text-3xl text-[#cefdff]"
              >(Ender-osur)</span>
            </span>
          </div>
        </h1>
        <Image
          src="../endergarizabal.github.io/face.webp"
          width={380}
          height={380}
          alt="Foto de perfil"
          className="w-[380px] h-[380px] overflow-hidden rounded-xl object-cover text-[#fff]"
        />
      </section>
      <section className="" id="about-section-two">
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
