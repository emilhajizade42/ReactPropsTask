import Navbar from './layouts/Navbar';
import Header from './components/Header';
import Footer from './layouts/Footer';
import Main from './layouts/Main';
import ProjectSection from './components/ProjectSection';
import AboutSection from './components/AboutSection';
import ContactSection from './components/ContactSection';
import LocationSection from './components/LocationSection';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Header />
      <Main>
        <ProjectSection />
        <AboutSection />
        <ContactSection />
        <LocationSection />
      </Main>
      <Footer />
    </div>
  );
}

export default App;
