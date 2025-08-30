import { BlogSection } from "@/components/blog-section"
import { FeatureSection } from "@/components/feature-section"
// import { FeaturedArticles } from "@/components/featured-articles"
import { HeroSection } from "@/components/hero-section"
import { IdeasSection } from "@/components/ideas-section"
import { TrendingSection } from "@/components/trending-section"
import { BannerSection } from "@/components/banner-section"
import { CaseStudiesSection } from "@/components/case-studies-section"
import { NewsletterSection } from "@/components/newsletter-section"

export default function Page() {
  return (
    <>
      <HeroSection />
      <FeatureSection />
      <BlogSection />
      <IdeasSection />
      <TrendingSection />
      <BannerSection />
      <CaseStudiesSection />
      <NewsletterSection />
      {/* <FeaturedArticles /> */}
    </>
  )
}
