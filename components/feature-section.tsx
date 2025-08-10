import { BookOpen, Lightbulb, Users } from "lucide-react"

export function FeatureSection() {
  return (
    <section className="py-16 md:py-24 bg-gray-50 dark:bg-transparent relative">
      <div className="absolute inset-0 dark:bg-gradient-to-b dark:from-purple-900/10 dark:to-blue-900/10 animate-gradient-shift" />
      <div className="max-w-7xl mx-auto px-4 relative">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl font-bold tracking-tight mb-4 dark:text-white transition-colors duration-500">
            Everything you need to grow your business
          </h2>
          <p className="text-gray-500 dark:text-gray-300 text-lg transition-colors duration-500">
            Access expert insights, practical guides, and a community of ambitious founders.
          </p>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-white dark:bg-gray-900/50 dark:backdrop-blur-sm dark:border dark:border-gray-700/50 p-6 rounded-lg dark:shadow-xl dark:shadow-cyan-500/10 hover-glow transition-all duration-500 hover:scale-105 group">
            <div className="w-12 h-12 bg-[#06D6A0]/10 dark:bg-gradient-to-br dark:from-[#00FF94]/20 dark:to-[#06D6A0]/20 dark:border dark:border-[#00FF94]/30 rounded-lg flex items-center justify-center mb-4 group-hover:animate-pulse-glow transition-all duration-300">
              <BookOpen className="w-6 h-6 text-[#06D6A0] dark:text-[#00FF94] transition-colors duration-300" />
            </div>
            <h3 className="font-semibold text-xl mb-2 dark:text-white transition-colors duration-300">
              Premium Content
            </h3>
            <p className="text-gray-500 dark:text-gray-300 transition-colors duration-300">
              In-depth articles and guides written by experienced founders and industry experts.
            </p>
          </div>
          <div className="bg-white dark:bg-gray-900/50 dark:backdrop-blur-sm dark:border dark:border-gray-700/50 p-6 rounded-lg dark:shadow-xl dark:shadow-purple-500/10 hover-glow transition-all duration-500 hover:scale-105 group">
            <div className="w-12 h-12 bg-[#06D6A0]/10 dark:bg-gradient-to-br dark:from-purple-500/20 dark:to-pink-500/20 dark:border dark:border-purple-500/30 rounded-lg flex items-center justify-center mb-4 group-hover:animate-pulse-glow transition-all duration-300">
              <Lightbulb className="w-6 h-6 text-[#06D6A0] dark:text-purple-400 transition-colors duration-300" />
            </div>
            <h3 className="font-semibold text-xl mb-2 dark:text-white transition-colors duration-300">
              Expert Resources
            </h3>
            <p className="text-gray-500 dark:text-gray-300 transition-colors duration-300">
              Templates, tools, and frameworks to help you make better business decisions.
            </p>
          </div>
          <div className="bg-white dark:bg-gray-900/50 dark:backdrop-blur-sm dark:border dark:border-gray-700/50 p-6 rounded-lg dark:shadow-xl dark:shadow-blue-500/10 hover-glow transition-all duration-500 hover:scale-105 group">
            <div className="w-12 h-12 bg-[#06D6A0]/10 dark:bg-gradient-to-br dark:from-blue-500/20 dark:to-cyan-500/20 dark:border dark:border-blue-500/30 rounded-lg flex items-center justify-center mb-4 group-hover:animate-pulse-glow transition-all duration-300">
              <Users className="w-6 h-6 text-[#06D6A0] dark:text-blue-400 transition-colors duration-300" />
            </div>
            <h3 className="font-semibold text-xl mb-2 dark:text-white transition-colors duration-300">
              Founder Community
            </h3>
            <p className="text-gray-500 dark:text-gray-300 transition-colors duration-300">
              Connect with other founders, share experiences, and learn from each other.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
