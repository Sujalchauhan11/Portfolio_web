import React from "react"

const About = React.forwardRef<HTMLDivElement>((_, ref) => {
  return (
    <section ref={ref} className="section-spacing bg-card/30">
      <div className="container-custom">
        <div className="mb-12">
          <h2 className="text-4xl sm:text-5xl font-bold mb-4">About Me</h2>
          <div className="h-1 w-20 bg-primary rounded"></div>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
              I'm a passionate full-stack developer and data analyst based in Mumbai, India. With expertise spanning
              across MERN stack, Python, and data visualization, I craft elegant solutions to complex technical
              challenges.
            </p>
            <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
              Currently pursuing my Bachelor's degree in Electronics and Telecommunications at Shah & Anchor Kutchhi
              Engineering College, I'm driven by a love for building scalable applications and uncovering insights from
              data.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              When I'm not coding, you'll find me exploring new technologies, contributing to open-source projects, or
              diving into data analysis challenges.
            </p>
          </div>

          <div className="space-y-4">
            <div className="bg-background/50 border border-border p-6 rounded-lg hover:border-primary transition-all">
              <h3 className="text-primary font-bold mb-2">Full Stack Development</h3>
              <p className="text-muted-foreground">
                Building end-to-end web applications with modern tech stacks and best practices.
              </p>
            </div>
            <div className="bg-background/50 border border-border p-6 rounded-lg hover:border-primary transition-all">
              <h3 className="text-primary font-bold mb-2">Data Analytics</h3>
              <p className="text-muted-foreground">
                Analyzing datasets to extract meaningful insights and create compelling visualizations.
              </p>
            </div>
            <div className="bg-background/50 border border-border p-6 rounded-lg hover:border-primary transition-all">
              <h3 className="text-primary font-bold mb-2">API Development</h3>
              <p className="text-muted-foreground">
                Designing RESTful APIs with proper architecture and database optimization.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
})

About.displayName = "About"
export default About
