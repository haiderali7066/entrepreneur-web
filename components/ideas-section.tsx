import Image from "next/image"
import { Bookmark } from "lucide-react"
import { Button } from "@/components/ui/button"

const ideas = [
  {
    id: 1,
    title: "The Art of Mindful Content Creation",
    image: "https://picsum.photos/400/400?random=20",
    author: {
      name: "Sarah Chen",
      avatar: "https://picsum.photos/40/40?random=120",
      role: "Content Strategist",
    },
  },
  {
    id: 2,
    title: "Building a Sustainable Content Strategy",
    image: "https://picsum.photos/400/400?random=21",
    author: {
      name: "Michael Park",
      avatar: "https://picsum.photos/40/40?random=121",
      role: "Digital Marketing Lead",
    },
  },
  {
    id: 3,
    title: "Starting Your First Blog: A Complete Guide",
    image: "https://picsum.photos/400/400?random=22",
    author: {
      name: "Emily Wong",
      avatar: "https://picsum.photos/40/40?random=122",
      role: "Professional Blogger",
    },
  },
  {
    id: 4,
    title: "Digital Content Consumption Trends 2024",
    image: "https://picsum.photos/400/400?random=23",
    author: {
      name: "David Kim",
      avatar: "https://picsum.photos/40/40?random=123",
      role: "Digital Analyst",
    },
  },
  {
    id: 5,
    title: "Creating a Productive Writing Environment",
    image: "https://picsum.photos/400/400?random=24",
    author: {
      name: "Rachel Lee",
      avatar: "https://picsum.photos/40/40?random=124",
      role: "Productivity Coach",
    },
  },
  {
    id: 6,
    title: "Visual Storytelling: Photography for Content Creators",
    image: "https://picsum.photos/400/400?random=25",
    author: {
      name: "Alex Thompson",
      avatar: "https://picsum.photos/40/40?random=125",
      role: "Visual Content Creator",
    },
  },
]

export function IdeasSection() {
  return (
    <section className="py-16">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-xl font-semibold mb-8 dark:text-white">Ideas</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {ideas.map((idea) => (
            <article key={idea.id} className="group">
              <div className="relative aspect-square overflow-hidden rounded-lg mb-4">
                <Image
                  src={idea.image || "/placeholder.svg"}
                  alt={idea.title}
                  fill
                  className="object-cover transition-transform group-hover:scale-105"
                />
                <Button
                  size="icon"
                  variant="secondary"
                  className="absolute top-4 right-4 w-8 h-8 rounded-full bg-white/90 hover:bg-white dark:bg-gray-900/90 dark:hover:bg-gray-800"
                >
                  <Bookmark className="w-4 h-4" />
                  <span className="sr-only">Save idea</span>
                </Button>
              </div>
              <h3 className="font-semibold text-lg mb-4 group-hover:text-[#06D6A0] dark:text-white dark:group-hover:text-[#00FF94] transition-colors">
                {idea.title}
              </h3>
              <div className="flex items-center gap-3">
                <Image
                  src={idea.author.avatar || "/placeholder.svg"}
                  alt={idea.author.name}
                  width={32}
                  height={32}
                  className="rounded-full"
                />
                <div className="text-sm">
                  <p className="font-medium dark:text-white">{idea.author.name}</p>
                  <p className="text-gray-500 dark:text-gray-400">{idea.author.role}</p>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
