import { useState } from "react";
import "./request.css";

/**
 * Request a Quote — page content only.
 * Header (logo/nav) and Footer are NOT included since the site
 * already has them — render this between your existing header
 * and footer, e.g.:
 *
 *   <Header />
 *   <RequestQuote />
 *   <Footer />
 */

const HERO_IMAGE = "../assets/repair/work.jpg"; // swap for your real banner photo

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
      <div className="quote-hero">
        <img src={HERO_IMAGE} alt="" />
        <h1 className="quote-hero-title">Request a Quote</h1>
      </div>

      <div className="quote-notice">
        <p>
          Small jobs such as plating, sizing, and chain repairs are taking
          about 7 days at the moment. I have a queue for big jobs – please
          contact me before posting.
        </p>
      </div>

      <div className="quote-intro">
        <p>
          For jewellery repairs and alterations, please submit a repair
          request using the form below. I will endeavour to estimate the
          repair based on your photos.
        </p>
        <p>
          I aim to respond as soon as possible but please allow a few days as
          my website covers the whole of the UK and I often get hundreds of
          requests daily.
        </p>
      </div>

      <form
        className="quote-form"
        onSubmit={(e) => e.preventDefault()}
      >
        <div className="quote-row">
          <div className="quote-field">
            <label htmlFor="firstName">First Name (required) *</label>
            <input id="firstName" type="text" required />
          </div>
          <div className="quote-field">
            <label htmlFor="lastName">Last Name</label>
            <input id="lastName" type="text" />
          </div>
        </div>

        <div className="quote-row">
          <div className="quote-field">
            <label htmlFor="email">Email (required) *</label>
            <input id="email" type="email" required />
          </div>
          <div className="quote-field">
            <label htmlFor="emailConfirm">&nbsp;</label>
            <input id="emailConfirm" type="email" />
          </div>
        </div>

        <div className="quote-field quote-field--full">
          <label htmlFor="address">
            Address. This is the address your jewellery will be returned to.
            If you prefer not to give it at this stage please be sure to
            include it on and in your package.
          </label>
          <input id="address" type="text" />
        </div>

        <h2 className="quote-subheading">Tell us about your Jewellery</h2>

        <div className="quote-field quote-field--full">
          <label htmlFor="carat">
            Please tell me the carat, e.g., is it 9, 14 or 18ct Gold? Is it
            Silver or Platinum &amp; does it have a hallmark? (required) *
          </label>
          <input id="carat" type="text" required />
        </div>

        <div className="quote-field quote-field--full">
          <label htmlFor="stones">Are any stones damaged or missing.</label>
          <input id="stones" type="text" />
        </div>

        <div className="quote-field quote-field--full">
          <label htmlFor="describe">
            Please describe what you want altering or repairing. (required) *
          </label>
          <input id="describe" type="text" required />
        </div>

        <div className="quote-field quote-field--full">
          <label htmlFor="photos">
            I can't reply with an estimate without photos. Please upload a
            few photos of the jewellery item. You can select multiple files.
            (required) *
          </label>

          <div
            className="quote-dropzone"
            onDragOver={(e) => e.preventDefault()}
            onDrop={handleDrop}
          >
            <p>
              {files.length > 0
                ? `${files.length} file${files.length > 1 ? "s" : ""} selected`
                : "Drop files here or"}
            </p>
            <label className="quote-select-btn">
              Select Files
              <input
                id="photos"
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

        <button type="submit" className="quote-submit-btn">
          Send Quote Request
        </button>
      </form>

      <div className="quote-footnote">
        <p>
          When posting always use secure quality packaging. Please do not
          use a paper envelope – they are not secure. Protect your jewellery
          with tissue paper or bubble wrap and seal thoroughly with tape,
          and send by Royal Mail Special Delivery with appropriate
          insurance. Please do not use a stamped paper envelope – it is not
          a secure method of postage.
        </p>
        <p className="quote-footnote-bold">
          I don't accept hand delivered items under any circumstances – I
          only accept work by post due to insurance and security – sorry no
          exceptions.
        </p>
        <p className="quote-footnote-bold">
          Cash Payments – Sorry but I do not accept cash under any
          circumstances, I only take payment by bank transfer – no
          exceptions unfortunately.
        </p>
      </div>
    </div>
  );
}