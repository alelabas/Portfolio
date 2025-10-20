import { Github, Instagram, Linkedin } from "lucide-react"
import TypewriterComponent from "typewriter-effect"
import { HomeCarousel } from "./HomeCarousel"
import { motion } from "framer-motion"

/*Style everything as to occupie half of the screen in the case of the first and second div and center the last div*/

export const Home = () => {
	return (
		<section className="flex flex-col gap-40 mx-20">
			<motion.div
				initial={{ opacity: 0, y: 0 }}
				whileInView={{ opacity: 1, y: 0 }}
				viewport={{ once: true }}
				transition={{ duration: 1.5, ease: "easeInOut" }}
				className="flex flex-row items-center justify-between gap-10 "
			>
				<div className="flex flex-col">
					<h2 className="text-4xl">Welcome to...</h2>
					<h1 className="text-5xl">
						<span className="text-blue-500 font-bold">
							ALEJANDRO LABASTIE'S
						</span>{" "}
						Portfolio
					</h1>
					<span className="text-5xl text-blue-500 font-semibold my-20">
						<TypewriterComponent
							options={{
								strings: [
									"Full stack Developer",
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
				<div className="w-[40%]">
					<HomeCarousel />
				</div>
			</motion.div>

			<motion.div
				initial={{ opacity: 0, y: 50 }}
				whileInView={{ opacity: 1, y: 0 }}
				viewport={{ once: false }}
				transition={{ duration: 1, ease: "easeInOut" }}
				className="flex-1 flex flex-col gap-10 w-[60%] my-20"
			>
				<h2 className="text-5xl">
					Quick <span className="text-blue-500">Introduction</span>{" "}
					About Myself
				</h2>
				<p className="text-lg">
					I'm a Software Developer passionate about reaching out to
					others and helping them achieve their goals through
					technology. I enjoy learning new skills and keeping up to
					date with the latest trends in the tech world. <br />
					<br />
					I'm proficient in{" "}
					<span className="text-blue-500 font-bold">
						C#, ASP.NET, REACT, TYPESCRIPT, TAILWIND, JAVASCRIPT.
					</span>{" "}
					- I also enjoy spreading out to other technologies and
					frameworks <br />
					<br />
					My key areas of interests are{" "}
					<span className="text-blue-500 font-bold">
						Web Developement, Data Analytics and Financial Solutions
					</span>{" "}
					and making an impact in these fields through my work as well
					as bringing awareness to others about the importance of
					technology in our daily lives. <br /> <br />
					When I'm not coding, I love playing and watching sports,
					specially soccer and paddle, traveling whenever it's
					possible, and spending quality time with my family and
					friends.
				</p>
			</motion.div>

			<motion.div
				initial={{ opacity: 0, y: 50 }}
				whileInView={{ opacity: 1, y: 0 }}
				viewport={{ once: false }}
				transition={{ duration: 0.6, ease: "easeInOut" }}
				className="flex-1 flex flex-col gap-4 items-center justify-center"
			>
				<h2 className="text-blue-500 font-bold text-5xl">
					Find Me On...
				</h2>
				<ul className="list-none flex flex-row gap-10 text-blue-500">
					<li className="bg-white p-4 rounded-full hover:scale-105 hover:shadow-[0_0_12px_rgba(59,130,246,0.35)] transition-transform duration-300">
						<a>
							<Github />
						</a>
					</li>
					<li className="bg-white p-4 rounded-full hover:scale-105 hover:shadow-[0_0_12px_rgba(59,130,246,0.35)] transition-transform duration-300">
						<a>
							<Instagram />
						</a>
					</li>
					<li className="bg-white p-4 rounded-full hover:scale-105 hover:shadow-[0_0_12px_rgba(59,130,246,0.35)] transition-transform duration-300">
						<a>
							<Linkedin />
						</a>
					</li>
				</ul>
			</motion.div>
		</section>
	)
}
