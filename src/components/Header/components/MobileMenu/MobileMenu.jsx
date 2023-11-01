import { useDispatch, useSelector } from "react-redux";
import { NavigationMenu } from "../NavigationMenu/NavigationMenu";
import { MenuBtn } from "../MenuBtn/MenuBtn";
import { useRef } from "react";
import { useClickOutside } from "../../../../hooks/useClickOutside";
import { disableNavMenu } from "../../../../store/slices/appSlice";

function MobileMenu({ isTabletOrMobile }) {
  const { isShowNavMenu } = useSelector((state) => state.app);
  const dispatch = useDispatch();

  const refMobileMenu = useRef(null);
  useClickOutside(
    refMobileMenu,
    () => (isTabletOrMobile ? dispatch(disableNavMenu()) : null),
    isShowNavMenu
  );
  return (
    <div
      className="nav-menu-mobile header__nav-menu-mobile"
      ref={refMobileMenu}
    >
      {isTabletOrMobile && isShowNavMenu && <NavigationMenu />}
      <MenuBtn />
    </div>
  );
}
export { MobileMenu };
