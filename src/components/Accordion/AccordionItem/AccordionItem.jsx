function AccordionItem({ onClick, question, answer }) {
  return (
    <li className="accordion-item" onClick={() => onClick()}>
      <div className="accordion-item__question title title_big">{question}</div>
      <div className="accordion-item__answer-wrap">
        <p className="accordion-item__answer">{answer}</p>
      </div>
    </li>
  );
}
export { AccordionItem };
