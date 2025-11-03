"use client"

import { useState, useEffect } from "react"

export default function Skills() {
  const [animateSkills, setAnimateSkills] = useState(false)

  const skills = {
    Languages: ["Python", "JavaScript", "SQL", "C/C++", "GoLang", "HTML/CSS"],
    Frontend: ["React", "Next.js", "Tailwind CSS", "JavaScript"],
    Backend: ["Node.js", "FastAPI", "RESTful APIs", "GoLang"],
    Databases: ["MongoDB", "MySQL", "PostgreSQL"],
    "Tools & Libraries": ["Pandas", "NumPy", "Matplotlib", "Power BI", "SQLAlchemy"],
  }

  useEffect(() => {
    setAnimateSkills(true)
  }, [])

  return (
    <section className="section-spacing">
      <div className="container-custom">
        <div className="mb-12 animate-fade-in-up">
          <h2 className="text-4xl sm:text-5xl font-bold mb-4">Skills & Expertise</h2>
          <div className="h-1 w-20 bg-gradient-to-r from-primary to-accent rounded"></div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {Object.entries(skills).map(([category, items], categoryIndex) => (
            <div
              key={category}
              className="bg-card border border-border p-6 rounded-lg hover:border-primary hover:shadow-lg hover:shadow-primary/20 transition-all duration-500 group animate-fade-in-up"
              style={{ animationDelay: `${categoryIndex * 0.1}s` }}
            >
              <h3 className="text-primary font-bold text-lg mb-4 group-hover:text-accent transition-colors duration-300">
                {category}
              </h3>
              <div className="flex flex-wrap gap-2">
                {items.map((skill, skillIndex) => (
                  <span
                    key={skill}
                    className="px-3 py-1 bg-background/50 border border-border rounded-full text-sm text-foreground hover:border-primary hover:text-primary hover:bg-primary/10 transition-all duration-300 transform hover:scale-105"
                    style={{ animationDelay: `${categoryIndex * 0.1 + skillIndex * 0.05}s` }}
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
