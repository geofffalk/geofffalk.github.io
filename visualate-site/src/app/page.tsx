"use client";

import { useMemo, useState } from "react";
import { motion } from "framer-motion";
import { Mail, Instagram, Linkedin, Youtube, Twitter, ChevronRight, CheckCircle2, Play } from "lucide-react";

// --- Quick Config ---
const CONFIG = {
  brandName: "Aurora AR",
  tagline: "See beyond the screen.",
  contactEmail: "hello@auroraar.dev",
  social: {
    twitter: "https://x.com/yourbrand",
    instagram: "https://instagram.com/yourbrand",
    linkedin: "https://linkedin.com/company/yourbrand",
    youtube: "https://youtube.com/@yourbrand",
  },
  theme: {
    gradient: "from-indigo-500 via-violet-500 to-fuchsia-500",
  },
};

function toMailto({ to, subject, body }: { to: string; subject: string; body: string }) {
  const params = new URLSearchParams({ subject, body });
  return `mailto:${to}?${params.toString()}`;
}

const ProductMock = () => (
  <svg viewBox="0 0 800 480" role="img" aria-label="Aurora AR device mockup" className="w-full h-auto">
    <defs>
      <linearGradient id="g" x1="0" x2="1">
        <stop offset="0%" stopColor="#a78bfa" />
        <stop offset="100%" stopColor="#f472b6" />
      </linearGradient>
    </defs>
    <rect x="0" y="0" width="800" height="480" rx="32" fill="#0b0b12" />
    <g transform="translate(80,120)">
      <rect x="0" y="0" width="640" height="240" rx="24" fill="#141422" stroke="url(#g)" strokeWidth="2" />
      <rect x="40" y="40" width="200" height="160" rx="20" fill="#0f0f1a" stroke="#2a2a46" />
      <rect x="240" y="40" width="200" height="160" rx="20" fill="#0f0f1a" stroke="#2a2a46" />
      <rect x="480" y="60" width="120" height="120" rx="60" fill="url(#g)" />
      <circle cx="540" cy="120" r="36" fill="#111827" />
    </g>
    <text x="50%" y="440" textAnchor="middle" fill="#e5e7eb" fontFamily="ui-sans-serif, system-ui" fontSize="20">
      Compact mixed‑reality optics • sub‑10ms pipeline • all‑day comfort
    </text>
  </svg>
);

const Section: React.FC<React.PropsWithChildren<{ id?: string; className?: string }>> = ({ id, className, children }) => (
  <section id={id} className={`max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 ${className ?? ""}`}>{children}</section>
);

