import { useState, useEffect, useRef, useCallback } from "react";
import "./example.css";
import "./lightbox.css";

// row 1 (top grid)
import img1 from "../assets/example/1.jpg";
import img2 from "../assets/example/2.jpg";
import img3 from "../assets/example/3.jpg";
import img4 from "../assets/example/4.jpg";
import img5 from "../assets/example/5.jpg";
import img6 from "../assets/example/6.jpg";
import img7 from "../assets/example/7.jpg";
import img8 from "../assets/example/8.jpg";
import img9 from "../assets/example/9.jpg";

// repair sections
import img10 from "../assets/example/10.jpg";
import img11 from "../assets/example/11.jpg";
import img12 from "../assets/example/12.jpg";
import img13 from "../assets/example/13.jpg";
import img14 from "../assets/example/14.jpg";
import img15 from "../assets/example/15.jpg";
import img16 from "../assets/example/16.jpg";
import img17 from "../assets/example/17.jpg";
import img18 from "../assets/example/18.jpg";
import img19 from "../assets/example/19.jpg";
import img20 from "../assets/example/20.jpg";
import img21 from "../assets/example/21.jpg";
import img22 from "../assets/example/22.jpg";
import img23 from "../assets/example/23.jpg";
import img24 from "../assets/example/24.jpg";
import img25 from "../assets/example/25.jpg";
import img26 from "../assets/example/26.jpg";
import img27 from "../assets/example/27.jpg";
import img28 from "../assets/example/28.jpg";
import img29 from "../assets/example/29.jpg";
import img30 from "../assets/example/30.jpg";
import img31 from "../assets/example/31.jpg";
import img32 from "../assets/example/32.jpg";
import img33 from "../assets/example/33.jpg";
import img34 from "../assets/example/34.jpg";
import img35 from "../assets/example/35.jpg";
import img36 from "../assets/example/36.jpg";
import img37 from "../assets/example/37.jpg";
import img38 from "../assets/example/38.jpg";
import img39 from "../assets/example/39.jpg";

const gridRow1 = [
  { src: img1, alt: "Diamond three-stone ring in box" },
  { src: img2, alt: "Handmade gold solitaire ring" },
  { src: img3, alt: "Handmade gold interlocking pendant" },
  { src: img4, alt: "Gold ring with diamond cluster setting" },
  { src: img5, alt: "Gold hoop earrings" },
  { src: img6, alt: "Sapphire and diamond halo ring" },
  { src: img7, alt: "Silver rings" },
  { src: img8, alt: "Amethyst charm pendant" },
  { src: img9, alt: "Sapphire and diamond cluster earrings" },
];

