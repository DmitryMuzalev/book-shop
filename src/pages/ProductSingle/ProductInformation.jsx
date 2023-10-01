import { useState } from 'react';

function ProductInformation() {
  const productInfo = {
    'product description':
      'Nowadays English language section is asked in almost all competitive and recruitment examinations like SSC, Banking, CDS, State Level PSCs, etc. Otherwise creatively too, being proficient in English is necessary in this fast-modernizing world of disruptive innovation via the workplace.',
    'additonal info':
      ' This book has been designed to act as a comprehensive guide to learning English Grammar & Composition. The present book for English Grammar is creatively divided into Articles, Noun, Pronoun, Adverbs, Participle, Gerund, Preposition, Conjunctions disruptive innovation via the workplace.',
  };

  const tabs = Object.keys(productInfo);

  const [activeTab, setActiveTab] = useState(tabs[0]);

  const toggleActiveTab = (currentTab) => setActiveTab(currentTab);

  return (
    <div className="product-information">
      <div className="product-information__tabs">
        {tabs.map((tab, i) => (
          <button
            className="btn product-information__btn"
            data-active={activeTab === tab}
            key={i}
            onClick={() => toggleActiveTab(tab)}
          >
            {tab}
          </button>
        ))}
      </div>
      <div className="product-information__content paragraph">
        {productInfo[activeTab]}
      </div>
    </div>
  );
}
export { ProductInformation };
