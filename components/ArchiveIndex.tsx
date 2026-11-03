import { rooms } from "@/lib/archive";
import Link from "next/link";
import { Reveal } from "./Reveal";

export function ArchiveIndex() {
  return (
    <nav id="index" className="archive-index" aria-label="Exhibition rooms">
      <span className="compact-index-title">Explore the archive</span>
      <div className="room-list">
        {rooms.map((room, index) => (
          <Reveal key={room.id} delay={index * 0.025}>
            <Link href={`#${room.id}`} className="room-link">
              <span className="room-number">{room.number}</span>
              <span className="room-name">{room.title}</span>
            </Link>
          </Reveal>
        ))}
      </div>
    </nav>
  );
}
