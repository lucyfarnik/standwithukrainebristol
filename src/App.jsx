import Navbar from './navbar/Navbar';
import Section from './Section';
import Home from './sections/Home';
import Protest from './sections/Protest';
import WhatsHappening from './sections/WhatsHappening';
import HowToHelp from './sections/HowToHelp';
import Contact from './sections/Contact';
import Footer from './Footer';

export default function App() {
  return (
    <div>
      <Navbar />
      <div className="invisible md:visible fixed top-16 left-0 right-0 border-b-4 border-b-flag-bottom z-50" />
      <div className="mt-0 md:mt-[calc(4rem+4px)]">
        <Section
          name="home"
          Component={Home}
          background="Ukraine1"
          arrowTo="whats-happening"
          arrowToWhite
        />
        <Section name="whats-happening" Component={WhatsHappening} borderB />
        <Section name="how-to-help" Component={HowToHelp} arrowTo="protest" />
        <Section name="protest" Component={Protest} background="Ukraine2" />
        <Section name="contact" Component={Contact} notFullscreen />
      </div>
      <Footer />
    </div>
  )
}
