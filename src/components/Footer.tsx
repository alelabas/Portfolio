import { FaGithub, FaInstagramSquare, FaLinkedin } from "react-icons/fa"

const Footer = () => {
	return (
		<footer className="flex items-center justify-center bg-gray-800 text-white p-5 w-full">
			<div className="flex flex-row items-center justify-between w-full md:px-40">
				<h3 className="text-sm text-gray-200 font-light">
					Designed by Alejandro Labastie
				</h3>
				<ul className="list-none flex flex-row gap-10 text-blue-500">
					<li>
						<a
							href="https://github.com/alelabas"
							target="_blank"
							rel="noreferrer noopener"
						>
							<FaGithub size={25} />
						</a>
					</li>
					<li>
						<a
							href="https://www.instagram.com/ale_labastie/"
							target="_blank"
							rel="noreferrer noopener"
						>
							<FaInstagramSquare size={25} />
						</a>
					</li>
					<li>
						<a
							href="https://www.linkedin.com/in/alejandro-labastie/"
							target="_blank"
							rel="noreferrer noopener"
						>
							<FaLinkedin size={25} />
						</a>
					</li>
				</ul>
			</div>
		</footer>
	)
}

export default Footer