const repairs = [
  {
    images: [
      { src: img10, alt: "Repair tools and gold pieces" },
      { src: img11, alt: "Gold bracelet repair" },
      { src: img12, alt: "Gold necklace repair" },
    ],
    note: "The necklace above was sent in with a broken link, the pin that held it together snapped and tore the hollow link.",
  },
  {
    images: [
      { src: img13, alt: "Ring repair step 1" },
      { src: img14, alt: "Ring repair step 2" },
      { src: img15, alt: "Ring repair step 3" },
    ],
    note: "The example ring repair above is a very common repair, it was broken at a previous solder joint and the shank had become too thin so it needed to be partially replaced.",
  },
  {
    images: [
      { src: img16, alt: "Ring missing diamond step 1" },
      { src: img17, alt: "Ring missing diamond step 2" },
      { src: img18, alt: "Ring missing diamond step 3" },
    ],
    note: "This ring above was missing a 1.4mm P1 diamond, a new diamond was set and all the claws were re-tipped. The gold was burnished to remove the scratches, it was then polished.",
  },
  {
    images: [
      { src: img19, alt: "Emerald ring made from melted down gold" },
      { src: img20, alt: "Casting mould" },
      { src: img21, alt: "New topaz ring" },
    ],
    note: "The ring above was a customers old 15ct gold ring and was melted down and a brand new 15ct ring made using the old diamonds and gold and a new topaz.",
  },
  {
    images: [
      { src: img22, alt: "Gold pieces before remaking" },
      { src: img23, alt: "Gold being melted with torch" },
      { src: img24, alt: "New slim band with original stones" },
    ],
    note: "The above ring belonged to a customer who wanted to remake her grandmothers old ring into a slim band, using the original stones and metal.",
  },
  {
    images: [
      { src: img25, alt: "Loose diamonds and gold ready for remaking" },
      { src: img26, alt: "Setting a diamond with tool" },
      { src: img27, alt: "Finished diamond pendant" },
    ],
    note: "In the above photo a customer wanted to melt down an existing 4 diamond ring and use her diamonds and gold to make a pair of identical pendants.",
  },
  {
    images: [
      { src: img28, alt: "Setting diamonds in a ring with pliers" },
      { src: img29, alt: "Finished diamond cluster ring" },
    ],
    columns: 2,
    note: "New diamonds are from £35 fitted if the claws are good to use.",
  },
  {
    images: [
      { src: img30, alt: "Platinum ring laser sizing step 1" },
      { src: img31, alt: "Platinum ring laser sizing step 2" },
      { src: img32, alt: "Platinum ring laser sizing step 3" },
      { src: img33, alt: "Three resized platinum rings" },
      { src: img34, alt: "Resized platinum rings close up" },
    ],
    note: "This is an example of laser sizing three platinum rings - all three were sized by adding a small piece of platinum to the shank and blending it in so the end result is a clean resize.",
  },
  {
    images: [
      { src: img35, alt: "Crushed gold ring before repair" },
      { src: img36, alt: "Gold ring being reshaped" },
      { src: img37, alt: "Gold ring being reshaped on mandrel" },
      { src: img38, alt: "Restored gold signet ring" },
      { src: img39, alt: "Restored gold signet ring finished" },
    ],
    note: "This is a gold ring that was crushed – it was carefully restored by heating, reshaping and laser welding.",
  },
];

// ─── Image grid (now click-to-open) ───────────────────────────────────────────
// Clicking any image opens the lightbox scoped to THIS grid's own images only,
// so prev/next and the thumbnail strip stay within the same section.
function ImageGrid({ images, columns = 3, onImageClick }) {
  return (
    <div className={columns === 2 ? "rep-grid rep-grid--2" : "rep-grid"}>
      {images.map((img, idx) => (
        <img
          key={idx}
          src={img.src}
          alt={img.alt}
          loading="lazy"
          onClick={() => onImageClick(images, idx)}
          style={{ cursor: "pointer" }}
        />
      ))}
    </div>
  );
}

