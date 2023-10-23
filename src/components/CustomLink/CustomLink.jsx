import { Link } from "react-router-dom";

function CustomLink({ to, children, ...props }) {
  return (
    <Link to={to} {...props}>
      {children}
    </Link>
  );
}
export { CustomLink };
