import About from "../components/about/About";
import Contact from "../components/contact/Contact";
import Navbar from "../components/navbar/Navbar";
import Project from "../components/project/Project";
import Footer from "../components/footer/Footer";
import './styles.css';

export default function Dashboard() {
  return (
    <div className="flex flex-col items-center justify-center">
      <div className="absolute top-0 left-0 w-[100%] h-[100%] backdrop: blur-[5px] -z-10">
        <video 
          width="100%"
          height="100%"
          autoPlay
          playsInline
          src="/bg-video-2.webm"
          muted 
          loop
          poster="/bg-image.webp"
          className="-z-10"
          >
          Tu navegador no admite el elemento <code>video</code>.
          <source src="bg-video-2.webm" type="video/webm" />
        </video>
      </div>
      <header className="sticky top-0 backdrop-blur-[20px] w-full z-10">
        <Navbar />
      </header>
      <main className="w-[80%] flex flex-col items-center justify-center">
        <section id="about" className="w-[100%] flex items-center justify-center">
          <About />
        </section>
        <section id="projects" className="w-[100%] flex items-center justify-center">
          <Project />
        </section>
        <section id="contact" className="w-[100%] flex items-center justify-center">
          <Contact />
        </section>
      </main>
      <footer
        className="h-[400px] flex items-end justify-center"
      >
        <Footer />
      </footer>
    </div>
  );
}
