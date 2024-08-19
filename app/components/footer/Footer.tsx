import React from 'react'
import "./footer.css"
import { Linkedin, Github, Twitter } from '../icons/Icons'

export default function Footer() {
  return (
      <div id="footer-container">
        <p className="text-xs">© 2024 Ender Garizabal (Ender-osur)</p>
        <div className="flex gap-4 sm:gap-6">
          <Twitter />
          <Linkedin />
          <Github />
        </div>
      </div>
  )
}
