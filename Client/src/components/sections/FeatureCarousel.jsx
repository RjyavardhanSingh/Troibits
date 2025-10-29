import React from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay } from 'swiper/modules'
import 'swiper/css'
import FeatureCard from './FeatureCard'
import { featureData } from './featureData'

const FeatureCarousel = ({ activeFeature, setActiveFeature }) => {
  return (
    <>
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

      <div className="md:hidden">
        <Swiper
          modules={[Autoplay]}
          spaceBetween={20}
          slidesPerView={1.2}
          centeredSlides={true}
          autoplay={false}
          speed={400}
          grabCursor={true}
          touchRatio={1.5}
          onSlideChange={(swiper) => setActiveFeature(swiper.activeIndex)}
        >
          {featureData.map((feature, index) => (
            <SwiperSlide key={feature.id}>
              <div className="py-2">
                <FeatureCard
                  data={feature}
                  isActive={index === activeFeature}
                  onClick={() => setActiveFeature(index)}
                />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </>
  )
}

export default FeatureCarousel