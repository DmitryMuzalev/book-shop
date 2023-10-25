import { FaAngleDown } from "react-icons/fa";
import { toggleDropMenu } from "../../../../../../../store/slices/appSlice";
import { useDispatch } from "react-redux";

function ToggleDropdownMenu() {
  const dispatch = useDispatch();
  return (
    <div
      className="dropdown__toggle nav-menu__link"
      onClick={() => dispatch(toggleDropMenu())}
    >
      <span>Pages</span>
      <FaAngleDown />
    </div>
  );
}

export { ToggleDropdownMenu };
