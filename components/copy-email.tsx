"use client";

import { useRef, useState } from "react";

export function CopyEmail({ email }: { email: string }) {
  const [label, setLabel] = useState("Copy email");
  const linkRef = useRef<HTMLAnchorElement>(null);
  const timer = useRef<number | undefined>(undefined);

  const flash = (text: string) => {
    setLabel(text);
    window.clearTimeout(timer.current);
    timer.current = window.setTimeout(() => setLabel("Copy email"), 1800);
  };

  const selectAddress = () => {
    const el = linkRef.current;
    if (!el) return;
    const range = document.createRange();
    range.selectNodeContents(el);
    const sel = window.getSelection();
    sel?.removeAllRanges();
    sel?.addRange(range);
    flash("Selected, press Ctrl/Cmd+C");
  };

  const copy = async () => {
    try {
      await navigator.clipboard.writeText(email);
      flash("Copied");
    } catch {
      selectAddress();
    }
  };

  return (
    <div className="email-row">
      <a ref={linkRef} className="email" href={`mailto:${email}`}>
        {email}
      </a>
      <button className="copy" type="button" onClick={copy}>
        {label}
      </button>
      <span className="sr" aria-live="polite">
        {label === "Copy email" ? "" : label}
      </span>
    </div>
  );
}
