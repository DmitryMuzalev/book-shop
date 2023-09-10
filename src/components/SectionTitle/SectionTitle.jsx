import clsx from 'clsx';

function SectionTitle({ children, isLeft, isBlue }) {
  const titleStyles = clsx('section-title', isLeft && 'section-title_left');
  const lineStyles = clsx(
    'section-title__line',
    isBlue && 'section-title__line_b'
  );

  return (
    <div className={titleStyles}>
      <h2 className="section-title__text">{children}</h2>
      <span className={lineStyles}></span>
    </div>
  );
}
export { SectionTitle };
