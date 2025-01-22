import { navItems } from "@/constants";
import Link from "next/link";

import Button from "./Button";

const Footer = () => {
  return (
    <footer className="bg-stone-900 text-white" id="contact">
      <div className="container !max-w-full">
        <div className="section">
          <div className="flex items-center gap-3">
            <div className="size-3 rounded-full bg-green-400" />
            <span> One spot available for next month.</span>
          </div>

          <div className="grid md:grid-cols-3 md:items-center">
            <div className="md:col-span-2">
              <h2 className="text-4xl md:text-7xl lg:text-8xl mt-8 font-extralight">
                Enough talk. Let&apos;s make something great together.
              </h2>

              <Button
                variant="secondary"
                className="mt-8"
                iconAfter={
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
                      d="m4.5 19.5 15-15m0 0H8.25m11.25 0v11.25"
                    />
                  </svg>
                }
              >
                info@alextaylor.com
              </Button>
            </div>

            <div>
              <nav className="flex flex-col gap-8 mt-16 md:items-end">
                {navItems.map((link) => (
                  <Link key={link.label} href={link.href}>
                    <Button variant="text" className="text-lg">
                      {link.label}
                    </Button>
                  </Link>
                ))}
              </nav>
            </div>
          </div>
        </div>
        <p className="max-md:ml-2 py-16 text-white/30 text-sm">
          &copy; Alex Taylor &bull; All rights reserved
        </p>
      </div>
    </footer>
  );
};

export default Footer;
