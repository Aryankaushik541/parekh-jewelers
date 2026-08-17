import React from 'react';
import './work.css';

export default function HowItWorks() {
  return (
    <div className="how-it-works-page">
      
      {/* Hero Section */}
      <div className="hiw-hero">
        <h1 className="hiw-hero-title">HOW IT WORKS</h1>
      </div>

      <div className="hiw-container">
        
        {/* Intro Text */}
        <div className="hiw-intro">
          <p>
            I offer a free no obligation quote for all your jewellery repairs, send me a few photos and I will send you an estimate of the repair cost. Should anything change when I have inspected the item I will contact you before proceeding and if you don't want to go ahead I will return it free of charge.
          </p>
        </div>

        {/* 3 Steps Grid */}
        <div className="hiw-steps-grid">
          <div className="hiw-step-box">
            <div className="hiw-step-number">1</div>
            <p>Request an estimate <a href="#quote" className="gold-link">here</a> and attach a few photos of your jewellery</p>
          </div>
          
          <div className="hiw-step-box">
            <div className="hiw-step-number">2</div>
            <p>Send your jewellery to me by insured post and I'll message you as soon as it arrives</p>
          </div>
          
          <div className="hiw-step-box">
            <div className="hiw-step-number">3</div>
            <p>I will professionally repair your jewellery and return it by Insured & Tracked Mail</p>
          </div>
        </div>

        {/* Detailed Shipping Info */}
        <div className="hiw-shipping-info">
          <p>
            I recommend you pack your jewellery in soft tissue or bubble wrap and place it in a secure very well taped up package and send it to me via a tracked, insured & signed service such as RM Special Delivery. Always choose compensation to cover the full value of your jewellery and write your return address clearly on the outside of the box. Please don't forget to include a note with your name and address so I know who it belongs to. I will email you with confirmation of arrival and confirm the estimate. Once your jewellery is repaired I will send you an invoice which you can pay by bank transfer. As soon as it is received I will return your item by Royal Mail. I always recommend RM Special Delivery with compensation to cover the value of your jewellery which costs from £9.95 (upto £750 value). All quotes include an estimated reduction for the value of scrap & filings from your repair.
          </p>
        </div>

        {/* Q&A Section */}
        <div className="hiw-qa-section">
          <h3 className="qa-main-heading">Questions & Answers.</h3>
          
          <div className="qa-item">
            <h4>What do you repair?</h4>
            <p>I only repair Jewellery and it must be made of Gold, Platinum or Silver</p>
          </div>

          <div className="qa-item">
            <h4>What do you not repair?</h4>
            <p>I do <strong>not</strong> do any restoration or repair work to non jewellery items such as lighters, watches or sunglasses. I don't work on brass, leather or non precious metal costume jewellery.</p>
          </div>

          <div className="qa-item">
            <h4>How long do you take to respond to emails?</h4>
            <p>I answer emails throughout the day but please allow a few days for a reply. In busy times I get hundreds of emails every day from all four corners of the UK and I answer them as soon as I can. I am just one person working 60 hours a week and I have to dedicate most of my time to my work.</p>
          </div>

          <div className="qa-item">
            <h4>Do you have a phone number?</h4>
            <p>I do not have a telephone in my workshop, it would ring off the hook and I would never be able to get any work done so I work only by email.</p>
          </div>

          <div className="qa-item">
            <h4>Do you have a shop?</h4>
            <p>No, I do not have a shop open to the public, I work by post only from my dedicated workshop.</p>
          </div>

          <div className="qa-item">
            <h4>I want to drop off an item – where can I find you?</h4>
            <p>I never accept visitors due to security and insurance – I work by post only – no exceptions unfortunately.</p>
          </div>

          <div className="qa-item">
            <h4>When are you open?</h4>
            <p>Monday to Friday 8am – 6pm</p>
          </div>

          <div className="qa-item">
            <h4>How do I pay for my repair?</h4>
            <p>When I receive your item I will confirm the repair cost and email the invoice which you can pay by bank transfer.</p>
          </div>

          <div className="qa-item">
            <h4>How long do repairs take?</h4>
            <p>Please contact me for a time estimate, small repairs like chain repairs and solders are usually returned in less than a week but please drop me an email and check how long my work queue is if you are in a rush.</p>
          </div>

          <div className="qa-item">
            <h4>I am worried about sending my jewellery by post.</h4>
            <p>Royal Mail Special Delivery is a very secure fully insured service and I have never known anything go missing. High street jewellery shops often don't have their own in-house goldsmiths and your jewellery will end up being posted to a goldsmith like me anyway.</p>
          </div>

          <div className="qa-item">
            <h4>How much is return post?</h4>
            <p>I use Royal Mail Special Delivery and I use the most economical method which is large letter up to 100g this keeps the cost down to £9.95 for small items (£750 insurance). If you send an item in a large jewellery box and want it returning it may add to the postage cost.</p>
          </div>

          <div className="qa-item">
            <h4>Can I pay by Cash?</h4>
            <p>Unfortunately not – I do not accept cash under any circumstances, I only take payment by bank transfer.</p>
          </div>

          <div className="qa-item">
            <h4>Can I hand deliver my jewellery to you?</h4>
            <p>Sorry but I don't accept hand delivered items under any circumstances – I only accept work by post due to insurance and security – <strong>sorry no exceptions.</strong></p>
          </div>
        </div>

      </div>
    </div>
  );
}