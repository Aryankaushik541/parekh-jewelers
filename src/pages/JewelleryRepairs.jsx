import React from "react";
import "./jewelleryRepairs.css";
import img1 from "../assets/service/1.jpg"
export default function RingRepairs() {
  return (
    <div className="rr-page">
      {/* Hero banner */}
      <section className="rr-hero">
        <h1>RING REPAIRS</h1>
      </section>

      {/* Main content */}
      <section className="rr-content">
        <div className="rr-intro">
          <div className="rr-intro-text">
            <p>
              I can repair most rings made of Gold, Silver or Platinum. If a
              ring needs to be soldered some stones may need to be removed,
              diamonds and sapphires are usually heat safe unless treated by
              glass filling or other modern methods of enhancement, but most
              others can be damaged by heat. Laser welding is often utilised
              to keep the stones safe.
            </p>
            <p>
              Ring claw re-tipping and replacement is a very common repair,
              sometimes rings are so worn that the shank itself is worn out,
              I can expertly make a new shank and complete a seamless repair
              even when the ring is set with delicate stones.
            </p>
            <p>
              I have thousands of stones in my inventory but missing stones
              have to be carefully matched and sometimes if I don&rsquo;t
              have one in stock it can take several weeks to locate and
              source a suitable replacement, I will confirm this with you
              before you commit to a repair.
            </p>
            <p>
              Below are a few questions and answers about ring repairs that I
              often carry out and example prices. I use traditional
              goldsmithing techniques and I have invested in a professional
              laser welder to achieve the highest quality results on the
              most delicate jewellery.
            </p>
          </div>

          <div className="rr-intro-image">
            <img
              src={img1}
              alt="Jeweller repairing a ring"
            />
          </div>
        </div>

        <h2 className="rr-qa-title">Questions &amp; Answers.</h2>

        <div className="rr-qa">
          <h3>Can you replace my missing stone?</h3>
          <p>
            Missing stones can be replaced from £35 if the claws are still
            in good condition, I carry thousands of stones but sometimes
            they have to be ordered which can take a while. Diamonds are
            usually the easiest to replace as they are easily available in
            all sizes.
          </p>

          <h3>How are broken or worn claws repaired?</h3>
          <p>
            Claws can be re-tipped or rebuilt, if a claw is worn down but it
            is still covering the stone it may be possible to improve and
            strengthen it by melting solder over the tip. This will make the
            claw thicker and add life to it but it won&rsquo;t be as durable
            as the original claw because it is being resurfaced with solder
            which is softer than gold and will wear more quickly.
          </p>

          <h3>How much does it cost to re-tip a ring.</h3>
          <p>
            That depends very much on the design of the jewellery but a 9ct
            gold diamond ring will start at around £50 to retip.
          </p>

          <h3>What is meant by rebuilding a claw?</h3>
          <p>
            If the claw has broken off or is too worn for re-tipping it will
            need to be filed or cut down to its base and the space prepared
            so a new claw can be mounted and either soldered or laser welded
            in place. A new seat then has to be cut for the stone to sit in
            and it can be shaped and polished.
          </p>

          <h3>How much does it cost to rebuild a broken claw?</h3>
          <p>
            Fully rebuilding a single broken claw in 9ct gold starts at £35
            but this does not include removing and resetting the stone which
            may be necessary.
          </p>

          <h3>Can claws be re-tipped on all types of gemstone?</h3>
          <p>
            No, re-tipping is only done on Diamond, Moissanite, Sapphire
            &amp; Ruby which have not been fracture filled or treated with
            polymers etc. Nearly every other stone will be damaged or
            destroyed by the heat of soldering.
          </p>

          <h3>Can claws be re-tipped on silver jewellery.</h3>
          <p>
            It&rsquo;s rare to see real diamond set in silver jewellery,
            often the stones are very delicate and
          </p>
          <p>
            not suitable for re-tipping, but if the stone is durable enough
            it may be possible to re-tip the claws.
          </p>

          <h3>Can claws be laser tipped if not suitable for solder re-tipping.</h3>
          <p>
            It may be possible to laser tip a claw but it depends on the
            design of the jewellery. Usually it is safer to remove the stone
            and repair the claw and once removed it may be better to replace
            the claw completely.
          </p>

          <h3>Can you replace a worn ring shank?</h3>
          <p>
            Usually the answer is yes. Ring shanks can usually be removed and
            melted down with more gold to make a new bigger shank and this
            can be soldered back to the ring or if the stones are delicate
            it can be laser welded. This can be done as a half shank where
            the bottom half is replaced or three quarters or even the full
            shank. The joint is usually invisible or at least difficult to
            see and it will give the ring decades more life.
          </p>

          <h3>How much does a new ring shank cost?</h3>
          <p>
            The price to re-shank a ring varies according to the design and
            the amount of gold needed but a small half shank can cost as
            little as £150 and full shanks start from £250 in 9ct gold.
          </p>

          <h3>What does a clean &amp; polish cost?</h3>
          <p>
            It depends on the ring but it starts from £20 for a simple
            wedding band, it will be cleaned and lightly sanded to remove
            the fine scratches and burnished before being polished and steam
            cleaned.
          </p>
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

        <a className="rr-cta" href="#quote">
          Request an Estimate here
        </a>
      </section>
    </div>
  );
}