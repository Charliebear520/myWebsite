import Header from "../components/Header";
import Hero from "../components/Hero";
import Services from "../components/Services";
import services from "../json/service.json";
import Footer from "../components/Footer";
import Projects from "../components/Projects";
import { useProjectFilter } from "../hooks/useProjectFilter";
import About from "../components/About";
import { motion } from "framer-motion";
import { useRef } from "react";
import { useOnScreen } from "../hooks/useOnScreen";

export default function Home() {
  const { projects, handleCategoryChange } = useProjectFilter();

  const fadeInVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: 0.5 } },
  };

  const heroRef = useRef();
  const aboutRef = useRef();
  const servicesRef = useRef();
  const projectsRef = useRef();

  const isHeroVisible = useOnScreen(heroRef);
  const isAboutVisible = useOnScreen(aboutRef);
  const isServicesVisible = useOnScreen(servicesRef);
  const isProjectsVisible = useOnScreen(projectsRef);

  return (
    <div>
      <Header />
      <motion.div
        id="Home"
        ref={heroRef}
        initial="hidden"
        animate={isHeroVisible ? "visible" : "hidden"}
        variants={fadeInVariants}
      >
        <Hero />
      </motion.div>
      <motion.div
        id="About"
        ref={aboutRef}
        initial="hidden"
        animate={isAboutVisible ? "visible" : "hidden"}
        variants={fadeInVariants}
      >
        <About />
      </motion.div>
      <motion.div
        ref={servicesRef}
        initial="hidden"
        animate={isServicesVisible ? "visible" : "hidden"}
        variants={fadeInVariants}
      >
        <Services services={services} />
      </motion.div>
      <motion.div
        id="Projects"
        ref={projectsRef}
        initial="hidden"
        animate={isProjectsVisible ? "visible" : "hidden"}
        variants={fadeInVariants}
      >
        <Projects
          projects={projects}
          handleCategoryChange={handleCategoryChange}
        />
      </motion.div>
      <Footer />
    </div>
  );
}
