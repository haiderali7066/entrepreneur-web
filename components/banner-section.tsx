import { Card, CardContent } from "@/components/ui/card"
import { ArrowRight, BookOpen, Users } from "lucide-react"
import Link from "next/link"

export function BannerSection() {
  return (
    <section className="bg-[#06D6A0] py-16">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div>
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-black max-w-md">
              Learn to unlock learning that drives meaningful and rewarding change
            </h2>
          </div>
          <div className="grid sm:grid-cols-2 gap-4">
            <Link href="/resources" className="block group">
              <Card className="h-full border-none hover:shadow-lg transition-shadow">
                <CardContent className="p-6 flex flex-col items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-[#06D6A0]/10 flex items-center justify-center">
                    <BookOpen className="w-6 h-6 text-[#06D6A0]" />
                  </div>
                  <div className="space-y-2">
                    <h3 className="font-semibold group-hover:text-[#06D6A0] transition-colors">Learning Resources</h3>
                    <p className="text-sm text-gray-600">Access our comprehensive guides and tutorials</p>
                  </div>
                  <ArrowRight className="w-5 h-5 text-[#06D6A0] group-hover:translate-x-1 transition-transform" />
                </CardContent>
              </Card>
            </Link>
            <Link href="/community" className="block group">
              <Card className="h-full border-none hover:shadow-lg transition-shadow">
                <CardContent className="p-6 flex flex-col items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-[#06D6A0]/10 flex items-center justify-center">
                    <Users className="w-6 h-6 text-[#06D6A0]" />
                  </div>
                  <div className="space-y-2">
                    <h3 className="font-semibold group-hover:text-[#06D6A0] transition-colors">Join Community</h3>
                    <p className="text-sm text-gray-600">Connect with other founders and experts</p>
                  </div>
                  <ArrowRight className="w-5 h-5 text-[#06D6A0] group-hover:translate-x-1 transition-transform" />
                </CardContent>
              </Card>
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
