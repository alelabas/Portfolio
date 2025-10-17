import {
	NavigationMenu,
	NavigationMenuItem,
	NavigationMenuLink,
	NavigationMenuList,
} from "@/components/ui/navigation-menu"

const Navbar = () => {
	return (
		<header className="flex flex-row items-center justify-between px-40 py-4 border-b-2 border-blue-900 z-10 bg-gray-900">
			<h1 className="font-bold text-3xl text-blue-500">AL.</h1>
			<NavigationMenu>
				<NavigationMenuList className="flex gap-20">
					<NavigationMenuItem>
						<NavigationMenuLink className="text-2xl font-bold text-white">
							<h2>Home</h2>
						</NavigationMenuLink>
					</NavigationMenuItem>
					<NavigationMenuItem>
						<NavigationMenuLink className="text-2xl font-bold text-white">
							About
						</NavigationMenuLink>
					</NavigationMenuItem>
					<NavigationMenuItem>
						<NavigationMenuLink className="text-2xl font-bold text-white">
							Projects
						</NavigationMenuLink>
					</NavigationMenuItem>
					<NavigationMenuItem>
						<NavigationMenuLink className="text-2xl font-bold text-white">
							Resume
						</NavigationMenuLink>
					</NavigationMenuItem>
				</NavigationMenuList>
			</NavigationMenu>
		</header>
	)
}

export default Navbar
