import Header from "../components/Header";
import Hero from "../components/Hero";
import Services from "../components/Services";
import services from "../json/service.json";
import Footer from "../components/Footer";
import Projects from "../components/Projects";
import { useProjectFilter } from "../hooks/useProjectFilter";
import About from "../components/About";
export default function Home() {
  const { projects, handleCategoryChange } = useProjectFilter();
  return (
    <div>
      <Header />
      <Hero />
      <About />
      <Services services={services} />
      <Projects
        projects={projects}
        handleCategoryChange={handleCategoryChange}
      />
      <Footer />
    </div>
  );
}
