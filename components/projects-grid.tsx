"use client"

import { useState, useEffect, useRef } from "react"
import { cn } from "@/lib/utils"
import { Github, Star, GitFork, ExternalLink, Sparkles } from "lucide-react"

const projects = [
  {
    id: 0,
    title: "NutriTrack AI",
    description:
      "AI-powered mobile nutrition assistant that analyzes food images for calorie and macronutrient estimation. Combines ML-based meal recognition with FastAPI backend inference and personalized dietary insights.",
    tags: ["React Native", "FastAPI", "MongoDB", "Machine Learning", "REST APIs"],
    status: "mobile-apps",
    year: "2025",
    stars: 9,
    forks: 1,
    url: "https://github.com/Prajwal-koundinya/NutriAI-major-project",
    featured: true,
    highlight: true,
  },
  {
    id: 1,
    title: "Diabetic Retinopathy Detection - Ensemble AI",
    description:
      "Ensemble of ResNet, DenseNet, and EfficientNet to detect diabetic retinopathy. Deployed via Flask. MLOps ready.",
    tags: ["PyTorch", "CNN-Ensemble", "ResNet", "DenseNet", "EfficientNet", "Flask", "OpenCV"],
    status: "deep-learning",
    year: "2024",
    stars: 14,
    forks: 4,
    url: "https://github.com/Prajwal-koundinya/Diabetic-retinopathy-ensembleApproach",
    featured: true,
  },
  {
    id: 2,
    title: "F1 Race Visualization",
    description:
      "Interactive Python application for visualizing Formula 1 telemetry and replaying race events. Integrates real-time telemetry parsing with high-performance graphical rendering.",
    tags: ["Python", "FastF1 API", "Arcade", "Data Visualization"],
    status: "mlops",
    year: "2025",
    stars: 7,
    forks: 1,
    url: "https://github.com/Prajwal-koundinya/f1-visualization",
    featured: false,
  },
  {
    id: 3,
    title: "Plant Disease Detection",
    description:
      "Developed a plant pathology classification model with extensive augmentation (+40% dataset expansion). Integrated Grad-CAM heatmaps to enhance agricultural decision transparency and trust.",
    tags: ["PyTorch", "Computer Vision", "Grad-CAM", "Image Augmentation"],
    status: "deep-learning",
    year: "2025",
    stars: 4,
    forks: 4,
    url: "https://github.com/Prajwal-koundinya/Plant-Disease-detection",
    featured: true,
  },
  {
    id: 4,
    title: "C-Footprint Optimization",
    description:
      "Built a carbon footprint estimation platform predicting CO₂e emissions per dollar spent using emission factor modeling. Designed for sustainable supply-chain analytics with full-stack deployment on Netlify.",
    tags: ["Machine Learning", "Emission Modeling", "React", "Netlify"],
    status: "mlops",
    year: "2025",
    stars: 14,
    forks: 1,
    url: "https://github.com/Prajwal-koundinya/C-Footprint-Optimization",
    homepage: "https://visionary-croissant-257d82.netlify.app/",
    featured: false,
  },
  {
    id: 5,
    title: "SAM-2 Object Segmentation",
    description:
      "Implemented advanced object segmentation using Segment Anything Model 2 (SAM 2) with multi-prompt inference support. Enables precise mask generation via point and bounding-box guidance.",
    tags: ["PyTorch", "SAM-2", "Computer Vision"],
    status: "deep-learning",
    year: "2025",
    stars: 7,
    forks: 3,
    url: "https://github.com/Prajwal-koundinya/SAM-2",
    featured: false,
  },
  {
    id: 6,
    title: "Liver Fibrosis Detection",
    description:
      "Designed a transfer-learning-based CNN for early-stage liver fibrosis detection from ultrasound scans. Integrated focal loss for class imbalance and Grad-CAM for interpretable diagnostic visualizations.",
    tags: ["PyTorch", "Transfer Learning", "Grad-CAM", "Medical Imaging", "OpenCV"],
    status: "deep-learning",
    year: "2024",
    stars: 3,
    forks: 1,
    url: "https://github.com/Prajwal-koundinya/liver-fabrosis-detection",
    featured: true,
  },
  {
    id: 7,
    title: "Code-Converter",
    description:
      "A React app powered by Gemini API to convert code from one language to another. This project is made just to learn react and not for production.",
    tags: ["React", "API", "vite"],
    status: "mlops",
    year: "2024",
    stars: 1,
    forks: 2,
    url: "https://github.com/Prajwal-koundinya/Code-converter",
    homepage: "https://sparkly-begonia-3eabde.netlify.app/",
    featured: false,
  },
]

const filters = ["all", "deep-learning", "mlops", "mobile-apps"]

