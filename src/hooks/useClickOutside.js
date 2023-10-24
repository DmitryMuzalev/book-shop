import { useEffect } from "react";

export const useClickOutside = (ref, cb) => {
  const handlerClick = (e) => {
    if (ref.current && !ref.current.contains(e.target)) {
      cb();
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handlerClick);
    return () => document.removeEventListener("mousedown", handlerClick);
  });
};
