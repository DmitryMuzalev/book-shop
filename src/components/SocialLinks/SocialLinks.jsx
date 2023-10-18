import { clsx } from "clsx";
import { useSelector } from "react-redux";

function SocialLinksItem({ icon, url }) {
  return (
    <a href={url} className="social-links__item">
      {icon}
    </a>
  );
}

function SocialLinks({ classes = null }) {
  const socialLinksStyles = clsx("social-links", classes);

  const { socialNetworks } = useSelector((state) => state.contacts);

  return (
    <div className={socialLinksStyles}>
      {socialNetworks.map((link) => (
        <SocialLinksItem key={link.id} {...link} />
      ))}
    </div>
  );
}

export { SocialLinks };
