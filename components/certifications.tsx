"use client"

import { Award } from "lucide-react"

export default function Certifications() {
  const certifications = [
    {
      title: "Foundations: Data, Data, Everywhere",
      issuer: "Google Career Certificates",
      date: "December 2024",
      credentialId: "39U34HJV3AC",
      description:
        "Comprehensive course on data analytics fundamentals covering data collection, analysis, and visualization techniques.",
    },
    {
      title: "PwC Switzerland - Power BI Job Simulation",
      issuer: "Forge",
      date: "December 2024",
      credentialId: "92ynuxLZWH5Notc2",
      description:
        "Strengthened Power BI skills through practical simulation focused on client data visualization needs.",
    },
    {
      title: "Accenture North America - Data Analytics and Visualization Job Simulation",
      issuer: "Forge",
      date: "November 2024",
      credentialId: "jrmEHsbCke857WQ7",
      description:
        "Completed a comprehensive simulation advising a hypothetical social media client on data analytics strategies.",
    },
    {
      title: "Data Analytics Essentials",
      issuer: "Cisco Networking Academy",
      date: "July 2024",
      skills: "Data Visualization • SQL • Data Analysis • Analytical Skills",
      description: "Mastered essential data analytics concepts and tools for professional data-driven decision making.",
    },
    {
      title: "Introduction to Data Science",
      issuer: "Cisco Networking Academy",
      date: "June 2024",
      description:
        "Foundational course in data science methodologies, tools, and techniques for data analysis and insights generation.",
    },
  ]

  return (
    <section className="section-spacing bg-card/30">
      <div className="container-custom">
        <div className="mb-12">
          <h2 className="text-4xl sm:text-5xl font-bold mb-4">Certifications</h2>
          <div className="h-1 w-20 bg-primary rounded"></div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {certifications.map((cert, index) => (
            <div
              key={index}
              className="bg-background/50 border border-border p-6 rounded-lg hover:border-primary transition-all"
            >
              <div className="flex items-start gap-4 mb-4">
                <div className="p-3 bg-primary/10 border border-primary/30 rounded-lg flex-shrink-0">
                  <Award size={24} className="text-primary" />
                </div>
                <div className="flex-1">
                  <h3 className="text-lg font-bold text-foreground">{cert.title}</h3>
                  <p className="text-accent text-sm">{cert.issuer}</p>
                  <p className="text-muted-foreground text-xs mt-1">{cert.date}</p>
                  {cert.credentialId && <p className="text-muted-foreground text-xs mt-2">ID: {cert.credentialId}</p>}
                </div>
              </div>
              <p className="text-muted-foreground leading-relaxed">{cert.description}</p>
              {cert.skills && <p className="text-primary text-xs mt-4 font-medium">{cert.skills}</p>}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
