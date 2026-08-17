import React from "react";
import "./Nackles.css";
import img1 from "../assets/service/8.jpg"
export default function NecklaceResizing() {
  return (
    <div className="nr-page">
      {/* Hero banner */}
      <section className="nr-hero">
        <h1>NECKLACE RESIZING</h1>
      </section>

      {/* Main content */}
      <section className="nr-content">
        <div className="nr-intro">
          <div className="nr-intro-text">
            <p>
              Would you like to shorten your necklace bracelet or chain? I
              can seamlessly alter it to your preferred size. To measure a
              bracelet use a soft flexible measuring tape to measure just
              above the wrist bone where you would like it to sit, add
              about 10 &ndash; 20mm depending how loose you would like it
              then send us your item and size requirements and I will
              re-size it to your exact measurements.
            </p>
            <p>
              Necklaces and bracelets can usually be sized with simple ones
              starting from just £20.00.
            </p>
          </div>

          <div className="nr-intro-image">
            <img
              src={img1}
              alt="Jeweller measuring a gold chain against a ruler on a workbench"
            />
          </div>
        </div>

        <p className="nr-note">
          <strong>
            Return Post is from £9.95 (£750 compensation) for RM Special
            Delivery depending on value, size &amp; weight.
          </strong>
        </p>
        <p className="nr-note">
          <strong>All repairs are guaranteed for 12 Months.</strong>
        </p>
      </section>
    </div>
  );
}