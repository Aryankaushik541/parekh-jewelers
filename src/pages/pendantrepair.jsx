import React from "react";
import "./pendantrepair.css";
import img1 from "../assets/service/4.jpg"
export default function PendantRepairs() {
  return (
    <div className="rr-page">
      {/* Hero banner */}
      <section className="rr-hero">
        <h1>PENDANT REPAIRS</h1>
      </section>

      {/* Main content */}
      <section className="rr-content">
        <div className="rr-intro">
          <div className="rr-intro-text">
            <p>
              <strong>Pendant Repairs from £30.00.</strong>
            </p>
            <p>
              Whether your pendant or locket requires a simple solder repair
              or a new hinge I can fix all types of problems to most
              pendants or lockets, charms &amp; chains. I utilise both
              traditional techniques and modern laser technology to repair
              the most delicate items of jewellery.
            </p>
            <p>
              Request an estimate today and I will get your jewellery
              swiftly repaired and safely returned to you.
            </p>
            <p>Just a few examples of the pendant repairs I can do.</p>

            <ul className="rr-list">
              <li>Lost or Loose Stones</li>
              <li>Broken or Lost Bales</li>
              <li>Broken Jump Rings</li>
              <li>Broken Hinges</li>
              <li>Damaged Claws</li>
            </ul>
          </div>

          <div className="rr-intro-image">
            <img
              src={img1}
              alt="Jeweller setting a pendant in a jeweller's cement pot"
            />
          </div>
        </div>

        <p className="rr-note">
          <strong>
            Return Post is from £9.95 (£750 compensation) for RM Special
            Delivery depending on value, size &amp; weight.
          </strong>
        </p>
        <p className="rr-note">
          <strong>All repairs are guaranteed for 12 Months.</strong>
        </p>
      </section>
    </div>
  );
}