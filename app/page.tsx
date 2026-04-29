import AboutBridge from './components/AboutBridge'
import Hero from './components/Hero'
import ProgramsPreview from './components/ProgramsPreview'
import StoriesPreview from './components/StoriesPreview'
import DonateCTA from './components/DonateCTA'
import FinalCTA from './components/FinalCTA'

export default function Home() {
  return (
    <>
      <Hero />
      <AboutBridge/>
      <ProgramsPreview/>
      <StoriesPreview/>
      <DonateCTA/>
      <FinalCTA/>
      {/* Other sections will go here: Programs preview, Stories preview, etc. */}
    </>
  )
}