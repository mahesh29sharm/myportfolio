"use client";

import Image from "next/image";
import { asset } from "@/lib/archive";
import {
  motion,
  useMotionValue,
  useReducedMotion,
  useScroll,
  useSpring,
  useTransform,
} from "motion/react";
import { useEffect, useRef, useState, type PointerEvent } from "react";

const storyData = [
  { src: "Carousel- visual storytelling/Arcane 1.jpg", title: "Arcane", width: 16000, height: 2000, slides: 10, tone: "Myth / atmosphere" },
  { src: "Carousel- visual storytelling/Oppenheimer 1.jpg", title: "Oppenheimer", width: 16000, height: 2000, slides: 10, tone: "Science / consequence" },
  { src: "Carousel- visual storytelling/Flash 1.jpg", title: "The Flash", width: 11200, height: 2000, slides: 7, tone: "Physics / velocity" },
  { src: "Carousel- visual storytelling/image 95.jpg", title: "Why time feels faster", width: 12800, height: 2000, slides: 8, tone: "Memory / reflection" },
];

export function StoryPhoneExhibit() {
  const [active, setActive] = useState(0);
  const [progress, setProgress] = useState(0);
  const viewport = useRef<HTMLDivElement>(null);
  const drag = useRef({ active: false, x: 0, scroll: 0 });
  const story = storyData[active];

  useEffect(() => {
    if (viewport.current) viewport.current.scrollLeft = 0;
    setProgress(0);
  }, [active]);

  const updateProgress = () => {
    const node = viewport.current;
    if (!node) return;
    const total = node.scrollWidth - node.clientWidth;
    setProgress(total > 0 ? node.scrollLeft / total : 0);
  };

  const handlePointerDown = (event: PointerEvent<HTMLDivElement>) => {
    const node = viewport.current;
    if (!node || event.pointerType === "touch") return;
    drag.current = { active: true, x: event.clientX, scroll: node.scrollLeft };
    node.setPointerCapture(event.pointerId);
  };

  const handlePointerMove = (event: PointerEvent<HTMLDivElement>) => {
    if (!drag.current.active || !viewport.current) return;
    viewport.current.scrollLeft = drag.current.scroll - (event.clientX - drag.current.x);
  };

  const handlePointerUp = (event: PointerEvent<HTMLDivElement>) => {
    drag.current.active = false;
    viewport.current?.releasePointerCapture(event.pointerId);
  };

  const glide = (direction: number) => {
    viewport.current?.scrollBy({ left: direction * (viewport.current.clientWidth * 0.72), behavior: "smooth" });
  };

  return (
    <div className="story-phone-exhibit">
      <div className="story-selector" role="tablist" aria-label="Choose a visual story">
        {storyData.map((item, index) => (
          <button
            key={item.src}
            type="button"
            role="tab"
            aria-selected={active === index}
            className={active === index ? "is-active" : ""}
            onClick={() => setActive(index)}
          >
            <span>0{index + 1}</span>
            <strong>{item.title}</strong>
            <small>{item.tone}</small>
          </button>
        ))}
      </div>

      <div className="phone-plinth">
        <div className="phone-copy">
          <span>Udgamreads · Story reader</span>
          <h3>{story.title}</h3>
          <p>Swipe, drag, or use the controls to move through the original continuous composition.</p>
        </div>

        <div className="phone-stage">
          <div className="glide-prompt">
            <button type="button" onClick={() => glide(-1)} aria-label="Move backward through story">←</button>
            <strong>Glide through the story</strong>
            <button type="button" onClick={() => glide(1)} aria-label="Move forward through story">→</button>
          </div>
          <div className="device-shell">
            <div className="device-speaker" aria-hidden="true" />
            <div className="device-backdrop" aria-hidden="true">
              <Image src={asset(story.src)} alt="" fill sizes="330px" quality={75} />
            </div>
            <div
              ref={viewport}
              className="device-viewport"
              tabIndex={0}
              role="region"
              aria-label={`${story.title}, horizontally scrollable visual story`}
              onScroll={updateProgress}
              onPointerDown={handlePointerDown}
              onPointerMove={handlePointerMove}
              onPointerUp={handlePointerUp}
              onPointerCancel={handlePointerUp}
            >
              <Image
                key={story.src}
                src={asset(story.src)}
                alt={`${story.title} illustrated story sequence`}
                width={story.width}
                height={story.height}
                sizes="(max-width: 768px) 720vw, 290vw"
                className="story-strip"
                style={{ width: `${story.slides * 100}%` }}
                draggable={false}
                unoptimized
                priority={active === 0}
              />
            </div>
            <div className="story-progress" aria-hidden="true"><i style={{ transform: `scaleX(${Math.max(progress, 0.025)})` }} /></div>
          </div>
          <span className="phone-instruction">Swipe, drag, or use the arrow buttons · {Math.round(progress * 100)}%</span>
        </div>
      </div>
    </div>
  );
}

