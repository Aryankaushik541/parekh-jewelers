import React from 'react';
import './JewelleryRepairs.css';

const JewelleryRepairs = () => {
  const qaData = [
    {
      question: "Can lost stones be substituted?",
      answer: "Yes, replacement services start at around £35 provided the setting is still functional. While we keep many stones in stock, some specific requests may require a special order. Diamonds are typically the fastest to source."
    },
    {
      question: "Is it possible to fix worn claws?",
      answer: "We can reinforce worn-down claws by adding solder over the tips. This thickens the setting and extends its life, though the added solder is slightly softer than original gold and may wear down a bit faster."
    },
    {
      question: "What is the price for claw re-tipping?",
      answer: "Pricing relies heavily on the ring's design, but a standard 9ct gold setting for a diamond usually begins at £50."
    },
    {
      question: "What does rebuilding a claw involve?",
      answer: "When a claw is severely broken, it must be filed down to the base. We then mount a completely new claw, securely solder it in place, and carefully shape a seat for the stone before polishing."
    },
    {
      question: "How much for a full claw rebuild?",
      answer: "A complete claw rebuild in 9ct gold starts at £35. Note that this base price does not cover the potential cost of removing and resetting the stone, if required."
    },
    {
      question: "Can any gemstone's claws be re-tipped?",
      answer: "No. Only durable gems like Diamonds, Sapphires, and Rubies can withstand soldering heat. Most other stones risk heat damage unless we use advanced laser welding techniques."
    },
    {
      question: "Do you re-tip silver ring claws?",
      answer: "Silver jewelry rarely features highly durable stones like diamonds and is often too fragile for traditional re-tipping. However, if the stone is tough enough, it might be possible."
    },
    {
      question: "Can lasers be used instead of soldering?",
      answer: "Laser welding is an option depending on the exact design. However, it is frequently safer and more effective to temporarily remove the stone to properly repair or replace the claw."
    },
    {
      question: "Can a thinning ring band be replaced?",
      answer: "Absolutely. We can remove the old, worn band and meld it with fresh gold to create a thicker, sturdier shank. This can be done as a partial or full replacement, seamlessly extending the ring's lifespan."
    },
    {
      question: "What is the cost for a new band?",
      answer: "Costs fluctuate based on design complexity and gold weight. A small half-shank replacement starts near £150, whereas full shank replacements in 9ct gold begin around £250."
    },
    {
      question: "What is the rate for cleaning and polishing?",
      answer: "A standard clean and polish starts at £20 for a basic band. This includes gentle sanding to erase surface scratches, burnishing, high-polish buffing, and steam cleaning."
    }
  ];

  return (
    <div className="jewellery-container">
      {/* Navigation Header */}
      <header className="main-header">
        <div className="logo">
          <h2>THE JEWELLERY CHAP</h2>
        </div>
        <nav className="main-nav">
          <a href="#home">HOME</a>
          <a href="#repair-services" className="active">REPAIR SERVICES</a>
          <a href="#how-it-works">HOW IT WORKS</a>
          <a href="#repair-examples">REPAIR EXAMPLES</a>
          <a href="#quote">REQUEST A QUOTE</a>
          <a href="#contact">CONTACT</a>
        </nav>
      </header>

      {/* Hero Section */}
      <section className="hero-section">
        <h1>RING REPAIRS</h1>
      </section>

      {/* Main Content Area */}
      <main className="content-area">
        <div className="intro-section">
          <div className="intro-text">
            <p>
              Most gold, silver, and platinum rings can be successfully restored. Occasionally, stones must be unseated prior to soldering. While diamonds and sapphires generally resist heat damage, other gemstones are more vulnerable. In these cases, precision laser welding serves as a safe alternative to protect your valuable stones.
            </p>
            <p>
              Fixing or replacing retaining claws is among our most frequent requests. Even if the ring's band is completely worn through, a new shank can be expertly crafted and attached, leaving a flawless finish even on highly intricate designs.
            </p>
            <p>
              We maintain a large inventory of replacement stones to carefully match missing pieces. If a specific gemstone is required, we may need time to source it, and we will always consult with you before finalizing the repair plan.
            </p>
            <p>
              Below, you will find common inquiries regarding our restoration services along with sample pricing. By utilizing both traditional goldsmithing and modern laser welding, we ensure top-tier results for your delicate jewelry.
            </p>
          </div>
          <div className="intro-image">
            <img src="https://via.placeholder.com/400x250/333/fff?text=Hands+Repairing+Ring" alt="Jeweler working on a ring" />
          </div>
        </div>

        {/* Q&A Section */}
        <div className="qa-section">
          <h3>Questions & Answers.</h3>
          {qaData.map((item, index) => (
            <div className="qa-item" key={index}>
              <h4>{item.question}</h4>
              <p>{item.answer}</p>
            </div>
          ))}
        </div>

        {/* Footer Notes */}
        <div className="footer-notes">
          <p><strong>Return Post is from £9.95 (£750 compensation) for RM Special Delivery depending on value, size & weight.</strong></p>
          <p><strong>All repairs are guaranteed for 12 Months.</strong></p>
          <a href="#estimate" className="estimate-link">Request an Estimate here</a>
        </div>
      </main>

      {/* Footer Area */}
      <footer className="main-footer">
        <div className="footer-columns">
          <div className="footer-col">
            <h4>CONTACT US</h4>
            <ul>
              <li>Email: info@jewellerychap.co.uk</li>
              <li>JewelleryChap</li>
              <li>The Old Red Postbox</li>
              <li>PO Box 744</li>
              <li>North Ferriby</li>
              <li>HU14 9BN</li>
            </ul>
          </div>
          <div className="footer-col">
            <h4>REPAIR SERVICES</h4>
            <ul>
              <li>Ring Repairs</li>
              <li>Ring Resizing</li>
              <li>Chain Repairs</li>
              <li>Pendant Repairs</li>
              <li>Bracelet Repairs</li>
            </ul>
          </div>
          <div className="footer-col">
            <h4>REPAIR SERVICES</h4>
            <ul>
              <li>Earring Repairs</li>
              <li>Catches Replaced</li>
              <li>Necklace Repairs</li>
              <li>Rhodium Plating</li>
            </ul>
          </div>
          <div className="footer-col">
            <h4>CUSTOMER SERVICES</h4>
            <ul>
              <li>Shop Online</li>
              <li>Log-in</li>
              <li>Shopping Basket</li>
              <li>Checkout</li>
              <li>Returns & Refunds</li>
            </ul>
          </div>
        </div>
        <div className="footer-bottom">
          <p>© 2020 The Jewellery Chap</p>
          <p>Privacy Policy | Terms & Conditions</p>
        </div>
      </footer>
    </div>
  );
};

export default JewelleryRepairs;