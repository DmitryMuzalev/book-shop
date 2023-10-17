import clsx from "clsx";

function SectionTitle({ children, classes }) {
  const titleStyles = clsx("section-title", classes);

  return <div className={titleStyles}>{children}</div>;
}
export { SectionTitle };
