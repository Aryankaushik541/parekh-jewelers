import React from "react";
import "./catches.css";
import img1 from "../assets/service/7.jpg"
export default function ClaspsReplaced() {
  return (
    <div className="cr-page">
      {/* Hero banner */}
      <section className="cr-hero">
        <h1>CATCHES REPLACED</h1>
      </section>

      {/* Main content */}
      <section className="cr-content">
        <div className="cr-intro">
          <div className="cr-intro-text">
            <p>
              Clasps &amp; Catches often fail due to age or damage,
              don&rsquo;t risk losing your jewellery I can repair or replace
              broken clasps &amp; catches from only £25.00, just a few
              examples of the repairs I can do:
            </p>

            <ul className="cr-list">
              <li>Bolt ring</li>
              <li>Lobster catch</li>
              <li>Ball catch</li>
              <li>Magnetic catch</li>
              <li>Oval catch</li>
              <li>Bayonet clasp</li>
              <li>Tube clasp</li>
              <li>Brooch clip</li>
              <li>Custom made catches</li>
              <li>Safety chains fitted</li>
            </ul>

            <p>
              I always use the closest possible match to the original
              design and match the metal purity.
            </p>
          </div>

          <div className="cr-intro-image">
            <img
              src={img1}
              alt="Jeweller attaching a bolt ring catch to a gold chain with tweezers"
            />
          </div>
        </div>

        <p className="cr-note">
          <strong>All repairs are guaranteed for one year.</strong>
        </p>
        <p className="cr-note">
          <strong>
            Return Post is from £9.95 (£750 compensation) for RM Special
            Delivery depending on value, size &amp; weight.
          </strong>
        </p>
        <p className="cr-note">
          <strong>All repairs are guaranteed for 12 Months.</strong>
        </p>
      </section>
    </div>
  );
}