export default function Page() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const mailtoHref = useMemo(() => {
    const subject = `Inquiry about ${CONFIG.brandName}`;
    const body = [
      name && `Name: ${name}`,
      email && `Email: ${email}`,
      message || "(Write your message here)",
    ]
      .filter(Boolean)
      .join("\n");
    return toMailto({ to: CONFIG.contactEmail, subject, body });
  }, [name, email, message]);

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Header */}
      <header className="sticky top-0 z-50 backdrop-blur supports-[backdrop-filter]:bg-black/50 bg-black/30 border-b border-white/10">
        <Section className="flex items-center justify-between py-4">
          <div className="flex items-center gap-3">
            <div className="h-8 w-8 rounded-xl bg-gradient-to-br from-indigo-400 to-fuchsia-500" />
            <span className="font-semibold tracking-tight">{CONFIG.brandName}</span>
            <span className="ml-2 text-xs px-2 py-1 rounded-md border border-white/10 bg-white/10">alpha</span>
          </div>
          <nav className="hidden md:flex items-center gap-6 text-sm text-white/80">
            <a href="#features" className="hover:text-white">Features</a>
            <a href="#demo" className="hover:text-white">Demo</a>
            <a href="#specs" className="hover:text-white">Specs</a>
            <a href="#contact" className="hover:text-white">Contact</a>
            <div className="flex items-center gap-3">
              <a aria-label="Twitter/X" href={CONFIG.social.twitter} target="_blank" rel="noreferrer" className="hover:opacity-80"><Twitter className="h-4 w-4"/></a>
              <a aria-label="Instagram" href={CONFIG.social.instagram} target="_blank" rel="noreferrer" className="hover:opacity-80"><Instagram className="h-4 w-4"/></a>
              <a aria-label="LinkedIn" href={CONFIG.social.linkedin} target="_blank" rel="noreferrer" className="hover:opacity-80"><Linkedin className="h-4 w-4"/></a>
              <a aria-label="YouTube" href={CONFIG.social.youtube} target="_blank" rel="noreferrer" className="hover:opacity-80"><Youtube className="h-4 w-4"/></a>
            </div>
          </nav>
        </Section>
      </header>

      {/* Hero */}
      <Section className="pt-12 pb-20">
        <div className="grid lg:grid-cols-2 gap-10 items-center">
          <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight leading-[1.05]">
              An innovative new <span className={`bg-clip-text text-transparent bg-gradient-to-r ${CONFIG.theme.gradient}`}>AR device</span>
            </h1>
            <p className="mt-5 text-white/80 text-lg max-w-xl">{CONFIG.tagline} Our compact optics and low‑latency pipeline blend the digital and physical with startling clarity.</p>
            <div className="mt-8 flex flex-wrap gap-3">
              <a href="#contact" className="inline-flex items-center rounded-2xl px-6 py-3 bg-white text-black font-medium">Request early access <ChevronRight className="ml-1 h-4 w-4"/></a>
              <a href="#demo" className="inline-flex items-center rounded-2xl px-6 py-3 border border-white/10 bg-white/10 hover:bg-white/20"><Play className="mr-2 h-4 w-4"/> Watch teaser</a>
            </div>
            <div className="mt-6 flex items-center gap-4 text-sm text-white/60">
              <div className="flex items-center gap-1"><CheckCircle2 className="h-4 w-4"/> Developer SDK Q4</div>
              <div className="flex items-center gap-1"><CheckCircle2 className="h-4 w-4"/> Open lens spec</div>
              <div className="flex items-center gap-1"><CheckCircle2 className="h-4 w-4"/> CE/FCC pending</div>
            </div>
          </motion.div>

          <motion.div initial={{ opacity: 0, scale: 0.96 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.6, delay: 0.05 }} className="relative">
            <div className="absolute -inset-2 bg-gradient-to-tr from-fuchsia-500/20 via-indigo-500/20 to-cyan-500/20 blur-2xl rounded-[2rem]" />
            <div className="relative rounded-[2rem] overflow-hidden bg-white/5 border border-white/10 shadow-2xl">
              <ProductMock />
            </div>
          </motion.div>
        </div>
      </Section>

      {/* Features */}
      <Section id="features" className="py-16">
        <div className="max-w-3xl mb-10">
          <h2 className="text-3xl md:text-4xl font-semibold tracking-tight">Why it stands out</h2>
          <p className="mt-3 text-white/70">Designed for creators, field teams, and curious minds. Built with a developer‑first approach.</p>
        </div>
        <div className="grid md:grid-cols-3 gap-6">
          {[
            { title: "Featherweight comfort", text: "Sub‑150g frame with balanced center of mass and soft‑touch pads.", kpi: "< 150g" },
            { title: "Crisp optics", text: "Custom AR optics with wide sweet‑spot and excellent MTF across FOV.", kpi: "+70° FOV" },
            { title: "Ultra‑low latency", text: "Sensor‑to‑photon pipeline optimized for sub‑10ms motion.", kpi: "< 10ms" },
            { title: "Snap‑on modules", text: "Modular camera & compute add‑ons for your use case.", kpi: "Mag‑dock" },
            { title: "Open by design", text: "SDK, CAD, and API access for rapid integration.", kpi: "SDK" },
            { title: "All‑day battery", text: "Smart power scheduling and cool‑running electronics.", kpi: "> 8h" },
          ].map((f, i) => (
            <motion.div key={f.title} initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.4, delay: i * 0.05 }}>
              <div className="h-full rounded-2xl bg-white/5 border border-white/10 p-5">
                <span className="inline-block text-xs px-2 py-1 rounded-md bg-white/10 border border-white/10">{f.kpi}</span>
                <div className="mt-2 text-xl">{f.title}</div>
                <p className="text-white/70 mt-1">{f.text}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </Section>

      {/* Demo */}
      <Section id="demo" className="py-16">
        <div className="grid lg:grid-cols-2 gap-10 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-semibold tracking-tight">A quick look</h2>
            <p className="mt-3 text-white/70 max-w-xl">Drop in a short teaser or prototype capture here. Keep it under 45 seconds and subtitles‑ready.</p>
            <ul className="mt-6 space-y-3 text-white/70">
              <li className="flex gap-2"><CheckCircle2 className="h-5 w-5 mt-0.5"/> Spatial anchors with drift under 3 mm</li>
              <li className="flex gap-2"><CheckCircle2 className="h-5 w-5 mt-0.5"/> Depth‑aware occlusion & hand tracking</li>
              <li className="flex gap-2"><CheckCircle2 className="h-5 w-5 mt-0.5"/> Works with iOS, Android, WebRTC</li>
            </ul>
          </div>
          <div>
            <div className="aspect-video rounded-2xl overflow-hidden bg-white/5 border border-white/10 flex items-center justify-center">
              {/* Replace with your iframe / video tag */}
              <button className="flex items-center gap-3 px-4 py-2 rounded-full bg-white/10 border border-white/10">
                <Play className="h-5 w-5"/> Play teaser
              </button>
            </div>
            <p className="text-xs text-white/50 mt-2">Tip: Host on YouTube/Vimeo as unlisted and embed the iframe here.</p>
          </div>
        </div>
      </Section>

      {/* Specs */}
      <Section id="specs" className="py-16">
        <div className="max-w-3xl mb-8">
          <h2 className="text-3xl md:text-4xl font-semibold tracking-tight">Key specs at a glance</h2>
          <p className="mt-3 text-white/70">Swap in your actual numbers when ready.</p>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {[
            ["Resolution", "2× 1920 × 1920"],
            ["Refresh rate", "90 Hz"],
            ["Field of view", "~72° diagonal"],
            ["Weight", "< 150 g"],
            ["Connectivity", "USB‑C, BT 5.3, Wi‑Fi 6"],
            ["Tracking", "Inside‑out 6DoF"],
            ["Battery", "> 8 hours"],
            ["SDK", "Unity/Unreal/Native"],
          ].map(([k, v]) => (
            <div key={k as string} className="rounded-2xl border border-white/10 bg-white/5 p-4">
              <div className="text-xs uppercase tracking-wide text-white/60">{k}</div>
              <div className="text-lg mt-1">{v}</div>
            </div>
          ))}
        </div>
      </Section>

      {/* Contact */}å
      <Section id="contact" className="py-20">
        <div className="grid md:grid-cols-2 gap-10 items-start">
          <div>
            <h2 className="text-3xl md:text-4xl font-semibold tracking-tight">Contact us</h2>
            <p className="mt-3 text-white/70 max-w-prose">We'd love to hear from early partners, creators, and investors. Drop us a line and we'll get back within 2 business days.</p>

            <div className="mt-6 flex items-center gap-3">
              <a href={mailtoHref} className="inline-flex items-center rounded-xl px-4 py-2 bg-white text-black">
                <Mail className="mr-2 h-4 w-4"/> Email {CONFIG.contactEmail}
              </a>
              <p className="text-white/60 text-sm">or use the form →</p>
            </div>

            <div className="mt-8 flex gap-4 text-white/80">
              <a aria-label="Twitter/X" href={CONFIG.social.twitter} target="_blank" rel="noreferrer" className="hover:text-white inline-flex items-center gap-2">
                <Twitter className="h-5 w-5"/> Twitter/X
              </a>
              <a aria-label="Instagram" href={CONFIG.social.instagram} target="_blank" rel="noreferrer" className="hover:text-white inline-flex items-center gap-2">
                <Instagram className="h-5 w-5"/> Instagram
              </a>
              <a aria-label="LinkedIn" href={CONFIG.social.linkedin} target="_blank" rel="noreferrer" className="hover:text-white inline-flex items-center gap-2">
                <Linkedin className="h-5 w-5"/> LinkedIn
              </a>
              <a aria-label="YouTube" href={CONFIG.social.youtube} target="_blank" rel="noreferrer" className="hover:text-white inline-flex items-center gap-2">
                <Youtube className="h-5 w-5"/> YouTube
              </a>
            </div>
          </div>

          <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
            <div className="text-xl font-semibold mb-4">Send a message</div>
            <form
              onSubmit={(e) => {
                e.preventDefault();
                window.location.href = mailtoHref; // opens mail client with prefilled message
              }}
              className="space-y-4"
            >
              <div>
                <label htmlFor="name" className="block text-sm text-white/70">Name</label>
                <input id="name" value={name} onChange={(e) => setName(e.target.value)} placeholder="Ada Lovelace" className="mt-1 w-full rounded-xl bg-white/5 border border-white/10 px-3 py-2 text-white placeholder:text-white/40" />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm text-white/70">Email</label>
                <input id="email" type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="you@example.com" className="mt-1 w-full rounded-xl bg-white/5 border border-white/10 px-3 py-2 text-white placeholder:text-white/40" />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm text-white/70">Message</label>
                <textarea id="message" value={message} onChange={(e) => setMessage(e.target.value)} placeholder="Tell us about your use case…" rows={5} className="mt-1 w-full rounded-xl bg-white/5 border border-white/10 px-3 py-2 text-white placeholder:text-white/40" />
              </div>
              <div className="pt-2">
                <button type="submit" className="w-full rounded-xl px-4 py-2 bg-white text-black">Send via email</button>
              </div>
              <p className="text-xs text-white/50">Submitting opens your email client with a pre‑filled message. No data is stored here.</p>
            </form>
          </div>
        </div>
      </Section>

      {/* Footer */}
      <footer className="mt-24 border-t border-white/10">
        <Section className="py-10 flex flex-col md:flex-row items-center md:items-start justify-between gap-6">
          <div className="flex items-center gap-3">
            <div className="h-8 w-8 rounded-xl bg-gradient-to-br from-indigo-400 to-fuchsia-500" />
            <div>
              <div className="font-semibold">{CONFIG.brandName}</div>
              <div className="text-xs text-white/50">© {new Date().getFullYear()} • All rights reserved.</div>
            </div>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-sm text-white/70">
            <div>
              <div className="text-white mb-2 font-medium">Product</div>
              <ul className="space-y-1">
                <li><a className="hover:text-white" href="#features">Features</a></li>
                <li><a className="hover:text-white" href="#specs">Specs</a></li>
                <li><a className="hover:text-white" href="#demo">Demo</a></li>
              </ul>
            </div>
            <div>
              <div className="text-white mb-2 font-medium">Company</div>
              <ul className="space-y-1">
                <li><a className="hover:text-white" href="#contact">Contact</a></li>
                <li><a className="hover:text-white" href="#">Press kit</a></li>
                <li><a className="hover:text-white" href="#">Privacy</a></li>
              </ul>
            </div>
            <div>
              <div className="text-white mb-2 font-medium">Follow</div>
              <ul className="space-y-1">
                <li><a className="hover:text-white" href={CONFIG.social.twitter} target="_blank" rel="noreferrer">Twitter/X</a></li>
                <li><a className="hover:text-white" href={CONFIG.social.instagram} target="_blank" rel="noreferrer">Instagram</a></li>
                <li><a className="hover:text-white" href={CONFIG.social.linkedin} target="_blank" rel="noreferrer">LinkedIn</a></li>
                <li><a className="hover:text-white" href={CONFIG.social.youtube} target="_blank" rel="noreferrer">YouTube</a></li>
              </ul>
            </div>
            <div>
              <div className="text-white mb-2 font-medium">Get updates</div>
              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  window.location.href = toMailto({
                    to: CONFIG.contactEmail,
                    subject: `${CONFIG.brandName} — Newsletter signup`,
                    body: `Please add me to updates.\nEmail: ${email || "(your email)"}`,
                  });
                }}
                className="flex gap-2"
              >
                <input
                  placeholder="you@example.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="flex-1 rounded-xl bg-white/5 border border-white/10 px-3 py-2 text-white placeholder:text-white/40"
                />
                <button type="submit" className="rounded-xl px-4 py-2 bg-white text-black">Join</button>
              </form>
            </div>
          </div>
        </Section>
      </footer>

      {/* SR-only deployment tip */}
      <div className="sr-only">
        {`
        Drop this file into app/page.tsx in a Next.js (App Router) project created with --tailwind. Add lucide-react + framer-motion. For SEO, set metadata in app/layout.tsx. Add Cloudflare Analytics via next/script in layout.
        `}
      </div>
    </div>
  );
}
