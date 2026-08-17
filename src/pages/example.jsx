import "./example.css";

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

function ImageGrid({ images, columns = 3 }) {
  return (
    <div className={columns === 2 ? "rep-grid rep-grid--2" : "rep-grid"}>
      {images.map((img, idx) => (
        <img key={idx} src={img.src} alt={img.alt} loading="lazy" />
      ))}
    </div>
  );
}

export default function RepairExamples() {
  return (
    <div className="rep-page">
      <div className="rep-hero">
        <h1>Repair Examples</h1>
      </div>

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
      <ImageGrid images={gridRow1} />

      <p className="rep-caption-bold">
        Below are a few items I have repaired for customers
      </p>

      {repairs.map((section, i) => (
        <div key={i}>
          <ImageGrid images={section.images} columns={section.columns} />
          <p className="rep-note">{section.note}</p>
        </div>
      ))}
    </div>
  );
}