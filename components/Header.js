import React from 'react'
import { motion } from 'framer-motion'

const Header = () => (
  <motion.div
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    transition={{ duration: 1.5 }}
    className="flex w-full justify-between py-3 mb-4"
  >
    <div className="flex flex-col">
      <span className="text-3xl font-bold">
        Summary
      </span>
    </div>
    <div className="self-end">
      <img src="images/avatar.jpg" alt="avatar  " className="w-8 rounded-full" />
    </div>
  </motion.div>
)

export default Header
