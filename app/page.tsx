import { AboutUs } from "./_components/about-us";
import { Footer } from "./_components/footer";
import { FAQs } from "./_components/frequently-asked-questions";
import { HomeHero } from "./_components/home-hero";
import { OurApps } from "./_components/our-apps";
import { PlaycopeVision } from "./_components/playcope-vision";
import { Testimonials } from "./_components/testimonials";

export default function Home() {
  return (
    <main className="flex flex-col w-full">
      {/* Hero Section / Top */}
      <HomeHero />

      {/* Our Apps Section */}
      <OurApps />

      {/* Playcope Vision Section */}
      <PlaycopeVision />

      {/* Testimonials Section */}
      <Testimonials />

      {/* About Us Section */}
      <AboutUs />

      {/* FAQs Section */}
      <FAQs />

      {/* Intelligence Starts Here Section */}
      <Footer />
    </main>
  );
}
