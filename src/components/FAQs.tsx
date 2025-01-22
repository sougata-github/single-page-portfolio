import { faqs } from "@/constants";

const FAQs = () => {
  return (
    <section className="section" id="faqs">
      <div className="container !max-w-full">
        <h2 className="text-4xl md:text-7xl lg:text-8xl">FAQs</h2>
        <div className="mt-10 md:mt-16 lg:mt-20">
          {faqs.map(({ question }) => (
            <div
              key={question}
              className="border-t border-stone-400 border-dotted py-6 md:py-8 lg:py-10 last:border-b"
            >
              <div className="flex items-center justify-between gap-4">
                <div className="text-2xl md:text-3xl lg:text-4xl">
                  {question}
                </div>
                <div className="inline-flex items-center justify-center size-11 border border-stone-400 rounded-full shrink-0">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    className="size-6"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M12 4.5v15m7.5-7.5h-15"
                    />
                  </svg>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQs;
