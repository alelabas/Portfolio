import TypewriterComponent from "typewriter-effect";
import { HomeCarousel } from "../components/HomeCarousel";
import { motion } from "framer-motion";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";
import winkImage from "@/assets/stickers/winksticker.webp";

const Home = () => {
  return (
    <section className="flex flex-col gap-20 md:mx-20 md:gap-40">
      <motion.article
        initial={{ opacity: 0, y: 0 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 1.5, ease: "easeInOut" }}
        className="flex flex-col items-center justify-between md:flex-row"
      >
        <div className="flex flex-col text-center md:text-left">
          <h2 className="mb-2 text-3xl md:mb-6 md:text-4xl">Welcome to...</h2>
          <h1 className="text-5xl font-bold text-blue-500">
            ALEJANDRO LABASTIE'S
          </h1>
          <h2 className="mt-2 text-3xl md:mt-6 md:text-4xl">Portfolio</h2>
          <span className="my-10 h-16 text-4xl font-semibold text-blue-500 md:my-20 md:text-5xl">
            <TypewriterComponent
              options={{
                strings: [
                  "Full Stack Developer",
                  ".NET Developer",
                  "React Developer",
                  "Tech Enthusiast",
                  "Sports Lover",
                ],
                autoStart: true,
                loop: true,
                delay: 75,
              }}
            />
          </span>
        </div>
        <div className="md:w-[40%]">
          <HomeCarousel />
        </div>
      </motion.article>

      <motion.article
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 1, ease: "easeInOut" }}
        className="flex flex-col items-center gap-10 md:my-20 md:flex-row"
      >
        <div className="flex flex-col items-center justify-center gap-10 md:w-[60%]">
          <h2 className="text-center text-4xl md:text-5xl">
            Quick <span className="text-blue-500">Introduction</span> About
            Myself
          </h2>
          <p className="text-md md:text-lg">
            I'm a Software Developer passionate about reaching out to others and
            helping them achieve their goals through technology. I enjoy
            learning new skills and keeping up to date with the latest trends in
            the tech world. <br />
            <br />
            I'm proficient in{" "}
            <span className="font-bold text-blue-500">
              C#, ASP.NET, REACT, TYPESCRIPT, TAILWIND, JAVASCRIPT.
            </span>{" "}
            - I also enjoy spreading out to other technologies and frameworks{" "}
            <br />
            <br />
            My key areas of interests are{" "}
            <span className="font-bold text-blue-500">
              Web Developement, Data Analytics and Financial Solutions
            </span>{" "}
            and making an impact in these fields through my work as well as
            bringing awareness to others about the importance of technology in
            our daily lives. <br /> <br />
            When I'm not coding, I love playing and watching sports, specially
            soccer and paddle, traveling whenever it's possible, and spending
            quality time with my family and friends.
          </p>
        </div>
        <div>
          <img
            src={winkImage}
            alt="winking sticker"
            className="md:ml-30 md:h-80"
          />
        </div>
      </motion.article>

      <motion.article
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, ease: "easeInOut" }}
        className="mb-10 flex flex-col items-center justify-center gap-10 md:mb-20"
      >
        <h2 className="text-4xl font-bold text-blue-500 md:text-5xl">
          Find Me On...
        </h2>
        <ul className="flex list-none flex-row gap-10 text-blue-500">
          <li className="rounded-full bg-white p-4 transition-transform duration-300 md:hover:scale-105 md:hover:shadow-[0_0_12px_rgba(59,130,246,0.35)]">
            <a
              href="https://github.com/alelabas"
              target="_blank"
              rel="noreferrer noopener"
            >
              <FaGithub size={25} />
            </a>
          </li>
          <li className="rounded-full bg-white p-4 transition-transform duration-300 hover:scale-105 hover:shadow-[0_0_12px_rgba(59,130,246,0.35)]">
            <a
              href="https://www.instagram.com/ale_labastie/"
              target="_blank"
              rel="noreferrer noopener"
            >
              <FaInstagramSquare size={25} />
            </a>
          </li>
          <li className="rounded-full bg-white p-4 transition-transform duration-300 hover:scale-105 hover:shadow-[0_0_12px_rgba(59,130,246,0.35)]">
            <a
              href="https://www.linkedin.com/in/alejandro-labastie/"
              target="_blank"
              rel="noreferrer noopener"
            >
              <FaLinkedin size={25} />
            </a>
          </li>
        </ul>
      </motion.article>
    </section>
  );
};

export default Home;
