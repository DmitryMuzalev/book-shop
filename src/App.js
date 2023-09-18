import { Descriptor } from "./components/Descriptor/Descriptor";
import { AuthorsBook } from "./components/AuthorsBook/AuthorsBook";
import { AboutAuthor } from "./components/AboutAuthor/AboutAuthor";
import { Partners } from "./components/Partners/Partners";
import { Order } from "./components/Order/Order";
import { Learn } from "./components/Learn/Learn";
import { Chapter } from "./components/Chapter/Chapter";

function App() {
  return (
    <>
      <Descriptor />
      <AuthorsBook />
      <AboutAuthor />
      <Partners />
      <Order />
      <Learn />
      <Chapter />
    </>
  );
}

export default App;
