import React, { useState, useEffect, useRef } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay } from 'swiper/modules'
import 'swiper/css'
import Feature from './Feature'
import { featureData } from './featureData'

const FeatureSection = () => {
  const [activeFeature, setActiveFeature] = useState(0)
  const [ref, inView] = useInView({
    threshold: 0.5,
  })

  const nextFeature = () => {
    setActiveFeature((prev) => (prev < 4 ? prev + 1 : prev))
  }

  const handleScroll = (e) => {
    if (inView) {
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
          <motion.div
            className="space-y-8 max-w-xl mx-auto lg:mx-0"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <AnimatePresence mode="wait">
              <motion.div
                key={activeFeature}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.3 }}
              >
                <h2 className="text-4xl lg:text-5xl font-bold mb-6 text-white">{featureData[activeFeature].title}</h2>
                <p className="text-gray-300 text-lg leading-relaxed">{featureData[activeFeature].description}</p>
              </motion.div>
            </AnimatePresence>

            <div className="hidden md:flex space-x-4">
              {featureData.map((feature, index) => (
                <Feature
                  key={feature.id}
                  data={feature}
                  isActive={index === activeFeature}
                  onClick={() => setActiveFeature(index)}
                />
              ))}
            </div>
          </motion.div>
          
          <div className="relative">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeFeature}
                className="relative"
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -50 }}
                transition={{ duration: 0.3 }}
              >
                <motion.img
                  src={featureData[activeFeature].image}
                  alt={featureData[activeFeature].title}
                  className="w-full max-w-lg mx-auto drop-shadow-2xl"
                />
              </motion.div>
            </AnimatePresence>
          </div>
        </div>

        <div className="md:hidden">
          <Swiper
            modules={[Autoplay]}
            spaceBetween={20}
            slidesPerView={1.2}
            centeredSlides={true}
            autoplay={{
              delay: 3000,
              disableOnInteraction: false,
            }}
            speed={800}
            onSlideChange={(swiper) => setActiveFeature(swiper.activeIndex)}
          >
            {featureData.map((feature, index) => (
              <SwiperSlide key={feature.id}>
                <div className="py-2">
                  <Feature
                    data={feature}
                    isActive={index === activeFeature}
                    onClick={() => setActiveFeature(index)}
                  />
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </div>
  )
}

export default FeatureSection;