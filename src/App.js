import Hero from "./features/hero";
import Navbar from "./features/layout/navbar";
import Details from "./features/details";
import Boost from "./features/boost";
import Footer from "./features/layout/footer";

const App = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <Details />
      <Boost />
      <Footer />
    </div>
  );
};

export default App;
