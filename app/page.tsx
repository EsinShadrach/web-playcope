import { HomeHero } from "./_components/home-hero";

export default function Home() {
  return (
    <main className="flex flex-col w-full">
      {/* Hero Section / Top */}
      <HomeHero />

      {/* Our Apps Section */}
      {/* <section
        id="our-apps"
        className="min-h-screen flex items-center justify-center bg-blue-50 mt-20"
      >
        <h2 className="text-3xl font-bold">Our Apps</h2>
      </section>

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
