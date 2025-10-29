import React, { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import FeatureCard from './FeatureCard'
import FeatureContent from './FeatureContent'
import FeatureCarousel from './FeatureCarousel'
import { featureData } from './featureData'

const MainSection = () => {
  const [activeFeature, setActiveFeature] = useState(0)
  const [ref, inView] = useInView({
    threshold: 0.5,
  })

  const nextFeature = () => {
    setActiveFeature((prev) => (prev < 4 ? prev + 1 : prev))
  }

  const handleScroll = (e) => {
    if (inView && window.innerWidth >= 768) {
      if (e.deltaY > 0 && activeFeature < 4) {
        e.preventDefault()
        nextFeature()
      }
    }
  }

  useEffect(() => {
    window.addEventListener('wheel', handleScroll, { passive: false })
    return () => window.removeEventListener('wheel', handleScroll)
  }, [activeFeature, inView])

  return (
    <div ref={ref} className="min-h-screen bg-gray-800 flex items-center justify-center overflow-hidden">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <FeatureContent 
            activeFeature={activeFeature} 
            setActiveFeature={setActiveFeature} 
          />
          <FeatureCarousel 
            activeFeature={activeFeature} 
            setActiveFeature={setActiveFeature} 
          />
        </div>
      </div>
    </div>
  )
}

export default MainSection