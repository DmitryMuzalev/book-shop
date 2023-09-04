import classes from './Heaer.module.scss';
import {
  FaFacebookF,
  FaTwitter,
  FaLinkedinIn,
  FaShoppingCart,
} from 'react-icons/fa';

function Header() {
  return (
    <header className={classes.header}>
      <div className={classes.header__logoWrap}>
        <a href="#!" className="logo">
          <img src="./images/logo.svg" alt="logo" />
        </a>
        <div className={classes.header__socialLinksWrap}>
          <a href="#!" className="socialLink socialLink_w">
            <FaFacebookF />
          </a>
          <a href="#!" className="socialLink socialLink_w">
            <FaTwitter />
          </a>
          <a href="#!" className="socialLink socialLink_w">
            <FaLinkedinIn />
          </a>
        </div>
      </div>
      <div className={classes.header__navbarWrap}>
        <nav>
          <a href="#!">Home</a>
          <a href="#!">Pages</a>
          <a href="#!">About</a>
          <a href="#!">Services</a>
          <a href="#!">Contact</a>
        </nav>
        <a href="#!" className="cartOpenLink">
          <FaShoppingCart />
        </a>
      </div>
    </header>
  );
}
export { Header };
