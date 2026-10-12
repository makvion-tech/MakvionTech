import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import SelectedWork from "./components/SelectedWork";
import ServicesSection from "./components/ServicesSection";
import ProcessSection from "./components/ProcessSection";
import ExperienceSkills from "./components/ExperienceSkills";
import AboutSection from "./components/AboutSection";
import FaqSection from "./components/FaqSection";
import ContactSection from "./components/ContactSection";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <Navbar />
      <main>
        <div className="hero-wrap">
          <Hero />
        </div>
        <SelectedWork />
        <ServicesSection />
        <ProcessSection />
        <ExperienceSkills />
        <AboutSection />
        <FaqSection />
        <ContactSection />
      </main>
      <Footer />
    </>
  );
}

export default App;