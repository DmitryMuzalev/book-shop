import { PreviewArea } from "./PreviewArea/PreviewArea";
import { PreviewAuthorsBook } from "../../components/PreviewAuthorsBook/PreviewAuthorsBook";
import { AboutAuthor } from "./AboutAuthor/AboutAuthor";
import { Partners } from "../../components/Partners/Partners";
import { Order } from "./Order/Order";
import { Learn } from "./Learn/Learn";
import { Chapters } from "./Chapters/Chapters";
import { Testimonial } from "./Testimonial/Testimonial";
import { HomeBlog } from "./HomeBlog/HomeBlog";
import { Subscription } from "../../components/Subscription/Subscription";

function Home() {
  return (
    <>
      <PreviewArea />
      <PreviewAuthorsBook title={"the author’s book"} />
      <AboutAuthor />
      <Partners />
      <Order />
      <Learn />
      <Chapters />
      <Testimonial />
      <HomeBlog />
      <Subscription />
    </>
  );
}
export { Home };
