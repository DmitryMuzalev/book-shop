import { AuthorsBook } from "../../components/AuthorsBook/AuthorsBook";
import { AboutAuthor } from "./AboutAuthor/AboutAuthor";
import { Partners } from "../../components/Partners/Partners";
import { Order } from "./Order/Order";
import { Learn } from "./Learn/Learn";
import { Chapter } from "./Chapter/Chapter";
import { PreviewArea } from "./PreviewArea/PreviewArea";
import { Testimonial } from "./Testimonial/Testimonial";
import { HomeBlog } from "./HomeBlog/HomeBlog";
import { Subscription } from "../../components/Subscription/Subscription";

function Home() {
  return (
    <>
      <PreviewArea />
      <AuthorsBook />
      <AboutAuthor />
      <Partners />
      <Order />
      <Learn />
      <Chapter />
      <Testimonial />
      <HomeBlog />
      <Subscription />
    </>
  );
}
export { Home };
