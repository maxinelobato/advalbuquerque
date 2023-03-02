'use client';

import { About } from './components/about';
import { AccordionFaq } from './components/accordionfaq';
import { Footer } from './components/footer';
import { SectionFive } from './components/sectionfive';
import { SectionFour } from './components/sectionfour';
import { SectionOne } from './components/sectionone';
import { SectionSeven } from './components/sectionseven';
import { SectionSix } from './components/sectionsix';
import { SectionTwo } from './components/sectiontwo';

export default function Home() {
  return (
    <>
      <SectionOne />
      <SectionTwo />
      <SectionSeven />
      <SectionSix />
      <SectionFour />
      <SectionFive />
      <About />
      <AccordionFaq />
      <Footer />
    </>
  );
}
