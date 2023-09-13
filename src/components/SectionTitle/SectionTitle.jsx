import clsx from "clsx";

function SectionTitle({ children, isLeft, isBlue }) {
  const titleStyles = clsx(
    "section-title",
    isLeft && "section-title_left",
    isBlue && "section-title_b"
  );

  return <div className={titleStyles}>{children}</div>;
}
export { SectionTitle };
