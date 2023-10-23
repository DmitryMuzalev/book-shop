import { FaAngleDown } from "react-icons/fa";
import { useSelector } from "react-redux";
import { CustomLink } from "../../../../CustomLink/CustomLink";

function Dropdown({ isActive, onClick }) {
  //!
  const { booksList } = useSelector((state) => state.books);
  const firstBook = booksList[0].title.split(" ").join("-");
  //!

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
            <CustomLink to="blog" className="dropdown-menu__link">
              articles
            </CustomLink>
            <CustomLink to="our-store" className="dropdown-menu__link">
              our store
            </CustomLink>
            <CustomLink
              to={`product/${firstBook}`}
              state={{ id: booksList[0].id }}
              className="dropdown-menu__link"
            >
              product single
            </CustomLink>
          </div>
          <div className="dropdown-menu__column">
            <div className="dropdown-menu__title title">utility pages</div>
            <a href="#!" className="dropdown-menu__link">
              style guide
            </a>
            <CustomLink to="*" className="dropdown-menu__link">
              404 Page
            </CustomLink>
          </div>
        </nav>
      )}
    </div>
  );
}

export { Dropdown };
