import { AnimatePresence, motion } from 'framer-motion'
import { useState } from 'react'
import Header from '../components/Header'
import Card from '../components/Card'
import Offcanvas from '../components/Offcanvas'
import Overlay from '../components/Overlay'
import { container, offcanvas, overlay } from '../utils/animation'

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
            <Overlay
              variants={overlay}
              active={active}
              setActive={setActive}
            />
            <Offcanvas
              setActive={setActive}
              variants={offcanvas}
            />
          </>
        ) }
      </AnimatePresence>
    </>
  )
}
