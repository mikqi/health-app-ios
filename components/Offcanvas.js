import { motion } from 'framer-motion'
import { chevronLeft, noteIcon } from './Icons'
import Panel from './Panel'
import Title from './Title'

const Offcanvas = ({ variants, setActive }) => (
  <motion.div
    variants={variants}
    initial="hidden"
    animate="show"
    exit="exit"
    className="overlay-container w-full bg-gray-200 absolute rounded-t-lg shadow-md bottom-0"
  >
    <div className="flex justify-between px-4 py-3 bg-white rounded-t-lg font-medium">
      <button type="button" className="text-blue-600 flex items-center" onClick={() => setActive(false)}>
        {chevronLeft()}
        <span className="ml-1">Back</span>
      </button>
      <button type="button" className="text-blue-600" onClick={() => setActive(false)}>Done</button>
    </div>
    <div>
      <div className="flex flex-col items-center">
        <div className="my-4 p-3 rounded-full bg-white">
          <img src="/images/health-icon.jpg" className="h-10" alt="health-icon" />
        </div>
        <div className="text-xl font-bold">Health Checklist</div>
        <div className="my-1 text-center text-sm">Set up your iPhone to keep an eye on things for you</div>
        <div className="text-xs mb-4 text-gray-600">The following reflect the settings of &quot;Your Phone&quot;</div>
      </div>
    </div>
    <div className="px-4">
      <Title title="Inactive" />

      <Panel className="pr-4 py-2 flex">
        <div className="w-32 flex items-start justify-center">
          {noteIcon}
        </div>
        <div>
          <div className="font-semibold">
            Medical ID
          </div>
          <div className="text-gray-600 border-gray-300 border-b pb-1 leading-5 text-sm">
            Medical ID gives first responders vital information in an emergency
          </div>
          <div className="text-blue-500 font-medium">
            Set Up
          </div>
        </div>
      </Panel>

      <Title title="Active" />
      <Panel className="px-4 py-2 flex">
        <div className="w-32 flex items-start justify-center pr-4">
          <div className="w-12 h-12 flex justify-center items-center font-bold text-white rounded-full bg-red-600">
            SOS
          </div>
        </div>
        <div>
          <div className="font-semibold">
            Emergency SOS
          </div>
          <div className="text-gray-600 leading-5 text-sm">
            Your iPhone can quickly call emergency services and message your emergency contacts. This feature is always active.
          </div>
        </div>
      </Panel>
    </div>
  </motion.div>
)

export default Offcanvas
