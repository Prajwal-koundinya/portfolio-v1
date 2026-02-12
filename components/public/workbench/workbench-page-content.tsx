"use client"

import { useState, useEffect } from "react"
import { cn } from "@/lib/utils"
import { ExternalLink, Activity, Linkedin } from "lucide-react"

const wipItems = [
  {
    id: 1,
    name: "National Level Technical Paper Presentation – 1st Place",
    description:
      "After nearly a year of research, experimentation, and iterative refinement, I architected an explainable ensemble deep learning framework for brain tumor detection using ResNet50, EfficientNet-B0, and DenseNet121 integrated with Grad-CAM. The challenge involved balancing model diversity with interpretability while ensuring consistent clinical relevance across architectures. Competing against 60 national teams, this experience strengthened my research depth, analytical rigor, and ability to communicate complex AI systems with clarity and confidence.",
    lastUpdated: "2025",
    url: "https://www.linkedin.com/posts/thilakramalkar_machinelearning-deeplearning-artificialintelligence-ugcPost-7400435971936313344-XSbW?utm_source=social_share_send&utm_medium=member_desktop_web&rcm=ACoAAEGZYiwBg3jAFFU6JapameZ_VscP4i-i20A",
    icon: Linkedin,
  },
  {
    id: 2,
    name: "Startup Mahakumbh – Student Pitch Fest (Delhi)",
    description:
      "Selected among 100 colleges nationwide from over 10,000 delegates, I represented MIT Mysore as the only institution from Mysuru district to qualify. The evaluation process required technical clarity, feasibility validation, and strong articulation of innovation impact. Translating AI-driven solutions into a compelling, time-bound pitch under competitive scrutiny sharpened my ability to bridge engineering depth with strategic thinking and real-world applicability.",
    lastUpdated: "2025",
    url: "https://www.linkedin.com/posts/cse-ai-mitm_startupmahakumbh-pitchfest2025-krishimytra-ugcPost-7325893232544862209-9vkz?utm_source=share&utm_medium=member_desktop&rcm=ACoAAEGZYiwBg3jAFFU6JapameZ_VscP4i-i20A",
    icon: Linkedin,
  },
  {
    id: 3,
    name: "Hackshetra – 1st Place",
    description:
      "Won a 24-hour national hackathon against 120+ teams by engineering and optimizing a breast cancer detection model using thermal and ultrasound imaging. Under intense time constraints, the key challenge was ensuring strong generalization while handling noisy medical data and avoiding overfitting. This experience reinforced rapid decision-making, structured experimentation, and the ability to deliver reliable AI systems under pressure.",
    lastUpdated: "2024",
    url: "https://www.linkedin.com/posts/prajwal-kowndinya-7506b4268_mit-mysore-cse-ai-5th-semester-student-activity-7256307524046315520-oO7M?utm_source=share&utm_medium=member_desktop&rcm=ACoAAEGZYiwBg3jAFFU6JapameZ_VscP4i-i20A",
    icon: Linkedin,
  },
]

const internshipExperience = [
  { point: "Developed strong proficiency in designing, training, and optimizing deep neural networks for real-world image analysis and predictive tasks, translating theoretical concepts into production-oriented solutions." },
  { point: "Strengthened my understanding of data preprocessing and pipeline structuring, learning to handle noisy, imbalanced, and imperfect datasets that significantly impact model performance." },
  { point: "Gained hands-on experience in model evaluation and fine-tuning, addressing challenges like overfitting, convergence instability, and performance trade-offs through systematic experimentation." },
  { point: "Improved my ability to debug, iterate, and optimize under practical constraints, building resilience and disciplined problem-solving skills essential for industry-grade AI development." },
]

