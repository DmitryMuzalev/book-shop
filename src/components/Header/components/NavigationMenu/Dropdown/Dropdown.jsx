import { ToggleDropdownMenu } from "./components/ToggleDropdownMenu/ToggleDropdownMenu";
import { DropdownMenu } from "./components/DropdownMenu/DropdownMenu";
import { useDispatch, useSelector } from "react-redux";
import { useRef } from "react";
import { useClickOutside } from "../../../../../hooks/useClickOutside";
import { disableDropMenu } from "../../../../../store/slices/appSlice";
import { useMediaQuery } from "react-responsive";

function Dropdown() {
  const isTabletOrMobile = useMediaQuery({ query: "(max-width: 991px)" });
  const { isShowDropMenu } = useSelector((state) => state.app);
  const refDropdownMenu = useRef(null);
  const dispatch = useDispatch();

  useClickOutside(
    refDropdownMenu,
    () => (!isTabletOrMobile ? dispatch(disableDropMenu()) : null),
    isShowDropMenu
  );

  return (
    <div className="dropdown" ref={refDropdownMenu}>
      <ToggleDropdownMenu />
      {isShowDropMenu && <DropdownMenu />}
    </div>
  );
}

export { Dropdown };
