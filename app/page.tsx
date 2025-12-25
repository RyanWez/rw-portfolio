import dynamic from "next/dynamic";
import { Navigation } from "@/components/navigation";
import { Hero } from "@/components/hero";
import { LoadingScreen } from "@/components/loading-screen";

// Lazy load below-the-fold components for better initial performance
const StackMarquee = dynamic(() => import("@/components/stack-marquee").then(mod => ({ default: mod.StackMarquee })), {
  ssr: true,
});

const ProjectsCarousel = dynamic(() => import("@/components/projects-carousel").then(mod => ({ default: mod.ProjectsCarousel })), {
  ssr: true,
});

const Philosophy = dynamic(() => import("@/components/philosophy").then(mod => ({ default: mod.Philosophy })), {
  ssr: true,
});

const Contact = dynamic(() => import("@/components/contact").then(mod => ({ default: mod.Contact })), {
  ssr: true,
});

const Footer = dynamic(() => import("@/components/footer").then(mod => ({ default: mod.Footer })), {
  ssr: true,
});

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
