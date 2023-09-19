import { motion } from "framer-motion";
import { FaAngleDown } from "react-icons/fa";

function NavigationMenu({ toggleDropMenu, isShowDropMenu }) {
  return (
    <motion.nav
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3 }}
      className="nav-menu header__nav-menu"
    >
      <a className="nav-menu__link" href="#!" data-active="true">
        Home
      </a>
      <a className="nav-menu__link" href="#!">
        About
      </a>
      <div className="dropdown">
        <div
          className="dropdown__toggle nav-menu__link"
          onClick={toggleDropMenu}
        >
          <span>Pages</span>
          <FaAngleDown />
        </div>
        {isShowDropMenu && (
          <nav className="dropdown-menu">
            <div className="dropdown-menu__column">
              <div className="dropdown-menu__title title title_small">
                pages
              </div>
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
    </motion.nav>
  );
}
export { NavigationMenu };
