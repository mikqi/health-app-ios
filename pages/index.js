import { AnimatePresence, motion } from 'framer-motion'
import { useState } from 'react'

const offcanvas = {
  hidden: { y: '100%', opacity: 0 },
  show: { y: 0, opacity: 1, transition: { duration: 0.3, type: 'just' } },
  exit: { y: '100%', opacity: 1, transition: { duration: 0.3, type: 'just' } },
}

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1, scale: 1, borderRadius: '0px', transition: { duration: 0.5 },
  },
  zoomOut: {
    scale: 0.95, y: -10, borderRadius: '15px', transition: { duration: 0.3 },
  },
}

const overlay = {
  hidden: { opacity: 0, transition: { duration: 0.15 } },
  show: { opacity: 0.75, transition: { duration: 0.2, delay: 0.15 } },
}

export default function Home() {
  const [active, setActive] = useState(false)
  return (
    <>
      <motion.div
        variants={container}
        initial="hidden"
        animate={active ? 'zoomOut' : 'show'}
        className="flex items-center justify-center min-h-screen overflow-hidden bg-gray-100"
      >
        <motion.button
          type="button"
          className="py-2 px-5 bg-blue-500 text-white rounded-lg"
          whileTap={{ scale: 0.9 }}
          onTap={() => setActive(!active)}
        >
          Click Me
        </motion.button>
      </motion.div>
      <motion.div
        initial="hidden"
        animate={active ? 'show' : 'hidden'}
        variants={overlay}
        style={{ pointerEvents: 'auto' }}
        className="z-0 fixed w-screen h-screen bg-black opacity-75 top-0 left-0"
        onClick={() => setActive(!active)}
      >
        <span className="w-full h-full absolute top-0 left-0">&nbsp;</span>
      </motion.div>
      <AnimatePresence>
        {active && (
          <motion.div
            variants={offcanvas}
            initial="hidden"
            animate="show"
            exit="exit"
            className="overlay-container w-full bg-white absolute rounded-t-3xl shadow-md bottom-0"
          >
            Hello
          </motion.div>
        ) }
      </AnimatePresence>
    </>
  )
}
