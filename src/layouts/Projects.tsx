import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";
import data from "@/data/projects.json";
import { motion } from "framer-motion";
import { FaGithub } from "react-icons/fa";
import { GoProject } from "react-icons/go";

const Projects = () => {
  const projects = data.projects;

  return (
    <motion.section
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 1.5, ease: "easeInOut" }}
      className="flex flex-col md:mx-auto"
    >
      <article className="mt-10 flex flex-col items-center gap-10 md:mt-20 md:gap-20">
        <div className="p-4 text-center">
          <h2 className="text-4xl">
            My Recent <span className="text-blue-500">Projects</span>
          </h2>
          <h3 className="mt-5 text-lg">
            Some of my most recent and important projects!
          </h3>
        </div>
        <motion.div
          initial={{ opacity: 0, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeIn" }}
          viewport={{ once: true }}
          className="flex flex-wrap items-center justify-center gap-10 p-4 md:max-w-300"
        >
          {projects.map((project, index) => (
            <Card
              key={index}
              className="flex h-120 w-90 flex-col items-center gap-0 bg-transparent text-white shadow-lg ring-1 shadow-blue-500/20 ring-blue-500 md:transition-transform md:duration-500 md:hover:scale-105 md:hover:shadow-xl md:hover:shadow-blue-500/30"
            >
              <CardHeader className="h-auto w-full overflow-hidden rounded-lg">
                <img
                  src={project.image}
                  alt={project.title}
                  className="object-fit rounded-lg"
                />
              </CardHeader>
              <CardContent className="mt-5 flex flex-col items-center justify-between text-center">
                <div className="flex flex-col gap-2">
                  <h3 className="text-2xl">{project.title}</h3>
                  <p className="text-md">{project.description}</p>
                </div>
                <div className="mt-4 flex flex-wrap justify-center gap-4">
                  {project.technologies.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="rounded-xl border-2 border-blue-500/40 bg-blue-500/20 px-4 py-2"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </CardContent>
              <CardFooter className="mt-auto flex w-full flex-row items-center justify-center gap-4">
                <a
                  href={project.github}
                  target="_blank"
                  rel="noreferrer noopener"
                >
                  <span className="flex flex-row items-center gap-2 rounded-2xl bg-blue-700 px-4 py-2 transition-all duration-50 ease-in-out hover:bg-blue-500/40">
                    <FaGithub />
                    <h4>Github</h4>
                  </span>
                </a>
                {project.demo.length > 1 && (
                  <a
                    href={project.demo}
                    target="_blank"
                    rel="noreferrer noopener"
                  >
                    <span className="flex flex-row items-center gap-2 rounded-2xl bg-blue-700 px-4 py-2 transition-all duration-50 ease-in-out hover:bg-blue-500/40">
                      <GoProject />
                      <h4>Demo</h4>
                    </span>
                  </a>
                )}
              </CardFooter>
            </Card>
          ))}
        </motion.div>
      </article>
    </motion.section>
  );
};

export default Projects;
