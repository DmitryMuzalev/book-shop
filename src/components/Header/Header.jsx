import { clsx } from "clsx";
import {
  FaFacebookF,
  FaTwitter,
  FaLinkedinIn,
  FaShoppingCart,
} from "react-icons/fa";
import { useState } from "react";
import { useMediaQuery } from "react-responsive";
import { NavigationMenu } from "../NavigationMenu/NavigationMenu";
import { AnimatePresence } from "framer-motion";

function Header() {
  const stylesHeaderButton = clsx("btn", "header__btn");
  const isTabletOrMobile = useMediaQuery({ query: "(max-width: 991px)" });
  const [isShowDropMenu, setIsShowDropMenu] = useState(false);
  const [isShowNavMenu, setIsNavMenu] = useState(false);

  const toggleDropMenu = () => setIsShowDropMenu(!isShowDropMenu);
  const toggleNavMenu = () => setIsNavMenu(!isShowNavMenu);

  return (
    <header className="header">
      <div className="header__header-wrap">
        <div className="header__logo-wrap">
          <a href="#!" className="logo header__logo">
            <img src="./images/logo.svg" alt="logo" />
          </a>
          <div className="header__social-links-wrap social-links">
            <a href="#!" className="social-links__item social-links__item_w">
              <FaFacebookF />
            </a>
            <a href="#!" className="social-links__item social-links__item_w">
              <FaTwitter />
            </a>
            <a href="#!" className="social-links__item social-links__item_w">
              <FaLinkedinIn />
            </a>
          </div>
        </div>
        <div className="header__nav-menu-wrap">
          {!isTabletOrMobile && (
            <NavigationMenu
              toggleDropMenu={toggleDropMenu}
              isShowDropMenu={isShowDropMenu}
            />
          )}
          <a href="#!" className="shopping-cart-button">
            <FaShoppingCart />
            <div className="shopping-cart-button__count">1</div>
          </a>
          <button type="button" className={stylesHeaderButton}>
            order today
          </button>
          <div
            className="header__menu-button"
            onClick={toggleNavMenu}
            data-active={isShowNavMenu}
          >
            <span></span>
            <span></span>
            <span></span>
          </div>
        </div>

        <AnimatePresence>
          {isTabletOrMobile && isShowNavMenu && (
            <NavigationMenu
              toggleDropMenu={toggleDropMenu}
              isShowDropMenu={isShowDropMenu}
            />
          )}
        </AnimatePresence>
      </div>
    </header>
  );
}
export { Header };
