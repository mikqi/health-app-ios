import { AnimatePresence, motion } from 'framer-motion'
import { useState } from 'react'
import Header from '../components/Header'
import Card from '../components/Card'

const offcanvas = {
  hidden: { y: '100%', opacity: 0 },
  show: { y: 0, opacity: 1, transition: { duration: 0.3, type: 'just' } },
  exit: { y: '100%', opacity: 1, transition: { duration: 0.3, type: 'just' } },
}

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1, y: 0, scale: 1, borderRadius: '0px', transition: { duration: 0.5 },
  },
  zoomOut: {
    scale: 0.95, y: 0, borderRadius: '15px', transition: { duration: 0.7 },
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
        className="p-4 min-h-screen overflow-hidden bg-gray-200"
      >
        <Header />
        <Card handleTap={() => setActive(true)} />
      </motion.div>
      <AnimatePresence>
        {active && (
          <>
            <motion.div
              initial="hidden"
              animate={active ? 'show' : 'hidden'}
              variants={overlay}
              style={{ pointerEvents: 'auto' }}
              className="z-0 fixed w-screen h-screen bg-black opacity-75 top-0 left-0"
              onClick={() => setActive(false)}
            >
              <span className="w-full h-full absolute top-0 left-0">&nbsp;</span>
            </motion.div>
            <motion.div
              variants={offcanvas}
              initial="hidden"
              animate="show"
              exit="exit"
              className="overlay-container w-full bg-white absolute rounded-t-lg shadow-md bottom-0"
            >
              Hello
            </motion.div>
          </>
        ) }
      </AnimatePresence>
    </>
  )
}
