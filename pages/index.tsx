// pages/index.tsx
import Layout from '../components/Layout';
import HeroSection from '../components/HeroSection';
import HomeVideoSection from '../components/HomeVideoSection';
import HighlightsSection from '../components/HighlightsSection';
import WhyChooseUsSection from '../components/WhyChooseUsSection';
import ServicesPreviewSection from '../components/ServicesPreviewSection';
import WorkshopPreviewSection from '../components/WorkshopPreviewSection';
import AboutUsPreviewSection from '../components/AboutUsPreviewSection';
import ContactPreviewSection from '../components/ContactPreviewSection';
import TestimonialsSection from '../components/TestimonialsSection';
import StickyContactButtons from '../components/StickyContactButtons';
import CompanyStatsSection from '../components/CompanyStatsSection';
// import GallerySection from '../components/GallerySection';

export default function Home() {
  return (
    <Layout title="Home | Srikrishna Motive">
      <StickyContactButtons />
      <HeroSection />
      <HomeVideoSection />
      <HighlightsSection />
      <WhyChooseUsSection />
      {/* <GallerySection /> */}
      <ServicesPreviewSection />
      <CompanyStatsSection />
      <WorkshopPreviewSection />
      <AboutUsPreviewSection />
      <ContactPreviewSection />
      <TestimonialsSection />
    </Layout>
  );
}