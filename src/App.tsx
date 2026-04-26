import { LoadingScreen } from '@/components/LoadingScreen';
import { Navbar } from '@/sections/Navbar';
import { Hero } from '@/sections/Hero';
import { ServiceOverview } from '@/sections/ServiceOverview';
import { DeliverySection } from '@/sections/DeliverySection';
import { BrandingSection } from '@/sections/BrandingSection';
import { EcommerceSection } from '@/sections/EcommerceSection';
import { StatsSection } from '@/sections/StatsSection';
import { CasesSection } from '@/sections/CasesSection';
import { ProcessSection } from '@/sections/ProcessSection';
import { TestimonialsSection } from '@/sections/TestimonialsSection';
import { FAQSection } from '@/sections/FAQSection';
import { ContactSection } from '@/sections/ContactSection';
import { CtaBanner } from '@/components/ShareComponents';
import { Footer } from '@/sections/Footer';
import { ScrollToTop, FloatingShare } from '@/components/ShareComponents';

function App() {
  return (
    <div className="min-h-screen">
      <LoadingScreen />
      <Navbar />
      <main>
        <Hero />
        <ServiceOverview />
        <DeliverySection />
        <BrandingSection />
        <EcommerceSection />
        <StatsSection />
        <CasesSection />
        <ProcessSection />
        <TestimonialsSection />
        <FAQSection />
        <ContactSection />
        <CtaBanner />
      </main>
      <Footer />
      <ScrollToTop />
      <FloatingShare />
    </div>
  );
}

export default App;
