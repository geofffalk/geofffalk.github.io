import React from "react";

// Temporary placeholder page — minimal, no external UI libs
const CONFIG = {
  brandName: "Visualate",
  contactEmail: "geoff@visualate.co.uk",
};

export default function ARDeviceLanding() {
  return (
    <div className="min-h-screen bg-black text-white flex items-center justify-center px-6">
    <div className="text-center max-w-xl">
      <img
        src="visualate.svg"
        alt={`${CONFIG.brandName} logo`}
        className="mx-auto mb-4 h-100 w-100"
      />
      <p className="mt-3 text-lg text-white/80">Visualate something amazing.</p>
      <p className="mt-2 text-white/60">XR for everyone else. Coming soon.</p>

      <div className="mt-8 flex flex-col sm:flex-row gap-3 justify-center">
        <a
        href={`mailto:${CONFIG.contactEmail}?subject=${encodeURIComponent(`${CONFIG.brandName} — Early access`)}`}
        className="inline-flex items-center justify-center rounded-xl px-5 py-3 bg-white text-black font-medium"
        >
        Email {CONFIG.contactEmail}
        </a>
        <a
        href="#"
        className="inline-flex items-center justify-center rounded-xl px-5 py-3 border border-white/15 text-white/90 hover:bg-white/5"
        >
        Press kit (soon)
        </a>
      </div>

      <div className="mt-10 text-xs text-white/50">© {new Date().getFullYear()} {CONFIG.brandName}. All rights reserved.</div>
    </div>
    </div>
  );
}
