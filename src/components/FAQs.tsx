"use client";

import { faqs } from "@/constants";
import { Plus } from "lucide-react";
import { useState } from "react";

const FAQs = () => {
  const [expanded, setExpanded] = useState<Record<string, boolean>>({});

  const handleExpand = (index: number) => {
    const newExpanded: Record<string, boolean> = {};

    faqs.forEach((item) => {
      if (item.index !== index) {
        newExpanded[item.index] = false;
      }
    });

    setExpanded((prevExpanded) => ({
      ...newExpanded,
      [index]: !prevExpanded[index],
    }));
  };

  return (
    <section className="section" id="faqs">
      <div className="container !max-w-full">
        <h2 className="text-4xl md:text-7xl lg:text-8xl">FAQs</h2>
        <div className="mt-10 md:mt-16 lg:mt-20">
          {faqs.map(({ question, answer, index }) => (
            <div
              key={question}
              className="border-t border-stone-400 border-dotted py-6 md:py-8 lg:py-10 last:border-b cursor-pointer"
              onClick={() => handleExpand(index)}
            >
              <div className="flex items-center justify-between gap-4">
                <div className="text-2xl md:text-3xl lg:text-4xl">
                  {question}
                </div>
                <div className="inline-flex items-center justify-center size-11 border border-stone-400 rounded-full shrink-0">
                  <Plus
                    className="transition-all duration-200"
                    style={{
                      transform: `${
                        expanded[index] ? "rotate(45deg)" : "rotate(0deg)"
                      }`,
                    }}
                  />
                </div>
              </div>
              <div
                className="overflow-hidden transition-all duration-500"
                style={{
                  height: `${expanded[index] ? "100px" : "0px"}`,
                }}
              >
                <p className="text-xl mt-4 max-w-xl">{answer}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQs;
