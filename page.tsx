import { Button } from "@/components/ui/button"
import Image from "next/image"

export default function Page() {
  return (
    <div className="min-h-screen bg-white">
      <header className="flex items-center justify-between px-4 py-4 max-w-7xl mx-auto">
        <div className="flex items-center gap-1">
          <span className="text-[#00FF94] font-medium">Founders</span>
          <span className="font-medium">Insights</span>
        </div>
        <Button className="bg-[#00FF94] text-black hover:bg-[#00FF94]/90">Get Started</Button>
      </header>

      <main className="px-4 max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center py-12 lg:py-24">
          <div className="space-y-6">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight">
              Exclusive insights for ambitious founders
            </h1>
            <p className="text-gray-600 text-lg sm:text-xl max-w-lg">
              Access premium content, in-depth guides, and expert resources to grow your business.
            </p>
            <Button className="bg-[#00FF94] text-black hover:bg-[#00FF94]/90">Get Started</Button>
          </div>
          <div className="relative aspect-square lg:aspect-auto">
            <Image
              src="https://sjc.microlink.io/XnRwZ3sXh9KcjUl_zEchoq_X97gRVELvCIH3hROyM4lW3XMs3c--rfyyCMSeomn3WFzQNCV3Ro5x-Dhqdg1FUA.jpeg"
              alt="Founders Insights illustration"
              width={800}
              height={800}
              className="object-contain"
              priority
            />
          </div>
        </div>
      </main>
    </div>
  )
}
