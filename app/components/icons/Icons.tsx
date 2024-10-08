"use client";
import React from "react";

interface IconProps {
  styles?: string;
  width?: string;
  height?: string;
  link?: string;
  color?: string;
}

export const Linkedin: React.FC<IconProps> = ({
  styles,
  width,
  height,
  link,
  color,
}) => {
  return (
    <a
      className={`text-xs hover:underline underline-offset-4 ${styles}`}
      href={
        link
          ? link
          : "https://www.linkedin.com/in/ender-garizabal-sobrino-361029156/"
      }
      rel="ugc"
    >
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
        className={`${color} ${width} ${height}`}
      >
        <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
        <rect width="4" height="12" x="2" y="9"></rect>
        <circle cx="4" cy="4" r="2"></circle>
      </svg>
    </a>
  );
};
export const Twitter: React.FC<IconProps> = ({
  styles,
  width,
  height,
  link,
  color,
}) => {
  return (
    <a
      className={`text-xs hover:underline underline-offset-4 ${styles}`}
      href={link ? link : "https://x.com/osurjgs"}
      rel="ugc"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width={width ? width : "24"}
        height={height ? height : "24"}
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
        className={`${color} ${width} ${height}`}
      >
        <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path>
      </svg>
    </a>
  );
};

export const Github: React.FC<IconProps> = ({
  styles,
  width,
  height,
  link,
  color,
}) => {
  return (
    <a
      className={`text-xs hover:underline underline-offset-4 ${styles}`}
      href={link ? link : "https://github.com/Ender-osur"}
      rel="ugc"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width={width ? width : "24"}
        height={height ? height : "24"}
        viewBox="0 0 24 24"
        fill="currentColor"
        stroke="currentColor"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
        className={`${color} ${width} ${height}`}
      >
        <path d="m22 13.29-3.33-10a.42.42 0 0 0-.14-.18.38.38 0 0 0-.22-.11.39.39 0 0 0-.23.07.42.42 0 0 0-.14.18l-2.26 6.67H8.32L6.1 3.26a.42.42 0 0 0-.1-.18.38.38 0 0 0-.26-.08.39.39 0 0 0-.23.07.42.42 0 0 0-.14.18L2 13.29a.74.74 0 0 0 .27.83L12 21l9.69-6.88a.71.71 0 0 0 .31-.83Z"></path>
      </svg>
    </a>
  );
};
