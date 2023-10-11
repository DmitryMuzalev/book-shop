function MenuBtn({ isActive, onClick }) {
  return (
    <div
      className="menu-button"
      onClick={() => onClick()}
      data-active={isActive}
    >
      <span></span>
      <span></span>
      <span></span>
    </div>
  );
}
export { MenuBtn };
