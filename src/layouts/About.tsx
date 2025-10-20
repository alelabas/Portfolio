import { motion } from "framer-motion"
import { FaReact } from "react-icons/fa"
import { IoLogoJavascript } from "react-icons/io"
import { SiTypescript } from "react-icons/si"
import { RiNextjsFill } from "react-icons/ri"
import { FaNodeJs } from "react-icons/fa"
import { TbBrandCSharp } from "react-icons/tb"
import { FaGitAlt } from "react-icons/fa"
import { RiTailwindCssFill } from "react-icons/ri"
import { SiMysql } from "react-icons/si"
import { SiPostgresql } from "react-icons/si"
import { RiSupabaseFill } from "react-icons/ri"
import { FaDocker } from "react-icons/fa"
import { SiPostman } from "react-icons/si"

const About = () => {
	return (
		<section className="my-20 mx-10">
			<motion.div
				initial={{ opacity: 0, y: 0 }}
				whileInView={{ opacity: 1, y: 0 }}
				viewport={{ once: true }}
				transition={{ duration: 1.5, ease: "easeInOut" }}
				className="flex flex-col gap-20 items-center w-[60%]"
			>
				<h2 className="text-4xl text-bold">
					Know About <span className="text-blue-500">Me</span>
				</h2>
				<p className="text-lg">
					<span className="text-blue-500">Hello There!</span> - I'm
					Alejandro from{" "}
					<span className="text-blue-500">
						Buenos Aires, Argentina
					</span>
					. I hold an{" "}
					<span className="text-blue-500">
						Associate's Degree in Computer Science{" "}
					</span>{" "}
					and I'm currently pursuing a{" "}
					<span className="text-blue-500">
						Bachelor's Degree in Computer Science
					</span>
					.
					<br /> <br />
					My journey began in the pandemic in 2020 when I started
					learning programming through online resources. Over time, I
					developed a passion for coding and decided to pursue it as a
					career.
					<br />
					<br />
					My expertise lies in{" "}
					<span className="text-blue-500">
						Full Stack Development
					</span>{" "}
					mainly in{" "}
					<span className="text-blue-500">
						React and Typescript, using C# with .NET
					</span>{" "}
					for backend development. I'm also familiar with other
					technologies such as{" "}
					<span className="text-blue-500">
						Node.js, Express, MongoDB, SQL
					</span>{" "}
					and more. I enjoy creating web applications that are not
					only functional but also visually appealing.
					<br />
					<br />
					I'm passionate about creating solutions to{" "}
					<span className="text-blue-500">
						improve businesses and people's lives
					</span>{" "}
					through technology, such as making an impact on their
					finances or helping them reach out to more people.
					<br />
					<br />
					Outside of coding I enjoy learning about{" "}
					<span className="text-blue-500">
						personal finance and investing
					</span>
					, as well as practicing sports like paddle, tennis and
					football (sorry, fellow Americans!). Also, I've been going
					to the gym regularly to embrace my{" "}
					<span className="text-blue-500">discipline</span> and
					improve my physical fitness and health. I{" "}
					<span className="text-blue-500">love competing</span> in
					said sports but always focusing on having fun and enjoying
					the games. When I need to relax or decompress I enjoy
					watching movies or TV Shows (I consider myself a bit of a
					cinephile). I also like reading books about finance and
					self-improvement.
					<br />
					<br />
					Feel free to explore my portfolio to see some of the
					projects I've worked on. If you have any questions or would
					like to collaborate,{" "}
					<span className="text-blue-500">
						don't hesitate to reach out!
					</span>
				</p>
			</motion.div>

			<motion.div
				initial={{ opacity: 0, y: 50 }}
				whileInView={{ opacity: 1, y: 0 }}
				viewport={{ once: false }}
				transition={{ duration: 1, ease: "easeInOut" }}
				className="mt-40"
			>
				<h2 className="text-4xl">Professional Skillset</h2>
				<div></div>
			</motion.div>
		</section>
	)
}

export default About
