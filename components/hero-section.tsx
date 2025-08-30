import { Button } from "@/components/ui/button";
import Image from "next/image";

export function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-white dark:bg-transparent">
      {/* Background gradient overlay */}
      <div className="absolute inset-0 dark:bg-gradient-to-br dark:from-blue-900/30 dark:via-purple-900/20 dark:to-cyan-900/30 dark:backdrop-blur-2xl animate-gradient-shift" />

      <div className="max-w-7xl mx-auto px-6 lg:px-12 relative">
        <div className="grid lg:grid-cols-2 gap-12 items-center py-16 lg:py-28">
          {/* LEFT CONTENT */}
          <div className="space-y-6 animate-fade-in text-center lg:text-left">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-tight tracking-tight">
              Unlock{" "}
              <span className="text-[#06D6A0] dark:text-cyan-300">
                Exclusive Insights
              </span>{" "}
              <br />
              for Ambitious{" "}
              <span className="text-[#FF6B35] dark:text-orange-300">
                Founders
              </span>
            </h1>
            <p className="text-gray-600 dark:text-gray-300 text-lg sm:text-xl max-w-xl mx-auto lg:mx-0">
              Access premium content, step-by-step guides, and expert resources
              to grow your business with confidence.
            </p>

            {/* CTA BUTTONS */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Button className="bg-[#06D6A0] text-white hover:bg-[#05b887] dark:bg-gradient-to-r dark:from-[#00FF94] dark:to-[#06D6A0] dark:hover:from-[#FF9F1C] dark:hover:to-[#FF6B35] shadow-md hover:scale-105 transition-all duration-300">
                Get Started
              </Button>
              <Button
                variant="outline"
                className="border-gray-300 text-gray-700 hover:border-[#06D6A0] hover:text-[#06D6A0] dark:border-gray-600 dark:text-gray-300 dark:hover:border-[#00FF94] dark:hover:text-[#00FF94] transition-all"
              >
                Learn More
              </Button>
            </div>
          </div>

          {/* RIGHT IMAGE */}
          <div className="relative flex justify-center animate-float">
            <div className="absolute -inset-6 bg-gradient-to-r from-cyan-400/30 to-blue-500/30 rounded-3xl blur-2xl animate-pulse-glow" />
            <Image
              src="https://picsum.photos/seed/fadelity-hero/800/800"
              alt="Founders Insights illustration"
              width={800}
              height={800}
              className="relative z-10 object-contain rounded-2xl shadow-xl hover:scale-105 transition-transform duration-500"
              priority
            />
          </div>
        </div>
      </div>
    </section>
  );
}
