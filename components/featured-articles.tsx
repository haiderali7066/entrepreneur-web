import Image from "next/image"
import { Heart, MessageCircle, Clock } from "lucide-react"
import Link from "next/link"
import { Badge } from "@/components/ui/badge"

const articles = [
  {
    id: 1,
    title: "The Future of Digital Marketing: AI and SEO in 2024",
    excerpt:
      "Discover how artificial intelligence is revolutionizing SEO and digital marketing strategies for modern businesses.",
    image: "https://picsum.photos/600/400?random=10",
    author: {
      name: "Michael Chen",
      avatar: "https://picsum.photos/40/40?random=101",
    },
    category: "Digital Marketing",
    readingTime: "10 min read",
    date: "Feb 8, 2024",
    likes: 234,
    comments: 89,
    featured: true,
  },
  {
    id: 2,
    title: "Building Inclusive Tech Teams: A Leadership Guide",
    excerpt:
      "Learn effective strategies for creating and maintaining diverse, high-performing technology teams in today's workplace.",
    image: "https://picsum.photos/600/400?random=11",
    author: {
      name: "Sarah Johnson",
      avatar: "https://picsum.photos/40/40?random=102",
    },
    category: "Leadership",
    readingTime: "8 min read",
    date: "Feb 7, 2024",
    likes: 189,
    comments: 45,
    featured: true,
  },
  {
    id: 3,
    title: "Remote Work Productivity Strategies",
    image: "https://picsum.photos/400/300?random=12",
    author: {
      name: "Emily Wong",
      avatar: "https://picsum.photos/24/24?random=103",
    },
    category: "Productivity",
    readingTime: "6 min read",
    date: "Feb 6, 2024",
    likes: 156,
    comments: 32,
  },
  {
    id: 4,
    title: "Starting an E-commerce Fashion Business",
    image: "https://picsum.photos/400/300?random=13",
    author: {
      name: "Lisa Chen",
      avatar: "https://picsum.photos/24/24?random=104",
    },
    category: "Entrepreneurship",
    readingTime: "7 min read",
    date: "Feb 5, 2024",
    likes: 142,
    comments: 28,
  },
  {
    id: 5,
    title: "Work-Life Balance for Digital Nomads",
    image: "https://picsum.photos/400/300?random=14",
    author: {
      name: "David Park",
      avatar: "https://picsum.photos/24/24?random=105",
    },
    category: "Lifestyle",
    readingTime: "5 min read",
    date: "Feb 4, 2024",
    likes: 178,
    comments: 56,
  },
  {
    id: 6,
    title: "The Rise of AI in Business Operations",
    image: "https://picsum.photos/400/300?random=15",
    author: {
      name: "Rachel Lee",
      avatar: "https://picsum.photos/24/24?random=106",
    },
    category: "Technology",
    readingTime: "9 min read",
    date: "Feb 3, 2024",
    likes: 198,
    comments: 67,
  },
]

