import React, { useState } from "react";
import "./request.css";

export default function RequestQuote() {
  const [files, setFiles] = useState([]);

  function handleFiles(fileList) {
    setFiles((prev) => [...prev, ...Array.from(fileList)]);
  }

  function handleDrop(e) {
    e.preventDefault();
    handleFiles(e.dataTransfer.files);
  }

  return (
    <div className="quote-page">
      {/* Hero Section */}
      <div className="quote-hero">
        <h1 className="quote-hero-title">REQUEST A QUOTE</h1>
      </div>

      <div className="quote-container">
        {/* Intro Notices */}
        <div className="quote-notice-primary">
          <p>
            Small jobs such as plating, sizing, and chain repairs are taking about 7 days at the moment. I have a queue for big jobs – please contact me before posting.
          </p>
        </div>

        <div className="quote-notice-secondary">
          <p>
            For jewellery repairs and alterations, please submit a repair request using the form below. I will endeavour to estimate the repair based on your photos.
          </p>
          <p>
            I aim to respond as soon as possible but please allow a few days as my website covers the whole of the UK and I often get hundreds of requests daily.
          </p>
        </div>

        {/* Quote Form */}
        <form className="quote-form" onSubmit={(e) => e.preventDefault()}>
          
          <div className="form-row">
            <div className="form-group">
              <label htmlFor="firstName">First Name (required) <span className="req-star">*</span></label>
              <input type="text" id="firstName" required />
            </div>
            <div className="form-group">
              <label htmlFor="lastName">Last Name</label>
              <input type="text" id="lastName" />
            </div>
          </div>

          <div className="form-row">
            <div className="form-group">
              <label htmlFor="email">Email (required) <span className="req-star">*</span></label>
              <input type="email" id="email" required />
            </div>
            <div className="form-group">
              {/* Empty label to match the screenshot layout */}
              <label className="empty-label">&nbsp;</label>
              <input type="text" />
            </div>
          </div>

          <div className="form-group full-width">
            <label htmlFor="address">
              Address. This is the address your jewellery will be returned to. If you prefer not to give it at this stage please be sure to include it on and in your package.
            </label>
            <input type="text" id="address" />
          </div>

          <div className="form-section-title">
            <h2>Tell us about your Jewellery</h2>
          </div>

          <div className="form-group full-width">
            <label htmlFor="carat">
              Please tell me the carat, e.g., is it 9, 14 or 18ct Gold? Is it Silver or Platinum & does it have a hallmark? (required) <span className="req-star">*</span>
            </label>
            <input type="text" id="carat" required />
          </div>

          <div className="form-group full-width">
            <label htmlFor="stones">Are any stones damaged or missing.</label>
            <input type="text" id="stones" />
          </div>

          <div className="form-group full-width">
            <label htmlFor="describe">
              Please describe what you want altering or repairing. (required) <span className="req-star">*</span>
            </label>
            <input type="text" id="describe" required />
          </div>

          <div className="form-group full-width">
            <label>
              I can't reply with an estimate without photos. Please upload a few photos of the jewellery item. You can select multiple files. (required) <span className="req-star">*</span>
            </label>
            
            <div 
              className="dropzone"
              onDragOver={(e) => e.preventDefault()}
              onDrop={handleDrop}
            >
              <p>
                {files.length > 0 
                  ? `${files.length} file(s) selected` 
                  : "Drop files here or"}
              </p>
              <label className="select-files-btn">
                SELECT FILES
                <input 
                  type="file" 
                  multiple 
                  accept="image/*" 
                  hidden 
                  required 
                  onChange={(e) => handleFiles(e.target.files)}
                />
              </label>
            </div>
          </div>

          <div className="form-submit-container">
            <button type="submit" className="submit-quote-btn">
              SEND QUOTE REQUEST
            </button>
          </div>
        </form>

        {/* Footnotes */}
        <div className="quote-footnotes">
          <p>
            When posting always use secure quality packaging. Please do not use a paper envelope – they are not secure. Protect your jewellery with tissue paper or bubble wrap and seal thoroughly with tape, and send by Royal Mail Special Delivery with appropriate insurance. Please do not use a stamped paper envelope – it is not a secure method of postage.
          </p>
          <p><strong>I don't accept hand delivered items under any circumstances – I only accept work by post due to insurance and security – sorry no exceptions.</strong></p>
          <p><strong>Cash Payments – Sorry but I do not accept cash under any circumstances, I only take payment by bank transfer – no exceptions unfortunately.</strong></p>
        </div>
      </div>
    </div>
  );
}