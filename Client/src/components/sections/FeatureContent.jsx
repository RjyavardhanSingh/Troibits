import React from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import FeatureCard from './FeatureCard'
import { featureData } from './featureData'

const FeatureContent = ({ activeFeature, setActiveFeature }) => {
  return (
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
          <h2 className="text-4xl lg:text-5xl font-bold mb-6 text-white">
            {featureData[activeFeature].title}
          </h2>
          <p className="text-gray-300 text-lg leading-relaxed">
            {featureData[activeFeature].description}
          </p>
        </motion.div>
      </AnimatePresence>

      <div className="hidden md:flex space-x-4">
        {featureData.map((feature, index) => (
          <FeatureCard
            key={feature.id}
            data={feature}
            isActive={index === activeFeature}
            onClick={() => setActiveFeature(index)}
          />
        ))}
      </div>
    </motion.div>
  )
}

export default FeatureContent