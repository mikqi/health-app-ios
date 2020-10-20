import { motion } from 'framer-motion'

const Panel = ({ className, children, handleTap }) => (
  <motion.div
    whileTap={{ scale: 0.9 }}
    onClick={handleTap}
    className={`bg-white rounded-xl mb-2 ${className}`}
  >
    {children}
  </motion.div>
)

export default Panel