export function FeaturedArticles() {
  return (
    <section className="py-16 dark:bg-gradient-to-b dark:from-transparent dark:to-gray-900/20">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-xl font-semibold mb-8 dark:text-white">Featured Articles</h2>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
          {articles.slice(0, 2).map((article) => (
            <Link key={article.id} href={`/blog/${article.id}`} className="group block">
              <article className="h-full dark:bg-gray-900/30 dark:backdrop-blur-sm dark:border dark:border-gray-700/50 dark:rounded-lg dark:p-6 dark:shadow-xl dark:shadow-cyan-500/5">
                <div className="relative aspect-[16/10] overflow-hidden rounded-lg mb-4">
                  <Image
                    src={article.image || "/placeholder.svg"}
                    alt={article.title}
                    fill
                    className="object-cover transition-transform group-hover:scale-105"
                  />
                  <div className="absolute inset-0 dark:bg-gradient-to-t dark:from-black/20 dark:to-transparent" />
                </div>
                <div className="space-y-4">
                  <Badge
                    variant="secondary"
                    className="bg-[#06D6A0]/10 text-[#06D6A0] hover:bg-[#06D6A0]/20 dark:bg-gradient-to-r dark:from-[#00FF94]/20 dark:to-[#06D6A0]/20 dark:text-[#00FF94] dark:border dark:border-[#00FF94]/30"
                  >
                    {article.category}
                  </Badge>
                  <h3 className="text-2xl font-bold leading-tight group-hover:text-[#06D6A0] dark:text-white dark:group-hover:text-[#00FF94] transition-colors">
                    {article.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300 line-clamp-2">{article.excerpt}</p>
                  <div className="flex items-center justify-between pt-2">
                    <div className="flex items-center gap-3">
                      <Image
                        src={article.author.avatar || "/placeholder.svg"}
                        alt={article.author.name}
                        width={32}
                        height={32}
                        className="rounded-full dark:ring-2 dark:ring-gray-700"
                      />
                      <div className="text-sm">
                        <p className="font-medium dark:text-white">{article.author.name}</p>
                        <p className="text-gray-500 dark:text-gray-400">{article.date}</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-4 text-gray-500 dark:text-gray-400">
                      <div className="flex items-center gap-1.5">
                        <Clock className="w-4 h-4" />
                        <span className="text-sm">{article.readingTime}</span>
                      </div>
                      <div className="flex items-center gap-1.5">
                        <Heart className="w-4 h-4" />
                        <span className="text-sm">{article.likes}</span>
                      </div>
                      <div className="flex items-center gap-1.5">
                        <MessageCircle className="w-4 h-4" />
                        <span className="text-sm">{article.comments}</span>
                      </div>
                    </div>
                  </div>
                </div>
              </article>
            </Link>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {articles.slice(2).map((article) => (
            <Link key={article.id} href={`/blog/${article.id}`} className="group block">
              <article className="dark:bg-gray-900/30 dark:backdrop-blur-sm dark:border dark:border-gray-700/50 dark:rounded-lg dark:p-4 dark:shadow-lg dark:shadow-purple-500/5">
                <div className="relative aspect-[4/3] overflow-hidden rounded-lg mb-3">
                  <Image
                    src={article.image || "/placeholder.svg"}
                    alt={article.title}
                    fill
                    className="object-cover transition-transform group-hover:scale-105"
                  />
                  <div className="absolute inset-0 dark:bg-gradient-to-t dark:from-black/20 dark:to-transparent" />
                </div>
                <div className="space-y-3">
                  <Badge
                    variant="secondary"
                    className="bg-[#06D6A0]/10 text-[#06D6A0] hover:bg-[#06D6A0]/20 dark:bg-gradient-to-r dark:from-[#00FF94]/20 dark:to-[#06D6A0]/20 dark:text-[#00FF94] dark:border dark:border-[#00FF94]/30"
                  >
                    {article.category}
                  </Badge>
                  <h3 className="font-semibold leading-snug group-hover:text-[#06D6A0] dark:text-white dark:group-hover:text-[#00FF94] transition-colors">
                    {article.title}
                  </h3>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <Image
                        src={article.author.avatar || "/placeholder.svg"}
                        alt={article.author.name}
                        width={24}
                        height={24}
                        className="rounded-full dark:ring-1 dark:ring-gray-700"
                      />
                      <span className="text-sm text-gray-600 dark:text-gray-300">{article.author.name}</span>
                    </div>
                    <div className="flex items-center gap-3 text-gray-500 dark:text-gray-400">
                      <div className="flex items-center gap-1">
                        <Heart className="w-4 h-4" />
                        <span className="text-xs">{article.likes}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <MessageCircle className="w-4 h-4" />
                        <span className="text-xs">{article.comments}</span>
                      </div>
                    </div>
                  </div>
                </div>
              </article>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
