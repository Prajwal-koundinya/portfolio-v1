import { Linkedin, ExternalLink, FileText } from "lucide-react"

const wipItems = [
  {
    id: 1,
    name: "National Level Technical Paper Presentation - 1st Place",
    description: "Presented a technical paper at a national-level competition and secured 1st place.",
    lastUpdated: "Nov 2025",
    url: "https://drive.google.com/file/d/10LG5J7AUahtlkOk1ONHQpmsmv1tHTpsG/view",
    icon: FileText,
  },
  {
    id: 2,
    name: "Startup Mahakumbh - Student Pitch Fest (Delhi)",
    description: "Selected among 100 colleges nationwide (10,000+ delegates) to represent MIT Mysore as the sole Mysuru qualifier at India's largest startup congregation.",
    lastUpdated: "Apr 2025",
    url: "https://drive.google.com/file/d/1M4nvD_bMlS-AaUpu2dftc1FdkPSkLkIP/view",
    icon: FileText,
  },
  {
    id: 3,
    name: "Hackshetra - 1st Place",
    description: "Won 1st place at 24-hour national hackathon against 120+ teams by engineering and optimizing a breast cancer detection model under extreme time constraints.",
    lastUpdated: "Oct 2025",
    url: "https://drive.google.com/file/d/19V10KJ73qYzYGtWhKxj3UIut1cxxJgre/view?usp=sharing",
    icon: FileText,
  },
  {
    id: 4,
    name: "Ideathon - Idea to Enterprise (2nd Place)",
    description: "Won 2nd place in an inter-college Ideathon where we pitched a RAG system with MCP support.",
    lastUpdated: "Dec 2024",
    url: null,
    icon: null,
  },
]

export function Workbench() {
  return (
    <section id="achievements" className="px-4 sm:px-6 py-20 sm:py-28 border-t border-border/30">
      <div className="mx-auto max-w-7xl">
        <div className="mb-10 sm:mb-14 space-y-3 animate-fade-in-up">
          <p className="font-mono text-xs uppercase tracking-[0.25em] sm:tracking-[0.35em] text-primary">
            Winning as a Habit
          </p>
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl">Achievements</h2>
          <p className="max-w-2xl text-base sm:text-lg text-muted-foreground leading-relaxed">
            Active experimentations with life. Things that I have won and learned from... so far.
          </p>
        </div>

        <div className="rounded-xl border border-border bg-card/40 glass backdrop-blur-sm overflow-hidden hover-lift animate-scale-in stagger-2">
          {/* Terminal header */}
          <div className="flex items-center gap-3 border-b border-border/50 bg-secondary/40 px-4 sm:px-5 py-3.5 sm:py-4">
            <div className="flex items-center gap-2">
              <div className="h-3 w-3 rounded-full bg-destructive/60 transition-colors hover:bg-destructive cursor-pointer" />
              <div className="h-3 w-3 rounded-full bg-yellow-500/60 transition-colors hover:bg-yellow-500 cursor-pointer" />
              <div className="h-3 w-3 rounded-full bg-primary/60 transition-colors hover:bg-primary cursor-pointer" />
            </div>
            <span className="ml-4 font-mono text-xs text-muted-foreground truncate">~/prajwalkoundinya/active</span>
            <div className="ml-auto hidden sm:flex items-center gap-2 text-muted-foreground">
              <span className="h-1.5 w-1.5 rounded-full bg-primary animate-pulse" />
              <span className="font-mono text-xs">live</span>
            </div>
          </div>

          <div className="divide-y divide-border/30">
            {wipItems.map((item, index) => {
              const content = (
                <>
                  <div className="flex-1 space-y-2 min-w-0">
                    <div className="flex items-center gap-3">
                      <span className="text-primary font-mono text-sm shrink-0 transition-transform duration-300 group-hover:translate-x-1">
                        $
                      </span>
                      <h4 className="font-mono text-sm font-medium tracking-tight transition-colors group-hover:text-gradient truncate">
                        {item.name}
                      </h4>
                      {item.icon && (
                        <div className="flex items-center gap-2 opacity-0 group-hover:opacity-100 transition-all duration-300">
                          <item.icon className="h-3.5 w-3.5 text-muted-foreground" />
                          <ExternalLink className="h-3 w-3 text-muted-foreground" />
                        </div>
                      )}
                    </div>
                    <p className="pl-6 text-xs text-muted-foreground line-clamp-2 sm:line-clamp-1">{item.description}</p>
                  </div>

                  <div className="flex items-center justify-end pl-6 sm:pl-0">
                    <span className="font-mono text-xs text-muted-foreground shrink-0">{item.lastUpdated}</span>
                  </div>
                </>
              )

              if (item.url) {
                return (
                  <a
                    key={item.id}
                    href={item.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group flex flex-col gap-4 p-5 sm:p-6 transition-all duration-300 sm:flex-row sm:items-center sm:justify-between hover:bg-secondary/30 animate-fade-in"
                    style={{ animationDelay: `${index * 100 + 400}ms` }}
                  >
                    {content}
                  </a>
                )
              }

              return (
                <div
                  key={item.id}
                  className="group flex flex-col gap-4 p-5 sm:p-6 transition-all duration-300 sm:flex-row sm:items-center sm:justify-between hover:bg-secondary/30 animate-fade-in"
                  style={{ animationDelay: `${index * 100 + 400}ms` }}
                >
                  {content}
                </div>
              )
            })}
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
    </section>
  )
}
