import { Link, useMatch } from "react-router-dom";

function CustomLink({ to, children, cb = null, ...props }) {
  const matches = useMatch({ path: to, end: to.length === 1 });
  return (
    <Link
      to={to}
      {...props}
      data-active={matches}
      onClick={() => {
        window.scrollTo(0, 0);
        cb && cb();
      }}
    >
      {children}
    </Link>
  );
}
export { CustomLink };
