import { motion } from "framer-motion";
import { useState } from "react";
import { Dropdown } from "./Dropdown/Dropdown";

function NavigationMenu() {
  const [isShowDropMenu, setIsShowDropMenu] = useState(false);

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
      <Dropdown
        isActive={isShowDropMenu}
        onClick={() => setIsShowDropMenu(!isShowDropMenu)}
      />
      <a className="nav-menu__link" href="#!">
        Contact
      </a>
    </motion.nav>
  );
}

export { NavigationMenu };
