export type ArchiveRoom = {
  id: string;
  number: string;
  title: string;
  short: string;
  tone: string;
};

export const rooms: ArchiveRoom[] = [
  { id: "visual-stories", number: "01", title: "Visual Stories", short: "Ideas given atmosphere.", tone: "Editorial illustration" },
  { id: "imaginary-worlds", number: "02", title: "Imaginary Worlds", short: "Portraits that become places.", tone: "Posters & world-building" },
  { id: "brands-in-the-wild", number: "03", title: "Brands in the Wild", short: "Design entering real life.", tone: "Food, culture & communication" },
  { id: "marks-and-meaning", number: "04", title: "Marks & Meaning", short: "Ideas compressed into form.", tone: "Identity exploration" },
  { id: "things-i-built", number: "05", title: "Things I Built", short: "Spaces for expression.", tone: "Independent products" },
  { id: "stories-that-travel", number: "06", title: "Stories That Travel", short: "Work that became an object.", tone: "Published storytelling" },
  { id: "building-from-zero", number: "07", title: "Building From Zero", short: "A company finds its first visual voice.", tone: "Founding design at Lucio" },
  { id: "behind-the-work", number: "08", title: "Behind the Work", short: "The eye behind the archive.", tone: "Photographs & notes" },
];

export const asset = (path: string) => `/archive/${path}`;