type Poster = { src: string; title: string; note: string };

function TiltPoster({ poster, index }: { poster: Poster; index: number }) {
  const reduceMotion = useReducedMotion();
  const rawX = useMotionValue(0);
  const rawY = useMotionValue(0);
  const x = useSpring(rawX, { stiffness: 140, damping: 22 });
  const y = useSpring(rawY, { stiffness: 140, damping: 22 });

  const move = (event: PointerEvent<HTMLDivElement>) => {
    if (reduceMotion) return;
    const rect = event.currentTarget.getBoundingClientRect();
    rawX.set(((event.clientY - rect.top) / rect.height - 0.5) * -3.5);
    rawY.set(((event.clientX - rect.left) / rect.width - 0.5) * 3.5);
  };

  return (
    <motion.article
      className={`living-poster living-poster--${index + 1}`}
      style={{ rotateX: x, rotateY: y, transformPerspective: 1100 }}
      onPointerMove={move}
      onPointerLeave={() => { rawX.set(0); rawY.set(0); }}
      tabIndex={0}
    >
      <div className="poster-atmosphere" aria-hidden="true" />
      <Image src={asset(poster.src)} alt={`${poster.title} illustrated poster`} fill sizes="(max-width: 768px) 82vw, 30vw" />
      <div className="living-poster-caption"><span>0{index + 1}</span><strong>{poster.title}</strong><small>{poster.note}</small></div>
    </motion.article>
  );
}

export function LivingPosters() {
  const posters: Poster[] = [
    { src: "Posters/Einstein_Poster 1.png", title: "Einstein", note: "Cosmos / energy / curiosity" },
    { src: "Posters/Oppie_Final copy 2 1.png", title: "Oppenheimer", note: "Portrait / atom / aftermath" },
    { src: "Posters/batman9 1.png", title: "Batman", note: "Mask / myth / city" },
  ];

  return (
    <div className="living-poster-stage">
      <div className="poster-haze" aria-hidden="true" />
      {posters.map((poster, index) => <TiltPoster key={poster.src} poster={poster} index={index} />)}
      <p className="poster-motion-note">Move across a poster for restrained depth. Original artwork remains uncropped and unaltered.</p>
    </div>
  );
}

const symbolData = [
  { src: "Symbols/Exploration 1.svg", name: "Exploration", form: "Directional spark" },
  { src: "Symbols/Fitness 1.svg", name: "Fitness", form: "Radiating figure" },
  { src: "Symbols/Flower 1.svg", name: "Flower", form: "Three-part bloom" },
  { src: "Symbols/Group.svg", name: "Group", form: "Collective ring" },
  { src: "Symbols/Growth 1.svg", name: "Growth", form: "Ascending form" },
  { src: "Symbols/Prosperity 1.svg", name: "Prosperity", form: "Open vessel" },
  { src: "Symbols/Ring 1.svg", name: "Ring", form: "Continuous boundary" },
];

