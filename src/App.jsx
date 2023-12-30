import Navbar from "./Navbar";
import Home from "./Home";
import Section1 from "./Section1";
import Section2 from "./Section2";
import StoreItems from "./StoreItems";
import Article from "./Article";
import Movies from "../Movies";
import HelpSection from "./HelpSection";
import Footer from "./Footer";


const App = () => {
  return (
    <main >
      <Navbar/>
      <Home/>
      <Section1/>
      <Section2/>
      <StoreItems/>
      <Article/>
      <Movies/>
      <HelpSection/>
      <Footer/>
    </main>
  );
};
export default App;
