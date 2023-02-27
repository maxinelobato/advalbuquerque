"use client";

import { SectionFive } from "./components/sectionfive";
import { SectionFour } from "./components/sectionfour";
import { SectionOne } from "./components/sectionone";
import { SectionSix } from "./components/sectionsix";
import { SectionTwo } from "./components/sectiontwo";

export default function Home() {
  return (
    <>
      <SectionOne />
      <SectionTwo />
      <SectionSix />
      <SectionFour />
      <SectionFive />
    </>
  );
}
