import Intro from '@/components/intro';
import SectionDivider from '@/components/section-divider';
import About from '@/components/about';
import Projects from '@/components/projects';
import Skills from '@/components/skills';
import Experience from '@/components/experience';
import Contact from '@/components/contact';
import Resource from '@/components/resource';
import Resources from '@/components/resources';

export default function Home() {
  return (
    <main className="flex flex-col items-center px-4 pt-28">
      <Intro />
      <SectionDivider/>
      <About />
      <Projects />
      <Experience />
      <Resources />
      <Skills />
    </main>
  )
}
