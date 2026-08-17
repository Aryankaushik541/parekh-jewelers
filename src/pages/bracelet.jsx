import React from "react";
import "./bracelet.css";
import img1 from "../assets/service/5.jpg"
export default function BraceletRepairs() {
  return (
    <div className="br-page">
      {/* Hero banner */}
      <section className="br-hero">
        <h1>BRACELET REPAIRS</h1>
      </section>

      {/* Main content */}
      <section className="br-content">
        <div className="br-intro">
          <div className="br-intro-text">
            <p>
              Broken Bracelets and Bangles professionally repaired from
              £20.00
            </p>
            <p>
              Bracelets can easily become damaged, catches &amp; clasps can
              fail or chains can snap. I can quickly and professionally
              repair your bracelet, Just a few examples of what can be
              fixed:
            </p>

            <ul className="br-list">
              <li>Charms</li>
              <li>Clasps &amp; Catches</li>
              <li>Safety Chains</li>
              <li>Replacement Stones</li>
              <li>Hinge Repairs</li>
              <li>Solid Bracelets</li>
              <li>Hollow Bracelets</li>
            </ul>

            <p>
              Missing pins and links can often be newly fabricated to
              replace missing ones.
            </p>
            <p>
              All jewellery sent for repair will be professionally cleaned
              polished and if necessary plated to bring it back to its
              original shine.
            </p>
          </div>

          <div className="br-intro-image">
            <img
            src={img1}
              alt="Jeweller repairing a gold bracelet chain with tweezers"
            />
          </div>
        </div>

        <div className="br-qa br-pricing">
          <p>
            <strong>9ct Gold Bracelets sized down from £25.00</strong>
          </p>

          <p>
            <strong>
              Charm Solders / Laser from £20.00, I will reattach your safety
              chain or charm etc.
            </strong>
          </p>

          <p>
            <strong>9ct Bolt Catches and clasps replaced from £25</strong>
          </p>
        </div>

        <a className="br-cta" href="#quote">
          Request a quote here
        </a>

        <p className="br-note">
          <strong>
            Return Post is from £8.95 (£750 compensation) for RM Special
            Delivery depending on value, size &amp; weight.
          </strong>
        </p>
        <p className="br-note">
          <strong>All repairs are guaranteed for 12 Months.</strong>
        </p>
      </section>
    </div>
  );
}