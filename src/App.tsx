import { lazy } from "react";
import Layout from "@/layout/Layout";
import HomePage from "@/pages/HomePage";
import LazySection from "@/components/ui/LazySection";

const AboutPage = lazy(() => import("@/pages/AboutPage"));
const TimelineSkillsPage = lazy(() => import("@/pages/TimelineSkillsPage"));
const ProjectsPage = lazy(() => import("@/pages/ProjectsPage"));
const ContactPage = lazy(() => import("@/pages/ContactPage"));

function App() {
  return (
    <Layout>
      <HomePage />
      <LazySection minHeight="min-h-screen">
        <AboutPage />
      </LazySection>
      <LazySection minHeight="min-h-screen">
        <TimelineSkillsPage />
      </LazySection>
      <LazySection minHeight="min-h-screen">
        <ProjectsPage />
      </LazySection>
      <LazySection minHeight="min-h-[50vh]">
        <ContactPage />
      </LazySection>
    </Layout>
  );
}

export default App;
