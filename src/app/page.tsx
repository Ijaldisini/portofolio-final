import Navbar from "@/components/navbar";
import Hero from "@/sections/hero";
import About from "@/sections/about";

export default function Home() {
  return (
    <main className="relative min-h-screen overflow-hidden">
      {/* Efek Cahaya Blur di Background */}
      <div className="absolute top-[-10%] left-[-10%] h-[500px] w-[500px] rounded-full bg-green-300/10 blur-[120px] -z-10" />
      <div className="absolute bottom-[-10%] right-[-10%] h-[500px] w-[500px] rounded-full bg-green-300/10 blur-[120px] -z-10" />

      <Navbar />
      <div className="container mx-auto px-4">
        <Hero />
        <About />
      </div>
    </main>
  );
}
