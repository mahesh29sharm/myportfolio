import Image from "next/image";
import { asset } from "@/lib/archive";
import { Reveal } from "./Reveal";
import { SectionHeader } from "./SectionHeader";

export function About() {
  return (
    <section id="behind-the-work" className="collection behind-work">
      <SectionHeader number="08" eyebrow="Photographs & notes" title="Behind the Work">
        <p>The mediums keep changing. The instinct doesn’t: notice closely, make a connection, give it form, then build enough of it that someone else can enter.</p>
      </SectionHeader>
      <div className="personal-grid">
        <Reveal className="personal-portrait"><Image src={asset("me/WhatsApp Image 2026-11-03 at 12.14.44.jpeg")} alt="Portrait standing in the doorway of a red train" fill sizes="(max-width: 768px) 88vw, 37vw" /></Reveal>
        <Reveal className="personal-desk"><Image src={asset("me/WhatsApp Image 2026-11-03 at 12.12.33.jpeg")} alt="Warm creative desk filled with artwork, objects, and a laptop" fill sizes="(max-width: 768px) 88vw, 38vw" /></Reveal>
        <Reveal className="personal-night"><Image src={asset("me/WhatsApp Image 2026-11-03 at 12.08.31.jpeg")} alt="Urban night scene beneath the moon" fill sizes="(max-width: 768px) 88vw, 32vw" /></Reveal>
        <Reveal className="personal-cloud"><Image src={asset("me/WhatsApp Image 2026-11-03 at 12.12.30.jpeg")} alt="Blue and peach cloudscape" fill sizes="(max-width: 768px) 88vw, 32vw" /></Reveal>
        <Reveal className="personal-lego"><Image src={asset("me/WhatsApp Image 2026-11-03 at 12.09.16.jpeg")} alt="Close-up of LEGO rescue figures" fill sizes="(max-width: 768px) 88vw, 28vw" /></Reveal>
      </div>

      <div id="about" className="about-copy">
        <Reveal>
          <p className="about-lead">A multidisciplinary creative making identities, images, publications, products, and the occasional world since 2016.</p>
        </Reveal>
        <Reveal className="about-body">
          <p>My practice has moved through independent products, storytelling communities, published graphic novels, restaurant communication, digital creative work, and founding design at a startup.</p>
          <p>I’m less interested in defending one discipline than in finding the right form for an idea. Sometimes that is a symbol. Sometimes it is eight illustrated panels, a restaurant post, a book, or a product someone can contribute to.</p>
        </Reveal>
        <div className="practice-list">
          <span>Identity & art direction</span>
          <span>Visual storytelling & illustration</span>
          <span>Editorial & campaigns</span>
          <span>Information design</span>
          <span>Digital products & experiments</span>
        </div>
      </div>

      <footer id="contact" className="contact-footer">
        <p>Have an idea that needs a world around it?</p>
        <h2>Let’s make something worth keeping.</h2>
        <div className="contact-row">
          <span>Open to thoughtful collaborations</span>
          <span>Based in India · Working across disciplines</span>
        </div>
        <a href="#top" className="back-top">Back to the threshold ↑</a>
      </footer>
    </section>
  );
}
