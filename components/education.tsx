"use client"

import { GraduationCap } from "lucide-react"

export default function Education() {
  const education = [
    {
      school: "Shah & Anchor Kutchhi Engineering College",
      degree: "Bachelor of Technology",
      field: "Electronics and Telecommunication",
      duration: "November 2022 - August 2025",
      status: "Pursuing",
    },
    {
      school: "Vidyalankari Polytechnic",
      degree: "Diploma",
      field: "Information Technology",
      duration: "August 2019 - June 2022",
      status: "Completed",
    },
  ]

  return (
    <section className="section-spacing">
      <div className="container-custom">
        <div className="mb-12">
          <h2 className="text-4xl sm:text-5xl font-bold mb-4">Education</h2>
          <div className="h-1 w-20 bg-primary rounded"></div>
        </div>

        <div className="space-y-6">
          {education.map((edu, index) => (
            <div
              key={index}
              className="bg-card border border-border p-6 rounded-lg hover:border-primary transition-all"
            >
              <div className="flex items-start gap-4">
                <div className="p-3 bg-primary/10 border border-primary/30 rounded-lg">
                  <GraduationCap size={24} className="text-primary" />
                </div>
                <div className="flex-1">
                  <h3 className="text-lg font-bold text-foreground mb-1">{edu.degree}</h3>
                  <p className="text-primary mb-2">{edu.field}</p>
                  <p className="text-muted-foreground text-sm mb-2">{edu.school}</p>
                  <div className="flex gap-4 text-xs text-muted-foreground">
                    <span>{edu.duration}</span>
                    <span className="px-2 py-1 bg-primary/10 rounded text-primary">{edu.status}</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
