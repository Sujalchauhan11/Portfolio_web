"use client"

import React, { useState } from "react"
import { Github } from "lucide-react"

const Projects = React.forwardRef<HTMLDivElement>((_, ref) => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null)

  const projects = [
    {
      title: "Full-Stack Movie Review Application",
      description:
        "A comprehensive movie review platform featuring real-time search across 1000+ movies using TMDB API, RESTful CRUD operations, and MongoDB integration.",
      features: ["RESTful API", "Real-time Search", "MongoDB", "Responsive UI", "MVC Architecture"],
      tech: ["Node.js", "Express", "MongoDB", "React", "Tailwind CSS"],
    },
    {
      title: "Bookstore CRUD API",
      description:
        "A robust REST API for managing bookstore inventory with FastAPI and PostgreSQL, featuring comprehensive data validation and ORM integration.",
      features: ["FastAPI", "PostgreSQL", "SQLAlchemy ORM", "Pydantic Validation", "Connection Pooling"],
      tech: ["Python", "FastAPI", "PostgreSQL", "SQLAlchemy"],
    },
    {
      title: "Automated File Sorter",
      description:
        "Python utility that automatically organizes files by type into labeled folders with error handling and duplicate detection.",
      features: ["File Organization", "Extension Detection", "Error Handling", "Batch Processing"],
      tech: ["Python", "OS Module", "shutil"],
    },
    {
      title: "Global Layoffs Analysis",
      description:
        "In-depth exploratory data analysis on 10K+ records dataset analyzing global layoff trends with rolling totals and ranking queries.",
      features: ["EDA", "Rolling Totals", "CTEs", "DENSE_RANK", "Trend Analysis"],
      tech: ["SQL", "MySQL", "Data Analysis"],
    },
  ]

  return (
    <section ref={ref} id="projects-section" className="section-spacing bg-card/30">
      <div className="container-custom">
        <div className="mb-12 animate-fade-in-up">
          <h2 className="text-4xl sm:text-5xl font-bold mb-4">Featured Projects</h2>
          <div className="h-1 w-20 bg-gradient-to-r from-primary to-accent rounded"></div>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-background/50 border border-border p-8 rounded-lg hover:border-primary transition-all duration-500 group animate-fade-in-up hover:shadow-lg hover:shadow-primary/20 cursor-pointer"
              style={{ animationDelay: `${index * 0.1}s` }}
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              <h3 className="text-xl font-bold text-foreground mb-3 group-hover:text-primary transition-colors duration-300">
                {project.title}
              </h3>
              <p className="text-muted-foreground mb-4 leading-relaxed">{project.description}</p>

              <div className="mb-4">
                <p className="text-sm font-semibold text-primary mb-2">Key Features</p>
                <div className="flex flex-wrap gap-2">
                  {project.features.map((feature) => (
                    <span
                      key={feature}
                      className="text-xs px-2 py-1 bg-primary/10 border border-primary/30 rounded text-accent hover:bg-primary/20 transition-all duration-300"
                    >
                      {feature}
                    </span>
                  ))}
                </div>
              </div>

              <div className="mb-6">
                <p className="text-sm font-semibold text-foreground mb-2">Tech Stack</p>
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((tech) => (
                    <span
                      key={tech}
                      className="text-xs px-2 py-1 bg-muted border border-muted rounded text-muted-foreground hover:border-accent hover:text-accent transition-all duration-300"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              <div className="flex gap-4 pt-4 border-t border-border opacity-80 group-hover:opacity-100 transition-opacity duration-300">
                <a
                  href="https://github.com/Sujalchauhan11"
                  className="text-accent hover:text-primary transition-colors duration-300 flex items-center gap-2 text-sm font-medium group/link"
                >
                  <Github size={16} className="group-hover/link:scale-110 transition-transform" /> Code
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
})

Projects.displayName = "Projects"
export default Projects
