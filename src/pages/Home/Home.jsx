import { AuthorsBook } from "./AuthorsBook/AuthorsBook";
import { AboutAuthor } from "./AboutAuthor/AboutAuthor";
import { Partners } from "./Partners/Partners";
import { Order } from "./Order/Order";
import { Learn } from "./Learn/Learn";
import { Chapter } from "./Chapter/Chapter";
import { PreviewArea } from "./PreviewArea/PreviewArea";

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
    </>
  );
}
export { Home };
