import React, { useState } from 'react';
import './repair.css';
import a from '../assets/repair/1.jpg';
import b from '../assets/repair/2.jpg';
import c from '../assets/repair/3.jpg';
import d from '../assets/repair/4.jpg';
import e from '../assets/repair/5.jpg';
import f from '../assets/repair/6.jpg';
import g from '../assets/repair/7.jpg';
import h from '../assets/repair/8.jpg';
import i from '../assets/repair/9.jpg';
// ─── Service Data ─────────────────────────────────────────────────────────────
const SERVICES = [
  {
    id: 1,
    title: 'Ring Repairs',
    img: a, // Removed the curly braces here
    desc: 'Expert soldering, stone re-tipping & prong rebuilding for all ring types.',
  },
  {
    id: 2,
    title: 'Ring Sizing',
    img: b,
    desc: 'Up or down — we size rings in gold, silver and platinum while preserving the original finish.',
  },
  {
    id: 3,
    title: 'Chain Repairs',
    img: c,
    desc: 'Broken links rejoined and clasps replaced across every chain style.',
  },
  {
    id: 4,
    title: 'Pendant Repairs',
    img: d,
    desc: 'Bails re-attached, stones re-set and precious metal work restored to original beauty.',
  },
  {
    id: 5,
    title: 'Bracelet Repairs',
    img: e,
    desc: 'Links re-connected, clasps replaced and bangles reformed back to perfect shape.',
  },
  {
    id: 6,
    title: 'Earring Repairs',
    img: f,
    desc: 'Butterfly backs, hooks and posts replaced — earrings restored as a matching pair.',
  },
  {
    id: 7,
    title: 'Catches Replaced',
    img: g,
    desc: 'Box, lobster, toggle and spring-ring catches fitted with precision.',
  },
  {
    id: 8,
    title: 'Necklace Resizing',
    img: h ,
    desc: 'Necklaces shortened or lengthened whilst retaining the original clasp and finish.',
  },
  {
    id: 9,
    title: 'Rhodium & Gold Plating',
    img: i,
    desc: 'Professional plating to revive white gold, silver and add a luxurious gold finish.',
  },
];

// ─── Component ────────────────────────────────────────────────────────────────
const RepairServices = () => {
  const [hovered, setHovered] = useState(null);

  return (
    <div className="rs-page">

      {/* ── Hero ── */}
      <section className="rs-hero">
        <div className="rs-hero-bg" />
        <div className="rs-hero-content">
          <h1 className="rs-hero-title">Repair Services</h1>
          <div className="rs-hero-line" />
        </div>
      </section>

      {/* ── Services Grid ── */}
      <section className="rs-grid-section">
        <div className="rs-grid">
          {SERVICES.map((service) => (
            <article
              key={service.id}
              className="rs-card"
              onMouseEnter={() => setHovered(service.id)}
              onMouseLeave={() => setHovered(null)}
            >
              <div className="rs-card-img-wrap">
                <img
                  className="rs-card-img"
                  src={service.img}
                  alt={service.title}
                  loading="lazy"
                />
                <div className="rs-card-overlay" />
              </div>

              <div className="rs-card-body">
                <h3 className="rs-card-title">{service.title}</h3>
                <div className="rs-card-divider" />
                <p className="rs-card-desc">{service.desc}</p>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* ── CTA Strip ── */}
      <div className="rs-strip">
        <p className="rs-strip-text">Ready to restore your jewellery?</p>
        <a className="rs-strip-link" href="/request">
          Request a Quote
        </a>
      </div>

    </div>
  );
};

export default RepairServices;