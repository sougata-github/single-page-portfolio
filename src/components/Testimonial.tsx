import Image, { StaticImageData } from "next/image";
import { twMerge } from "tailwind-merge";
import { motion } from "framer-motion";
import { HTMLAttributes } from "react";

interface Props {
  image: StaticImageData;
  name: string;
  quote: string;
  role: string;
  company: string;
  imagePositionY: number;
  className?: string;
  rest?: HTMLAttributes<HTMLDivElement>;
}

const Testimonial = ({
  image,
  name,
  quote,
  role,
  company,
  imagePositionY,
  className,
  ...rest
}: Props) => {
  const quoteCiteVariants = {
    initial: {
      opacity: 0,
    },
    animate: {
      opacity: 100,
      transition: {
        duration: 0.5,
        ease: "easeIn",
      },
    },
  };

  return (
    <div
      className={twMerge(
        "grid md:grid-cols-5 md:gap-8 lg:gap-16 md:items-center",
        className
      )}
      {...rest}
    >
      <div className="aspect-square md:aspect-[9/16] md:col-span-2 lg:aspect-square relative">
        <motion.div
          className="absolute h-full bg-stone-900"
          initial={{
            width: "100%",
          }}
          animate={{
            width: 0,
          }}
          exit={{
            width: "100%",
          }}
          transition={{
            duration: 0.5,
          }}
        />
        <Image
          src={image}
          alt={name}
          className="size-full object-cover"
          style={{
            objectPosition: `50% ${imagePositionY * 100}%`,
          }}
        />
      </div>
      <blockquote className="md:col-span-3">
        <motion.div
          className="text-3xl md:text-5xl lg:text-6xl mt-8 md:mt-0"
          variants={quoteCiteVariants}
          initial="initial"
          animate="animate"
        >
          <span>&ldquo;</span>
          <span>{quote}</span>
          <span>&rdquo;</span>
        </motion.div>

        <motion.cite
          className="mt-4 md:mt-8 not-italic block md:text-lg lg:text-xl"
          variants={quoteCiteVariants}
          initial="initial"
          animate="animate"
        >
          {name}, {role} at {company}
        </motion.cite>
      </blockquote>
    </div>
  );
};

export default Testimonial;
