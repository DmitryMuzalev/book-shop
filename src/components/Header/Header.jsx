import { clsx } from 'clsx';
import './Header.scss';
import {
  FaFacebookF,
  FaTwitter,
  FaLinkedinIn,
  FaShoppingCart,
  FaAngleDown,
} from 'react-icons/fa';

function Header() {
  const stylesHeaderButton = clsx('btn', 'header__btn');

  return (
    <header className={'header'}>
      <div className={'header__logo-wrap'}>
        <a href="#!" className="logo">
          <img src="./images/logo.svg" alt="logo" />
        </a>
        <div className={'header__social-links-wrap'}>
          <a href="#!" className="social-link social-link_w">
            <FaFacebookF />
          </a>
          <a href="#!" className="social-link social-link_w">
            <FaTwitter />
          </a>
          <a href="#!" className="social-link social-link_w">
            <FaLinkedinIn />
          </a>
        </div>
      </div>
      <div className={'header__nav-menu-wrap'}>
        <nav className="nav-menu">
          <a className="nav-menu__link" href="#!" data-active="true">
            Home
          </a>
          <a className="nav-menu__link" href="#!">
            About
          </a>
          <div className="dropdown-toggle nav-menu__link">
            <p>Pages</p>
            <FaAngleDown />
          </div>

          <a className="nav-menu__link" href="#!">
            Services
          </a>
          <a className="nav-menu__link" href="#!">
            Contact
          </a>
        </nav>
        <a href="#!" className="shopping-cart-button">
          <FaShoppingCart />
          <div className="shopping-cart-button__count">0</div>
        </a>
        <button type="button" className={stylesHeaderButton}>
          order today
        </button>
      </div>
    </header>
  );
}
export { Header };
