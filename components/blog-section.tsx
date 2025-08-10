import Image from "next/image"
import Link from "next/link"
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card"

const posts = [
  {
    title: "Setting Up Your Perfect Content Creation Workspace",
    excerpt: "Learn how to create an inspiring and productive environment for content creation and digital work.",
    author: "Sarah Johnson",
    date: "Feb 8, 2024",
    image: "https://picsum.photos/600/400?random=50",
    category: "Productivity",
  },
  {
    title: "The Essential Digital Creator's Toolkit for 2024",
    excerpt: "A comprehensive guide to the tools and equipment every modern content creator needs.",
    author: "Michael Chen",
    date: "Feb 7, 2024",
    image: "https://picsum.photos/600/400?random=51",
    category: "Tools & Resources",
  },
  {
    title: "Mastering SEO and Social Media for Bloggers",
    excerpt: "Expert strategies to improve your blog's visibility and grow your social media presence.",
    author: "David Park",
    date: "Feb 6, 2024",
    image: "https://picsum.photos/600/400?random=52",
    category: "Digital Marketing",
  },
]

export function BlogSection() {
  return (
    <section className="py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between items-center mb-12">
          <h2 className="text-3xl font-bold tracking-tight dark:text-white">Latest Insights</h2>
          <Link href="/blog" className="text-[#06D6A0] dark:text-[#00FF94] hover:underline">
            View all posts →
          </Link>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          {posts.map((post, index) => (
            <Card
              key={index}
              className="border-0 shadow-none hover:shadow-md transition-shadow dark:bg-gray-900/30 dark:backdrop-blur-sm dark:border dark:border-gray-700/50 hover-glow"
            >
              <CardHeader className="p-0">
                <Image
                  src={post.image || "/placeholder.svg"}
                  alt={post.title}
                  width={600}
                  height={400}
                  className="rounded-t-lg aspect-[3/2] object-cover"
                />
              </CardHeader>
              <CardContent className="p-6">
                <div className="text-sm text-[#06D6A0] dark:text-[#00FF94] font-medium mb-2">{post.category}</div>
                <h3 className="text-xl font-semibold mb-2 dark:text-white">{post.title}</h3>
                <p className="text-gray-500 dark:text-gray-300 mb-4">{post.excerpt}</p>
              </CardContent>
              <CardFooter className="p-6 pt-0 flex items-center justify-between">
                <div className="text-sm text-gray-500 dark:text-gray-400">{post.author}</div>
                <div className="text-sm text-gray-500 dark:text-gray-400">{post.date}</div>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
