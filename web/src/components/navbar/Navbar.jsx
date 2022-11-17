import React, { useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import "./navbar.css";
import winesData from "../../data/wines.category.json";
import generalData from "../../data/general.category.json";

const itemVariants = {
  open: {
    opacity: 1,
    y: 0,
    transition: { type: "spring", stiffness: 300, damping: 24 },
  },
  closed: { opacity: 0, y: 20, transition: { duration: 0.2 } },
};

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isOpenWines, setIsOpenWines] = useState(false);

  const [winesCategories, setWinesCategories] = useState(winesData);
  const [generalCategories, setgeneralCategories] = useState(generalData);

  return (
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
            transition: {
              type: "spring",
              bounce: 0,
              duration: 0.7,
              delayChildren: 0.3,
              staggerChildren: 0.05,
            },
          },
          closed: {
            clipPath: "inset(10% 50% 90% 50% round 10px)",
            transition: {
              type: "spring",
              bounce: 0,
              duration: 0.3,
            },
          },
        }}
        style={{ pointerEvents: isOpen ? "auto" : "none" }}
      >
        <motion.li
          className="text-center border-b-2 text-neutral-600 font-bold"
          variants={itemVariants}
          whileTap={{ scale: 0.97 }}
          onClick={() => setIsOpenWines(!isOpenWines)}
        >
          General Menu
        </motion.li>

        <motion.ul className="text-center border-b-2 text-neutral-600 font-bold">
          {generalCategories && isOpen && isOpenWines &&
            generalCategories.map((categories) => (
              <motion.li className="text-center border-b-2 font-normal text-neutral-600">
                {categories.name_en}
              </motion.li>
            ))}
        </motion.ul>

        <motion.li
          className="text-center border-b-2 text-neutral-600 font-bold"
          variants={itemVariants}
          whileTap={{ scale: 0.97 }}
          onClick={() => setIsOpenWines(!isOpenWines)}
        >
          Wines Menu
        </motion.li>

        <motion.ul className="text-center border-b-2 text-neutral-600 font-bold">
          {winesCategories && isOpen && isOpenWines &&
            winesCategories.map((categories) => (
              <motion.li className="text-center border-b-2 font-normal text-neutral-600">
                {categories.name_en}
              </motion.li>
            ))}
        </motion.ul>

      </motion.ul>
    </motion.nav>
  );
}

export default Navbar;
