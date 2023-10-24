import { motion } from "framer-motion";
import { useState } from "react";
import { Dropdown } from "./Dropdown/Dropdown";
import { CustomLink } from "../../../CustomLink/CustomLink";

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
      <CustomLink className="nav-menu__link" to="/">
        Home
      </CustomLink>

      <CustomLink className="nav-menu__link" to="about-author">
        About
      </CustomLink>

      <Dropdown
        isActive={isShowDropMenu}
        onClick={() => setIsShowDropMenu(!isShowDropMenu)}
      />
      <CustomLink className="nav-menu__link" to="contact-us">
        Contact
      </CustomLink>
    </motion.nav>
  );
}

export { NavigationMenu };
