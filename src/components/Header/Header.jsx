import { useMediaQuery } from "react-responsive";
import { AnimatePresence } from "framer-motion";

import { Logo } from "../Logo/Logo";
import { SocialLinks } from "../SocialLinks/SocialLinks";
import { Button } from "../Button/Button";
import { CartBtn } from "../Cart/Cart";

import { MenuBtn } from "./components/MenuBtn/MenuBtn";
import { NavigationMenu } from "./components/NavigationMenu/NavigationMenu";
import { useSelector } from "react-redux";

function Header() {
  const isTabletOrMobile = useMediaQuery({ query: "(max-width: 991px)" });
  const { isShowNavMenu } = useSelector((state) => state.app);

  return (
    <header className="header">
      <div className="container">
        <div className="header__wrap">
          <div className="header__logo-wrap">
            <Logo classes="header__logo" />
            <SocialLinks classes={"social-links_full"} />
          </div>

          <div className="header__nav-menu-wrap">
            {!isTabletOrMobile && <NavigationMenu />}
            <CartBtn classes="header__shopping-cart-btn" />
            <Button classes="header__btn" to="our-store">
              order today
            </Button>
          </div>

          <div className="header__nav-menu-mobile">
            <AnimatePresence>
              {isTabletOrMobile && isShowNavMenu && <NavigationMenu />}
            </AnimatePresence>
            <MenuBtn />
          </div>
        </div>
      </div>
    </header>
  );
}

export { Header };
