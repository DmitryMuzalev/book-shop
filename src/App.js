import { Route, Routes } from "react-router-dom";

import { Layout } from "./components/Layout/Layout";
import { Home } from "./pages/Home/Home";
import { About } from "./pages/About/About";
import { Blog } from "./pages/Blog/Blog";
import { ArticleSingle } from "./pages/ArticleSingle/ArticleSingle";
import { OurStore } from "./pages/OurStore/OurStore";
import { ProductSingle } from "./pages/ProductSingle/ProductSingle";
import { NotFoundPage } from "./pages/NotFoundPage/NotFoundPage";
import { ContactUs } from "./pages/ContactUs/ContactUs";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="about-author" element={<About />} />
          <Route path="blog" element={<Blog />} />
          <Route path="blog/:title" element={<ArticleSingle />} />
          <Route path="our-store" element={<OurStore />} />
          <Route path="product/:title" element={<ProductSingle />} />
          <Route path="*" element={<NotFoundPage />} />
          <Route path="contact-us" element={<ContactUs />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
