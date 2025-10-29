import React from 'react'
import IntroSection from './components/sections/IntroSection'
import MainSection from './components/sections/MainSection'
import OutroSection from './components/sections/OutroSection'

const App = () => {
  return (
    <div className="scroll-smooth">
      <IntroSection />
      <MainSection />
      <OutroSection />
    </div>
  )
}

export default App
