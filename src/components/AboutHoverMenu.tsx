"use client";

import { useState } from "react";
import AboutFlyout from "./AboutFlyout";

export default function AboutHoverMenu() {
  const [open, setOpen] = useState(false);

  return (
    <div
      className="relative"
      onMouseEnter={() => setOpen(true)}
      onMouseLeave={() => setOpen(false)}
    >
      <a href="/about" className="font-semibold hover:text-sky-700">
        About
      </a>

      {open ? (
        <div className="absolute left-0 top-full pt-4 z-50">
          <AboutFlyout />
        </div>
      ) : null}
    </div>
  );
}
