import { clsx } from "clsx";

function Logo({ classes = null }) {
  const logoStyle = clsx("logo", classes);
  return (
    <a href="#!" className={logoStyle}>
      <img src="./images/logo.svg" alt="logo" />
    </a>
  );
}
export { Logo };
