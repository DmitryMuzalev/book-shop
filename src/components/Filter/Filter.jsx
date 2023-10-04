import { useState } from "react";
import { FaAngleDown } from "react-icons/fa";

function Filter({ onChangeCurrentValue, currentValue, options }) {
  const [isActive, setIsActive] = useState(false);

  return (
    <div className="filter">
      <div className="filter__btn" onClick={() => setIsActive(!isActive)}>
        <span>{currentValue}</span>
        <FaAngleDown />
      </div>
      {isActive && (
        <div className="filter__list">
          {options.map((option, i) => (
            <div
              key={i}
              className="filter__item"
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
export { Filter };
