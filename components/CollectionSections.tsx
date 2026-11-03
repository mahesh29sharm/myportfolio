import Image from "next/image";
import { asset } from "@/lib/archive";
import { Reveal } from "./Reveal";
import { SectionHeader } from "./SectionHeader";
import {
  GraphicNovelExhibit,
  LivingPosters,
  LucioMonument,
  ProductLab,
  RestaurantConcepts,
  StoryPhoneExhibit,
  SymbolArtifacts,
} from "./ImmersiveRooms";

export function CollectionSections() {
  return (
    <>
      <section id="visual-stories" className="collection visual-stories">
        <SectionHeader number="01" eyebrow="Editorial illustration" title="Visual Stories">
          <p>I like the moment when information stops feeling like information and becomes a world. These long-form visual stories use atmosphere, pacing, and words to make an idea stay.</p>
        </SectionHeader>

        <StoryPhoneExhibit />
        <p className="room-transition">From stories that unfold in sequence, to worlds held in a single frame.</p>
      </section>

      <section id="imaginary-worlds" className="collection imaginary-worlds">
        <SectionHeader number="02" eyebrow="Posters & world-building" title="Imaginary Worlds" light>
          <p>Some figures arrive with a universe already attached. I rebuild that universe through color, symbols, type, and the tension of a single composed image.</p>
        </SectionHeader>
        <LivingPosters />
        <Reveal className="object-table">
          <p>Objects from the archive</p>
          <div className="folder-strip">
            {["Posters/Folder.png", "Posters/Folder-1.png", "Posters/Folder-2.png"].map((src, index) => (
              <Image key={src} src={asset(src)} alt={`Poster presentation folder ${index + 1}`} width={4096} height={3072} sizes="(max-width: 768px) 70vw, 31vw" />
            ))}
          </div>
        </Reveal>
      </section>

      <section id="brands-in-the-wild" className="collection brands-in-wild">
        <SectionHeader number="03" eyebrow="Food, culture & communication" title="Brands in the Wild">
          <p>A brand becomes real in the small moments: how it explains a sauce, announces a meal, sketches a dish, or speaks in the language of its city.</p>
        </SectionHeader>

        <div className="brand-chapter fervor-chapter">
          <Reveal className="chapter-note">
            <span>Fervor</span>
            <h3>From kitchen notes to finished communication.</h3>
            <p>Process, illustration, and ingredient-led information design.</p>
          </Reveal>
          <div className="fervor-workbench">
            <Reveal className="fervor-sketch">
              <figure>
                <Image
                  src={asset("Fervor/Sketch 1.png")}
                  alt="Open Fervor sketchbook with dish, plating, and ingredient studies"
                  width={1348}
                  height={758}
                  sizes="(max-width: 768px) 100vw, 94vw"
                />
                <figcaption>
                  <span>Sketchbook study</span>
                  <p>Dishes, plating, and menu ideas taking shape on paper.</p>
                </figcaption>
              </figure>
            </Reveal>
            <Reveal className="fervor-plated-sketch">
              <Image
                src={asset("Fervor/Post Updated 3 1.png")}
                alt="Open Fervor sketchbook with plated dish and menu-development studies"
                fill
                sizes="(max-width: 768px) 92vw, 58vw"
              />
            </Reveal>
            <Reveal className="fervor-kitchen"><Image src={asset("Fervor/Kitchen Post 3 1.png")} alt="Fervor kitchen illustration in an open notebook" fill sizes="(max-width: 768px) 72vw, 33vw" /></Reveal>
            <div className="sauce-trio">
              {["post2.1 slide1 1.png", "post2.1 slide2 1.png", "post2.1 slide3 1.png"].map((name, index) => (
                <Reveal key={name} delay={index * 0.05}><Image src={asset(`Fervor/${name}`)} alt={`Fervor ingredient diagram ${index + 1}`} width={870} height={1087} sizes="(max-width: 768px) 64vw, 28vw" /></Reveal>
              ))}
            </div>
          </div>
        </div>

        <div className="brand-chapter supernaati-chapter">
          <Reveal className="chapter-note chapter-note--bright">
            <span>SuperNaati</span>
            <h3>A brand with an appetite—and an accent.</h3>
            <p>Culture-led communication with a loud vernacular palette.</p>
          </Reveal>
          <div className="lunch-wall">
            {["slide1 2.png", "Slide2 1.png", "slide3 1.png", "slide4 1.png", "slide5 1.png", "slide6 1.png"].map((name, index) => (
              <Reveal key={name} delay={index * 0.035}><Image src={asset(`SuperNaati/Lunch Language/${name}`)} alt={`SuperNaati Lunch Language campaign slide ${index + 1}`} width={1080} height={1350} sizes="(max-width: 768px) 70vw, 27vw" /></Reveal>
            ))}
          </div>
          <div className="ghee-row">
            {["cover 1.png", "doodle-slide1 1.png", "v2-slide2 1.png"].map((name, index) => (
              <Reveal key={name}><Image src={asset(`SuperNaati/Ghee Roast/${name}`)} alt={`SuperNaati Ghee Roast campaign slide ${index + 1}`} width={1080} height={1350} sizes="(max-width: 768px) 72vw, 30vw" /></Reveal>
            ))}
          </div>
        </div>
        <RestaurantConcepts />
      </section>

      <section id="marks-and-meaning" className="collection marks-meaning">
        <SectionHeader number="04" eyebrow="Identity exploration" title="Marks & Meaning">
          <p>A symbol is a small container for a large promise. I’m interested in how little form is needed before an idea begins to feel inevitable.</p>
        </SectionHeader>
        <SymbolArtifacts />
        <p className="disclosure">Exploratory symbol directions for Ultrahuman, created through Yaas Media. Not selected or produced.</p>
      </section>

      <section id="things-i-built" className="collection things-built">
        <SectionHeader number="05" eyebrow="Independent products" title="Things I Built" light>
          <p>Sometimes an idea needs to become a place rather than an image—a place where people can discover, respond, continue, and make something together.</p>
        </SectionHeader>
        <ProductLab />
      </section>

      <section id="stories-that-travel" className="collection stories-travel">
        <SectionHeader number="06" eyebrow="Published storytelling" title="Stories That Travel">
          <p>A story changes when it leaves the screen. It becomes a book, passes through hands, and accumulates a public life of its own.</p>
        </SectionHeader>
        <GraphicNovelExhibit />
      </section>

      <section id="building-from-zero" className="collection lucio-room">
        <SectionHeader number="07" eyebrow="Founding design at Lucio" title="Building a Brand From Zero">
          <p>Founding design means giving a young company a visual center before the rest of the system exists. I shaped Lucio’s early identity and its first creative assets.</p>
        </SectionHeader>
        <LucioMonument />
        <div className="lucio-copy lucio-milestone"><span>Later company milestone</span><p>Lucio went on to report a $5 million fundraise.</p><small>The identity work and fundraise are presented as parts of the same company timeline, not as cause and effect.</small></div>
      </section>
    </>
  );
}
