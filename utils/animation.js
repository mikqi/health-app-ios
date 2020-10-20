export const offcanvas = {
  hidden: { y: '100%', opacity: 0 },
  show: { y: 0, opacity: 1, transition: { duration: 0.3, type: 'just' } },
  exit: { y: '100%', opacity: 1, transition: { duration: 0.3, type: 'just' } },
}

export const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1, y: 0, scale: 1, borderRadius: '0px', transition: { duration: 0.5 },
  },
  zoomOut: {
    scale: 0.95, y: 0, borderRadius: '15px', transition: { duration: 0.5 },
  },
}

export const overlay = {
  hidden: { opacity: 0, transition: { duration: 0.15 } },
  show: { opacity: 0.75, transition: { duration: 0.4, delay: 0.15 } },
}
