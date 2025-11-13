import { motion, AnimatePresence } from 'framer-motion'
import { useLocation } from 'react-router-dom'

const PageTransition = ({ children }) => {
  const location = useLocation()

  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={location.pathname}
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0.9 }}
        transition={{ duration: 0.6 }}
      >
        {children}
      </motion.div>
    </AnimatePresence>
  )
}

export default PageTransition

// {
//   /* <motion.div
//         key={location.pathname}
//         initial={{ opacity: 0, x: 100 }}       // Page enters from right
//         animate={{ opacity: 1, x: 0 }}         // Center position
//         exit={{ opacity: 0, x: -100 }}         // Slides to left on exit
//         transition={{ duration: 0.6, ease: "easeInOut" }}
//         className="min-h-screen"
//       > */
// }
