import { About } from "@/components/About";
import { ArchiveIndex } from "@/components/ArchiveIndex";
import { CollectionSections } from "@/components/CollectionSections";
import { Navigation } from "@/components/Navigation";
import { Reveal } from "@/components/Reveal";

export default function Home() {
  return (
    <main id="top">
      <Navigation />
      <section className="hero" aria-labelledby="hero-title">
        <div className="hero-meta">
          <span>Personal Creative Archive</span>
          <span>2016—Now</span>
        </div>
        <Reveal>
          <h1 id="hero-title">I make <em>stories,</em><br />symbols and systems.</h1>
        </Reveal>
        <div className="hero-bottom">
          <Reveal delay={0.12}><p>This is where I keep the evidence.</p></Reveal>
          <Reveal className="hero-note" delay={0.2}><p>A curated archive of imagined worlds, living brands, published stories, and things I’ve built.</p></Reveal>
        </div>
        <a className="enter-cue" href="#archive">Enter the archive <span>↓</span></a>
      </section>

      <div id="archive">
        <ArchiveIndex />
        <CollectionSections />
        <About />
      </div>
    </main>
  );
}
