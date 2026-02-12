import { Code2, Layers, FileText, Zap, Bot, Globe } from "lucide-react";

export default function IntroductionPage() {
  return (
    <div>
      {/* Hero Section */}
      <section className="relative min-h-[60vh] px-4 sm:px-6 pt-28 sm:pt-32 pb-16 sm:pb-20">
        <div className="mx-auto max-w-4xl">
          <div className="space-y-6 sm:space-y-8">
            <div className="space-y-2">
              <p className="font-mono text-xs uppercase tracking-[0.2em] sm:tracking-[0.3em] text-muted-foreground">
                Welcome to PkCode
              </p>
              <h1 className="text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl text-balance">
                Where Code{" "}
                <span className="bg-gradient-to-l from-primary/50 to-accent text-transparent bg-clip-text">
                  Meets Creativity
                </span>
              </h1>
            </div>

            <p className="text-base sm:text-lg leading-relaxed text-muted-foreground max-w-3xl text-justify">
            Hii, I am Prajwal Koundinya. This is my portfolio, representing the work of an AI engineer focused on building  
            intelligent systems that solve meaningful problems. It highlights expertise in deep learning, computer vision,
            and end-to-end ML deployment, combining research precision with engineering execution. Each project is designed 
            not just to demonstrate knowledge, but to showcase the ability to transform complex ideas into scalable, real-world solutions.
            </p>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="relative px-4 sm:px-6 py-16 sm:py-20">
        <div className="mx-auto max-w-4xl">
          <div className="rounded border border-border/50 bg-card/50 p-6 sm:p-10 backdrop-blur-sm space-y-8">
            <div className="space-y-4">
              <p className="font-mono text-xs uppercase tracking-[0.2em] sm:tracking-[0.3em] text-primary">
                About the Platform
              </p>
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
                A Developer&apos;s Digital Workshop
              </h2>
            </div>

            <div className="space-y-6 text-base sm:text-lg leading-relaxed text-muted-foreground">
              <p className="text-justify">
              This portfolio is not just a collection of projects, it is an experience 
              thoughtfully built with a creative mindset to reflect how I approach engineering and problem-solving.
              </p>

              <p className="text-justify">
              It represents my journey as an AI engineer focused on building intelligent, real-world systems. 
              I work across deep learning, computer vision, medical imaging, and end-to-end ML deployment, 
              turning research concepts into functional, scalable applications. Each project here demonstrates 
              structured experimentation, technical depth, and the discipline to iterate until solutions are reliable and production-ready.
              </p>

              <p className="text-justify">
                You should hire me because I combine strong theoretical foundations with practical execution.
                I bring initiative, ownership, and the ability to execute end-to-end solutions. 
                I am comfortable navigating ambiguity, iterating quickly, and learning aggressively.
                If my work aligns with your vision, I welcome the opportunity to connect and collaborate.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="relative px-4 sm:px-6 py-16 sm:py-20">
        <div className="mx-auto max-w-6xl">
          <div className="mb-12 space-y-4 text-center">
            <p className="font-mono text-xs uppercase tracking-[0.2em] sm:tracking-[0.3em] text-primary">
              My Skills
            </p>
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
              A Blend of Theory and Practice
            </h2>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {[
              {
                icon: Code2,
                title: "Open Source Projects",
                description:
                  "Every project is available on GitHub for learning and collaboration. Transparent development process from start to finish.",
              },
              {
                icon: Layers,
                title: "Developer Workbench",
                description:
                  "A dedicated space for ongoing experiments and prototypes. Watch ideas evolve from concept to implementation.",
              },
              {
                icon: FileText,
                title: "Lab Notes",
                description:
                  "Detailed documentation of learning journeys, technical insights, and development patterns discovered along the way.",
              },
              {
                icon: Zap,
                title: "Modern Tech Stack",
                description:
                  "Built with cutting-edge technologies including Next.js, React, TypeScript, and Tailwind CSS for optimal performance.",
              },
              {
                icon: Bot,
                title: "AI Integration",
                description:
                  "Exploring the intersection of AI and web development with practical implementations and real-world use cases.",
              },
              {
                icon: Globe,
                title: "Localization",
                description:
                  "Multi-language support with i18n integration, making projects accessible to a global developer community.",
              },
            ].map((feature, index) => (
              <div
                key={index}
                className="group rounded border border-border/50 bg-card/50 p-6 backdrop-blur-sm transition-all duration-300 hover:border-primary/50 hover:bg-card/80"
              >
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded border border-primary/30 bg-primary/10 text-primary transition-all duration-300 group-hover:border-primary group-hover:bg-primary group-hover:text-primary-foreground">
                  <feature.icon className="h-6 w-6" />
                </div>
                <h3 className="mb-2 font-mono text-sm font-semibold uppercase tracking-wider text-foreground">
                  {feature.title}
                </h3>
                <p className="text-sm leading-relaxed text-muted-foreground">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}