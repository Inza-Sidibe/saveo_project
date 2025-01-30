'use client';
import Link from 'next/link';
import React, { useState } from 'react';
import { motion, useScroll, useMotionValueEvent } from 'framer-motion';
import Image from 'next/image';
import SvgImage from './Logo';

function Navbar() {
  const [hidden, setHidden] = useState(false);
  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, 'change', (latest) => {
    const previous = scrollY.getPrevious() ?? 0;

    if (latest > previous && latest > 150) {
      setHidden(true); // Cache la navbar si on défile vers le bas
    } else if (latest < previous) {
      setHidden(false); // Affiche la navbar si on remonte
    }
  });

  return (
    <motion.nav
      variants={{
        visible: { opacity: 1, y: 0 },
        hidden: { opacity: 0, y: -100 },
      }}
      initial="visible"
      animate={hidden ? 'hidden' : 'visible'}
      transition={{ duration: 0.5, ease: 'easeOut' }}
      className="flex top-0 left-0 z-[9999]"
    >
      <div className=" flex flex-col p-4 h-screen bg-[#415D43]">
        <div className='py-14 '>
          <SvgImage></SvgImage>
        </div>
        <div className="flex flex-col justify-around h-full mb-24 font-light gap-4 items-center text-lg">
          <Link
            href="/"
            className="text-white text-center py-2 w-full transition bg-transparent hover:bg-[#74866E]"
          >
            ACCUEIL
          </Link>
          <Link
            href="/stock"
            className="text-white text-center p-2 w-full transition bg-transparent hover:bg-[#74866E]"          
          >
            STOCK
          </Link>
          <Link
            href="/menu"
            className="text-white text-center p-2 w-full transition bg-transparent hover:bg-[#74866E]"
            >
            MENU
          </Link>
          <Link
            href="/commandes"
            className="text-white text-center p-2 w-full transition bg-transparent hover:bg-[#74866E]"
            >
            COMMANDES
          </Link>
          <Link
            href="/recettes"
            className="text-white text-center p-2 w-full transition bg-transparent hover:bg-[#74866E]"
            >
            RECETTES
          </Link>
          <Link
            href="/compte"
            className="text-white text-center p-2 w-full transition bg-transparent hover:bg-[#74866E]"
            >
            COMPTE
          </Link>
          <Link
            href="/parametres"
            className="text-white text-center p-2 w-full transition bg-transparent hover:bg-[#74866E]"
            >
            PARAMETRES
          </Link>
        </div>
      </div>
    </motion.nav>
  );
}

export default Navbar;
