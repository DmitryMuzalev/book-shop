import { FaAngleDown } from "react-icons/fa";
import { useSelector } from "react-redux";
import { CustomLink } from "../../../../CustomLink/CustomLink";
import { useRef } from "react";
import { useClickOutside } from "../../../../../hooks/useClickOutside";

function Dropdown({ isActive, onClick, setIsShow }) {
  //!
  const { booksList } = useSelector((state) => state.books);
  const firstBook = booksList[0].title.split(" ").join("-");
  //!

  const refDropdownMenu = useRef(null);

  useClickOutside(refDropdownMenu, () => setIsShow(false));

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
        <nav className="dropdown-menu" ref={refDropdownMenu}>
          <div className="dropdown-menu__column">
            <div className="dropdown-menu__title title title_small">pages</div>

            <CustomLink
              to="blog"
              className="dropdown-menu__link"
              onClick={() => onClick()}
            >
              articles
            </CustomLink>

            <CustomLink
              to="our-store"
              className="dropdown-menu__link"
              onClick={() => onClick()}
            >
              our store
            </CustomLink>

            <CustomLink
              to={`product/${firstBook}`}
              state={{ id: booksList[0].id }}
              className="dropdown-menu__link"
              onClick={() => onClick()}
            >
              product single
            </CustomLink>
          </div>
          <div className="dropdown-menu__column">
            <div className="dropdown-menu__title title">utility pages</div>

            <CustomLink
              to="404"
              className="dropdown-menu__link"
              onClick={() => onClick()}
            >
              style guide
            </CustomLink>

            <CustomLink
              to="404"
              className="dropdown-menu__link"
              onClick={() => onClick()}
            >
              404 Page
            </CustomLink>
          </div>
        </nav>
      )}
    </div>
  );
}

export { Dropdown };
