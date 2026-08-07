import { lazy, useEffect } from "react";
import Layout from "@/layout/Layout";
import HomePage from "@/pages/HomePage";
import LazySection from "@/components/ui/LazySection";
import { initAnalytics } from "@/services/firebase";

const AboutPage = lazy(() => import("@/pages/AboutPage"));
const ExperiencePage = lazy(() => import("@/pages/ExperiencePage"));
const SkillsPage = lazy(() => import("@/pages/SkillsPage"));
const ProjectsPage = lazy(() => import("@/pages/ProjectsPage"));
const ContactPage = lazy(() => import("@/pages/ContactPage"));

function App() {
  useEffect(() => {
    initAnalytics();
  }, []);

  return (
    <Layout>
      <HomePage />
      <LazySection id="about" minHeight="min-h-screen">
        <AboutPage />
      </LazySection>
      <LazySection id="experience" minHeight="min-h-[60vh]">
        <ExperiencePage />
      </LazySection>
      <LazySection id="skills" minHeight="min-h-[60vh]">
        <SkillsPage />
      </LazySection>
      <LazySection id="projects" minHeight="min-h-screen">
        <ProjectsPage />
      </LazySection>
      <LazySection id="contact" minHeight="min-h-[50vh]">
        <ContactPage />
      </LazySection>
    </Layout>
  );
}

export default App;
