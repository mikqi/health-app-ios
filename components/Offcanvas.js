import { motion } from 'framer-motion'

const chevronLeft = (
  <svg style={{ width: 16 }} className="text-blue-500" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
  </svg>
)

const Offcanvas = ({ variants, setActive }) => (
  <motion.div
    variants={variants}
    initial="hidden"
    animate="show"
    exit="exit"
    className="overlay-container w-full bg-gray-200 absolute rounded-t-lg shadow-md bottom-0"
  >
    <div className="flex justify-between px-4 py-3 bg-white rounded-t-lg font-medium">
      <button type="button" className="text-blue-500 flex items-center" onClick={() => setActive(false)}>
        {chevronLeft}
        <span className="ml-1">Back</span>
      </button>
      <button type="button" className="text-blue-500" onClick={() => setActive(false)}>Done</button>
    </div>
    <div>
      <div className="flex flex-col items-center">
        <div className="my-4 h-4">Icon</div>
        <div className="text-xl font-bold">Health Checklist</div>
        <div className="my-1 text-center text-sm">Set up your iPhone to keep an eye on things for you</div>
        <div className="text-xs mb-4 text-gray-600">The following reflect the settings of &quot;Your Phone&quot;</div>
      </div>
    </div>
    <div className="px-4">
      <h1 className="text-lg font-bold mb-1 mt-2">Inactive</h1>
      {/* <Card /> */}
    </div>
  </motion.div>
)

export default Offcanvas
