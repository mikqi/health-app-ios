import { motion } from 'framer-motion'

const closeIcon = (
  <svg style={{ width: 16 }} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
  </svg>
)

const sparkleIcon = (
  <svg style={{ width: 32 }} className="text-blue-500" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
  </svg>
)

const Card = ({ handleTap }) => (
  <motion.div
    whileTap={{ scale: 0.9 }}
    onClick={handleTap}
    className="bg-white rounded-xl"
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
        <span className="text-blue-500">Review</span>
      </div>
    </div>
  </motion.div>
)

export default Card
