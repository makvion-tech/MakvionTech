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
        {/* One continuous composition: hero on the left, work + skills on the right */}
        <div className="stage">
          <Hero />
          <aside className="panel" aria-label="Work and skills">
            <SelectedWork />
            <ExperienceSkills />
          </aside>
        </div>
        <AboutSection />
        <ContactSection />
      </main>
      <Footer />
    </>
  );
}

export default App;