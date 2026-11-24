"use client";

import { ArrowUp } from "lucide-react";
import { useEffect, useState } from "react";

export default function BackToTop({ label }: { label: string }) {
  const [pastTop, setPastTop] = useState(false);
  const [footerVisible, setFooterVisible] = useState(false);

  useEffect(() => {
    const update = () => setPastTop(window.scrollY >= window.innerHeight * 0.75);
    update();
    window.addEventListener("scroll", update, { passive: true });
    window.addEventListener("resize", update);

    const footer = document.querySelector(".site-footer");
    const observer = new IntersectionObserver(([entry]) => setFooterVisible(entry.isIntersecting));
    if (footer) observer.observe(footer);

    return () => {
      window.removeEventListener("scroll", update);
      window.removeEventListener("resize", update);
      observer.disconnect();
    };
  }, []);

  function returnToTop() {
    const { hash, pathname, search } = window.location;
    if (hash) window.history.replaceState(window.history.state, "", pathname + search);
    (document.getElementById("home") ?? document.getElementById("main-content"))?.focus({ preventScroll: true });
    window.scrollTo({ top: 0 });
  }

  return (
    <button type="button" className="icon-button back-to-top" hidden={!pastTop || footerVisible} aria-label={label} onClick={returnToTop}>
      <ArrowUp size={19} aria-hidden="true" />
    </button>
  );
}
