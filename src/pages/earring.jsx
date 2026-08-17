import React from "react";
import "./earring.css";
import img1 from "../assets/service/6.jpg"
export default function EarringRepairs() {
  return (
    <div className="er-page">
      {/* Hero banner */}
      <section className="er-hero">
        <h1>EARRING REPAIRS</h1>
      </section>

      {/* Main content */}
      <section className="er-content">
        <div className="er-intro">
          <div className="er-intro-text">
            <p>
              Most earrings made of Gold &amp; Platinum are repairable.
              Silver earrings are often not economical to repair as the
              repair cost can outweigh the replacement.
            </p>
            <p>
              Even delicate earrings can be repaired by laser welding. If
              you lose an earring another can be handmade to match, although
              I only recommend this for extremely sentimental or expensive
              jewellery items as hand making even a simple earring takes
              many hours or even days and is very expensive compared to the
              cost of new jewellery pieces which are often machine made.
            </p>
            <p>
              Here are just a few examples of the repairs I can carry out
              on gold &amp; platinum earrings.
            </p>

            <ul className="er-list">
              <li>Replacement posts, hand made from white or yellow gold or platinum.</li>
              <li>Hand made replacement butterfly clips</li>
              <li>Stud earring repair</li>
              <li>Diamond earring repair</li>
              <li>Platinum earring repair</li>
              <li>I can replace lost stones in earrings</li>
            </ul>

            <p>
              I can reattach broken or missing posts to gold and platinum
              earrings, they can often be laser welded back into place. New
              posts can be handmade to match if needed.
            </p>
          </div>

          <div className="er-intro-image">
            <p className="er-image-caption">
              The left earring was handmade to match the one on the right.
            </p>
            <img
              src={img1}
              alt="Pair of sapphire and diamond cluster stud earrings being examined with tweezers"
            />
          </div>
        </div>

        <p className="er-note">
          <strong>
            Return Post is from £9.95 (£750 compensation) for RM Special
            Delivery depending on value, size &amp; weight.
          </strong>
        </p>
        <p className="er-note">
          <strong>All repairs are guaranteed for 12 Months.</strong>
        </p>

        <p className="er-note">
          Click{" "}
          <a href="request" className="er-inline-link">
            here
          </a>{" "}
          to request an estimate.
        </p>
      </section>
    </div>
  );
}