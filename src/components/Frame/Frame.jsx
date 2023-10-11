import { clsx } from "clsx";

function Frame({ classes, image, label }) {
  const frameStyles = clsx("frame", classes);

  return (
    <div className={frameStyles}>
      <div className="frame__border">
        <img src={image} alt={label} />
      </div>
    </div>
  );
}
export { Frame };
