import { clsx } from "clsx";

function Button({ classes, children }) {
  const buttonStyles = clsx("btn", classes);
  return (
    <a href="#!" className={buttonStyles}>
      {children}
    </a>
  );
}
export { Button };
