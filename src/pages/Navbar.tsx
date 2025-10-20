import {
	NavigationMenu,
	NavigationMenuItem,
	NavigationMenuLink,
	NavigationMenuList,
} from "@/components/ui/navigation-menu"
import { FaHome } from "react-icons/fa"
import { useEffect, useState } from "react"
import { Link, useLocation } from "react-router-dom"
import { MdContactPage } from "react-icons/md"
import { AiOutlineFundProjectionScreen } from "react-icons/ai"
import { FaRegFileAlt } from "react-icons/fa"
import { FaUsb } from "react-icons/fa"
import { VscRepo } from "react-icons/vsc"

const Navbar = () => {
	const location = useLocation()
	const [pathName, setPathName] = useState("")

	useEffect(() => {
		if (location) {
			const path = location.pathname.slice(
				location.pathname.lastIndexOf("/") + 1,
				location.pathname.length
			)
			setPathName(path)
		}
	}, [location])

	return (
		<header className="fixed top-0 left-0 right-0 z-50 flex flex-row items-center justify-between px-20 py-4 border-b border-white/10">
			<h1 className="font-bold text-3xl text-blue-500">AL.</h1>
			<NavigationMenu>
				<NavigationMenuList className="flex gap-20">
					<NavigationMenuItem>
						<NavigationMenuLink
							className={`text-2xl font-bold ${
								pathName === "" ? "text-blue-500" : "text-white"
							} hover:text-blue-500 hover:bg-transparent hover:border-b-3 border-blue-500 pb-1 transition-all ease-in-out duration-50`}
						>
							<Link to={"/"}>
								<span className="flex items-center gap-2">
									<FaHome className="text-sm" />
									<h2>Home</h2>
								</span>
							</Link>
						</NavigationMenuLink>
					</NavigationMenuItem>
					<NavigationMenuItem>
						<NavigationMenuLink
							className={`text-2xl font-bold ${
								pathName === "about"
									? "text-blue-500"
									: "text-white"
							} hover:text-blue-500 hover:bg-transparent hover:border-b-3 border-blue-500 pb-1 transition-all ease-in-out duration-50`}
						>
							<Link to={"/about"}>
								<span className="flex items-center gap-2">
									<MdContactPage className="text-sm" />
									<h2>About</h2>
								</span>
							</Link>
						</NavigationMenuLink>
					</NavigationMenuItem>
					<NavigationMenuItem>
						<NavigationMenuLink
							className={`text-2xl font-bold ${
								pathName === "projects"
									? "text-blue-500"
									: "text-white"
							} hover:text-blue-500 hover:bg-transparent hover:border-b-3 border-blue-500 pb-1 transition-all ease-in-out duration-50`}
						>
							<Link to={"/projects"}>
								<span className="flex items-center gap-2">
									<AiOutlineFundProjectionScreen className="text-sm" />
									<h2>Projects</h2>
								</span>
							</Link>
						</NavigationMenuLink>
					</NavigationMenuItem>
					<NavigationMenuItem>
						<NavigationMenuLink
							className={`text-2xl font-bold ${
								pathName === "resume"
									? "text-blue-500"
									: "text-white"
							} hover:text-blue-500 hover:bg-transparent hover:border-b-3 border-blue-500 pb-1 transition-all ease-in-out duration-50`}
						>
							<Link to={"/resume"}>
								<span className="flex items-center gap-2">
									<FaRegFileAlt className="text-sm" />
									<h2>Resume</h2>
								</span>
							</Link>
						</NavigationMenuLink>
					</NavigationMenuItem>
					<NavigationMenuItem>
						<NavigationMenuLink className="text-2xl font-bold text-white hover:bg-transparent">
							<a
								href="https://github.com/alelabas/Portfolio"
								target="_blank"
								rel="noopener noreferrer"
								className="bg-blue-500/20 px-4 py-2	rounded-2xl hover:bg-blue-500/40  transition-all ease-in-out duration-50"
							>
								<span className="flex items-center gap-2">
									<FaUsb className="text-white" />
									<VscRepo className="text-white" />
								</span>
							</a>
						</NavigationMenuLink>
					</NavigationMenuItem>
				</NavigationMenuList>
			</NavigationMenu>

			<style>{`
			header {
				background: transparent;
				animation: header-blur-scroll 0.3s linear both;
				animation-timeline: scroll();
				animation-range: 0 250px;
				border-bottom: 1px solid transparent;
				}

			@keyframes header-blur-scroll {
				0% {
					backdrop-filter: blur(0px);
					background: transparent;
				}
				100% {
					backdrop-filter: blur(10px);
					background: rgba(0, 0, 0, 0.1);
					padding-bottom: 8px;
				border-bottom-color: black;
				}
			}`}</style>
		</header>
	)
}

export default Navbar
