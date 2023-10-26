import { Dropdown } from "./Dropdown/Dropdown";
import { CustomLink } from "../../../CustomLink/CustomLink";
import { useDispatch } from "react-redux";
import { disableNavMenu } from "../../../../store/slices/appSlice";
import { useMediaQuery } from "react-responsive";

function NavigationMenu() {
  const isTabletOrMobile = useMediaQuery({ query: "(max-width: 991px)" });
  const dispatch = useDispatch();
  const handlerClickLink = () =>
    isTabletOrMobile ? dispatch(disableNavMenu()) : null;

  return (
    <nav className="nav-menu header__nav-menu">
      <CustomLink className="nav-menu__link" to="/" onClick={handlerClickLink}>
        Home
      </CustomLink>

      <CustomLink
        className="nav-menu__link"
        to="about-author"
        onClick={handlerClickLink}
      >
        About
      </CustomLink>

      <Dropdown />

      <CustomLink
        className="nav-menu__link"
        to="contact-us"
        onClick={handlerClickLink}
      >
        Contact
      </CustomLink>
    </nav>
  );
}

export { NavigationMenu };