export function ProjectsGrid() {
  const [activeFilter, setActiveFilter] = useState("all")

  const filteredProjects = activeFilter === "all" ? projects : projects.filter((p) => p.status === activeFilter)

  return (
    <section id="projects" className="px-4 sm:px-6 py-20 sm:py-28">
      <div className="mx-auto max-w-7xl">
        <div className="mb-10 sm:mb-14 flex flex-col gap-6 sm:gap-8 sm:flex-row sm:items-end sm:justify-between">
          <div className="space-y-3 animate-fade-in-up">
            <p className="font-mono text-xs uppercase tracking-[0.25em] sm:tracking-[0.35em] text-primary">Artifacts</p>
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl">Open Source Projects</h2>
          </div>

          <div className="flex gap-2 overflow-x-auto pb-2 -mx-4 px-4 sm:mx-0 sm:px-0 sm:overflow-visible sm:flex-wrap scrollbar-hide animate-fade-in-up stagger-2">
            {filters.map((filter) => (
              <button
                key={filter}
                onClick={() => setActiveFilter(filter)}
                className={cn(
                  "shrink-0 rounded-lg border px-5 py-2.5 font-mono text-xs uppercase tracking-wider transition-all duration-300 active:scale-[0.98]",
                  activeFilter === filter
                    ? "border-primary bg-primary/15 text-primary shadow-sm shadow-primary/20"
                    : "border-border text-muted-foreground hover:border-foreground/50 hover:text-foreground hover:bg-secondary/50",
                )}
              >
                {filter}
              </button>
            ))}
          </div>
        </div>

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {filteredProjects.map((project, index) => (
            <article
              key={project.id}
              className={cn(
                "group relative overflow-hidden rounded-xl border bg-card/40 p-6 sm:p-7 glass transition-all duration-400 active:scale-[0.99] hover-lift opacity-0 animate-fade-in-up",
                "highlight" in project && project.highlight
                  ? "sm:col-span-2 lg:col-span-2 border-primary/30 bg-gradient-to-br from-primary/8 via-card/50 to-primary/8"
                  : "border-border/60",
                project.featured && !("highlight" in project && project.highlight) && "sm:col-span-2 lg:col-span-1",
              )}
              style={{ animationDelay: `${(index % 6) * 100 + 200}ms` }}
            >
              {"highlight" in project && project.highlight && (
                <div className="absolute left-5 top-5 flex items-center gap-2 rounded-full border border-primary/40 bg-primary/15 px-3.5 py-1.5 animate-pulse-glow">
                  <Sparkles className="h-3.5 w-3.5 text-primary" />
                  <span className="font-mono text-[10px] uppercase tracking-wider text-primary font-medium">
                    Featured
                  </span>
                </div>
              )}

              {/* Status indicator */}
              <div
                className={cn(
                  "absolute right-5 top-5 flex items-center gap-2.5",
                  "highlight" in project && project.highlight && "top-5",
                )}
              >
                <span
                  className={cn(
                    "h-2.5 w-2.5 rounded-full transition-shadow duration-300",
                    project.status === "deep-learning" && "bg-primary shadow-sm shadow-primary/50",
                    project.status === "mlops" && "bg-yellow-500 animate-pulse shadow-sm shadow-yellow-500/50",
                    project.status === "mobile-apps" && "bg-green-500 shadow-sm shadow-green-500/50",
                  )}
                />
                <span className="font-mono text-xs text-muted-foreground">{project.status}</span>
              </div>

              <div
                className={cn(
                  "mb-5 font-mono text-xs text-muted-foreground",
                  "highlight" in project && project.highlight && "mt-10",
                )}
              >
                {project.year}
              </div>

              <h3
                className={cn(
                  "mb-3 font-bold tracking-tight transition-all duration-300 group-hover:text-gradient",
                  "highlight" in project && project.highlight ? "text-xl sm:text-2xl" : "text-lg sm:text-xl",
                )}
              >
                {project.title}
              </h3>

              <p
                className={cn(
                  "mb-5 text-sm leading-relaxed text-muted-foreground",
                  "highlight" in project && project.highlight ? "line-clamp-3" : "line-clamp-2",
                )}
              >
                {project.description}
              </p>

              <div className="mb-5 flex items-center gap-5 font-mono text-xs text-muted-foreground">
                <span className="flex items-center gap-1.5 transition-colors group-hover:text-yellow-500">
                  <Star className="h-3.5 w-3.5" />
                  {project.stars}
                </span>
                <span className="flex items-center gap-1.5 transition-colors group-hover:text-foreground">
                  <GitFork className="h-3.5 w-3.5" />
                  {project.forks}
                </span>
              </div>

              <div className="mb-5 flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="rounded-md border border-border/80 bg-secondary/60 px-2.5 py-1 font-mono text-xs text-secondary-foreground transition-colors hover:border-primary/50 hover:bg-primary/10"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              <div className="flex items-center gap-4">
                <a
                  href={project.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 font-mono text-xs text-muted-foreground hover:text-primary transition-all duration-300 group/link"
                  onClick={(e) => e.stopPropagation()}
                >
                  <Github className="h-4 w-4 transition-transform group-hover/link:scale-110" />
                  <span className="underline-animate">source</span>
                </a>
                {project.homepage && (
                  <a
                    href={project.homepage}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 font-mono text-xs text-primary hover:text-foreground transition-all duration-300 group/link"
                    onClick={(e) => e.stopPropagation()}
                  >
                    <ExternalLink className="h-4 w-4 transition-transform group-hover/link:scale-110 group-hover/link:rotate-12" />
                    <span className="underline-animate">live</span>
                  </a>
                )}
              </div>

              <div className="absolute bottom-0 left-0 h-1 w-0 bg-gradient-to-r from-primary via-primary/80 to-transparent transition-all duration-500 group-hover:w-full" />
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
