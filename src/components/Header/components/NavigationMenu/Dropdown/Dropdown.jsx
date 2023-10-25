import { ToggleDropdownMenu } from "./components/ToggleDropdownMenu/ToggleDropdownMenu";
import { DropdownMenu } from "./components/DropdownMenu/DropdownMenu";
import { useSelector } from "react-redux";

function Dropdown() {
  const { isShowDropMenu } = useSelector((state) => state.app);

  return (
    <div className="dropdown">
      <ToggleDropdownMenu />
      {isShowDropMenu && <DropdownMenu />}
    </div>
  );
}

export { Dropdown };
