import ProjectCard from './ProjectCard'
import "./project.css"

export default function Project() {
  return (
    <div className="container px-4 md:px-6">
    <div className="flex flex-col items-center justify-center space-y-4 text-center">
      <div className="space-y-2">
        <h2 className="text-3xl tracking-tighter sm:text-5xl text-slate-800 font-bold">Mis Proyectos</h2>
        <p className="max-w-[900px] text-slate-700 text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed font-normal backdrop:blur-[200px]">
          Aquí puedes ver algunos de mis proyectos más destacados.
        </p>
      </div>
    </div>
    <div className="mx-auto grid max-w-5xl gap-6 py-12 sm:grid-cols-2 lg:grid-cols-3">
      <ProjectCard title="Proyecto" image="../../../Logo_transp.png" description="Este es un proyecto"/>
    </div>
  </div>
  )
}