export function SymbolArtifacts() {
  const [active, setActive] = useState(0);
  const symbol = symbolData[active];

  return (
    <div className="symbol-cabinet">
      <div className="symbol-focus" aria-live="polite">
        <motion.div
          key={symbol.src}
          initial={{ opacity: 0, scale: .92 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: .4, ease: [0.22, 1, 0.36, 1] }}
        >
          <Image src={asset(symbol.src)} alt={`${symbol.name} exploratory symbol`} width={560} height={560} />
        </motion.div>
        <span>Artifact {String(active + 1).padStart(2, "0")} / 07</span>
        <h3>{symbol.name}</h3>
        <p>{symbol.form}. Concept label from the exploratory set.</p>
      </div>
      <div className="symbol-drawer" role="list" aria-label="Symbol artifacts">
        {symbolData.map((item, index) => (
          <button
            key={item.src}
            type="button"
            className={index === active ? "is-active" : ""}
            onClick={() => setActive(index)}
            onMouseEnter={() => setActive(index)}
            aria-pressed={index === active}
          >
            <span>{String(index + 1).padStart(2, "0")}</span>
            <Image src={asset(item.src)} alt="" width={72} height={72} />
            <strong>{item.name}</strong>
          </button>
        ))}
      </div>
      <div className="exploration-stamp">Exploratory · Unselected</div>
    </div>
  );
}

export function RestaurantConcepts() {
  return (
    <div className="restaurant-concepts">
      <div className="concept-heading">
        <span>Physical-context studies</span>
        <h3>How the graphics might enter the room.</h3>
        <p>Code-built concept visualizations using the real campaign artwork. These are presentation studies—not photographs of produced installations.</p>
      </div>
      <div className="restaurant-scene">
        <div className="menu-object">
          <span className="concept-label">Concept visualization · Menu folio</span>
          <div className="menu-cover"><b>Fervor</b><small>Kitchen notes / sauces / stories</small></div>
          <div className="menu-page"><Image src={asset("Fervor/post2.1 slide2 1.png")} alt="Fervor Green Goddess ingredient graphic placed into a concept menu" fill sizes="(max-width: 768px) 60vw, 24vw" /></div>
        </div>
        <div className="table-object">
          <span className="concept-label">Concept visualization · Table card</span>
          <div className="table-card"><Image src={asset("SuperNaati/Lunch Language/slide3 1.png")} alt="SuperNaati Lunch Language graphic placed into a concept table card" fill sizes="(max-width: 768px) 60vw, 22vw" /></div>
          <div className="table-shadow" aria-hidden="true" />
        </div>
        <div className="wrap-object">
          <span className="concept-label">Concept visualization · Printed wrap</span>
          <div className="food-wrap"><Image src={asset("SuperNaati/Egg Curry.png")} alt="SuperNaati Egg Curry artwork placed onto a concept printed wrap" fill sizes="(max-width: 768px) 80vw, 34vw" /></div>
        </div>
      </div>
    </div>
  );
}

const productScreens = [
  { src: "home.png", label: "Discover", width: 200, height: 500 },
  { src: "topic-list.png", label: "Enter", width: 200, height: 500 },
  { src: "thread.png", label: "Read", width: 200, height: 500 },
  { src: "replies.png", label: "Reply", width: 200, height: 500 },
  { src: "reactions.png", label: "React", width: 200, height: 500 },
  { src: "story-continuation.png", label: "Continue", width: 200, height: 500 },
  { src: "write.png", label: "Write", width: 200, height: 500 },
] as const;

export function ProductLab() {
  const [active, setActive] = useState(0);
  const { src, label, width, height } = productScreens[active];
  return (
    <div className="product-lab">
      <blockquote className="articled-motivation">
        <span>Articled · original motivation</span>
        <p>“I wanted somewhere to express opinions without worrying about judgment.”</p>
      </blockquote>
      <div className="trace-console">
        <div className="trace-screen" aria-live="polite">
          <motion.div className="trace-mockup" key={src} initial={{ opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: .35 }}>
            <Image src={asset(`Trace/${src}`)} alt={`Trace mobile screen: ${label}`} width={width} height={height} sizes="(max-width: 768px) 86vw, 30vw" />
          </motion.div>
        </div>
        <div className="trace-steps">
          <span>Trace · interaction sequence</span>
          <h3>{label}</h3>
          <div role="tablist" aria-label="Trace product journey">
            {productScreens.map((item, index) => (
              <button key={item.src} type="button" role="tab" aria-selected={active === index} onClick={() => setActive(index)}>
                <span>{String(index + 1).padStart(2, "0")}</span>{item.label}
              </button>
            ))}
          </div>
          <p>A collaborative story space designed around discovery, response, continuation, and writing.</p>
        </div>
      </div>
    </div>
  );
}

