import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Globe, Github, Linkedin, Calendar } from "lucide-react"

export default function HomePage() {
  const links = [
    {
      name: "Personal Website",
      url: "https://i.am.miniiar.com",
      icon: Globe,
      description: "Visit my personal website",
    },
    {
      name: "GitHub",
      url: "https://github.com/miniiarrr",
      icon: Github,
      description: "Check out my code",
    },
    {
      name: "LinkedIn",
      url: "https://www.linkedin.com/in/miniiar/",
      icon: Linkedin,
      description: "Connect with me professionally",
    },
    {
      name: "Cal.com",
      url: "https://cal.com/miniiar",
      icon: Calendar,
      description: "Schedule a meeting",
    },
  ]

  return (
    <div className="min-h-screen bg-[#2c2c2c] flex items-center justify-center p-4">
      <Card className="w-full max-w-md p-8 text-center space-y-6 shadow-lg bg-[#57cc99] border-none">
        <div className="space-y-4">
          <div className="relative w-32 h-32 mx-auto">
            <Image
              src="/profile.png"
              alt="Miniiar Rakhimkulov"
              fill
              className="rounded-full object-cover border-4 border-[#1a1a1a] shadow-lg"
              priority
            />
          </div>

          <div className="space-y-2">
            <h1 className="text-2xl font-bold text-slate-900">Miniiar Rakhimkulov</h1>
            <p className="text-slate-600 text-lg">Hello World!</p>
          </div>
        </div>

        <div className="space-y-3">
          {links.map((link) => {
            const IconComponent = link.icon
            return (
              <Button
                key={link.name}
                asChild
                variant="outline"
                className="w-full h-12 justify-start gap-3 bg-transparent border-[#1a1a1a] hover:bg-[#c7f9cc] transition-colors"
              >
                <Link href={link.url} target="_blank" rel="noopener noreferrer" className="flex items-center">
                  <IconComponent className="w-5 h-5" />
                  <span className="font-medium">{link.name}</span>
                </Link>
              </Button>
            )
          })}
        </div>
      </Card>
    </div>
  )
}
