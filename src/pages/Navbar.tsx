import {
	NavigationMenu,
	NavigationMenuItem,
	NavigationMenuLink,
	NavigationMenuList,
} from "@/components/ui/navigation-menu"

const Navbar = () => {
	return (
		<header className="fixed top-0 left-0 right-0 z-50 flex flex-row items-center justify-between px-40 py-4 border-b border-white/10">
			<h1 className="font-bold text-3xl text-blue-500">AL.</h1>
			<NavigationMenu>
				<NavigationMenuList className="flex gap-20">
					<NavigationMenuItem>
						<NavigationMenuLink className="text-2xl font-bold text-white hover:text-blue-500 hover:bg-transparent hover:border-b-3 border-blue-500 pb-1 transition-all ease-in-out duration-50">
							<h2>Home</h2>
						</NavigationMenuLink>
					</NavigationMenuItem>
					<NavigationMenuItem>
						<NavigationMenuLink className="text-2xl font-bold text-white hover:text-blue-500 hover:bg-transparent hover:border-b-3 border-blue-500 pb-1 transition-all ease-in-out duration-50	">
							About
						</NavigationMenuLink>
					</NavigationMenuItem>
					<NavigationMenuItem>
						<NavigationMenuLink className="text-2xl font-bold text-white hover:text-blue-500 hover:bg-transparent hover:border-b-3 border-blue-500 pb-1 transition-all ease-in-out duration-50">
							Projects
						</NavigationMenuLink>
					</NavigationMenuItem>
					<NavigationMenuItem>
						<NavigationMenuLink className="text-2xl font-bold text-white hover:text-blue-500 hover:bg-transparent hover:border-b-3 border-blue-500 pb-1 transition-all ease-in-out duration-50">
							Resume
						</NavigationMenuLink>
					</NavigationMenuItem>
					<NavigationMenuItem>
						<NavigationMenuLink className="text-2xl font-bold text-white">
							PortLink
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
					background: rgba(0, 0, 0, 0.5);
					padding-bottom: 8px;
				border-bottom-color: black;
				}
			}`}</style>
		</header>
	)
}

export default Navbar
