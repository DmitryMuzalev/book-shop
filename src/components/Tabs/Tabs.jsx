import { useState } from 'react';

function Tabs() {
  const obj = {
    productDescription:
      'Nowadays English language section is asked in almost all competitive and recruitment examinations like SSC, Banking, CDS, State Level PSCs, etc. Otherwise creatively too, being proficient in English is necessary in this fast-modernizing world of disruptive innovation via the workplace. ',
    additonalInfo:
      'This book has been designed to act as a comprehensive guide to learning English Grammar & Composition. The present book for English Grammar is creatively divided into Articles, Noun, Pronoun, Adverbs, Participle, Gerund, Preposition, Conjunctions disruptive innovation via the workplace.',
  };
  const tabs = Object.keys(obj);
  const [activeTab, setActiveTab] = useState(tabs[0]);
  const onChangeActiveTab = (tabLabel) => setActiveTab(tabLabel);

  return tabs.length ? (
    <div className="tabs">
      {tabs.map((tab, i) => (
        <a href="#!" key={i} onClick={onChangeActiveTab(tab)}>
          {tab}
        </a>
      ))}
    </div>
  ) : null;
}
export { Tabs };
