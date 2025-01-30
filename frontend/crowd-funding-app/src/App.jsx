import Nav from "./components/Nav";
import Hero from "./sections/Hero";
import HowToBuy from "./sections/HowToBuy";
import WagasOffering from "./sections/WagasOffering";
function App() {
  return (
    <div className="min-h-screen">
      <Nav />
      <Hero />
      <HowToBuy />
      <WagasOffering />
    </div>
  );
}

export default App;
