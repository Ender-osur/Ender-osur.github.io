import React from "react";
import Image from "next/image";
import styles from "./projectCard.module.css"

interface ProjectCardProps {
  title: string;
  image: string;
  description: string;
}

export default function ProjectCard({title, image, description}: ProjectCardProps) {
  return (
    <button
      className={`rounded-lg border bg-card text-card-foreground shadow-sm ${styles.buttonCard}`}
      data-v0-t="card"
    >
      <div className={`flex flex-col space-y-1.5 p-6 ${styles.imageContainer}`}>
        <Image
          src={image}
          width="100"
          height="100"
          alt="Proyecto 3"
          className="mx-auto aspect-video overflow-hidden rounded-xl object-cover object-center sm:w-full"
        />
      </div>
      <div className="p-6">
        <h3 className="text-xl font-bold">{title}</h3>
        <p className="text-muted-foreground">{description}</p>
      </div>
    </button>
  );
}
