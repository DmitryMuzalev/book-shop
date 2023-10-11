import { FaAngleDown } from "react-icons/fa";

function Dropdown({ isActive, onClick }) {
  return (
    <div className="dropdown">
      <div
        className="dropdown__toggle nav-menu__link"
        onClick={() => onClick()}
      >
        <span>Pages</span>
        <FaAngleDown />
      </div>
      {isActive && (
        <nav className="dropdown-menu">
          <div className="dropdown-menu__column">
            <div className="dropdown-menu__title title title_small">pages</div>
            <a href="#!" className="dropdown-menu__link">
              articles
            </a>
            <a href="#!" className="dropdown-menu__link">
              our store
            </a>
            <a href="#!" className="dropdown-menu__link">
              product single
            </a>
          </div>
          <div className="dropdown-menu__column">
            <div className="dropdown-menu__title title">utility pages</div>
            <a href="#!" className="dropdown-menu__link">
              style guide
            </a>
            <a href="#!" className="dropdown-menu__link">
              404 Page
            </a>
          </div>
        </nav>
      )}
    </div>
  );
}

export { Dropdown };
