import { Navigation } from "@/components/navigation";
import { Hero } from "@/components/hero";
import { StackMarquee } from "@/components/stack-marquee";
import { ProjectsCarousel } from "@/components/projects-carousel";
import { Philosophy } from "@/components/philosophy";
import { Contact } from "@/components/contact";
import { Footer } from "@/components/footer";
import { LoadingScreen } from "@/components/loading-screen";

export default function Home() {
  return (
    <>
      <LoadingScreen />
      <Navigation />
      <main>
        <Hero />
        <StackMarquee />
        <ProjectsCarousel />
        <Philosophy />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
