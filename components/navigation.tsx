"use client"

import { useState } from "react"
import { Menu, X } from "lucide-react"

interface NavigationProps {
  onScrollTo: {
    about: () => void
    projects: () => void
    contact: () => void
  }
}

export default function Navigation({ onScrollTo }: NavigationProps) {
  const [isOpen, setIsOpen] = useState(false)

  const navItems = [
    { label: "About", action: onScrollTo.about },
    { label: "Projects", action: onScrollTo.projects },
    { label: "Contact", action: onScrollTo.contact },
  ]

  return (
    <nav className="fixed top-0 w-full bg-background/80 backdrop-blur-md border-b border-border z-50">
      <div className="container-custom flex justify-between items-center h-16">
        <h1 className="text-xl font-bold text-primary">SC</h1>

        {/* Desktop Navigation */}
        <div className="hidden md:flex gap-8">
          {navItems.map((item) => (
            <button
              key={item.label}
              onClick={item.action}
              className="text-foreground hover:text-accent transition-colors"
            >
              {item.label}
            </button>
          ))}
        </div>

        {/* Mobile Navigation Toggle */}
        <button className="md:hidden" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="absolute top-16 left-0 right-0 bg-card border-b border-border md:hidden">
            <div className="flex flex-col gap-4 p-4">
              {navItems.map((item) => (
                <button
                  key={item.label}
                  onClick={() => {
                    item.action()
                    setIsOpen(false)
                  }}
                  className="text-foreground hover:text-accent transition-colors text-left"
                >
                  {item.label}
                </button>
              ))}
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}
