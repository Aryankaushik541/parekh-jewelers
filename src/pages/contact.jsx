import React from 'react';
import './contact.css';

export default function Contact() {
  return (
    <div className="contact-page">
      {/* Hero Section */}
      <div className="contact-hero">
        <h1 className="contact-hero-title">CONTACT</h1>
      </div>

      {/* Main Content Split Layout */}
      <div className="contact-container">
        
        {/* Left Column: Text & Information */}
        <div className="contact-info">
          <p>If you have a general enquiry please use this form.</p>
          
          <p>
            If you'd like a quote for your jewellery repairs, please follow this link <a href="#quote" className="gold-link">here, and please attach some photos.</a> – I cannot give you a quote without clear photos and details such as sizes and carat.
          </p>
          
          <p>
            Please allow a few days for a reply as I am always very busy and receive a lot of enquiries every day. I usually have a queue of a couple of weeks for repairs. If you need something doing in a rush please contact me before sending it.
          </p>
          
          <p>Please send your repairs to:</p>
          
          <address className="contact-address">
            <strong>The Old Red Postbox</strong><br />
            <strong>PO Box 744</strong><br />
            <strong>North Ferriby</strong><br />
            <strong>HU14 9BN</strong>
          </address>

          <div className="packaging-notice">
            <p><strong>Secure packaging is important.</strong></p>
            <p>
              Always use secure packaging. Protect your jewellery with tissue paper or bubble wrap and seal thoroughly with plenty of strong tape. Send by Royal Mail Special Delivery with appropriate insurance. Please do not use a paper envelope or first class stamp.
            </p>
          </div>
        </div>

        {/* Right Column: Contact Form */}
        <div className="contact-form-wrapper">
          <form className="contact-form" onSubmit={(e) => e.preventDefault()}>
            <div className="form-group">
              <label htmlFor="name">Your Name (required)</label>
              <input type="text" id="name" required />
            </div>

            <div className="form-group">
              <label htmlFor="email">Your Email Address (required)</label>
              <input type="email" id="email" required />
            </div>

            <div className="form-group">
              <label htmlFor="phone">Telephone Number</label>
              <input type="tel" id="phone" />
            </div>

            <div className="form-group">
              <label htmlFor="message">Your Message</label>
              <textarea id="message" rows="10" required></textarea>
            </div>

            <button type="submit" className="submit-btn">
              SEND
            </button>
          </form>
        </div>
        
      </div>
    </div>
  );
}