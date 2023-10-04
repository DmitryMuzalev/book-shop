import { Footer } from "./components/Footer/Footer";
import { Header } from "./components/Header/Header";
import { Articles } from "./pages/Articles/Articles";
//import { ProductSingle } from "./pages/ProductSingle/ProductSingle";
//import { OurStore } from './pages/OurStore/OurStore';
//import { About } from './pages/About/About';
//import { Home } from './pages/Home/Home';

function App() {
  return (
    <>
      <Header />
      {/*<Home />*/}
      {/*<About />*/}
      {/* <OurStore /> */}
      {/* <ProductSingle /> */}
      <Articles />
      <Footer />
    </>
  );
}

export default App;
