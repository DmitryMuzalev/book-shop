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
              { label: "home", url: "#!" },
              { label: "about", url: "#!" },
              { label: "articles", url: "#!" },
              { label: "our store", url: "#!" },
              { label: "contact us", url: "#!" },
            ]}
          />

          <FooterWidget
            title="utility pages"
            linksPages={[
              { label: "style guide", url: "#!" },
              { label: "404 not found", url: "#!" },
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
