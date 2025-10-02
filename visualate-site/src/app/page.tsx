import React from "react";

// Temporary placeholder page — minimal, no external UI libs
const CONFIG = {
  productName: "GLIXXR",
  brandName: "Visualate",
  contactEmail: "info@visualate.co.uk",
};

export default function ARDeviceLanding() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-gray-200 text-black flex items-center justify-center px-6">
    <div className="text-center max-w-xl">
      <img
        src="glixxr_side.png"
        alt={`${CONFIG.brandName} logo`}
        className="mx-auto mb-4 w-auto h-auto"
      />
      <p className="mt-3 text-lg text-gray-800">Coming soon</p>
      <p className="mt-2 text-gray-600">Headphones with displays. XR for everyone else.</p>

      <div className="mt-8 flex flex-col sm:flex-row gap-3 justify-center">
        <a
        href={`mailto:${CONFIG.contactEmail}?subject=${encodeURIComponent(`${CONFIG.productName} — Early access`)}`}
        className="inline-flex items-center justify-center rounded-xl px-5 py-3 bg-gray-500 text-white font-medium"
        >
        Email {CONFIG.contactEmail}
        </a>
        <a
        href="#"
        className="inline-flex items-center justify-center rounded-xl px-5 py-3 border border-white/15 bg-gray-300 text-white/90 hover:bg-white/5"
        >
        Press kit (soon)
        </a>
      </div>

      <div className="mt-10 text-xs text-gray-500">© {new Date().getFullYear()} {CONFIG.brandName}™, {CONFIG.productName}™. All rights reserved.</div>
    </div>
    </div>
  );
}
