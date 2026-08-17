import React from "react";
import "./chain.css";
import img1 from "../assets/service/3.jpg"
export default function ChainRepairs() {
  return (
    <div className="rr-page">
      {/* Hero banner */}
      <section className="rr-hero">
        <h1>NECKLACE CHAIN REPAIRS</h1>
      </section>

      {/* Main content */}
      <section className="rr-content">
        <div className="rr-intro">
          <div className="rr-intro-text">
            <p>
              I can repair solid chains down to about 0.5mm in size depending
              on design and there is usually little to no sign of repair.
              Hollow chains are subject to inspection.
            </p>
            <p>Most chain repairs are done in a few days.</p>
            <p>
              Very delicate solid chains that are too thin to be soldered
              can usually be repaired by laser welding which starts at just
              £20.00 so just click on the{" "}
              <a href="request" className="rr-inline-link">
                get a quote
              </a>{" "}
              page, fill in your details, add a photo of the damage and
              start your repair today.
            </p>
            <p>
              I can also replace catches such as bolt rings which are found
              on many types of chain. I can replace a Bolt Ring from as
              little as £20.00.
            </p>
            <p>
              Do you have a hopelessly tangled chain that just cannot be
              untangled &ndash; I can untangle almost any chain for as
              little as £15.00
            </p>
          </div>

          <div className="rr-intro-image">
            <img
              src={img1}
              alt="Jeweller repairing a gold chain, jump rings on workbench"
            />
          </div>
        </div>

        <div className="rr-qa rr-pricing">
          <p>
            <strong>Rope Chains:</strong> Repair from £35.00 depending on
            size.
          </p>

          <p>
            <strong>Cable Chains: Laser repair</strong> from £20
          </p>

          <p>
            <strong>Jump rings:</strong> Made to size and laser welded from
            £15
          </p>

          <p>
            <strong>Bolt Ring Catches:</strong> Fitted &amp; laser welded
            from £20.00
          </p>

          <p>Simple chain designs are usually repaired and returned in about 7 days.</p>

          <p>
            <a href="request" className="rr-inline-link">
              Send me some photos
            </a>{" "}
            of your damaged chain and I will do my best to give you the best
            possible professional repair estimate. Prices vary depending on
            the type of chain, cable chains are very common and easy to
            repair, others may take longer. Hollow chains tend to break
            easily especially when they are a few years old. They are more
            difficult to repair seamlessly and if a repair is appropriate it
            is usually more expensive.
          </p>

          <p>
            <strong>
              Return Post is from £9.95 (£750 compensation) for RM Special
              Delivery depending on value, size &amp; weight.
            </strong>
          </p>
        </div>
      </section>
    </div>
  );
}