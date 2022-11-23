import React, { useState } from "react";
import { Link } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import "./navbar.css";
import winesData from "../../data/wines.category.json";
import generalData from "../../data/general.category.json";
import SubMenu from "./sub-menu/SubMenu";

const itemVariants = {
  open: {
    opacity: 1,
    y: 0,
    transition: {duration:2, type: "spring", stiffness: 300, damping: 24, staggerChildren: 0.07, delayChildren: 0.2},
    
  },
  closed: { opacity: 0, y: 20, transition: { duration: 2, staggerChildren: 0.05, staggerDirection: -1 } },
};

const variants = {
  open: {
    transition: { staggerChildren: 0.07, delayChildren: 0.2 }
  },
  closed: {
    transition: { staggerChildren: 0.05, staggerDirection: -1, ease:"easeOut", duration:2 }
  }
};



function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isOpenWines, setIsOpenWines] = useState(false);
  const [isOpenGeneral, setIsOpenGeneral] = useState(false);
  const [winesCategories, setWinesCategories] = useState(winesData);
  const [generalCategories, setgeneralCategories] = useState(generalData);

  return (
    <>


    <motion.nav
      initial={false}
      animate={isOpen ? "open" : "closed"}
      className="px-8"
    >
      <div className="basis-5/12">
        <motion.button
          whileTap={{ scale: 0.97 }}
          onClick={() => setIsOpen(!isOpen)}
        >
          Menu
          <motion.div
            variants={{
              open: { rotate: 180 },
              closed: { rotate: 0 },
            }}
            transition={{ duration: 0.2 }}
            style={{ originY: 0.55 }}
          >
            <svg width="15" height="15" viewBox="0 0 20 20">
              <path d="M0 7 L 20 7 L 10 16" />
            </svg>
          </motion.div>
        </motion.button>
      </div>

      <motion.ul
        variants={{
          open: {
            clipPath: "inset(0% 0% 0% 0% round 10px)",
            whileHover:{ scale: 1.1 },
            transition: {
              type: "spring",
              bounce: 0,
              duration: 0.7,
              delayChildren: 0.3,
              staggerChildren: 0.05,
              height: 0
            },
          },
          closed: {
            clipPath: "inset(10% 50% 90% 50% round 10px)",
            transition: {
              type: "spring",
              bounce: 0,
              duration: 0.3,
              height: 0
            },
          },
        }}
        style={{ pointerEvents: isOpen ? "auto" : "none" }}
      >
          <SubMenu itemVariants={itemVariants} isOpen={isOpen} subIsOpen={isOpenGeneral} setIsOpenList={setIsOpenGeneral} name_en={'General Menu'} categories={generalCategories}/>
          <SubMenu itemVariants={itemVariants} isOpen={isOpen} subIsOpen={isOpenWines} setIsOpenList={setIsOpenWines} name_en={'Wines Menu'} categories={winesCategories}/>
      </motion.ul>
    </motion.nav>
    </>

  );
}

export default Navbar;
