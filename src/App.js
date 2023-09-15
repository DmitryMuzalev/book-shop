import { Descriptor } from "./components/Descriptor/Descriptor";
import { AuthorsBook } from "./components/AuthorsBook/AuthorsBook";
import { AboutAuthor } from "./components/AboutAuthor/AboutAuthor";
import { Partners } from "./components/Partners/Partners";
import { Order } from "./components/Order/Order";

function App() {
  return (
    <>
      <Descriptor />
      <AuthorsBook />
      <AboutAuthor />
      <Partners />
      <Order />
    </>
  );
}

export default App;
