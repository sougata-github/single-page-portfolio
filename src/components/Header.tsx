"use client";

import Link from "next/link";
import Button from "./Button";
import { MouseEvent, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

import { X, Menu, ArrowUpRight } from "lucide-react";
import { navItems } from "@/constants";

const Header = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const mobileNavVariants = {
    open: {
      height: "100%",
      transition: {
        duration: 0.5,
      },
    },
    closed: {
      filter: "blur(5px)",
      height: 0,
      transition: {
        duration: 0.5,
      },
    },
  };

  const menuButtonVariants = {
    open: {
      scale: 0,
      opacity: 0,
    },
    closed: {
      scale: 1,
      opacity: 1,
    },
  };

  const closeButtonVariants = {
    open: {
      scale: 1,
      opacity: 1,
    },
    closed: {
      scale: 0,
      opacity: 0,
    },
  };

  const handleClickMobileNavItem = (e: MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    setIsOpen(false);

    const url = new URL(e.currentTarget.href);
    const hash = url.hash;

    const target = document.querySelector(hash);

    if (!target) return;

    target.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <header>
      <motion.div
        className="fixed top-0 left-0 w-full bg-stone-900 h-0 overflow-hidden backdrop-blur-md"
        variants={mobileNavVariants}
        animate={isOpen ? "open" : "closed"}
      >
        <nav className="mt-20 container !max-w-full">
          <ul className="flex flex-col">
            {navItems.map((link) => (
              <li key={link.label} className="text-stone-200">
                <Link
                  onClick={handleClickMobileNavItem}
                  href={link.href}
                  className="flex items-center justify-between border-t border-stone-800 last:border-b py-8 group relative isolate"
                >
                  <span className="text-3xl group-hover:pl-4 transition-all">
                    {link.label}
                  </span>
                  <ArrowUpRight className="size-5" />
                  <div className="absolute w-full h-0 bg-stone-800 group-hover:h-full transition-all duration-500 bottom-0 -z-10"></div>
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </motion.div>

      <div className="fixed top-0 left-0 w-full mix-blend-difference backdrop-blur-md">
        <div className="container !max-w-full">
          <div className="flex justify-between h-20 items-center">
            <div>
              <Link href="/">
                <span className="text-xl font-bold uppercase text-white">
                  Alex Taylor
                </span>
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div className="fixed top-0 left-0 w-full">
        <div className="container !max-w-full">
          <div className="flex justify-end h-20 items-center">
            <div className="flex items-center gap-4">
              <div
                className="size-11 border border-stone-400 rounded-full inline-flex items-center justify-center bg-stone-200 cursor-pointer"
                onClick={() => setIsOpen((prev) => !prev)}
              >
                <motion.button className="relative">
                  <AnimatePresence mode="wait">
                    <motion.div
                      className="absolute"
                      initial={false}
                      key="close"
                      variants={closeButtonVariants}
                      animate={isOpen ? "open" : "closed"}
                    >
                      <X />
                    </motion.div>

                    <motion.div
                      className="block"
                      initial={false}
                      key="menu"
                      variants={menuButtonVariants}
                      animate={isOpen ? "open" : "closed"}
                    >
                      <Menu />
                    </motion.div>
                  </AnimatePresence>
                </motion.button>
              </div>
              <Button variant="primary" className="hidden md:inline-flex">
                Contact Me
              </Button>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
