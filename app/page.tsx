import { ContactSection } from "./components/sections/contact";
import { FAQSection } from "./components/sections/faq";
import { FeaturesSection } from "./components/sections/features";
import { Footer } from "./components/sections/footer";
import { HeroSection } from "./components/sections/hero";
import { Navbar } from "./components/sections/navbar";
import { PricingSection } from "./components/sections/pricing";
import { TestimonialsSection } from "./components/sections/testimonials";
import { ChatSupport } from "./components/ui/chat-support";
import { DemoNoticePopup } from "./components/ui/demo-notice-popup";

export default function Home() {
  return (
    <main>
      <Navbar />
      <HeroSection />
      <FeaturesSection />
      <TestimonialsSection />
      <PricingSection />
      <FAQSection />
      <ContactSection />
      <Footer />
      <ChatSupport />
      <DemoNoticePopup />
    </main>
  );
}
