import React from 'react'
import { motion } from 'framer-motion'

const FeatureCard = ({ data, isActive, onClick }) => {
  return (
    <div 
      onClick={onClick}
      className={`cursor-pointer p-4 rounded-xl transition-all duration-500 ${
        isActive 
          ? 'bg-indigo-600 text-white shadow-xl transform scale-105 border border-indigo-400' 
          : 'bg-gray-900 text-gray-300 hover:bg-gray-700 border border-gray-700'
      }`}
    >
      <motion.h3 
        className="text-lg font-semibold text-center md:text-left"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.3 }}
      >
        {data.title}
      </motion.h3>
    </div>
  )
}

export default FeatureCard