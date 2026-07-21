import Nav from '../components/Nav.jsx'
import { TopRuler, LeftRuler } from '../components/Ruler.jsx'
import Hero from '../components/Hero.jsx'
import About from '../components/About.jsx'
import Skills from '../components/Skills.jsx'
import Projects from '../components/Projects.jsx'
import Contact from '../components/Contact.jsx'
import Footer from '../components/Footer.jsx'

export default function Home() {
  return (
    <div className="min-h-screen bg-canvas">
      <TopRuler />
      <LeftRuler />
      <Nav />
      <main className="pt-14 lg:pt-6">
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}
