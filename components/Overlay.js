import { motion } from 'framer-motion'

const Overlay = ({ active, variants, setActive }) => (
  <motion.div
    initial="hidden"
    animate={active ? 'show' : 'hidden'}
    exit="hidden"
    variants={variants}
    style={{ pointerEvents: 'auto' }}
    className="z-0 fixed w-screen h-screen bg-black opacity-75 top-0 left-0"
    onClick={() => setActive(false)}
  >
    <span className="w-full h-full absolute top-0 left-0">&nbsp;</span>
  </motion.div>
)

export default Overlay
