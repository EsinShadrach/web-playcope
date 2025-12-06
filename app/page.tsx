import { HomeHero } from "./_components/home-hero";
import { OurApps } from "./_components/our-apps";

import { PlaycopeVision } from "./_components/playcope-vision";

export default function Home() {
  return (
    <main className="flex flex-col w-full">
      {/* Hero Section / Top */}
      <HomeHero />

      {/* Our Apps Section */}
      <OurApps />

      {/* Playcope Vision Section */}
      <PlaycopeVision />
      {/* About Us Section */}
      {/* <section
        id="about-us"
        className="min-h-screen flex items-center justify-center bg-green-50"
      >
        <h2 className="text-3xl font-bold">About Us</h2>
      </section>  */}
    </main>
  );
}
