"use client";

import Link from "next/link";
import React, { useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { ImCancelCircle } from "react-icons/im";
import { FaGithub, FaLinkedin } from "react-icons/fa6";
import { motion } from "framer-motion";

type Props = {};

export default function Header({}: Props) {
  const [showMenu, setShowMenu] = useState(false);

  const handleShowMenu = () => {
    setShowMenu(!showMenu);
  };

  return (
    <nav className="sticky top-0 z-40">
      <div className="flex flex-wrap items-center justify-between mx-4 lg:mx-8 p-4">
        <Link className="text-3xl lg:text-5xl font-Kufi" href="#Hero">
          شَاهِينْ بُودْمَاغْ
        </Link>
        <div className="hidden md:flex text-4xl w-1/12 justify-end">
          <Link
            href={process.env.NEXT_PUBLIC_LINKEDIN_PROFILE!}
            rel="noopener noreferrer"
            target="_blank"
            className="cursor-default"
          >
            <FaLinkedin className="hover:text-textHighlight mr-4 cursor-pointer" />
          </Link>
          <Link
            href={process.env.NEXT_PUBLIC_GITHUB_PROFILE!}
            rel="noopener noreferrer"
            target="_blank"
            className="cursor-default"
          >
            <FaGithub className="hover:text-textHighlight cursor-pointer" />
          </Link>
        </div>
        <GiHamburgerMenu
          className="md:hidden text-4xl hover:text-slate-400"
          onClick={handleShowMenu}
        />
      </div>
      {showMenu && (
        <motion.div
          className="fixed top-0 left-0 w-full h-full flex justify-between items-center bg-black/90 p-4 z-50"
          initial={{ y: -1000 }}
          animate={showMenu ? { y: 0 } : { y: -1000 }}
          exit={{ y: -1000 }}
          transition={{
            duration: 0.75,
          }}
        >
          <ImCancelCircle
            className="absolute cursor-pointer hover:text-slate-400 top-5 right-5 md:top-7 md:right-7 text-3xl"
            onClick={handleShowMenu}
          />
          <ul className="flex flex-col justify-evenly items-center w-full h-full font-teko text-4xl uppercase">
            <li
              className="hover:text-textHighlight cursor-pointer"
              onClick={handleShowMenu}
            >
              <Link href="#About">About</Link>
            </li>
            <li
              className="hover:text-textHighlight cursor-pointer"
              onClick={handleShowMenu}
            >
              <Link href="#Experience">Experience</Link>
            </li>
            <li
              className="hover:text-textHighlight cursor-pointer"
              onClick={handleShowMenu}
            >
              <Link href="#Skills">Skills</Link>
            </li>
            <li
              className="hover:text-textHighlight cursor-pointer"
              onClick={handleShowMenu}
            >
              <Link href="#About">Projects</Link>
            </li>
          </ul>
        </motion.div>
      )}
    </nav>
  );
}
