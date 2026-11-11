import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Marquee from './components/Marquee'
import Disciplines from './components/Disciplines'
import Path from './components/Path'
import Library from './components/Library'
import Mentors from './components/Mentors'
import Pricing from './components/Pricing'
import Testimonials from './components/Testimonials'
import FAQ from './components/FAQ'
import CTA from './components/CTA'
import Footer from './components/Footer'
import useReveal from './components/useReveal'

export default function App() {
  useReveal()

  return (
    <>
      <div className="starfield" aria-hidden="true" />
      <Navbar />
      <main>
        <Hero />
        <Marquee />
        <Disciplines />
        <Path />
        <Library />
        <Mentors />
        <Pricing />
        <Testimonials />
        <FAQ />
        <CTA />
      </main>
      <Footer />
    </>
  )
}
