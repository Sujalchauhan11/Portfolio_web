import React from "react"
import { Mail, Phone, MapPin, Linkedin, Github } from "lucide-react"

const Contact = React.forwardRef<HTMLDivElement>((_, ref) => {
  return (
    <section ref={ref} id="contact-section" className="section-spacing">
      <div className="container-custom">
        <div className="mb-12">
          <h2 className="text-4xl sm:text-5xl font-bold mb-4">Let's Connect</h2>
          <div className="h-1 w-20 bg-gradient-to-r from-primary to-secondary rounded"></div>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-bold mb-4">Get In Touch</h3>
              <p className="text-muted-foreground leading-relaxed">
                I'm always interested in hearing about new opportunities and projects. Feel free to reach out if you'd
                like to collaborate or just chat!
              </p>
            </div>

            <div className="space-y-4">
              <a
                href="tel:+919819355181"
                className="flex items-center gap-4 text-foreground hover:text-primary transition-colors group"
              >
                <div className="p-3 bg-card border border-border rounded-lg group-hover:border-primary group-hover:bg-primary/10 transition-all">
                  <Phone size={20} className="text-primary" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Phone</p>
                  <p className="font-medium">+91 9819 355 181</p>
                </div>
              </a>

              <a
                href="mailto:sujalchauhan826@gmail.com"
                className="flex items-center gap-4 text-foreground hover:text-primary transition-colors group"
              >
                <div className="p-3 bg-card border border-border rounded-lg group-hover:border-primary group-hover:bg-primary/10 transition-all">
                  <Mail size={20} className="text-primary" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Email</p>
                  <p className="font-medium">sujalchauhan826@gmail.com</p>
                </div>
              </a>

              <div className="flex items-center gap-4 text-foreground">
                <div className="p-3 bg-card border border-border rounded-lg">
                  <MapPin size={20} className="text-secondary" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Location</p>
                  <p className="font-medium">Mumbai, India</p>
                </div>
              </div>
            </div>
          </div>

          <div className="flex flex-col items-center justify-center space-y-8">
            <div className="text-center">
              <h3 className="text-xl font-bold mb-6">Connect With Me</h3>
              <div className="flex gap-6 justify-center">
                <a
                  href="https://www.linkedin.com/in/sujal-chauhan11"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-4 bg-card border border-border rounded-lg hover:border-primary hover:bg-primary/10 hover:text-primary transition-all transform hover:scale-110"
                >
                  <Linkedin size={24} />
                </a>
                <a
                  href="https://github.com/Sujalchauhan11"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-4 bg-card border border-border rounded-lg hover:border-secondary hover:bg-secondary/10 hover:text-secondary transition-all transform hover:scale-110"
                >
                  <Github size={24} />
                </a>
              </div>
            </div>

            <div className="bg-card border border-border p-8 rounded-lg text-center max-w-sm">
              <p className="text-muted-foreground mb-4">
                Whether you have a project in mind or just want to say hello, feel free to contact me through any of the
                channels above!
              </p>
              <p className="text-sm text-muted-foreground">I typically respond to messages within 24 hours.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
})

Contact.displayName = "Contact"
export default Contact