export function WorkbenchPageContent() {
  const [hoveredItem, setHoveredItem] = useState<number | null>(null)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  return (
    <section className="px-4 sm:px-6 py-12 sm:py-20">
      <div className="mx-auto max-w-7xl">
        {/* Hero */}
        <div className={cn("mb-12 sm:mb-16 space-y-4 opacity-0", isVisible && "animate-fade-in-up")}>
          <p className="font-mono text-xs uppercase tracking-[0.25em] sm:tracking-[0.35em] text-primary">
            Work in Progress
          </p>
          <h1 className="text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl">Overall Journey and Experience</h1>
          <p className="max-w-2xl text-base sm:text-lg text-muted-foreground leading-relaxed">
          Research-driven systems, relentless iteration, and intelligent experiments evolving into real-world AI solutions.
          </p>
        </div>

        <div className="grid gap-8 lg:grid-cols-3">
          {/* Main Terminal */}
          <div className="lg:col-span-2">
            <div
              className={cn(
                "rounded-xl border border-border bg-card/40 glass backdrop-blur-sm overflow-hidden hover-lift opacity-0",
                isVisible && "animate-scale-in stagger-2",
              )}
            >
              {/* Terminal header */}
              <div className="flex items-center gap-3 border-b border-border/50 bg-secondary/40 px-4 sm:px-5 py-3.5 sm:py-4">
                <div className="flex items-center gap-2">
                  <div className="h-3 w-3 rounded-full bg-destructive/60 transition-colors hover:bg-destructive cursor-pointer" />
                  <div className="h-3 w-3 rounded-full bg-yellow-500/60 transition-colors hover:bg-yellow-500 cursor-pointer" />
                  <div className="h-3 w-3 rounded-full bg-primary/60 transition-colors hover:bg-primary cursor-pointer" />
                </div>
                <span className="ml-4 font-mono text-xs text-muted-foreground truncate">~/prajwalkoundinya/active</span>
                <div className="ml-auto flex items-center gap-2 text-muted-foreground">
                  <span className="h-1.5 w-1.5 rounded-full bg-primary animate-pulse" />
                  <span className="font-mono text-xs">live</span>
                </div>
              </div>

              <div className="divide-y divide-border/30">
                {wipItems.map((item, index) => (
                  <a
                    key={item.id}
                    href={item.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={cn(
                      "group flex flex-col gap-4 p-6 sm:p-8 transition-all duration-300 opacity-0",
                      isVisible && "animate-fade-in",
                      hoveredItem === item.id && "bg-secondary/30",
                    )}
                    style={{ animationDelay: `${index * 80 + 300}ms` }}
                    onMouseEnter={() => setHoveredItem(item.id)}
                    onMouseLeave={() => setHoveredItem(null)}
                  >
                    <div className="flex-1 space-y-3 min-w-0">
                      <div className="flex items-start gap-3">
                        <span className="text-primary font-mono text-sm shrink-0 transition-transform duration-300 group-hover:translate-x-1 mt-0.5">
                          $
                        </span>
                        <div className="flex-1 min-w-0">
                          <div className="flex items-center gap-3">
                            <h4 className="font-mono text-sm sm:text-base font-medium tracking-tight transition-colors group-hover:text-gradient">
                              {item.name}
                            </h4>
                            <div className="flex items-center gap-2 opacity-0 group-hover:opacity-100 transition-all duration-300">
                              <ExternalLink className="h-3.5 w-3.5 text-muted-foreground" />
                            </div>
                          </div>
                        </div>
                      </div>
                      <p className="pl-6 text-sm sm:text-base text-muted-foreground leading-relaxed">
                        {item.description}
                      </p>
                    </div>

                    <div className="flex items-center justify-end pl-6">
                      <span className="font-mono text-xs text-muted-foreground shrink-0">{item.lastUpdated}</span>
                    </div>
                  </a>
                ))}
              </div>

              <div className="border-t border-border/50 bg-secondary/30 px-4 sm:px-5 py-4">
                <div className="flex items-center gap-2 font-mono text-xs text-muted-foreground">
                  <span className="text-primary">❯</span>
                  <span className="typing-cursor truncate">git status --all</span>
                  <span className="ml-auto text-primary/50 hidden sm:block">press enter to run</span>
                </div>
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Work Experience */}
            <div
              className={cn(
                "rounded-xl border border-border bg-card/40 glass p-5 opacity-0",
                isVisible && "animate-fade-in-up stagger-3",
              )}
            >
              <h3 className="font-mono text-xs uppercase tracking-wider text-primary mb-4">Work Experience</h3>
              <div className="grid grid-cols-2 gap-4">
                <div className="text-center p-3 rounded-lg bg-secondary/30">
                  <p className="text-xl sm:text-2xl font-bold text-foreground">DL Intern at</p>
                  <p className="font-mono text-xs text-muted-foreground mt-1">&nbsp;</p>
                </div>
                <div className="text-center p-3 rounded-lg bg-secondary/30">
                  <p className="text-xl sm:text-2xl font-bold text-primary">Runshaw.in</p>
                  <p className="font-mono text-xs text-muted-foreground mt-1">&nbsp;</p>
                </div>
              </div>
            </div>

            {/* Internship Experience */}
            <div
              className={cn(
                "rounded-xl border border-border bg-card/40 glass p-5 opacity-0",
                isVisible && "animate-fade-in-up stagger-4",
              )}
            >
              <h3 className="font-mono text-xs uppercase tracking-wider text-primary mb-5 flex items-center gap-2">
                <Activity className="h-3.5 w-3.5" />
                Internship Experience
              </h3>
              <div className="space-y-4">
                {internshipExperience.map((experience, index) => (
                  <div key={index} className="flex items-start gap-3 text-xs">
                    <span className="shrink-0 w-1.5 h-1.5 rounded-full mt-1.5 bg-primary" />
                    <div className="min-w-0 flex-1">
                      <p className="text-foreground leading-relaxed text-sm">{experience.point}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}