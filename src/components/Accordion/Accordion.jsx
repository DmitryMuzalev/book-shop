import { useState } from "react";
import { AccordionItem } from "./AccordionItem/AccordionItem";

function Accordion({ list }) {
  const [openItem, setOpenItem] = useState(null);
  const handlerAccordionItem = (id) => {
    id === openItem ? setOpenItem(null) : setOpenItem(id);
  };

  return (
    <ul className="accordion">
      {list.map((item) => (
        <AccordionItem
          onClick={() => handlerAccordionItem(item.id)}
          {...item}
          key={item.id}
        />
      ))}
    </ul>
  );
}
export { Accordion };
