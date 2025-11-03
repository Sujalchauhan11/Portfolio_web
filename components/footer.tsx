"use client"

import { Github, Linkedin, Mail, Heart } from "lucide-react"

export default function Footer() {
  return (
    <footer className="bg-card border-t border-border py-12">
      <div className="container-custom">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          <div>
            <h3 className="text-primary font-bold text-lg mb-4">Sujal Chauhan</h3>
            <p className="text-muted-foreground text-sm">Full Stack Developer & Data Analyst based in Mumbai</p>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                  About
                </a>
              </li>
              <li>
                <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                  Projects
                </a>
              </li>
              <li>
                <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Tech Stack</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <span className="text-muted-foreground">React & Next.js</span>
              </li>
              <li>
                <span className="text-muted-foreground">Python & FastAPI</span>
              </li>
              <li>
                <span className="text-muted-foreground">MongoDB & PostgreSQL</span>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Connect</h4>
            <div className="flex gap-4">
              <a
                href="https://www.linkedin.com/in/sujal-chauhan11"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 bg-background border border-border rounded hover:border-primary hover:text-primary transition-all"
              >
                <Linkedin size={18} />
              </a>
              <a
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 bg-background border border-border rounded hover:border-primary hover:text-primary transition-all"
              >
                <Github size={18} />
              </a>
              <a
                href="mailto:sujalchauhan826@gmail.com"
                className="p-2 bg-background border border-border rounded hover:border-primary hover:text-primary transition-all"
              >
                <Mail size={18} />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-border pt-8 flex flex-col sm:flex-row justify-between items-center">
          <p className="text-muted-foreground text-sm flex items-center gap-2 mb-4 sm:mb-0">
            Made with <Heart size={16} className="text-primary" /> by Sujal Chauhan
          </p>
          <p className="text-muted-foreground text-sm">© 2025 All rights reserved</p>
        </div>
      </div>
    </footer>
  )
}
