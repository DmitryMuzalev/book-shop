import { useDispatch, useSelector } from "react-redux";
import { toggleNavMenu } from "../../../../store/slices/appSlice";

function MenuBtn() {
  const { isShowNavMenu } = useSelector((state) => state.app);
  const dispatch = useDispatch();

  return (
    <div
      className="menu-button"
      onClick={() => dispatch(toggleNavMenu())}
      data-active={isShowNavMenu}
    >
      <span></span>
      <span></span>
      <span></span>
    </div>
  );
}
export { MenuBtn };
