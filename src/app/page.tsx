import AnnouncementBar from '@/components/layout/announcement-bar';
import CTASection from '@/components/layout/cta-section';
import { Navigation, Footer } from '@/components/ui';
import StatsSection from '@/features/home/components/stats-section';
import SolutionsSection from '@/features/home/components/solutions-section';
import CommitmentSection from '@/features/home/components/commitment-section';
import FAQSection from '@/features/home/components/faq-section';
import TestimonialCarousel from '@/features/home/components/testimonial-carousel';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Lemonstalk - Empowering Enterprises with AI-Driven Technology Solutions',
};

export default function HomePage() {
  return (
    <div className="antialiased bg-body text-body font-body">
        {/* <AnnouncementBar /> */}
      <Navigation
        variant="hero"
        backgroundImage="/images/header-bg-waves.png"
        hero={{
          title: "Empowering Enterprises with AI-Driven Solutions",
          subtitle: "Transform your business with intelligent, scalable, and secure AI-powered technology solutions. We partner with organizations to modernize operations, enhance efficiency, and accelerate growth in an increasingly digital world.",
          ctaText: "Explore our solutions",
          ctaLink: "/#solutions"
        }}
      />
      <main>
        <StatsSection />
        <SolutionsSection />
        <CommitmentSection />
        <FAQSection />
        <TestimonialCarousel />
      </main>
      <CTASection />
      <Footer
        variant="detailed"
        backgroundImage="/images/footer-waves-left-bottom.png"
        companyName="Lemonstalk"
      />
    </div>
  );
}
