import React from 'react'
import "./contact.css"

export default function Contact() {
  return (
    <div id="contact-container" className="container px-4 md:px-6">
      <div id="contact-subcontainer" className="flex flex-col items-center justify-center space-y-4 text-center">
        <header className="space-y-2">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Contáctame</h2>
          <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
            Si tienes alguna pregunta o quieres trabajar conmigo, no dudes en enviarme un mensaje.
          </p>
        </header>
        <form className="mx-auto w-full max-w-md space-y-4">
          <input
            className="flex h-10 rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 w-full"
            placeholder="Nombre"
            type="text"
          />
          <input
            className="flex h-10 rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 w-full"
            placeholder="Correo electrónico"
            type="email"
          />
          <textarea
            className="flex min-h-[80px] rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 w-full"
            placeholder="Mensaje"
            rows={5}
          ></textarea>
          <button
            id="send-button"
            className="h-[35px] w-[180px] rounded-[8px] text-sm ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-primary text-primary-foreground hover:bg-primary/90 px-4 py-2"
            type="submit"
          >
            Enviar
          </button>
        </form>
      </div>
    </div>
  )
}
