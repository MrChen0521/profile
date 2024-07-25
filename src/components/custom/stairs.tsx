import { motion } from 'framer-motion'
const stairAnimation = {
  initial: {
    top: '0%'
  },
  animate: {
    top: '100%'
  },
  exit: {
    top: ['100%', '0%']
  }
}
export default function Stairs() {
  // calculate the reverse inde fot staggred delay
  const reverseIndex = (index: number) => {
    const totalSteps = 6
    return totalSteps - index - 1
  }
  return (
    <>
      {/* 
      render 5 motion divs, each representing a step of the stairs.
      Each div will have the same animaation defined by the  stairsAnimation object.
      The delay for each div is calculated sinamically based on it's index.
    */}
      {[...Array(6)].map((_, index) => {
        return (
          <motion.div
            key={index}
            variants={stairAnimation}
            initial="initial"
            animate="animate"
            exit="exit"
            transition={{ delay: reverseIndex(index) * 0.1, duration: 0.4, ease: 'easeInOut' }}
            className="h-full w-full bg-white relative"
          ></motion.div>
        )
      })}
    </>
  )
}
