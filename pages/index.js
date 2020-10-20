import { AnimatePresence, motion } from 'framer-motion'
import { useState } from 'react'
import Header from '../components/Header'
import Card from '../components/Card'
import Offcanvas from '../components/Offcanvas'
import Overlay from '../components/Overlay'
import { container, offcanvas, overlay } from '../utils/animation'
import Title from '../components/Title'
import CardFavorite from '../components/CardFavorite'
import Panel from '../components/Panel'
import { chevronRight } from '../components/Icons'

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

        <Title title="Favorites" actionLabel="Edit" className="mt-6" />
        <CardFavorite />
        <Panel className="py-2 px-4 flex justify-between items-center">
          <span className="text-blue-600">
            Show All Health Data
          </span>
          <span>
            {chevronRight('gray')}
          </span>
        </Panel>
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