// ─── Lightbox ─────────────────────────────────────────────────────────────────
function Lightbox({ images, index, onClose, onIndexChange }) {
  const [isPlaying, setIsPlaying] = useState(false);
  const [isFullscreen, setIsFullscreen] = useState(false);
  const thumbStripRef = useRef(null);
  const intervalRef = useRef(null);

  const total = images.length;
  const current = images[index];

  const goPrev = useCallback(() => {
    onIndexChange((index - 1 + total) % total);
  }, [index, total, onIndexChange]);

  const goNext = useCallback(() => {
    onIndexChange((index + 1) % total);
  }, [index, total, onIndexChange]);

  // slideshow autoplay
  useEffect(() => {
    if (isPlaying) {
      intervalRef.current = setInterval(() => {
        onIndexChange((prev) => (prev + 1) % total);
      }, 2200);
    }
    return () => clearInterval(intervalRef.current);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isPlaying, total]);

  // keyboard support
  useEffect(() => {
    const handleKey = (e) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowLeft") goPrev();
      if (e.key === "ArrowRight") goNext();
    };
    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, [onClose, goPrev, goNext]);

  // keep active thumbnail scrolled into view
  useEffect(() => {
    const strip = thumbStripRef.current;
    if (!strip) return;
    const activeThumb = strip.children[index];
    if (activeThumb) {
      activeThumb.scrollIntoView({
        behavior: "smooth",
        inline: "center",
        block: "nearest",
      });
    }
  }, [index]);

  const scrollThumbs = (dir) => {
    const strip = thumbStripRef.current;
    if (!strip) return;
    strip.scrollBy({ left: dir * 160, behavior: "smooth" });
  };

  const fileLabel = (alt) =>
    alt ? alt : `Image ${index + 1}`;

  return (
    <div className="lb-overlay" onClick={onClose}>
      <div
        className={`lb-box${isFullscreen ? " lb-box--fullscreen" : ""}`}
        onClick={(e) => e.stopPropagation()}
      >
        <button
          className="lb-fullscreen-toggle"
          onClick={() => setIsFullscreen((f) => !f)}
          aria-label={isFullscreen ? "Exit fullscreen" : "Enter fullscreen"}
        >
          {isFullscreen ? "🗗" : "⛶"}
        </button>

        <div className="lb-main">
          <div className="lb-image-wrap">
            <img className="lb-image" src={current.src} alt={current.alt} />

            <button
              className="lb-nav lb-nav-left"
              onClick={goPrev}
              aria-label="Previous image"
            >
              ‹
            </button>

            <button
              className="lb-nav lb-nav-right"
              onClick={goNext}
              aria-label="Next image"
            >
              ›
            </button>

            <div className="lb-thumbstrip-row">
              <button
                className="lb-thumb-scroll"
                onClick={() => scrollThumbs(-1)}
                aria-label="Scroll thumbnails left"
              >
                ◀
              </button>

              <div className="lb-thumbstrip" ref={thumbStripRef}>
                {images.map((img, i) => (
                  <img
                    key={i}
                    src={img.src}
                    alt={img.alt}
                    className={
                      i === index ? "lb-thumb lb-thumb-active" : "lb-thumb"
                    }
                    onClick={() => onIndexChange(i)}
                  />
                ))}
              </div>

              <button
                className="lb-thumb-scroll"
                onClick={() => scrollThumbs(1)}
                aria-label="Scroll thumbnails right"
              >
                ▶
              </button>
            </div>
          </div>
        </div>

        <div className="lb-controls">
          <button
            className="lb-play"
            onClick={() => setIsPlaying((p) => !p)}
            aria-label={isPlaying ? "Pause slideshow" : "Play slideshow"}
          >
            {isPlaying ? "❚❚" : "▶"}
          </button>
          <button className="lb-ctrl-btn" onClick={goPrev} aria-label="Previous">
            ◀
          </button>
          <button className="lb-ctrl-btn" onClick={goNext} aria-label="Next">
            ▶
          </button>

          <span className="lb-counter">
            {index + 1}/{total}
          </span>

          <span className="lb-filename">{fileLabel(current.alt)}</span>

          <button
            className="lb-close-bottom"
            onClick={onClose}
            aria-label="Close"
          >
            ✕
          </button>
        </div>
      </div>
    </div>
  );
}

// ─── Main page ────────────────────────────────────────────────────────────────
export default function RepairExamples() {
  // lightboxImages = the specific section's images only (not the whole page)
  const [lightboxImages, setLightboxImages] = useState(null);
  const [lightboxIndex, setLightboxIndex] = useState(0);

  const openLightbox = (images, idx) => {
    setLightboxImages(images);
    setLightboxIndex(idx);
  };

  const closeLightbox = () => {
    setLightboxImages(null);
  };

  const handleIndexChange = (updater) => {
    setLightboxIndex((prev) =>
      typeof updater === "function" ? updater(prev) : updater
    );
  };

  return (
    <div className="rep-page">
      <div className="rep-hero">
        <h1>REPAIR EXAMPLES</h1>
      </div>

      {/* Wrapping content in a new container so hero stays full width */}
      <div className="rep-container">
        <div className="rep-intro">
          <p>Here are a few examples of my previous work,</p>
          <p>I repair most things made from gold, silver or platinum</p>
          <p>
            New pieces of jewellery can be made to your requirements from new
            materials or by melting your old jewellery and reusing the gold and
            precious stones.
          </p>
        </div>

        <p className="rep-caption-bold">
          Below are few items that I handmade for customers.
        </p>
        <ImageGrid images={gridRow1} onImageClick={openLightbox} />

        <p className="rep-caption-bold">
          Below are a few items I have repaired for customers
        </p>

        {repairs.map((section, i) => (
          <div key={i}>
            <ImageGrid
              images={section.images}
              columns={section.columns}
              onImageClick={openLightbox}
            />
            <p className="rep-note">{section.note}</p>
          </div>
        ))}
      </div>

      {lightboxImages !== null && (
        <Lightbox
          images={lightboxImages}
          index={lightboxIndex}
          onClose={closeLightbox}
          onIndexChange={handleIndexChange}
        />
      )}
    </div>
  );
}