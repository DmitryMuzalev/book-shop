import { FaAngleDown } from 'react-icons/fa';

function NavigationMenu({ toggleDropMenu, isShowDropMenu }) {
  return (
    <nav className="nav-menu header__nav-menu">
      <a className="nav-menu__link" href="#!" data-active="true">
        Home
      </a>
      <a className="nav-menu__link" href="#!">
        About
      </a>
      <div className="dropdown">
        <div
          className="dropdown-toggle nav-menu__link"
          onClick={toggleDropMenu}
        >
          <p>Pages</p>
          <FaAngleDown />
        </div>
        {isShowDropMenu && (
          <nav className="dropdown-menu">
            <div className="dropdown-menu__column">
              <div className="dropdown-menu__title">pages</div>
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
              <div className="dropdown-menu__title">utility pages</div>
              <a href="#!" className="dropdown-menu__link">
                style guide
              </a>
              <a href="#!" className="dropdown-menu__link">
                404 Page
              </a>
              <a href="#!" className="dropdown-menu__link">
                password protected
              </a>
              <a href="#!" className="dropdown-menu__link">
                changelog
              </a>
            </div>
          </nav>
        )}
      </div>
      <a className="nav-menu__link" href="#!">
        Contact
      </a>
    </nav>
  );
}
export { NavigationMenu };