import { Footer } from "./components/Footer/Footer";
import { Header } from "./components/Header/Header";
//import { Blog } from "./pages/Blog/Blog";
//import { NotFoundPage } from "./pages/NotFoundPage/NotFoundPage";
//import { ArticleSingle } from './pages/ArticleSingle/ArticleSingle';
//import { ContactUs } from './pages/ContactUs/ContactUs';
//import { ProductSingle } from "./pages/ProductSingle/ProductSingle";
//import { OurStore } from './pages/OurStore/OurStore';
//import { About } from "./pages/About/About";
import { Home } from "./pages/Home/Home";

function App() {
  return (
    <>
      <Header />
      <Home />
      {/* <About /> */}
      {/* <OurStore /> */}
      {/* <ProductSingle /> */}
      {/*   <Blog /> */}
      {/* <ArticleSingle /> */}
      {/* <ContactUs /> */}
      {/* <NotFoundPage /> */}
      <Footer />
    </>
  );
}

export default App;
