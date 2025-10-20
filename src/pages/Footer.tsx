import { Github, Instagram, Linkedin } from "lucide-react"

const Footer = () => {
	return (
		<footer className="flex items-center justify-center bg-gray-800 text-white p-5 w-full">
			<div className="flex flex-row justify-between w-full px-40">
				<h3 className="text-sm text-gray-200 font-light">
					Designed by Alejandro Labastie
				</h3>
				<ul className="list-none flex flex-row gap-10 text-blue-500">
					<li>
						<a>
							<Github />
						</a>
					</li>
					<li>
						<a>
							<Instagram />
						</a>
					</li>
					<li>
						<a>
							<Linkedin />
						</a>
					</li>
				</ul>
			</div>
		</footer>
	)
}

export default Footer
