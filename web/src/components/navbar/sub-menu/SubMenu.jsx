import { AnimatePresence, motion } from "framer-motion";
import React from 'react'

function SubMenu({isOpen, subIsOpen, setIsOpenList, categories, name_en, itemVariants}) {

const categoryListAnimation= {
  whileHover:{ scale: 1.1 },
  whileTap:{ scale: 0.95 },
  initial:{ opacity: 0, y: 20},
  animate:{ opacity: 1, y: 0 },
  exit:{ opacity: 0, y: 20},
  transition: {duration:2, type: "spring", stiffness: 300, damping: 24, staggerChildren: 0.07, delayChildren: 0.2},
  className: "text-center border-b-2 font-normal text-neutral-600"
}

return (
  <motion.li
    className="text-center  text-neutral-600 font-bold decora"
    variants={itemVariants}
    whileTap={{ scale: 0.97 }}
    onClick={() => setIsOpenList(!subIsOpen)}
  >
    <motion.ul 
    initial={false}
    key={'General Menu'}
    animate={isOpen ? "open" : "closed"}
    exit={{transition:2, ease:"easeOut"}}
    whileTap={{ scale: 0.97 }}
    whileHover={ {scale: 1.1 }}
    className="text-center border-b-2 text-neutral-600 font-bold">
    {name_en}

      <AnimatePresence>
        {isOpen && subIsOpen && categories.map((category) => <motion.li {...categoryListAnimation}> {category.name_en} </motion.li>)}
      </AnimatePresence>
    </motion.ul>
  </motion.li>
  )
}

export default SubMenu