import Nav from "./components/Nav";
import Hero from "./sections/Hero";
import HowToBuy from "./sections/HowToBuy";
import WagasOffering from "./sections/WagasOffering";
import Footer from "./components/Footer";
import Roadmap from "./components/Roadmap";
import Faq from "./components/Faq";
import OurPartners from "./components/OurPartners";
function App() {
  return (
    <div className="min-h-screen">
      <Nav />
      <Hero />
      <OurPartners />
      <Roadmap />
      <HowToBuy />
      <WagasOffering />
      <Faq />
      <Footer />
    </div>
  );
}

export default App;
