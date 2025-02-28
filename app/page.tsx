'use client'
import Navbar from '../components/Navbar';
import Header from '../components/Header';
import Education from '../components/Education';
import Experience from '../components/Experience';
import Projects from '../components/Projects';
import Skills from '../components/Skills';
import Achievements from '../components/Achievements';
import Footer from '../components/Footer';

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <Header />
      <main className="flex-grow">
        <Experience />
        <Education />
        <Projects />
        <Skills />
        <Achievements />
      </main>
      <Footer />
    </div>
  );
}