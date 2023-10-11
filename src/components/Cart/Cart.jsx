import { clsx } from "clsx";
import { FaShoppingCart } from "react-icons/fa";

function CartBtn({ classes }) {
  const shoppingCartBtnClasses = clsx("shopping-cart-button", classes);
  return (
    <a href="#!" className={shoppingCartBtnClasses}>
      <FaShoppingCart />
      <div className="shopping-cart-button__count">1</div>
    </a>
  );
}

export { CartBtn };
