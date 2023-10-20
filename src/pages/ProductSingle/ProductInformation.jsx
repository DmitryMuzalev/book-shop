import { useState } from "react";

function ProductInformation({ additionalInfo, description }) {
  const productInfo = {
    "product description": description,
    "additonal info": additionalInfo,
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
