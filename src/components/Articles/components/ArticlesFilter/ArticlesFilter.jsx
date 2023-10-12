import { useState } from "react";
import { FaAngleDown } from "react-icons/fa";

function ArticlesFilter({ currentValue, options, onChangeCurrentValue }) {
  const [isActive, setIsActive] = useState(false);

  return (
    <div className="articles-filter">
      <div
        className="articles-filter__btn"
        onClick={() => setIsActive(!isActive)}
      >
        <span>{currentValue}</span>
        <FaAngleDown />
      </div>
      {isActive && (
        <div className="articles-filter__list">
          {options.map((option, i) => (
            <div
              key={i}
              className="articles-filter__item"
              onClick={() => {
                onChangeCurrentValue(option);
                setIsActive(false);
              }}
            >
              {option}
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
export { ArticlesFilter };
