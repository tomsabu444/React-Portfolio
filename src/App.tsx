import Layout from "@/layout/Layout";
import AboutPage from "@/pages/AboutPage";
import HomePage from "@/pages/HomePage";
import TimelineSkillsPage from "@/pages/TimelineSkillsPage";

function App() {
  return (
    <Layout>
      <HomePage />
      <AboutPage />
      <TimelineSkillsPage />
      {/* <ProjectsPage />
      <ContactPage /> */}
    </Layout>
  );
}

export default App;
