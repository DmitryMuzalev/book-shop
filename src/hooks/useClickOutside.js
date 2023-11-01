import { useEffect } from "react";

export const useClickOutside = (ref, cb, isOpenMenu) => {
  const handlerClick = (e) => {
    e.stopPropagation();
    if (ref.current && !ref.current.contains(e.target) && isOpenMenu) {
      cb();
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handlerClick);
    return () => document.removeEventListener("mousedown", handlerClick);
  });
};
