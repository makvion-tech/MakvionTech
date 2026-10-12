import Hero from "./components/Hero";
import SelectedWork from "./components/SelectedWork";
import ExperienceSkills from "./components/ExperienceSkills";
import AboutSection from "./components/AboutSection";
import ContactSection from "./components/ContactSection";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <main>
        <div className="hero-wrap">
          <Hero />
        </div>
        <SelectedWork />
        <ExperienceSkills />
        <AboutSection />
        <ContactSection />
      </main>
      <Footer />
    </>
  );
}

export default App;