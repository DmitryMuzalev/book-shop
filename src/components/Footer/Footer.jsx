import { Logo } from "../Logo/Logo";
import { SocialLinks } from "../SocialLinks/SocialLinks";

import { FooterWidget } from "./components/FooterWidget/FooterWidget";
import { FooterContact } from "./components/FooterContact/FooterContact";
import { Copyright } from "./components/Copyright/Copyright";

function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer__wrap">
          <div className="footer__logo-wrap">
            <Logo />
            <SocialLinks classes={"social-links_contour"} />
          </div>

          <FooterWidget
            title="explore"
            linksPages={[
              { label: "home", url: "/" },
              { label: "about", url: "/about-author" },
              { label: "articles", url: "/blog" },
              { label: "our store", url: "/our-store" },
              { label: "contact us", url: "/contact-us" },
            ]}
          />

          <FooterWidget
            title="utility pages"
            linksPages={[
              { label: "style guide", url: "/404" },
              { label: "404 not found", url: "/404" },
            ]}
          />
          <FooterContact />
        </div>
        <Copyright />
      </div>
    </footer>
  );
}
export { Footer };
