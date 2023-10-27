import { clsx } from "clsx";
import { Link } from "react-router-dom";

function Logo({ classes = null }) {
  const logoStyle = clsx("logo", classes);
  return (
    <Link to="/" className={logoStyle}>
      <img src="/images/logo.svg" alt="logo" />
    </Link>
  );
}
export { Logo };
