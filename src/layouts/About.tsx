import { motion } from "framer-motion";
import { FaReact } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io";
import { SiTypescript } from "react-icons/si";
import { RiNextjsFill } from "react-icons/ri";
import { FaNodeJs } from "react-icons/fa";
import { TbBrandCSharp } from "react-icons/tb";
import { FaGitAlt } from "react-icons/fa";
import { RiTailwindCssFill } from "react-icons/ri";
import { SiMysql } from "react-icons/si";
import { SiPostgresql } from "react-icons/si";
import { RiSupabaseFill } from "react-icons/ri";
import { FaDocker } from "react-icons/fa";
import { SiPostman } from "react-icons/si";

const About = () => {
  const skillset = [
    {
      name: "React.js",
      icon: <FaReact size={25} />,
    },
    {
      name: "JavaScript",
      icon: <IoLogoJavascript size={25} />,
    },
    {
      name: "TypeScript",
      icon: <SiTypescript size={25} />,
    },
    {
      name: "Next.js",
      icon: <RiNextjsFill size={25} />,
    },
    {
      name: "Node.js",
      icon: <FaNodeJs size={25} />,
    },
    {
      name: "C# / .NET",
      icon: <TbBrandCSharp size={25} />,
    },
    {
      name: "Git",
      icon: <FaGitAlt size={25} />,
    },
    {
      name: "Tailwind CSS",
      icon: <RiTailwindCssFill size={25} />,
    },
    {
      name: "MySQL / SQL",
      icon: <SiMysql size={25} />,
    },
    {
      name: "Docker",
      icon: <FaDocker size={25} />,
    },
    {
      name: "Supabase",
      icon: <RiSupabaseFill size={25} />,
    },
    {
      name: "PostgreSQL",
      icon: <SiPostgresql size={25} />,
    },
    {
      name: "Postman",
      icon: <SiPostman size={25} />,
    },
  ];

  return (
    <section className="my-10 md:mx-10 md:my-20">
      <motion.article
        initial={{ opacity: 0, y: 0 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 1.5, ease: "easeInOut" }}
        className="mx-auto flex flex-col items-center justify-center gap-20 md:max-w-220"
      >
        <h2 className="text-bold text-center text-4xl">
          Know About <span className="text-blue-500">Me</span>
        </h2>
        <p className="text-md md:text-lg">
          <span className="text-blue-500">Hello There!</span> - I'm Alejandro
          from <span className="text-blue-500">Buenos Aires, Argentina</span>. I
          hold an{" "}
          <span className="text-blue-500">
            Associate's Degree in Computer Science{" "}
          </span>{" "}
          and I'm currently pursuing a{" "}
          <span className="text-blue-500">
            Bachelor's Degree in Computer Science
          </span>
          .
          <br /> <br />
          My journey began in the pandemic in 2020 when I started learning
          programming through online resources. Over time, I developed a passion
          for coding and decided to pursue it as a career.
          <br />
          <br />
          My expertise lies in{" "}
          <span className="text-blue-500">Full Stack Development</span> mainly
          in{" "}
          <span className="text-blue-500">
            React and Typescript, using C# with .NET
          </span>{" "}
          for backend development. I'm also familiar with other technologies
          such as{" "}
          <span className="text-blue-500">Node.js, Express, MongoDB, SQL</span>{" "}
          and more. I enjoy creating web applications that are not only
          functional but also visually appealing.
          <br />
          <br />
          I'm passionate about creating solutions to{" "}
          <span className="text-blue-500">
            improve businesses and people's lives
          </span>{" "}
          through technology, such as making an impact on their finances or
          helping them reach out to more people.
          <br />
          <br />
          Outside of coding I enjoy learning about{" "}
          <span className="text-blue-500">personal finance and investing</span>,
          as well as practicing sports like paddle, tennis and football (sorry,
          fellow Americans!). Also, I've been going to the gym regularly to
          embrace my <span className="text-blue-500">discipline</span> and
          improve my physical fitness and health. I{" "}
          <span className="text-blue-500">love competing</span> in said sports
          but always focusing on having fun and enjoying the games. When I need
          to relax or decompress I enjoy watching movies or TV Shows (I consider
          myself a bit of a cinephile). I also like reading books about finance
          and self-improvement.
          <br />
          <br />
          Feel free to explore my portfolio to see some of the projects I've
          worked on. If you have any questions or would like to collaborate,{" "}
          <span className="text-blue-500">don't hesitate to reach out!</span>
        </p>
      </motion.article>

      <motion.article
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 1, ease: "easeInOut" }}
        className="mt-40 flex flex-col items-center gap-20"
      >
        <h2 className="text-center text-4xl">
          Professional <span className="font-bold text-blue-500">Skillset</span>
        </h2>
        <div className="flex flex-wrap items-center justify-center gap-6 md:max-w-260 md:p-4">
          {skillset.map((skill, index) => (
            <span
              key={index}
              className="flex flex-row items-center gap-2 rounded-xl border-2 border-blue-500 bg-blue-500/20 px-5 py-3 md:gap-4 md:transition-transform md:duration-300 md:hover:scale-105"
            >
              {skill.icon}
              <h3 className="text-md font-bold md:text-lg">{skill.name}</h3>
            </span>
          ))}
        </div>
      </motion.article>
    </section>
  );
};

export default About;
