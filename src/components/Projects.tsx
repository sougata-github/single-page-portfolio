import { projects } from "@/constants";
import Image from "next/image";
import Link from "next/link";

const Projects = () => {
  return (
    <section className="section" id="projects">
      <div className="container !max-w-full">
        <h2 className="text-4xl md:text-7xl">Selected Works</h2>
        <div className="mt-10 md:mt-16 lg:mt-20">
          {projects.map((project) => (
            <Link
              key={project.name}
              href="/"
              className="flex flex-col border-t border-stone-400 border-dotted py-6 md:py-8 lg:py-10 last:border-b"
            >
              <div>
                <div className="aspect-video md:hidden">
                  <Image
                    src={project.image}
                    alt={`${project.name} image`}
                    className="size-full object-cover"
                  />
                </div>

                <div className="mt-8 md:mt-0 flex justify-between">
                  <h3 className="text-2xl md:text-3xl lg:text-4xl">
                    {project.name}
                  </h3>
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
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
