import Navbar from "@/components/layout/Navbar";
import { HeroSection } from "@/components/hero";
import { AboutSection } from "@/components/about";
import { HighlightsSection } from "@/components/highlights";
import { SkillsSection } from "@/components/skills";
import { WorkflowSection } from "@/components/workflow";
import { ProjectsSection } from "@/components/projects";
import { ExperienceSection } from "@/components/experience";
import { ContactSection } from "@/components/contact";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <HeroSection />
        <AboutSection />
        <HighlightsSection />
        <SkillsSection />
        <WorkflowSection />
        <ProjectsSection />
        <ExperienceSection />
        <ContactSection />
      </main>
    </>
  );
}