const publicationImages = [
  { src: "slide5 2.png", label: "Published object" },
  { src: "images (2) 1.png", label: "Documentary photograph 01" },
  { src: "images (3) 1.png", label: "Documentary photograph 02" },
  { src: "images 2.png", label: "Documentary photograph 03" },
];

export function GraphicNovelExhibit() {
  const [active, setActive] = useState(0);
  const current = publicationImages[active];
  return (
    <div className="novel-exhibit">
      <div className="book-stage">
        <div className="book-object">
          <div className="book-pages" aria-hidden="true" />
          <motion.div key={current.src} initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: .45 }}>
            <Image src={asset(`Modi 101/${current.src}`)} alt={`${current.label} from the graphic novel archive`} fill sizes="(max-width: 768px) 76vw, 39vw" />
          </motion.div>
        </div>
        <span>Published object · documentary archive</span>
      </div>
      <div className="novel-evidence">
        <span>Evidence surface</span>
        <h3>From published object to public visibility.</h3>
        <p>The available photographs document the book in circulation. They are presented as evidence of visibility, never as personal endorsements.</p>
        <div className="evidence-selector" role="tablist" aria-label="Graphic novel evidence photographs">
          {publicationImages.map((item, index) => (
            <button key={item.src} type="button" role="tab" aria-selected={active === index} onClick={() => setActive(index)}>
              <Image src={asset(`Modi 101/${item.src}`)} alt="" width={120} height={120} />
              <span>{item.label}</span>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}

export function LucioMonument() {
  const target = useRef<HTMLDivElement>(null);
  const reduceMotion = useReducedMotion();
  const { scrollYProgress } = useScroll({ target, offset: ["start end", "end start"] });
  const titleY = useTransform(scrollYProgress, [0, .5, 1], reduceMotion ? [0, 0, 0] : [90, 0, -70]);
  const markScale = useTransform(scrollYProgress, [0, .48, 1], reduceMotion ? [1, 1, 1] : [.86, 1, 1.08]);
  const markRotate = useTransform(scrollYProgress, [0, 1], reduceMotion ? [0, 0] : [-4, 4]);

  return (
    <div ref={target} className="lucio-monument">
      <div className="lucio-monument-stage">
        <motion.div className="lucio-giant-type" style={{ y: titleY }}>LUCIO</motion.div>
        <motion.div className="lucio-giant-mark" style={{ scale: markScale, rotate: markRotate }}>
          <Image src={asset("Lucio/Lucio-Dark 1.png")} alt="Lucio identity mark" fill sizes="(max-width: 768px) 58vw, 28vw" />
        </motion.div>
        <p>Legal intelligence<br />that keeps up.</p>
        <span>Founding identity · Early system</span>
      </div>

      <div className="lucio-gallery">
        <div className="lucio-gallery-item lucio-gallery-banner">
          <span>01 · Environmental-scale mockup</span>
          <Image src={asset("Lucio/Construction Banner Mockup.png")} alt="Lucio construction banner mockup" fill sizes="100vw" />
        </div>
        <div className="lucio-gallery-item lucio-gallery-wordmark">
          <span>02 · Wordmark</span>
          <Image src={asset("Lucio/Lucio Logo Text Dark 1.png")} alt="Lucio wordmark" width={1086} height={422} />
        </div>
        <div className="lucio-gallery-item lucio-gallery-tote">
          <span>03 · Branded object mockup</span>
          <Image src={asset("Lucio/Tote Bag.png")} alt="Lucio identity on a tote bag mockup" fill sizes="(max-width: 768px) 90vw, 58vw" />
        </div>
      </div>
    </div>
  );
}
