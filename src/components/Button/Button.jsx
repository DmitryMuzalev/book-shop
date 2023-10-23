import { clsx } from "clsx";
import { CustomLink } from "../CustomLink/CustomLink";

function Button({ classes, children, to }) {
  const buttonStyles = clsx("btn", classes);
  return (
    <CustomLink to={to} className={buttonStyles}>
      {children}
    </CustomLink>
  );
}
export { Button };
