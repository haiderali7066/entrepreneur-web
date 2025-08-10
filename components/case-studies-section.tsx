import Image from "next/image"
import { Heart, MessageCircle } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import Link from "next/link"

const reviews = [
  {
    id: 1,
    title: "The Perfect Writing Setup for Productivity",
    image: "https://picsum.photos/600/400?random=40",
    author: "Sarah Chen",
    company: "Minimal Desk Co.",
    likes: 145,
    comments: 32,
  },
  {
    id: 2,
    title: "How I Write 10 Blog Posts a Week",
    image: "https://picsum.photos/600/400?random=41",
    author: "Michael Park",
    company: "Content Creator Academy",
    likes: 167,
    comments: 45,
  },
  {
    id: 3,
    title: "WordPress Tips for Professional Bloggers",
    image: "https://picsum.photos/600/400?random=42",
    author: "Emily Wong",
    company: "Blog Masters",
    likes: 189,
    comments: 51,
  },
]

export function CaseStudiesSection() {
  return (
    <section className="py-16">
      <div className="max-w-7xl mx-auto px-4">
        <div className="space-y-12">
          <div>
            <h2 className="text-xl font-semibold mb-8 dark:text-white">Reviews</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {reviews.map((review) => (
                <Link key={review.id} href={`/reviews/${review.id}`}>
                  <Card className="group h-full hover:shadow-lg transition-shadow border-0 dark:bg-gray-900/30 dark:backdrop-blur-sm dark:border dark:border-gray-700/50 hover-glow">
                    <CardContent className="p-0">
                      <div className="relative aspect-[16/9] overflow-hidden rounded-t-lg">
                        <Image
                          src={review.image || "/placeholder.svg"}
                          alt={review.title}
                          fill
                          className="object-cover transition-transform group-hover:scale-105"
                        />
                      </div>
                      <div className="p-6">
                        <h3 className="font-semibold mb-2 group-hover:text-[#06D6A0] dark:text-white dark:group-hover:text-[#00FF94] transition-colors">
                          {review.title}
                        </h3>
                        <p className="text-sm text-gray-600 dark:text-gray-300 mb-4">
                          {review.author} · {review.company}
                        </p>
                        <div className="flex items-center gap-4 text-gray-500 dark:text-gray-400">
                          <div className="flex items-center gap-1">
                            <Heart className="w-4 h-4" />
                            <span className="text-sm">{review.likes}</span>
                          </div>
                          <div className="flex items-center gap-1">
                            <MessageCircle className="w-4 h-4" />
                            <span className="text-sm">{review.comments}</span>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
