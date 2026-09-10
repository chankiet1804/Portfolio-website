import { useAnchorScroll } from './hooks/useAnchorScroll'
import { Navbar } from './components/layout/Navbar'
import { Footer } from './components/layout/Footer'
import { BackgroundLayer } from './components/ui/BackgroundLayer'
import { Hero } from './components/sections/Hero'
import { About } from './components/sections/About'
import { Skills } from './components/sections/Skills'
import { Experience } from './components/sections/Experience'
import { Projects } from './components/sections/Projects'
import { Contact } from './components/sections/Contact'

function App() {
  useAnchorScroll()

  return (
    // isolate keeps the negative-z backdrop inside this stacking context.
    <div className="isolate min-h-screen bg-base">
      <BackgroundLayer />
      <Navbar />
      <main>
        <Hero />
        <About />
        <Skills />
        <Experience />
        <Projects />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}

export default App
