import React from "react";
import Image from "next/image";
import styles from "./projectCard.module.css";
import Link from "next/link";

interface ProjectCardProps {
  title: string;
  image: string;
  description: string;
}

export default function ProjectCard({
  title,
  image,
  description,
}: ProjectCardProps) {
  return (
    <div
      className={`rounded-lg border bg-card text-card-foreground shadow-sm ${styles.buttonCard}`}
      data-v0-t="card"
    >
      <div className={`flex flex-col space-y-1.5 p-6 ${styles.imageContainer}`}>
        <Image
          src={image}
          width="80"
          height="80"
          alt="Proyecto 3"
          className="mx-auto aspect-video overflow-hidden rounded-xl object-cover object-center sm:w-full"
        />
      </div>
      <div className="p-6">
        <h3 className="text-xl font-bold">{title}</h3>
        <p className="text-muted-foreground">{description}</p>
      </div>
      <div className="mt-4 flex gap-2">
        <Link
          href="#"
          className="inline-flex h-8 items-center justify-center rounded-md bg-[#2cbcc2] px-4 text-sm font-medium text-[#e9feff] shadow transition-transform transform hover:translate-y-[-2px] focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
          prefetch={false}
        >
          Ver Sitio
        </Link>
        <Link
          href="#"
          className="inline-flex h-8 items-center justify-center rounded-md border border-input bg-[#e9feff] text-[#2cbcc2] px-4 text-sm font-medium shadow-sm transition-transform transform hover:translate-y-[-2px] focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
          prefetch={false}
        >
          Ver Código
        </Link>
      </div>
    </div>
  );
}
