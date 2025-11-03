"use client"

import { ArrowRight, Github, Linkedin, Mail } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useRef } from "react"

export default function Hero() {
  const projectsRef = useRef<HTMLDivElement>(null)
  const contactRef = useRef<HTMLDivElement>(null)

  const scrollToProjects = () => {
    const projectsElement = document.getElementById("projects-section")
    projectsElement?.scrollIntoView({ behavior: "smooth" })
  }

  const scrollToContact = () => {
    const contactElement = document.getElementById("contact-section")
    contactElement?.scrollIntoView({ behavior: "smooth" })
  }

  return (
    <section className="min-h-screen flex items-center justify-center pt-16 section-spacing">
      <div className="container-custom text-center">
        <div className="mb-8 animate-fade-in-up" style={{ animationDelay: "0.1s" }}>
          <div className="inline-block px-4 py-2 bg-card border border-border rounded-full mb-6 animate-pulse-slow">
            <p className="text-sm text-accent font-medium">Full Stack Developer & Data Analyst</p>
          </div>
        </div>

        <h1
          className="text-5xl sm:text-6xl md:text-7xl font-bold mb-6 text-pretty animate-fade-in-up"
          style={{ animationDelay: "0.2s" }}
        >
          Sujal <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">Chauhan</span>
        </h1>

        <p
          className="text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto mb-12 text-pretty animate-fade-in-up leading-relaxed"
          style={{ animationDelay: "0.3s" }}
        >
          Building scalable full-stack applications with modern technologies. Specialized in MERN stack, Python, and
          Data Analytics.
        </p>

        <div
          className="flex flex-col sm:flex-row gap-4 justify-center mb-16 animate-fade-in-up"
          style={{ animationDelay: "0.4s" }}
        >
          <Button
            onClick={scrollToProjects}
            className="bg-primary text-primary-foreground hover:bg-primary/90 hover:shadow-lg hover:shadow-primary/50 transition-all duration-300 group"
            size="lg"
          >
            View My Work <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={20} />
          </Button>
          <Button
            onClick={scrollToContact}
            variant="outline"
            size="lg"
            className="border-border text-foreground hover:bg-card/50 bg-transparent hover:border-primary hover:shadow-lg hover:shadow-primary/20 hover:text-white transition-all duration-300"
          >
            Get In Touch
          </Button>
        </div>

        <div className="flex justify-center gap-6 animate-fade-in-up" style={{ animationDelay: "0.5s" }}>
          <a
            href="https://github.com/Sujalchauhan11"
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 bg-card border border-border rounded-lg hover:border-primary hover:text-primary hover:shadow-lg hover:shadow-primary/30 transition-all duration-300 transform hover:scale-110"
          >
            <Github size={24} />
          </a>
          <a
            href="https://www.linkedin.com/in/sujal-chauhan11"
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 bg-card border border-border rounded-lg hover:border-primary hover:text-primary hover:shadow-lg hover:shadow-primary/30 transition-all duration-300 transform hover:scale-110"
          >
            <Linkedin size={24} />
          </a>
          <a
            href="mailto:sujalchauhan826@gmail.com"
            className="p-3 bg-card border border-border rounded-lg hover:border-primary hover:text-primary hover:shadow-lg hover:shadow-primary/30 transition-all duration-300 transform hover:scale-110"
          >
            <Mail size={24} />
          </a>
        </div>
      </div>
    </section>
  )
}
