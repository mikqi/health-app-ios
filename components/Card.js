import { motion } from 'framer-motion'
import { closeIcon, sparkleIcon } from './Icons'

const Card = ({ handleTap }) => (
  <motion.div
    whileTap={{ scale: 0.9 }}
    onClick={handleTap}
    className="bg-white rounded-xl mb-2"
  >
    <div className="flex justify-between items-center px-4 py-2 border-b">
      <span className="font-bold uppercase text-xs text-gray-600">Health Checklist</span>
      <span>
        {closeIcon}
      </span>
    </div>
    <div className="flex px-4 py-2">
      <div className="w-40 flex justify-center">{sparkleIcon}</div>
      <div className="ml-4 flex flex-col">
        <span className="font-bold">Make sure the health features on your iPhone are set up the way you want them.</span>
        <span className="text-blue-600">Review</span>
      </div>
    </div>
  </motion.div>
)

export default Card
