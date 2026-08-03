import Layout from "@/layout/Layout";
import AboutPage from "@/pages/AboutPage";
import HomePage from "@/pages/HomePage";
import TimelinePage from "@/pages/TimelinePage";

function App() {
  return (
    <Layout>
      <HomePage />
      <AboutPage />
      <TimelinePage />
      {/* <ProjectsPage />
      <ContactPage /> */}
    </Layout>
  );
}

export default App;
