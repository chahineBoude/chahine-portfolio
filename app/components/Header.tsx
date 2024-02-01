"use client";

import Link from "next/link";
import React, { useEffect, useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { ImCancelCircle } from "react-icons/im";
import { motion } from "framer-motion";

type Props = {};

export default function Header({}: Props) {
  const [showMenu, setShowMenu] = useState(false);
  const [isNotOnHero, setHero] = useState("");

  const handleShowMenu = () => {
    setShowMenu(!showMenu);
  };

  useEffect(() => {
    const heroCheck = localStorage.getItem("outOfHero") as string;
    console.log(heroCheck);

    if (heroCheck != null) {
      setHero(heroCheck);
    }
  }, []);

  return (
    <nav className="sticky top-0 z-40">
      <div
        className={`${
          showMenu ? "hidden" : "flex"
        }  flex-wrap items-center justify-between mx-4 lg:mx-8 p-4`}
      >
        <Link className="text-3xl lg:text-5xl font-Kufi" href="#Hero">
          شَاهِينْ بُودْمَاغْ
        </Link>
        <div className={`${isNotOnHero === "true" ? "block" : "hidden"} `}>
          <ul className="hidden md:flex justify-between items-center text-3xl font-teko">
            <li className="mx-4 cursor-pointer hover:text-textHighlight">
              <Link href="#About">About</Link>
            </li>
            <li className="mx-4 cursor-pointer hover:text-textHighlight">
              <Link href="#About">Experience</Link>
            </li>
            <li className="mx-4 cursor-pointer hover:text-textHighlight">
              <Link href="#About">Skills</Link>
            </li>
            <li className="ml-4 cursor-pointer hover:text-textHighlight">
              <Link href="#About">Projects</Link>
            </li>
          </ul>
          <GiHamburgerMenu
            className="md:hidden text-4xl hover:text-slate-400"
            onClick={handleShowMenu}
          />
        </div>
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
              Experience
            </li>
            <li
              className="hover:text-textHighlight cursor-pointer"
              onClick={handleShowMenu}
            >
              Skills
            </li>
            <li
              className="hover:text-textHighlight cursor-pointer"
              onClick={handleShowMenu}
            >
              Projects
            </li>
          </ul>
        </motion.div>
      )}
    </nav>
  );
}
