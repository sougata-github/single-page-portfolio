"use client";

import heroImage from "@/assets/images/hero-image.jpg";
import Image from "next/image";

import Button from "./Button";

import {
  motion,
  stagger,
  useAnimate,
  useScroll,
  useTransform,
} from "framer-motion";
import SplitType from "split-type";
import { useEffect, useRef } from "react";

const Hero = () => {
  const [titleScope, titleAnimate] = useAnimate();

  const scrollDiv = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: scrollDiv,
    offset: ["start end", "end end"],
  });

  const imageWidth = useTransform(scrollYProgress, [0, 1], ["100%", "240%"]);

  useEffect(() => {
    new SplitType(titleScope.current, {
      types: "lines,words",
      tagName: "span",
    });

    titleAnimate(
      titleScope.current.querySelectorAll(".word"),
      {
        transform: "translateY(0)",
      },
      {
        duration: 0.5,
        delay: stagger(0.2),
      }
    );
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <section>
      <div className="grid md:grid-cols-12 md:h-screen items-stretch sticky top-0 overflow-x-hidden">
        <div className="md:col-span-7 flex flex-col justify-center">
          <div className="container !max-w-full">
            <motion.h1
              className="text-5xl lg:text-7xl mt-40 md:mt-0 "
              initial={{
                opacity: 0,
              }}
              animate={{
                opacity: 1,
              }}
              ref={titleScope}
            >
              Crafting digital experiences through code and creative design
            </motion.h1>
            <div className="flex flex-col mt-10 items-start gap-6 md:flex-row md:items-center">
              <motion.div
                initial={{
                  opacity: 0,
                  y: "100%",
                }}
                animate={{
                  opacity: 1,
                  y: 0,
                }}
                transition={{
                  duration: 0.5,
                  delay: 1.75,
                }}
              >
                <Button
                  variant="secondary"
                  iconAfter={
                    <div className="overflow-hidden size-5">
                      <div className="h-10 w-5 flex flex-col group-hover:-translate-y-1/2 transition-transform duration-500">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          strokeWidth="1.5"
                          stroke="currentColor"
                          className="size-5"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="m4.5 5.25 7.5 7.5 7.5-7.5m-15 6 7.5 7.5 7.5-7.5"
                          />
                        </svg>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          strokeWidth="1.5"
                          stroke="currentColor"
                          className="size-5"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="m4.5 5.25 7.5 7.5 7.5-7.5m-15 6 7.5 7.5 7.5-7.5"
                          />
                        </svg>
                      </div>
                    </div>
                  }
                >
                  <span>View My Work</span>
                </Button>
              </motion.div>
              <motion.div
                initial={{
                  opacity: 0,
                  y: "100%",
                }}
                animate={{
                  opacity: 1,
                  y: 0,
                }}
                transition={{
                  duration: 0.5,
                  delay: 2.2,
                }}
              >
                <Button variant="text">Let&apos;s Talk</Button>
              </motion.div>
            </div>
          </div>
        </div>

        <div className="md:col-span-5 relative">
          <motion.div
            className="mt-20 md:mt-0 md:size-full md:absolute md:right-0 max-md:!w-full"
            style={{
              width: imageWidth,
            }}
            initial={{
              opacity: 0,
              filter: "blur(5px)",
            }}
            animate={{
              opacity: 1,
              filter: "blur(0px)",
            }}
            transition={{
              duration: 0.5,
              delay: 1,
            }}
          >
            <Image
              quality={100}
              src={heroImage}
              alt="My portrait"
              className="object-cover size-full"
            />
          </motion.div>
        </div>
      </div>
      <div className="md:h-[200vh]" ref={scrollDiv}></div>
    </section>
  );
};

export default Hero;
