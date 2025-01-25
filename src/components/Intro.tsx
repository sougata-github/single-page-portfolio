"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const Intro = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const text =
    "Building beautiful websites with clean code and thoughtful design to help your business grow and stand out online.";

  const wordVariants = {
    hidden: { opacity: 0, filter: "blur(10px)" },
    visible: {
      opacity: 1,
      filter: "blur(0px)",
      transition: {
        duration: 0.5,
        ease: "easeOut",
      },
    },
  };

  const containerVariants = {
    visible: {
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  return (
    <section className="section mt-12 md:mt-14" id="intro">
      <div className="container !max-w-full">
        <motion.h2
          ref={ref}
          className="text-4xl md:text-7xl lg:text-6xl leading-tight"
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={containerVariants}
          aria-label={text}
        >
          {text.split(" ").map((word, index) => (
            <motion.span
              key={index}
              className="inline-block mr-2"
              variants={wordVariants}
            >
              {word}
            </motion.span>
          ))}
        </motion.h2>
      </div>
    </section>
  );
};

export default Intro;
