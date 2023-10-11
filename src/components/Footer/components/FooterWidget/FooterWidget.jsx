function FooterWidget({ title, linksPages }) {
  return (
    <div className="footer-widget">
      <h3 className="footer__title title title_big">{title}</h3>
      <div className="footer-widget__links-wrap">
        {linksPages.map((page, i) => (
          <a href={page.url} className="footer-widget__link" key={i}>
            {page.label}
          </a>
        ))}
      </div>
    </div>
  );
}
export { FooterWidget };
