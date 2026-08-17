import React from "react";
import "./ring_size.css";
import img1 from "../assets/service/1.jpg"
export default function RingResizing() {
  return (
    <div className="rr-page">
      {/* Hero banner */}
      <section className="rr-hero">
        <h1>RING RESIZING</h1>
      </section>

      {/* Main content */}
      <section className="rr-content">
        <div className="rr-intro">
          <div className="rr-intro-text">
            <p>
              I can seamlessly resize most rings made of gold, silver or
              platinum. Most rings can be resized about three sizes or so
              without losing their original round shape. I can send a ring
              sizer for you to use at home if you don&rsquo;t know your
              size. The only rings that are usually not suitable for
              resizing are full eternity rings that have stones going all
              the way round.
            </p>
            <p>
              Wedding bands can often be stretched by a size or two up or
              down.
            </p>
            <p>Rings sent in for sizing are usually returned in about a week.</p>
            <p>
              I don&rsquo;t repair or resize rings made of non precious
              metals such as steel, copper, brass or titanium.
            </p>
            <p>
              <strong>
                I can post you a ring sizer so you can measure your finger
                over a few days comfortably at home to find best size. There
                is a £10 deposit which will be deducted from the final cost.
              </strong>
            </p>
          </div>

          <div className="rr-intro-image">
            <img
              src={img1}
              alt="Jeweller resizing a ring"
            />
          </div>
        </div>

        <div className="rr-qa rr-pricing">
          <p>
            <strong>Ring Sizing Down</strong> Silver &amp; 9ct Gold
            engagement rings and others are all from £50.00
          </p>

          <p>
            <strong>Sizing up by 1 or 2 Sizes,</strong> 9ct Gold &amp; Silver
            engagement rings are all from £55.00 . Thicker heavier rings
            such as Gents signet rings &amp; bands will cost extra depending
            on size.
          </p>

          <p>
            <strong>Wedding bands</strong> can sometimes be stretched up by
            a couple of sizes if they are thick enough, this costs from
            £55.00
          </p>

          <p>
            <strong>
              Return Post is from £9.95 (£750 compensation) for RM Special
              Delivery depending on value, size &amp; weight.
            </strong>
          </p>
        </div>

        <a className="rr-cta" href="#quote">
          Request an Estimate here.
        </a>
      </section>
    </div>
  );
}