import { useDispatch } from "react-redux";
import {
  disableDropMenu,
  disableNavMenu,
} from "../../../../../../../store/slices/appSlice";
import { CustomLink } from "../../../../../../CustomLink/CustomLink";
import { useMediaQuery } from "react-responsive";

const dropMenuState = [
  {
    title: "pages",
    links: [
      {
        label: "articles",
        url: "blog",
      },
      {
        label: "our store",
        url: "our-store",
      },
      {
        label: "product single",
        url: "404",
      },
    ],
  },
  {
    title: "utility pages",
    links: [
      {
        label: "style guide",
        url: "404",
      },
      {
        label: "404 page",
        url: "404",
      },
    ],
  },
];

function DropdownMenuColumn({ title, links }) {
  const isTabletOrMobile = useMediaQuery({ query: "(max-width: 991px)" });
  const dispatch = useDispatch();
  return (
    <div className="dropdown-menu__column">
      <div className="dropdown-menu__title title title_small">{title}</div>
      {links.map((link, index) => (
        <CustomLink
          to={link.url}
          className="dropdown-menu__link"
          key={index}
          onClick={() => {
            !isTabletOrMobile
              ? dispatch(disableDropMenu())
              : dispatch(disableNavMenu());
          }}
        >
          {link.label}
        </CustomLink>
      ))}
    </div>
  );
}

function DropdownMenu() {
  return (
    <nav className="dropdown-menu">
      {dropMenuState.map((column, index) => (
        <DropdownMenuColumn key={index} {...column} />
      ))}
    </nav>
  );
}

export { DropdownMenu };
