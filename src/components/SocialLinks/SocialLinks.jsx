import { clsx } from "clsx";
import { socialNetwork } from "../../data/socialNetwork";

function SocialLinksItem({ icon, url }) {
  return (
    <a href={url} className="social-links__item">
      {icon}
    </a>
  );
}

function SocialLinks({ classes = null }) {
  const socialLinksStyles = clsx("social-links", classes);
  return (
    <div className={socialLinksStyles}>
      {socialNetwork.map((link) => (
        <SocialLinksItem key={link.id} {...link} />
      ))}
    </div>
  );
}

export { SocialLinks };
