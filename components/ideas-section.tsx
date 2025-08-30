import Image from "next/image";
import { Bookmark } from "lucide-react";
import { Button } from "@/components/ui/button";

const ideas = [
  {
    id: 1,
    title: "The Art of Mindful Content Creation",
    image: "https://picsum.photos/seed/idea1/500/500",
    author: {
      name: "Sarah Chen",
      avatar: "https://picsum.photos/seed/avatar1/80/80",
      role: "Content Strategist",
    },
  },
  {
    id: 2,
    title: "Building a Sustainable Content Strategy",
    image: "https://picsum.photos/seed/idea2/500/500",
    author: {
      name: "Michael Park",
      avatar: "https://picsum.photos/seed/avatar2/80/80",
      role: "Marketing Lead",
    },
  },
  {
    id: 3,
    title: "Starting Your First Blog: A Complete Guide",
    image: "https://picsum.photos/seed/idea3/500/500",
    author: {
      name: "Emily Wong",
      avatar: "https://picsum.photos/seed/avatar3/80/80",
      role: "Blogger",
    },
  },
  {
    id: 4,
    title: "Digital Content Consumption Trends 2024",
    image: "https://picsum.photos/seed/idea4/500/500",
    author: {
      name: "David Kim",
      avatar: "https://picsum.photos/seed/avatar4/80/80",
      role: "Digital Analyst",
    },
  },
  {
    id: 5,
    title: "Creating a Productive Writing Environment",
    image: "https://picsum.photos/seed/idea5/500/500",
    author: {
      name: "Rachel Lee",
      avatar: "https://picsum.photos/seed/avatar5/80/80",
      role: "Productivity Coach",
    },
  },
  {
    id: 6,
    title: "Visual Storytelling for Creators",
    image: "https://picsum.photos/seed/idea6/500/500",
    author: {
      name: "Alex Thompson",
      avatar: "https://picsum.photos/seed/avatar6/80/80",
      role: "Visual Creator",
    },
  },
];

export function IdeasSection() {
  return (
    <section className="py-20 relative overflow-hidden">
      {/* gradient background */}
      <div className="absolute inset-0 dark:bg-gradient-to-br dark:from-blue-900/10 dark:via-purple-900/10 dark:to-cyan-900/10 blur-3xl" />

      <div className="max-w-7xl mx-auto px-4 relative z-10">
        <h2 className="text-3xl sm:text-4xl font-bold mb-12 text-center dark:text-white">
          Fresh <span className="text-[#06D6A0]">Ideas</span> for You
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {ideas.map((idea) => (
            <article
              key={idea.id}
              className="group bg-white dark:bg-gray-900 rounded-2xl shadow-md hover:shadow-xl transition-shadow duration-300 overflow-hidden"
            >
              <div className="relative aspect-square overflow-hidden">
                <Image
                  src={idea.image}
                  alt={idea.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <Button
                  size="icon"
                  variant="secondary"
                  className="absolute top-4 right-4 w-9 h-9 rounded-full bg-white/90 hover:bg-white dark:bg-gray-900/90 dark:hover:bg-gray-800 transition"
                >
                  <Bookmark className="w-4 h-4" />
                  <span className="sr-only">Save idea</span>
                </Button>
              </div>

              <div className="p-5">
                <h3 className="font-semibold text-lg mb-3 group-hover:text-[#06D6A0] dark:text-white dark:group-hover:text-[#00FF94] transition-colors line-clamp-2">
                  {idea.title}
                </h3>

                <div className="flex items-center gap-3">
                  <Image
                    src={idea.author.avatar}
                    alt={idea.author.name}
                    width={36}
                    height={36}
                    className="rounded-full border"
                  />
                  <div className="text-sm">
                    <p className="font-medium dark:text-white">
                      {idea.author.name}
                    </p>
                    <p className="text-gray-500 dark:text-gray-400">
                      {idea.author.role}
                    </p>
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
