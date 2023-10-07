import { clsx } from 'clsx';
import { FaAngleDown } from 'react-icons/fa';

function AccordionItem({ currentItem, onClick, id, question, answer }) {
  const classesForAccordionItem = clsx(
    'accordion-item',
    currentItem === id && 'open'
  );

  return (
    <li className={classesForAccordionItem} onClick={() => onClick()}>
      <div className="accordion-item__question title title_big">
        {question}
        <span className="accordion-item__toggle">
          <FaAngleDown />
        </span>
      </div>
      <div className="accordion-item__answer-wrap">
        <p className="accordion-item__answer">{answer}</p>
      </div>
    </li>
  );
}
export { AccordionItem };
